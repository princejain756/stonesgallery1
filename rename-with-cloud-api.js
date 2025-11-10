#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const https = require('https');

// Ollama Cloud API configuration
// Based on Ollama Cloud docs, the endpoint format is:
const OLLAMA_API_KEY = '271b8409f1574bb9999b6149771376c5.wg51UWy4jxWk1pStqVfJOFyM';
const MODEL = 'glm-4.6:cloud';

// Directory containing images
const IMAGES_DIR = path.join(__dirname, 'public', 'DISH IMPEX PHOTOS');

// Track renamed files
const renameLog = [];
let processedCount = 0;

// Helper function to make API request
function analyzeImage(imageBase64, filename) {
  return new Promise((resolve, reject) => {
    const prompt = `You are analyzing a stone product image from Dish Impex LLP. 

Categorize it as ONE of these:
- DINING_AND_TABLES: dining/coffee/side tables
- IDOLS_AND_TEMPLES: religious statues, temples, deities
- FOUNTAIN: water fountains
- HOME_DECOR: vases, sculptures, sinks, basins, decorative items
- STONE_CLADDING: wall panels, cladding

Respond with ONLY this JSON:
{"category":"CATEGORY_NAME","description":"3-5 words","confidence":"high"}`;

    const payload = JSON.stringify({
      model: MODEL,
      prompt: prompt,
      images: [imageBase64],
      stream: false,
      format: "json"
    });

    const options = {
      hostname: 'ollama.your-cloud-endpoint.com', // Update with actual endpoint
      port: 443,
      path: '/api/generate',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OLLAMA_API_KEY}`,
        'Content-Length': Buffer.byteLength(payload)
      },
      timeout: 60000
    };

    const req = https.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        if (res.statusCode !== 200) {
          reject(new Error(`API returned status ${res.statusCode}: ${data}`));
          return;
        }

        try {
          const response = JSON.parse(data);
          if (response.response) {
            const analysis = JSON.parse(response.response);
            resolve(analysis);
          } else {
            reject(new Error('Invalid response format'));
          }
        } catch (error) {
          reject(new Error(`Parse error: ${error.message}`));
        }
      });
    });

    req.on('error', reject);
    req.on('timeout', () => {
      req.destroy();
      reject(new Error('Request timeout'));
    });

    req.write(payload);
    req.end();
  });
}

// Process single image
async function processImage(filename, index, total) {
  const filePath = path.join(IMAGES_DIR, filename);
  
  try {
    console.log(`[${index + 1}/${total}] ${filename}...`);
    
    const imageBuffer = fs.readFileSync(filePath);
    const imageBase64 = imageBuffer.toString('base64');
    
    const analysis = await analyzeImage(imageBase64, filename);
    
    const category = analysis.category.toLowerCase();
    const description = analysis.description.toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .replace(/\s+/g, '_');
    const counter = String(processedCount + 1).padStart(4, '0');
    const newFilename = `${category}_${counter}_${description}.jpg`;
    const newFilePath = path.join(IMAGES_DIR, newFilename);
    
    fs.renameSync(filePath, newFilePath);
    
    renameLog.push({
      original: filename,
      new: newFilename,
      category: analysis.category,
      description: analysis.description
    });
    
    processedCount++;
    console.log(`✓ ${newFilename}\n`);
    
    await new Promise(r => setTimeout(r, 2000));
    
  } catch (error) {
    console.error(`✗ Error: ${error.message}\n`);
    renameLog.push({ original: filename, error: error.message });
    await new Promise(r => setTimeout(r, 1000));
  }
}

// Main
async function main() {
  console.log('=== Ollama Cloud Image Renaming ===\n');
  
  const files = fs.readdirSync(IMAGES_DIR)
    .filter(f => f.toLowerCase().endsWith('.jpg'))
    .sort();
  
  console.log(`Processing ${files.length} images...\n`);
  
  for (let i = 0; i < files.length; i++) {
    await processImage(files[i], i, files.length);
    
    if ((i + 1) % 10 === 0) {
      fs.writeFileSync('rename-log.json', JSON.stringify(renameLog, null, 2));
    }
  }
  
  fs.writeFileSync('rename-log.json', JSON.stringify(renameLog, null, 2));
  
  console.log(`\n=== Done ===`);
  console.log(`Renamed: ${processedCount}/${files.length}`);
}

main().catch(console.error);
