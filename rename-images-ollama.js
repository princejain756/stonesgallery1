const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');
const execAsync = promisify(exec);

// Ollama Cloud configuration
const OLLAMA_API_KEY = '271b8409f1574bb9999b6149771376c5.wg51UWy4jxWk1pStqVfJOFyM';
const MODEL = 'glm-4.6:cloud';

// Set environment for Ollama Cloud
process.env.OLLAMA_HOST = 'https://cloud.ollamahub.com';
process.env.OLLAMA_API_KEY = OLLAMA_API_KEY;

// Directory containing images
const IMAGES_DIR = path.join(__dirname, 'public', 'DISH IMPEX PHOTOS');

// Categories
const CATEGORIES = {
  'DINING_AND_TABLES': 'dining tables, coffee tables, side tables made of stone/marble',
  'IDOLS_AND_TEMPLES': 'religious statues, temple structures, sculptures, deities',
  'FOUNTAIN': 'water fountains, outdoor fountains, decorative fountains',
  'HOME_DECOR': 'decorative items, vases, sculptures, wall panels, sinks, basins',
  'STONE_CLADDING': 'wall cladding, stone panels for walls, facade materials'
};

// Track renamed files
const renameLog = [];
let processedCount = 0;
let errorCount = 0;

// Helper function to analyze image using ollama CLI
async function analyzeImage(imagePath, filename) {
  const prompt = `Analyze this image from a stone products company (Dish Impex LLP - Stone Boutique). 

Categories available:
1. DINING_AND_TABLES - dining tables, coffee tables, side tables made of stone/marble
2. IDOLS_AND_TEMPLES - religious statues, temple structures, sculptures, deities, gods
3. FOUNTAIN - water fountains, outdoor fountains, decorative fountains
4. HOME_DECOR - decorative items, vases, sculptures, wall panels, sinks, basins, decorative pieces
5. STONE_CLADDING - wall cladding, stone panels for walls, facade materials

Please respond ONLY with a JSON object in this exact format (no additional text):
{"category":"ONE_OF_THE_CATEGORIES_ABOVE","description":"brief 3-5 word description","confidence":"high"}

Be specific and accurate.`;

  try {
    // Use ollama run with the cloud model
    const command = `OLLAMA_HOST="${process.env.OLLAMA_HOST}" ollama run ${MODEL} "${prompt.replace(/"/g, '\\"')}" < "${imagePath}"`;
    
    const { stdout, stderr } = await execAsync(command, {
      maxBuffer: 10 * 1024 * 1024, // 10MB buffer
      timeout: 60000 // 60 second timeout
    });

    if (stderr && !stderr.includes('transferring')) {
      console.log(`  Warning: ${stderr.substring(0, 100)}`);
    }

    return stdout.trim();
  } catch (error) {
    throw new Error(`Ollama CLI error: ${error.message}`);
  }
}

// Helper function to process a single image
async function processImage(filename, index, total) {
  const filePath = path.join(IMAGES_DIR, filename);
  
  try {
    console.log(`[${index + 1}/${total}] Analyzing ${filename}...`);
    
    // Analyze with Ollama Cloud
    const response = await analyzeImage(filePath, filename);
    console.log(`  Raw response: ${response.substring(0, 150)}...`);
    
    // Try to parse JSON from response
    const jsonMatch = response.match(/\{[\s\S]*?\}/);
    if (!jsonMatch) {
      throw new Error('No JSON found in response');
    }
    
    const analysis = JSON.parse(jsonMatch[0]);
    
    // Validate category
    if (!CATEGORIES[analysis.category]) {
      throw new Error(`Invalid category: ${analysis.category}`);
    }
    
    // Generate new filename
    const category = analysis.category.toLowerCase();
    const description = analysis.description.toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .replace(/\s+/g, '_')
      .substring(0, 50);
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
      confidence: analysis.confidence
    };
    
    renameLog.push(logEntry);
    processedCount++;
    
    console.log(`✓ Renamed to: ${newFilename}`);
    console.log(`  Category: ${analysis.category}, Confidence: ${analysis.confidence}\n`);
    
    // Add delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 2000));
    
  } catch (error) {
    errorCount++;
    console.error(`✗ Error processing ${filename}:`, error.message);
    renameLog.push({
      original: filename,
      new: filename,
      error: error.message
    });
    
    // Continue even with errors
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
}

// Main function
async function main() {
  console.log('=== Dish Impex Photos Renaming Tool (Ollama Cloud) ===');
  console.log(`Model: ${MODEL}`);
  console.log(`Directory: ${IMAGES_DIR}`);
  console.log(`Ollama Host: ${process.env.OLLAMA_HOST}\n`);
  
  // Get all JPG files
  const files = fs.readdirSync(IMAGES_DIR)
    .filter(file => file.toLowerCase().endsWith('.jpg'))
    .sort();
  
  console.log(`Found ${files.length} images to process\n`);
  
  if (files.length === 0) {
    console.log('No images found!');
    return;
  }
  
  // Process each file
  for (let i = 0; i < files.length; i++) {
    await processImage(files[i], i, files.length);
    
    // Save progress every 10 files
    if ((i + 1) % 10 === 0) {
      const logPath = path.join(__dirname, 'rename-log.json');
      fs.writeFileSync(logPath, JSON.stringify(renameLog, null, 2));
      console.log(`Progress saved (${i + 1}/${files.length})...\n`);
    }
  }
  
  // Save final log
  const logPath = path.join(__dirname, 'rename-log.json');
  fs.writeFileSync(logPath, JSON.stringify(renameLog, null, 2));
  
  console.log(`\n=== Summary ===`);
  console.log(`Total files: ${files.length}`);
  console.log(`Successfully renamed: ${processedCount}`);
  console.log(`Errors: ${errorCount}`);
  console.log(`\nLog saved to: ${logPath}`);
  
  // Print category breakdown
  const categoryCount = {};
  renameLog.forEach(entry => {
    if (entry.category) {
      categoryCount[entry.category] = (categoryCount[entry.category] || 0) + 1;
    }
  });
  
  console.log('\n=== Category Breakdown ===');
  Object.entries(categoryCount).sort().forEach(([cat, count]) => {
    console.log(`${cat}: ${count} files`);
  });
}

// Run the script
main().catch(console.error);
