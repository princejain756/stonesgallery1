const fs = require('fs');
const path = require('path');
const https = require('https');

// Ollama Cloud API configuration
const OLLAMA_API_KEY = '271b8409f1574bb9999b6149771376c5.wg51UWy4jxWk1pStqVfJOFyM';
const MODEL = 'glm-4.6:cloud';

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

// Helper function to make API request to Ollama Cloud
function analyzeImage(imageBase64, filename) {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify({
      model: MODEL,
      messages: [
        {
          role: 'user',
          content: `Analyze this image from a stone products company (Dish Impex LLP - Stone Boutique). 

Categories available:
1. DINING_AND_TABLES - dining tables, coffee tables, side tables made of stone/marble
2. IDOLS_AND_TEMPLES - religious statues, temple structures, sculptures, deities
3. FOUNTAIN - water fountains, outdoor fountains, decorative fountains
4. HOME_DECOR - decorative items, vases, sculptures, wall panels, sinks, basins
5. STONE_CLADDING - wall cladding, stone panels for walls, facade materials

Please respond in JSON format:
{
  "category": "ONE_OF_THE_CATEGORIES_ABOVE",
  "description": "Brief 3-5 word description of the item",
  "confidence": "high/medium/low"
}

Image data: data:image/jpeg;base64,${imageBase64.substring(0, 100)}...

Be specific and accurate. If it's a temple or religious idol, categorize as IDOLS_AND_TEMPLES. If it's furniture like a table, use DINING_AND_TABLES. Stone wall panels should be STONE_CLADDING.`
        }
      ],
      stream: false
    });

    const options = {
      hostname: 'cloud.ollamahub.com',
      port: 443,
      path: '/api/chat',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OLLAMA_API_KEY}`,
        'Content-Length': Buffer.byteLength(payload)
      },
      timeout: 30000
    };

    const req = https.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        if (res.statusCode !== 200) {
          reject(new Error(`API returned status ${res.statusCode} for ${filename}: ${data}`));
          return;
        }
        
        try {
          if (!data || data.trim() === '') {
            reject(new Error(`Empty response for ${filename}`));
            return;
          }
          
          const response = JSON.parse(data);
          
          if (response.error) {
            reject(new Error(`API Error for ${filename}: ${response.error.message || JSON.stringify(response.error)}`));
            return;
          }
          
          if (response.message && response.message.content) {
            const content = response.message.content;
            console.log(`  Raw response: ${content.substring(0, 150)}...`);
            
            // Try to parse JSON from response
            const jsonMatch = content.match(/\{[\s\S]*\}/);
            if (jsonMatch) {
              const analysis = JSON.parse(jsonMatch[0]);
              resolve(analysis);
            } else {
              // If no JSON, try to extract category from text
              const categoryMatch = content.match(/category["\s:]+(\w+)/i);
              const descMatch = content.match(/description["\s:]+"?([^"}\n]+)"?/i);
              
              if (categoryMatch) {
                resolve({
                  category: categoryMatch[1].toUpperCase().replace(/\s+/g, '_'),
                  description: descMatch ? descMatch[1].trim() : 'stone_product',
                  confidence: 'medium'
                });
              } else {
                reject(new Error(`No JSON or category found in response for ${filename}`));
              }
            }
          } else {
            reject(new Error(`Invalid API response structure for ${filename}: ${data.substring(0, 200)}`));
          }
        } catch (error) {
          reject(new Error(`Failed to parse response for ${filename}: ${error.message}. Data: ${data.substring(0, 200)}`));
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.write(payload);
    req.end();
  });
}

// Helper function to process a single image
async function processImage(filename, index, total) {
  const filePath = path.join(IMAGES_DIR, filename);
  
  try {
    // Read image and convert to base64
    const imageBuffer = fs.readFileSync(filePath);
    const imageBase64 = imageBuffer.toString('base64');
    
    console.log(`[${index + 1}/${total}] Analyzing ${filename}...`);
    
    // Analyze with AI
    const analysis = await analyzeImage(imageBase64, filename);
    
    // Generate new filename
    const category = analysis.category.toLowerCase();
    const description = analysis.description.toLowerCase().replace(/\s+/g, '_');
    const ext = path.extname(filename);
    const timestamp = Date.now();
    const newFilename = `${category}_${description}_${timestamp}${ext}`;
    const newFilePath = path.join(IMAGES_DIR, newFilename);
    
    // Rename file
    fs.renameSync(filePath, newFilePath);
    
    const logEntry = {
      original: filename,
      new: newFilename,
      category: analysis.category,
      description: analysis.description,
      confidence: analysis.confidence
    };
    
    renameLog.push(logEntry);
    processedCount++;
    
    console.log(`✓ Renamed to: ${newFilename} (${analysis.confidence} confidence)`);
    
    // Add delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 2000));
    
  } catch (error) {
    console.error(`✗ Error processing ${filename}:`, error.message);
    // Save original filename with error
    const errorEntry = {
      original: filename,
      new: filename, // Keep original name on error
      error: error.message
    };
    renameLog.push(errorEntry);
  }
}

// Main function
async function main() {
  console.log('=== Dish Impex Photos Renaming Tool ===');
  console.log(`Model: ${MODEL}`);
  console.log(`Directory: ${IMAGES_DIR}\n`);
  
  // Get all JPG files
  const files = fs.readdirSync(IMAGES_DIR)
    .filter(file => file.toLowerCase().endsWith('.jpg'));
  
  console.log(`Found ${files.length} images to process\n`);
  
  // Process each file
  for (let i = 0; i < files.length; i++) {
    await processImage(files[i], i, files.length);
  }
  
  // Save log
  const logPath = path.join(__dirname, 'rename-log.json');
  fs.writeFileSync(logPath, JSON.stringify(renameLog, null, 2));
  
  console.log(`\n=== Summary ===`);
  console.log(`Total files: ${files.length}`);
  console.log(`Successfully renamed: ${processedCount}`);
  console.log(`Errors: ${renameLog.filter(e => e.error).length}`);
  console.log(`\nLog saved to: ${logPath}`);
  
  // Print category breakdown
  const categoryCount = {};
  renameLog.forEach(entry => {
    if (entry.category) {
      categoryCount[entry.category] = (categoryCount[entry.category] || 0) + 1;
    }
  });
  
  console.log('\n=== Category Breakdown ===');
  Object.entries(categoryCount).forEach(([cat, count]) => {
    console.log(`${cat}: ${count} files`);
  });
}

// Run the script
main().catch(console.error);
