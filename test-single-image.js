const fs = require('fs');
const path = require('path');
const https = require('https');

const OLLAMA_API_KEY = '271b8409f1574bb9999b6149771376c5.wg51UWy4jxWk1pStqVfJOFyM';
const MODEL = 'glm-4.6:cloud';
const TEST_IMAGE = path.join(__dirname, 'public', 'DISH IMPEX PHOTOS', 'DSC_0212.JPG');

console.log('Testing with:', TEST_IMAGE);

const imageBuffer = fs.readFileSync(TEST_IMAGE);
const imageBase64 = imageBuffer.toString('base64');

const payload = JSON.stringify({
  model: MODEL,
  messages: [
    {
      role: 'user',
      content: `Analyze this stone product image. Categorize it as one of: DINING_AND_TABLES, IDOLS_AND_TEMPLES, FOUNTAIN, HOME_DECOR, or STONE_CLADDING. Give a brief 3-5 word description. Respond in JSON format: {"category":"...", "description":"...", "confidence":"high/medium/low"}`
    }
  ],
  images: [imageBase64.substring(0, 50000)], // Send partial image for testing
  stream: false
});

const options = {
  hostname: 'api.ollamahub.com',
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
  console.log('Status:', res.statusCode);
  console.log('Headers:', JSON.stringify(res.headers, null, 2));
  
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    console.log('\nResponse:', data);
    try {
      const json = JSON.parse(data);
      console.log('\nParsed:', JSON.stringify(json, null, 2));
    } catch (e) {
      console.log('\nFailed to parse as JSON');
    }
  });
});

req.on('error', (error) => {
  console.error('Error:', error);
});

req.on('timeout', () => {
  console.error('Request timed out');
  req.destroy();
});

req.write(payload);
req.end();
