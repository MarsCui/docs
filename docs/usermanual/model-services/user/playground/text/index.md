# Text

## Preface

| Item | Content |
|------|---------|
| Target Audience | User |
| Navigation Path | Playground > Text |
| Overview | Interact with AI models through text input and experience question answering, generation, and multi-turn conversation capabilities |

## Page Structure

### Search Area

There is no search area on the main page. The Select Model dialog provides a model name / model identifier search box on the left.

### Action Buttons

* The top model dropdown shows the current text model and opens the Select Model dialog
* The upper-right area provides **Model Compare** and **Back to old version** buttons
* The lower-left area of the conversation input box provides parameter configuration for protocol and generation parameters
* The lower-right area of the conversation input box provides Personal Key selection and the send button

### Data List

The page center displays the welcome prompt, conversation history, user messages, and model responses.

### Page Screenshot

## Operations

### Generating Text with Model

1. Enter the platform homepage, click the **"Playground > Text"** menu in the left navigation bar to enter the dialogue experience page.
2. Click the top model dropdown to open the Select Model dialog:
   - Enter a model name or model identifier in the search box on the left to filter models;
   - Select the target text model from the model list on the left;
   - Select an available provider instance on the right;
   - Click **Confirm** to switch the model.

![Select Model](./images/select-model.png)

3. Click the parameter configuration button in the lower-left area of the input box and set dialogue parameters:
   - Select **Protocol** (for example, openai/chat_completions);
   - Adjust **Temperature**, **Top-P**, **N**, **Stream**, **Max Tokens**, and other generation parameters.
4. If a specific credential is required, select the corresponding **Personal Key** in the lower-right area of the input box.
5. Enter a question in the conversation input box and click the send button to interact with the model. Shift+Enter can be used for a new line.

![Text parameter configuration](./images/parameters.png)

#### Parameters (Parameter Configuration Panel)

| Term | Type | Example | Description |
|------|------|---------|-------------|
| Protocol | Dropdown | `openai/chat_completions` | The API protocol used for model calls |
| Temperature | Number Slider / Input | `1.0` | Controls response randomness. Higher values usually produce more diverse responses |
| Top-P | Number Slider / Input | `1.0` | Controls the sampling range. Higher values allow a wider candidate range |
| N | Number Slider / Input | `1` | The number of candidate responses returned in one request |
| Stream | Switch | `Off` | Whether to return the model response in streaming mode |
| Max Tokens | Number Slider / Input | `4096` | The maximum number of tokens that can be generated in one response |
| Personal Key | Dropdown | `Personal Key 20260616...` | The credential used for the current request |

#### Parameters (Select Model Dialog)

| Term | Type | Example | Description |
|------|------|---------|-------------|
| Model Name / Identifier | Text | `qwen3.6-flash / qwen/qwen3.6-flash` | The model name and unique identifier |
| Release Date | Date | `2026-04-16` | The release date of the model |
| Context | Number | `1M` | The maximum context window supported by the model |
| Input / Output Credit | Number | `12 Credits / 72 Credits` | The input and output pricing per 1M tokens |
| Provider | Text | `Alibaba / AGIOneSystem` | The model provider and service instance |
| Max Output | Number | `64K` | The maximum output length supported by the provider instance |
| Region | Text | `China` | The region of the provider instance |
| Latency / Throughput / Success Rate | Number | `- / 0 t/s / -` | Runtime metrics of the provider instance |
| Weekly Calls / Weekly Tokens | Number | `0 / 0 M Tokens` | Recent usage of the provider instance |
| Status Tags | Tag | `Recommended / Published` | Recommendation and publishing status |
| Capability Tags | Tag | `Reasoning / Tool Calling` | Extended capabilities supported by the model |

## Other Operations

| Operation | Steps |
|-----------|-------|
| Switch Model | Click the top model dropdown -> select another model or provider in the dialog -> click **Confirm** |
| Search Model | Enter a model name or model identifier in the left search box of the Select Model dialog |
| Adjust Parameters | Click the parameter configuration button -> modify Protocol, Temperature, Top-P, N, Stream, Max Tokens, and other parameters |
| Select Credential | Click the key dropdown in the lower-right area of the input box and select the Personal Key for this request |
| Model Compare | Click **Model Compare** to enter the multi-model conversation page |
| Conversation Input | Enter a question in the bottom input box, then click the send button or press Enter; use Shift+Enter for a new line |
| View Conversation History | View historical conversation records in the conversation window |
| Back to Old Version | Click **Back to old version** to switch to the old text conversation page |

## Notes

* Temperature and Top-P affect response diversity. Higher values usually make responses more random.
* Max Tokens must not exceed the output limit supported by the selected model and provider instance.
* Stream availability depends on the selected protocol, model, and provider instance.
* Model price, status, region, and performance metrics are subject to the information shown in the Select Model dialog.
* Use Shift+Enter for a new line to avoid sending incomplete sentences.
* You can click **Model Compare** to enter the multi-model conversation page.
