# Audio

## Preface

| Item            | Content                                                                    |
| --------------- | -------------------------------------------------------------------------- |
| Target Audience | User                                                                       |
| Navigation Path | Playground > Audio                                                         |
| Overview        | Generate speech from text and experience the model's text-to-audio ability |

## Page Structure

### Search Area

There is no search area on the main page. The Select Model dialog provides a model name / model identifier search box on the left.

### Action Buttons

* The top model dropdown shows the current audio model and opens the Select Model dialog
* The upper-right area provides **Model Compare** and **Back to old version** buttons
* The lower-left area of the input box provides Voice ID selection and parameter configuration
* The lower-right area of the input box provides Personal Key selection and the send button

### Data List

The page displays the audio generation prompt area, text input box, parameter configuration entry, and generated audio result area.

## Operations

### Generating Audio with Model

1. Enter the platform homepage, click **"Model Services > Playground > Audio"** menu to enter the audio generation page.
2. Click the top model dropdown to open the Select Model dialog:
   - Enter a model name or model identifier in the search box on the left to filter models;
   - Select the target audio model from the model list on the left;
   - Select an available provider instance on the right;
   - Click **Confirm** to switch the model.

![Select Model](./images/select-model.png)

3. Select **Voice ID** in the lower-left area of the input box to specify the voice for this generation.
4. Click the parameter configuration button and set generation parameters:
   - Select **Protocol** (for example, openai/audio);
   - Fill in the required **Text** field;
   - Adjust **Speed**, **Volume**, and **Pitch**;
   - Set **Audio Format** as needed.

![Audio parameter configuration](./images/parameters.png)

5. If a specific credential is required, select the corresponding **Personal Key** in the lower-right area of the input box.
6. Enter or confirm the text to synthesize in the input box, then click the send button to generate audio.
7. After generation is complete, view and play the generated audio in the result area.


#### Parameters (Parameter Configuration Panel)

| Term | Type | Example | Description |
|------|------|---------|-------------|
| Voice ID | Dropdown | `male-qn-qingse` | The voice identifier used for audio generation |
| Protocol | Dropdown | `openai/audio` | The API protocol used for model calls |
| Text | Text Input | `please input` | Required. The text content to synthesize |
| Speed | Number Slider / Input | `1.0` | Controls the speech speed of the generated audio |
| Volume | Number Slider / Input | `1.0` | Controls the volume of the generated audio |
| Pitch | Number Slider / Input | `0` | Controls the pitch of the generated audio |
| Audio Format | Dropdown | `Select from page options` | The output file format for the generated audio |
| Personal Key | Dropdown | `Personal Key 20260616...` | The credential used for the current request |

#### Parameters (Select Model Dialog)

| Term | Type | Example | Description |
|------|------|---------|-------------|
| Model Name / Identifier | Text | `Mock MiniMax Speech T2A / mock-models/speech-2.8-hd` | The model name and unique identifier |
| Release Date | Date | `2026-06-02` | The release date of the model |
| Context | Text | `-` | The displayed context value for the audio model |
| Input Credit | Number | `3500 Credits` | The model input-side pricing display |
| Provider | Text | `Model Mocker:Mock MiniMax Speech T2A / AGIOneSystem` | The model provider and service instance |
| Billing Unit | Text | `Per Character` | The billing method of the selected provider instance |
| Character Price | Number | `3,500 Credits/M chars` | The cost per million characters |
| Latency / Throughput / Success Rate | Number | `- / 0 t/s / -` | Runtime metrics of the provider instance |
| Weekly Calls / Weekly Chars | Number | `0 / 0 chars` | Recent usage of the provider instance |
| Status Tags | Tag | `Recommended / Published` | Recommendation and publishing status |
| Capability Tags | Tag | `Reasoning / Tool Calling` | Model capability tags; both are shown as unsupported in the screenshot |

### Model Comparison

1. Click the **Model Compare** button to enter the multi-model comparison page.
2. Select the audio models or provider instances to compare.
3. Configure Voice ID, protocol, and generation parameters for each model.
4. Enter the same text to synthesize.
5. Click the send button to generate multiple audio results.
6. Compare voice, speed, stability, and overall output quality across different models or provider instances.

## Other Operations

| Operation | Steps |
|-----------|-------|
| Switch Model | Click the top model dropdown -> select another model or provider in the dialog -> click **Confirm** |
| Search Model | Enter a model name or model identifier in the left search box of the Select Model dialog |
| Switch Voice | Click the Voice ID dropdown in the lower-left area of the input box and select a voice |
| Adjust Parameters | Click the parameter configuration button -> modify Protocol, Text, Speed, Volume, Pitch, Audio Format, and other parameters |
| Select Credential | Click the key dropdown in the lower-right area of the input box and select the Personal Key for this request |
| Model Compare | Click **Model Compare** to enter the multi-model audio generation page |
| Text Input | Enter text in the bottom input box, then click the send button or press Enter; use Shift+Enter for a new line |
| Back to Old Version | Click **Back to old version** to switch to the old audio generation page |

## Notes

* Text is required. If it is empty, the page prompts you to enter text.
* Voice ID determines the generated voice. Confirm the selected voice before generation.
* Speed, Volume, and Pitch affect the playback speed, volume, and pitch of the generated audio.
* Audio Format options depend on the actual dropdown options on the page.
* Model price, status, billing unit, and performance metrics are subject to the information shown in the Select Model dialog.
* You can click **Model Compare** to enter the multi-model audio generation page.
