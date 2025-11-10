#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const https = require('https');
const sharp = require('sharp');

// OpenRouter API configuration
const OPENROUTER_API_KEY = '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';
const MODEL = 'openrouter/polaris-alpha'; // Vision model

// Directory containing images
const IMAGES_DIR = path.join(__dirname, 'public', 'DISH IMPEX PHOTOS');

// Categories
const CATEGORIES = [
  'DINING_AND_TABLES',
  'IDOLS_AND_TEMPLES',
  'FOUNTAIN',
  'HOME_DECOR',
  'STONE_CLADDING'
];

// Track renamed files
const renameLog = [];
let processedCount = 0;
let errorCount = 0;

// Helper function to make API request to OpenRouter
function analyzeImage(imageBase64, filename) {
  return new Promise((resolve, reject) => {
    const prompt = `Analyze this image from a stone products company (Dish Impex LLP - Stone Boutique). 

Categorize it as ONE of these categories:
1. DINING_AND_TABLES - dining tables, coffee tables, side tables made of stone/marble
2. IDOLS_AND_TEMPLES - religious statues, temple structures, sculptures, deities, gods, spiritual items
3. FOUNTAIN - water fountains, outdoor fountains, decorative fountains
4. HOME_DECOR - decorative items, vases, sculptures, wall panels, sinks, basins, decorative pieces
5. STONE_CLADDING - wall cladding, stone panels for walls, facade materials

Respond with ONLY a JSON object in this exact format (no additional text):
{"category":"CATEGORY_NAME","description":"brief 3-5 word description","confidence":"high"}

Be specific and accurate.`;

    const payload = JSON.stringify({
      model: MODEL,
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'text',
              text: prompt
            },
            {
              type: 'image_url',
              image_url: {
                url: `data:image/jpeg;base64,${imageBase64}`
              }
            }
          ]
        }
      ],
      temperature: 0.1,
      max_tokens: 150
    });

    const options = {
      hostname: 'openrouter.ai',
      port: 443,
      path: '/api/v1/chat/completions',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        'HTTP-Referer': 'https://stonesgallery.in',
        'X-Title': 'Stones Gallery Image Categorizer',
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
          reject(new Error(`API returned status ${res.statusCode} for ${filename}: ${data.substring(0, 200)}`));
          return;
        }

        try {
          const response = JSON.parse(data);
          
          if (response.error) {
            reject(new Error(`API Error: ${response.error.message || JSON.stringify(response.error)}`));
            return;
          }

          if (!response.choices || !response.choices[0]) {
            reject(new Error(`Invalid response structure`));
            return;
          }

          const content = response.choices[0].message.content;
          console.log(`  API Response: ${content.substring(0, 150)}...`);

          // Try to parse JSON from response
          const jsonMatch = content.match(/\{[\s\S]*?\}/);
          if (jsonMatch) {
            const analysis = JSON.parse(jsonMatch[0]);
            
            // Validate and normalize category
            if (!CATEGORIES.includes(analysis.category)) {
              const normalized = analysis.category.toUpperCase().replace(/\s+/g, '_');
              const match = CATEGORIES.find(cat => cat.includes(normalized) || normalized.includes(cat));
              if (match) {
                analysis.category = match;
              } else {
                analysis.category = 'HOME_DECOR'; // Default fallback
              }
            }
            
            resolve(analysis);
          } else {
            // Fallback: try to extract from text
            const catMatch = content.match(/category["\s:]+(\w+)/i);
            const descMatch = content.match(/description["\s:]+"?([^"}\n]+)"?/i);
            
            if (catMatch) {
              const category = catMatch[1].toUpperCase().replace(/\s+/g, '_');
              resolve({
                category: CATEGORIES.includes(category) ? category : 'HOME_DECOR',
                description: descMatch ? descMatch[1].trim() : 'stone product',
                confidence: 'medium'
              });
            } else {
              reject(new Error(`Could not parse category from response`));
            }
          }
        } catch (error) {
          reject(new Error(`Parse error for ${filename}: ${error.message}`));
        }
      });
    });

    req.on('error', (error) => {
      reject(new Error(`Request error: ${error.message}`));
    });

    req.on('timeout', () => {
      req.destroy();
      reject(new Error('Request timeout (60s)'));
    });

    req.write(payload);
    req.end();
  });
}

