# Images

## Preface

| Item | Content |
|------|---------|
| Target Audience | User |
| Navigation Path | Playground > Images |
| Overview | Generate AI images from text descriptions and experience the model's image generation capabilities |

## Page Structure

### Search Area

There is no search area on the main page. The Select Model dialog provides a model name / model identifier search box on the left.

### Action Buttons

* The top model dropdown shows the current image model and opens the Select Model dialog
* The upper-right area provides **Model Compare** and **Back to old version** buttons
* The lower-left area of the input box provides Size, Image count, Thinking mode, and parameter configuration
* The lower-right area of the input box provides Personal Key selection and the send button

### Data List

The page center displays the image generation prompt area, prompt input box, parameter configuration entry, and generated image result area.

## Operations

### Generating Images with Model

1. Enter the platform homepage, click the **"Playground > Images"** menu in the left navigation bar to enter the image generation experience page.
2. Click the top model dropdown to open the Select Model dialog:
   - Enter a model name or model identifier in the search box on the left to filter models;
   - Select the target image model from the model list on the left;
   - Select an available provider instance on the right;
   - Click **Confirm** to switch the model.

![Select Model](./images/select-model.png)

3. Set basic generation options in the lower-left area of the input box:
   - Select **Size** to set the image size;
   - Set **Image** to control the number of images generated in one request;
   - Turn **Thinking mode** on or off as needed.
4. Click the parameter configuration button and set advanced parameters:
   - Select **Protocol** (for example, openai/images);
   - Turn **Enable sequential** on or off as needed;
   - Turn **Watermark** on or off as needed;
   - Fill in the required **Seed** field.

![Image parameter configuration](./images/parameters.png)

5. If a specific credential is required, select the corresponding **Personal Key** in the lower-right area of the input box.
6. Describe the image you want to generate in the input box, then click the send button to generate images.
7. After generation is complete, view the generated images in the result area.

#### Parameters (Parameter Configuration Panel)

| Term | Type | Example | Description |
|------|------|---------|-------------|
| Size | Quick Option | `2K` | The size specification of the generated image |
| Image | Number Option | `1` | The number of images generated in one request |
| Thinking mode | Switch | `On` | Whether to enable thinking mode |
| Protocol | Dropdown | `openai/images` | The API protocol used for model calls |
| Enable sequential | Switch | `Off` | Whether to generate multiple images sequentially |
| Watermark | Switch | `Off` | Whether to add a watermark to generated images |
| Seed | Number Input | `0` | Required. The random seed used to control reproducibility |
| Personal Key | Dropdown | `Personal Key 20260616...` | The credential used for the current request |
| Prompt | Text Input | `Describe the image you want to generate` | The image generation description entered in the input box |

#### Parameters (Select Model Dialog)

| Term | Type | Example | Description |
|------|------|---------|-------------|
| Model Name / Identifier | Text | `Mock Ali Wan 2.7 Image / mock-models/wan2.7-image` | The model name and unique identifier |
| Release Date | Date | `2026-07-01` | The release date of the model |
| Context | Text | `-` | The displayed context value for the image model |
| Input / Output Credit | Number | `- Credits / 2 Credits` | The input-side and output-side pricing display |
| Provider | Text | `Model Mocker:Ali Wan 2.7 Image Mocker / AGIOneSystem` | The model provider and service instance |
| Billing Unit | Text | `Per Image` | The billing method of the selected provider instance |
| Image Price | Number | `2 Credits/Image` | The cost of generating one image |
| Latency / Throughput / Success Rate | Number | `- / 0 t/s / -` | Runtime metrics of the provider instance |
| Weekly Calls / Weekly Images | Number | `0 / 0 images` | Recent usage of the provider instance |
| Status Tags | Tag | `Recommended / Published` | Recommendation and publishing status |
| Capability Tags | Tag | `Reasoning / Tool Calling` | Model capability tags; both are shown as unsupported in the screenshot |

## Other Operations

| Operation | Steps |
|-----------|-------|
| Switch Model | Click the top model dropdown -> select another model or provider in the dialog -> click **Confirm** |
| Search Model | Enter a model name or model identifier in the left search box of the Select Model dialog |
| Adjust Basic Parameters | Modify Size, Image count, or Thinking mode in the lower-left area of the input box |
| Adjust Advanced Parameters | Click the parameter configuration button -> modify Protocol, Enable sequential, Watermark, Seed, and other parameters |
| Select Credential | Click the key dropdown in the lower-right area of the input box and select the Personal Key for this request |
| Model Compare | Click **Model Compare** to enter the multi-model image generation page |
| Text Input | Enter an image description in the bottom input box, then click the send button or press Enter; use Shift+Enter for a new line |
| Back to Old Version | Click **Back to old version** to switch to the old image generation page |

## Notes

* Clearer image descriptions usually produce results closer to expectations.
* Size and Image count affect generation time and billing. Set them according to actual needs.
* Seed is required. Using the same Seed with the same model and parameters helps reproduce similar results.
* Watermark availability depends on the selected protocol, model, and provider instance.
* Model price, status, billing unit, and performance metrics are subject to the information shown in the Select Model dialog.
* You can click **Model Compare** to enter the multi-model image generation page.
