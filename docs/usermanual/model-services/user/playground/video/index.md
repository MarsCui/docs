# Video

## Preface

| Item | Content |
|------|---------|
| Target Audience | User |
| Navigation Path | Playground > Video |
| Overview | Generate AI videos through text descriptions or reference assets to experience the model's video generation capabilities |

## Page Structure

### Search Area

There is no search area on the main page. The Select Model dialog provides a model name / model identifier search box on the left.

### Action Buttons

* The top model dropdown shows the current video model and opens the Select Model dialog
* The upper-right area provides **Model Compare** and **Back to old version** buttons
* The left side of the input box provides an asset add entry for video generation reference assets
* The lower-left area of the input box provides Resolution, Ratio, Duration, and parameter configuration controls
* The lower-right area of the input box provides Personal Key selection and the send button

### Data List

The page center displays the video generation prompt area, prompt input box, parameter configuration entry, and generated result area.

## Operations

### Generating Videos with Model

1. Enter the platform homepage, click the **"Playground > Video"** menu in the left navigation bar to enter the video generation experience page.
2. Click the top model dropdown to open the Select Model dialog:
   - Enter a model name or model identifier in the search box on the left to filter models;
   - Select the target video model from the model list on the left;
   - Select an available provider instance on the right;
   - Click **Confirm** to switch the model.

![Select Model](./images/select-model.png)

3. If the current model requires reference assets, click the add entry on the left side of the input box to upload or select assets.
4. Set basic generation options in the lower-left area of the input box:
   - Select **Resolution** to set the output video resolution;
   - Select **Ratio** to set the output video aspect ratio;
   - Set **Duration** to control the generated video duration.
5. Click the parameter configuration button and set advanced parameters:
   - Select **Protocol** (for example, openai/video);
   - Enter **Negative Prompt** to describe content that should not appear in the video;
   - Set **Audio Setting**;
   - Enable or disable **Prompt Extend** as needed;
   - Enable or disable **Watermark** as needed;
   - Enter **Seed** as needed.

![Video parameter configuration](./images/parameters.png)

6. If a specific credential is required, select the corresponding **Personal Key** in the lower-right area of the input box.
7. Enter the video description in the input box and click the send button to generate the video. Shift+Enter can be used for a new line.
8. After generation is complete, view the generated video in the result area.

#### Parameters (Parameter Configuration Panel)

| Term | Type | Example | Description |
|------|------|---------|-------------|
| Reference Asset | Upload / Add Entry | `+` | Adds image, video, or other reference assets according to the selected model requirements |
| Resolution | Quick Option | `1080P` | The resolution of the output video |
| Ratio | Quick Option | `--` | The aspect ratio of the output video. Available options depend on the selected model |
| Duration | Number Option | `0` | The duration of the generated video |
| Protocol | Dropdown | `openai/video` | The API protocol used for model calls |
| Negative Prompt | Text Input | `please input` | Describes content that should not appear in the generated video |
| Audio Setting | Dropdown | `auto` | The audio configuration for the generated video |
| Prompt Extend | Switch | `Off` | Whether to automatically extend the prompt |
| Watermark | Switch | `Off` | Whether to add a watermark to the generated video |
| Seed | Number Input | `Optional` | The random seed used to make generation results more reproducible |
| Personal Key | Dropdown | `Personal Key 20260616...` | The credential used for the current request |
| Prompt | Text Input | `Please enter your question` | The video generation description entered in the input box |

#### Parameters (Select Model Dialog)

| Term | Type | Example | Description |
|------|------|---------|-------------|
| Model Name / Identifier | Text | `Mock Ali Wan 2.7 Video Edit / mock-models/wan2.7-videoedit` | The model name and unique identifier |
| Release Date | Date | `2026-07-01` | The release date of the model |
| Context | Text | `-` | The context display value of the video model |
| Input / Output Credit | Number | `- Credits / 6 Credits` | The input and output pricing display of the model |
| Provider | Text | `Model Mocker:Ali Wan 2.7 Video Edit Mocker / AGIOneSystem` | The model provider and service instance |
| Billing Unit | Text | `Credits/sec` | The billing unit of the current provider instance |
| Unit Price | Number | `-- Credits/sec` | The unit price billed by generated seconds |
| Throughput / Success Rate | Number | `0 t/s / -` | Runtime metrics of the provider instance |
| Weekly Calls / Weekly Seconds | Number | `0 / 0 sec` | Recent usage of the provider instance |
| Status Tags | Tag | `Recommended / Published` | Recommendation and publishing status |
| Capability Tags | Tag | `Reasoning / Tool Calling` | Capability tags of the model. The screenshot shows these capabilities as unsupported |

## Other Operations

| Operation | Steps |
|-----------|-------|
| Switch Model | Click the top model dropdown -> select another model or provider in the dialog -> click **Confirm** |
| Search Model | Enter a model name or model identifier in the left search box of the Select Model dialog |
| Add Reference Asset | Click the add entry on the left side of the input box and add image or video assets according to the selected model requirements |
| Adjust Basic Parameters | Modify Resolution, Ratio, or Duration in the lower-left area of the input box |
| Adjust Advanced Parameters | Click the parameter configuration button -> modify Protocol, Negative Prompt, Audio Setting, Prompt Extend, Watermark, Seed, and other parameters |
| Select Credential | Click the key dropdown in the lower-right area of the input box and select the Personal Key for this request |
| Model Compare | Click **Model Compare** to enter the multi-model parallel video generation page |
| Text Input | Enter the video description in the bottom input box, then click the send button or press Enter; use Shift+Enter for a new line |
| Back to Old Version | Click **Back to old version** to switch to the old video generation page |

## Notes

* Clearer video descriptions usually make the generated result closer to expectations.
* Whether reference assets are required depends on the selected model type, such as video editing, image-to-video, reference-to-video, or text-to-video.
* Resolution, Ratio, and Duration affect generation time and billing. Set them according to actual needs.
* Audio Setting, Prompt Extend, Watermark, and Seed availability depends on the selected protocol, model, and provider instance.
* Model price, status, billing unit, and performance metrics are subject to the information shown in the Select Model dialog.
* You can click **Model Compare** to enter the multi-model parallel video generation page.