// Helper function to process a single image
async function processImage(filename, index, total) {
  const filePath = path.join(IMAGES_DIR, filename);
  
  try {
    console.log(`\n[${index + 1}/${total}] Analyzing ${filename}...`);
    
    // Read and resize image to max 1024px width
    const imageBuffer = await sharp(filePath)
      .resize(1024, null, { withoutEnlargement: true })
      .jpeg({ quality: 85 })
      .toBuffer();
    
    const imageBase64 = imageBuffer.toString('base64');
    
    console.log(`  Original: ${(fs.statSync(filePath).size / 1024).toFixed(2)} KB → Resized: ${(imageBuffer.length / 1024).toFixed(2)} KB`);
    
    // Analyze with OpenRouter
    const analysis = await analyzeImage(imageBase64, filename);
    
    // Generate new filename
    const category = analysis.category.toLowerCase();
    const description = analysis.description.toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .replace(/\s+/g, '_')
      .substring(0, 40);
    const ext = path.extname(filename);
    const counter = String(processedCount + 1).padStart(4, '0');
    const newFilename = `${category}_${counter}_${description}${ext}`;
    const newFilePath = path.join(IMAGES_DIR, newFilename);
    
    // Rename file
    fs.renameSync(filePath, newFilePath);
    
    const logEntry = {
      original: filename,
      new: newFilename,
      category: analysis.category,
      description: analysis.description,
      confidence: analysis.confidence || 'unknown'
    };
    
    renameLog.push(logEntry);
    processedCount++;
    
    console.log(`✓ Renamed to: ${newFilename}`);
    console.log(`  Category: ${analysis.category}, Confidence: ${analysis.confidence}`);
    
    // Add delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 1500));
    
  } catch (error) {
    errorCount++;
    console.error(`✗ Error processing ${filename}:`);
    console.error(`  ${error.message}`);
    
    renameLog.push({
      original: filename,
      new: filename,
      error: error.message
    });
    
    // Continue with next file
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
}

// Main function
async function main() {
  console.log('╔════════════════════════════════════════════════════════════╗');
  console.log('║    Dish Impex Photos Renaming Tool (OpenRouter Vision)  ║');
  console.log('╚════════════════════════════════════════════════════════════╝');
  console.log(`\nModel: ${MODEL}`);
  console.log(`API: OpenRouter`);
  console.log(`Directory: ${IMAGES_DIR}\n`);
  
  // Get all JPG files
  const files = fs.readdirSync(IMAGES_DIR)
    .filter(file => file.toLowerCase().endsWith('.jpg'))
    .sort();
  
  console.log(`Found ${files.length} images to process\n`);
  
  if (files.length === 0) {
    console.log('No images found!');
    return;
  }
  
  console.log('Categories:');
  CATEGORIES.forEach((cat, i) => {
    console.log(`  ${i + 1}. ${cat}`);
  });
  console.log('\nStarting processing...\n');
  
  // Process each file
  for (let i = 0; i < files.length; i++) {
    await processImage(files[i], i, files.length);
    
    // Save progress every 10 files
    if ((i + 1) % 10 === 0) {
      const logPath = path.join(__dirname, 'rename-log.json');
      fs.writeFileSync(logPath, JSON.stringify(renameLog, null, 2));
      console.log(`\n📝 Progress saved (${i + 1}/${files.length})...`);
    }
  }
  
  // Save final log
  const logPath = path.join(__dirname, 'rename-log.json');
  fs.writeFileSync(logPath, JSON.stringify(renameLog, null, 2));
  
  console.log('\n╔════════════════════════════════════════════════════════════╗');
  console.log('║                         SUMMARY                          ║');
  console.log('╚════════════════════════════════════════════════════════════╝');
  console.log(`\nTotal files: ${files.length}`);
  console.log(`✓ Successfully renamed: ${processedCount}`);
  console.log(`✗ Errors: ${errorCount}`);
  console.log(`\n📄 Log saved to: ${logPath}`);
  
  // Print category breakdown
  const categoryCount = {};
  renameLog.forEach(entry => {
    if (entry.category) {
      categoryCount[entry.category] = (categoryCount[entry.category] || 0) + 1;
    }
  });
  
  if (Object.keys(categoryCount).length > 0) {
    console.log('\n╔════════════════════════════════════════════════════════════╗');
    console.log('║                   CATEGORY BREAKDOWN                     ║');
    console.log('╚════════════════════════════════════════════════════════════╝\n');
    Object.entries(categoryCount).sort().forEach(([cat, count]) => {
      const percentage = ((count / processedCount) * 100).toFixed(1);
      console.log(`  ${cat.padEnd(25)} ${count.toString().padStart(4)} files (${percentage}%)`);
    });
  }
  
  console.log('\n✅ Done!\n');
}

// Run the script
main().catch(error => {
  console.error('\n❌ Fatal error:', error);
  process.exit(1);
});
