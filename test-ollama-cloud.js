const https = require('https');
const fs = require('fs');
const path = require('path');

const OLLAMA_API_KEY = '271b8409f1574bb9999b6149771376c5.wg51UWy4jxWk1pStqVfJOFyM';
const MODEL = 'glm-4.6:cloud';
const TEST_IMAGE = path.join(__dirname, 'public', 'DISH IMPEX PHOTOS', 'DSC_0212.JPG');

console.log('Testing Ollama Cloud API...');
console.log('Image:', TEST_IMAGE);
console.log('Model:', MODEL);
console.log('\nReading image...');

const imageBuffer = fs.readFileSync(TEST_IMAGE);
// Resize image to reduce size - read first 500KB for testing
const maxSize = 500 * 1024; // 500KB
const truncatedBuffer = imageBuffer.slice(0, Math.min(imageBuffer.length, maxSize));
const imageBase64 = truncatedBuffer.toString('base64');

console.log(`Original image size: ${(imageBuffer.length / 1024).toFixed(2)} KB`);
console.log(`Truncated size: ${(truncatedBuffer.length / 1024).toFixed(2)} KB`);
console.log('Base64 length:', imageBase64.length);
console.log('\nSending request to Ollama Cloud API...\n');

const payload = JSON.stringify({
  model: MODEL,
  prompt: 'Describe what you see in this image in 10 words or less.',
  images: [imageBase64],
  stream: false
});

const options = {
  hostname: 'ollama.com',
  port: 443,
  path: '/api/generate',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${OLLAMA_API_KEY}`,
    'Content-Length': Buffer.byteLength(payload)
  }
};

const req = https.request(options, (res) => {
  console.log('Status Code:', res.statusCode);
  console.log('Headers:', JSON.stringify(res.headers, null, 2));
  console.log('\nResponse:\n');

  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
    process.stdout.write('.');
  });

  res.on('end', () => {
    console.log('\n\nFull Response:');
    console.log(data);
    
    try {
      const json = JSON.parse(data);
      console.log('\n\nParsed Response:');
      console.log(JSON.stringify(json, null, 2));
      
      if (json.response) {
        console.log('\n\n=== MODEL OUTPUT ===');
        console.log(json.response);
      }
    } catch (e) {
      console.log('\nCould not parse as JSON:', e.message);
    }
  });
});

req.on('error', (error) => {
  console.error('\nError:', error.message);
});

req.write(payload);
req.end();
