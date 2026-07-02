# Inference Images

## Preface

| Item            | Content                                                                                                                                                          |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Target Audience | Operator                                                                                                                                                         |
| Navigation Path | Deployment Assets > Inference Images                                                                                                                            |
| Overview        | Provide common multi-cloud multi-region native container image resources, which can be added and used in inference frameworks, providing pre-configured runtime environment support for model deployment |

## Page Structure

### Search Area

The page top provides cloud platform filter (All / AGIOne / Huawei Cloud / Google Cloud / Alibaba Cloud / Amazon), name search box, type search box, and **"Search"** and **"Reset"** buttons.

### Action Buttons

The page top-right provides **"Export"**, **"Import"**, and **"Add"** buttons for batch configuration management and image addition.

### Data List

The data table displays the inference image list, including Name, Type, Size, Path Information, Cloud Vendor, Description, Creation Time, and action columns (Edit / Delete).

## Operations

### Adding an Image

1. Enter the platform homepage, click the **"Deployment Assets > Inference Images"** menu in the left navigation bar to enter the inference images page.
2. Click the **"Add Image"** button at the top right of the page to pop up the "Add Image" window.

![Inference Images](./images/runtime-images-list.png)

3. Fill in the window:
   - **"Image Name"** (Multilingual): Simplified Chinese (e.g., `vllm`) / English (e.g., `vllm`) two tabs maintained independently.
   - **"Image Repository Address"**: Fill in the complete address of the image repository (e.g., `eas-registry-vpc.cn-shanghai.cr.aliyuncs.com/pai-eas/vllmv`).
   - **"Image Tag"**: Fill in the image version tag (e.g., `0.9.1-modelgallery`).
   - **"Framework Type"** (Multi-select Enum): vllm / tgi / sglang / ollama / asr / tts / sdk-stable-diffusion / comfyui, at least 1 must be selected, used to associate with the inference framework.
   - **"Built-in"**: Radio `Yes` / `No`, identifies whether the image is a platform built-in image.
   - **"Description"** (Multilingual): Simplified Chinese / English two tabs maintained independently, explaining the use of the image (e.g., `vllm 0.9.1 modelgallery`).
4. After confirming all configurations are correct, click the **"Save"** button to complete the image addition; to discard, click **"Cancel"**.

![Add Image](./images/add-image.png)

#### Parameters

| Term | Type | Example | Description |
|------|------|---------|-------------|
| Image Name (Multilingual) | Text | Chinese `vllm` / English `vllm` | Required. Two tabs maintained independently |
| Image Repository Address | Text | `eas-registry-vpc.cn-shanghai.cr.aliyuncs.com/pai-eas/vllmv` | Required. Complete image repository address |
| Image Tag | Text | `0.9.1-modelgallery` | Required. Image version tag |
| Framework Type | Multi-select | `vllm`, `tgi`, `sglang` | Required. At least 1 must be selected, associating with the inference framework |
| Built-in | Radio | `Yes` / `No` | Required. Identifies whether it is a platform built-in image |
| Description (Multilingual) | Text | Chinese `vllm 0.9.1 modelgallery` / English `vllm 0.9.1 modelgallery` | Optional. Two tabs maintained independently |

## Other Operations

| Operation | Steps |
|-----------|-------|
| Edit Image | Click the target image's **"Edit"** button → Modify the cloud platform, region, name, path information, etc. → Click **"Confirm"** |
| Delete Image | Click the target image's **"Delete"** button → Confirm operation (**Data cannot be recovered after deletion. Please operate with caution.**) |
| Export / Import Configuration | Click the **"Export"** / **"Import"** buttons at the top right of the page → Batch management of inference image configurations |

## Notes

- **Deletion operations are irreversible.** Please operate with caution.
- When adding an image, ensure that the image path is correct and has been correctly pushed to the container image repository of the target cloud platform.
- For private images, ensure that the cloud account has the correct permission to access the image repository.
- Multiple images may have similar names but different regions or types. Please confirm carefully before operating.
