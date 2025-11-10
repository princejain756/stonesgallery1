Ollama Cloud provides a robust API for interacting with its cloud-hosted large language models, allowing you to generate responses, manage models, and perform inference remotely. Below is a structured overview based on official documentation, including endpoints, authentication, and sample usage.[1][2][3][4][5][6]

## Authentication

- Sign in or create an Ollama account at ollama.com.
- Generate an API key in your account dashboard, name it for identification, and save it securely. API keys are used as Bearer tokens in the Authorization header.[6]
- Set your key as an environment variable:
  ```
  export OLLAMA_API_KEY=your_api_key
  ```
- API keys are required for using cloud models and for any authorized cloud interaction.[3]

## API Base URL and Structure

- For local API (testing or self-hosted):  
  ```
  http://localhost:11434/api
  ```
- For the official cloud API:  
  ```
  https://ollama.com/api
  ```
- Most endpoints support both URLs, depending on if your models are local or cloud-hosted.[2]

## Main API Endpoints

| Endpoint                  | Method | Description                       |
|---------------------------|--------|-----------------------------------|
| `/api/generate`           | POST   | Generate text for a given prompt  |
| `/api/chat`               | POST   | Multi-turn chat with a model      |
| `/api/list`               | GET    | List available local models       |
| `/api/pull`               | POST   | Download a model from repo        |
| `/api/tags`               | GET    | List available cloud models       |
| `/api/delete`             | DELETE | Remove a specified local model    |
| `/api/copy`               | POST   | Duplicate a model locally         |
| `/api/embeddings`         | POST   | Generate vector embeddings        |
| `/api/info`               | GET    | Show model information            |
| `/api/push`               | POST   | Upload a model                    |
| `/api/running`            | GET    | List currently running models     |[4][5]

## Example: Generate a Response (cURL)

```bash
curl https://ollama.com/api/generate \
-H "Authorization: Bearer $OLLAMA_API_KEY" \
-d '{
  "model": "gpt-oss:120b-cloud",
  "prompt": "Why is the sky blue?",
  "stream": false
}'
```
For local testing, change the base URL to `http://localhost:11434/api/generate`.[2][3]

## Example: Python Client Usage

```python
import os
from ollama import Client

client = Client(
  host="https://ollama.com",
  headers={'Authorization': 'Bearer ' + os.environ.get('OLLAMA_API_KEY')}
)
messages = [
  {'role': 'user', 'content': 'Why is the sky blue?'}
]
for part in client.chat('gpt-oss:120b-cloud', messages=messages, stream=True):
  print(part['message']['content'], end='', flush=True)
```
Install library: `pip install ollama`.[7][1]

## Example: JavaScript Usage

```javascript
import ollama from "ollama";
const response = await ollama.chat({
  model: "gpt-oss:120b-cloud",
  messages: [{ role: "user", content: "Why is the sky blue?" }]
});
console.log(response.message.content);
```
Install library: `npm install ollama`.[7]

## Model Management Endpoints

- List models:  
  `curl https://ollama.com/api/tags`
- Copy a model:  
  `curl http://localhost:11434/api/copy -d '{"source": "llama3.2", "destination": "llama3-copy"}'`
- Delete a model:  
  `curl -X DELETE http://localhost:11434/api/delete -d '{"model": "llama3:13b"}'`
- Pull (download) a model:  
  `curl http://localhost:11434/api/pull -d '{"model": "llama3.2"}'`.[5]

## Streaming and Conventions

- Most endpoints support streaming responses; set `"stream": false` to disable.
- Models are identified as `model:tag`, e.g., `gpt-oss:120b-cloud`.[4]

## Additional Notes

- No authentication required for local API usage, but API keys are mandatory for cloud use.
- API keys do not expire by default, but can be revoked.
- Always refer to the official docs for up-to-date endpoint additions and model support.[1][4][5][6]

For in-depth guides and more advanced examples, visit the Ollama Cloud API documentation.[8][4][1][2]

[1](https://docs.ollama.com/cloud)
[2](https://docs.ollama.com/api)
[3](https://docs.ollama.com/api/authentication)
[4](https://ollama.readthedocs.io/en/api/)
[5](https://notes.kodekloud.com/docs/Running-Local-LLMs-With-Ollama/Building-AI-Applications/Ollama-REST-API-Endpoints)
[6](https://simplai.ai/docs/API_Keys/LLM_model/oolama-llm-model)
[7](https://ollama.com/blog/cloud-models)
[8](https://docs.ollama.com)
[9](https://ollama.com/cloud)
[10](https://geshan.com.np/blog/2025/02/ollama-api/)
[11](https://docs.n8n.io/integrations/builtin/credentials/ollama/)
[12](https://www.postman.com/postman-student-programs/ollama-api/documentation/suc47x8/ollama-rest-api)
[13](https://ollama.com)
[14](https://github.com/agentscope-ai/agentscope/issues/900)
[15](https://github.com/ollama/ollama)
[16](https://docs.factory.ai/cli/byok/ollama)