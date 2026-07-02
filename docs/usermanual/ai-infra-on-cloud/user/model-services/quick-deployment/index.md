# Quick Deployment

## Preface

| Item            | Content                                                                                                                                              |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Target Audience | User                                                                                                                                                  |
| Navigation Path | Model Services > Quick Deployment                                                                                                                    |
| Overview        | The quick start entry for users to filter target models from the cloud model library and complete deployment tasks through smart-recommended compute resources |

## Page Structure

"Quick Deployment" consists of a 3-step process: ① Model Library filtering → ② Smart Deployment Recommendation → ③ Publish Deployment popup.

## Operations

### Step 1: Select Cloud Account and Model

1. Enter the platform homepage, click the **"Model Services > Quick Deployment"** menu in the left navigation bar to enter the "Model Library" page.
2. The page top displays the title "Model Library" with the prompt "After selecting deployable cloud accounts and regions, filter and deploy matching models", and provides a **"Refresh Resources"** button at the top right.
3. The left-side "Deployable Range" card displays the **"Current Range: Alibaba Cloud / China East 2 (Shanghai)"** tag by default, and provides a **"Range Filter"** dropdown (All Clouds / All Regions).
4. The left-side cloud vendor list shows the deployable range (each card contains cloud vendor logo + name + region):
   - **Huawei Cloud** · China East (Shanghai 1)
   - **Amazon** · Europe (Frankfurt)
   - **Alibaba Cloud** · China (Hong Kong)
   - **Alibaba Cloud** · China East 2 (Shanghai) (default selected, highlighted in purple)
   - **Alibaba Cloud** · Singapore
   - **Google Cloud** · Tokyo
   - **Google Cloud** · Iowa
5. Click the target cloud vendor card (e.g., "Alibaba Cloud · China East 2 (Shanghai)"), and the system will filter matching models based on this range.
6. The right-side "Matching Models" area supports filtering by **"All Models"** / **"All Series"** / **"All Scenarios"** dropdowns + **"Search"** input box + **"Default Sort"** button. By default, 9 / 32 models are displayed. Example models:
   - **Qwen3-8b** (Chat Model / Text / Tool Calling / Deep Thinking / Text Generation, **Alibaba Cloud / China East 2 (Shanghai)**): **"Details"** / **"Deploy Model"**
   - **DeepSeek-R1** (Chat Model / Text / Tool Calling / Deep Thinking / Text Generation, **Alibaba Cloud / China East 2 (Shanghai)**): **"Details"** / **"Deploy Model"**
   - **Qwen3-8b** (Chat Model / Text / Tool Calling / Deep Thinking / Text Generation, **Alibaba Cloud / China East 2 (Shanghai)**): **"Details"** / **"Deploy Model"**
   - **Qwen3-8b** (Chat Model / Text / Tool Calling / Deep Thinking / Text Generation, **Alibaba Cloud / China East 2 (Shanghai)**): **"Details"** / **"Deploy Model"**
   - **DeepSeek-V3.2** (Chat Model / Text / Tool Calling / Deep Thinking / Text Generation, **Alibaba Cloud / China East 2 (Shanghai)**): **"Details"** / **"Deploy Model"**
   - **-** (Multimodal untitled model, **Alibaba Cloud / China East 2 (Shanghai)**): **"Details"** / **"Deploy Model"**
   - **Qwen3.5-27b** (Chat Model / Text / Image / Video / Tool Calling / Text Generation, **Alibaba Cloud / China East 2 (Shanghai)**): **"Details"** / **"Deploy Model"**
7. Click the **"Deploy Model"** button of the target model to enter Step 2 Smart Deployment Recommendation.

![Step 1: Select Cloud Account and Model](./images/step-1-deployable-scope.png)

#### Parameters - Step 1 Model Library

| Term | Type | Example | Description |
|------|------|---------|-------------|
| Current Range | Tag | `Alibaba Cloud / China East 2 (Shanghai)` | Displays the currently selected cloud account and region combination |
| Range Filter - Cloud | Dropdown | `All Clouds` | Required. Filter deployable range by cloud vendor |
| Range Filter - Region | Dropdown | `All Regions` | Required. Filter deployable range by region |
| Cloud Vendor Selection | Card Radio | `Alibaba Cloud · China East 2 (Shanghai)` | Required. Select the target cloud account and region |
| Model Filter - Model | Dropdown | `All Models` | Optional. Filter by model name |
| Model Filter - Series | Dropdown | `All Series` | Optional. Filter by series |
| Model Filter - Scenario | Dropdown | `All Scenarios` | Optional. Filter by application scenario |
| Search Box | Text | `Qwen3` | Optional. Enter model name keywords to quickly locate |
| Sort | Dropdown | `Default Sort` | Optional. Model list sorting method |
| Model Selection | Card Row | `Qwen3-8b` (Alibaba Cloud / China East 2 (Shanghai)) | Required. Click the **"Deploy Model"** button to enter the deployment process |

### Step 2: Smart Deployment Recommendation

1. After clicking the **"Deploy Model"** button of a model row, enter the "Smart Deployment Recommendation" page (the page top-left shows a back arrow + **"Smart Deployment Recommendation"** title).
2. The page top displays the **"Selected Model"** info card (icon + model name **Qwen3-8b** + series **Qwen3** + capability **Text Generation** + version **1.0.0** + context **128**), with a **"Deployment Mode"** radio Tab at the top right (**Single Node** / **High Availability**), where "Single Node" is selected and shows the **"Validation, Low Concurrency, Cost"** prompt.
3. **"Inference Engine"** configuration area (description: which inference framework to use to deploy the model), radio the target inference engine:
   - **vLLM** (Throughput-first, mature ecosystem, OpenAI API compatible, default selected, highlighted in purple)
   - **SGLang** (Complex inference chains, multi-turn orchestration and cache hit priority)
4. **"Business Strategy"** configuration area (description: adjust candidate ranking by price, performance, inventory, and GPU count), radio the target business strategy:
   - **Cost-Effective** (sorted by hourly price and resource utilization, default selected, highlighted in purple)
   - **High Performance** (prioritize high-performance GPU, high bandwidth, and the latest engine)
   - **Spot Fast Delivery** (prioritize idle resources that can be started immediately)
   - **GPU Count** (prioritize multi-GPU parallel and expansion requirements)
5. **"Model Compute Matching Plan"** card (top right "Recommended" tag + **Top 1** badge + **"Confirm Deployment"** button):
   - Title: **Alibaba Cloud / cn-shanghai** (**vllm** / **ecs.gn6i-c4g1.xlarge**)
   - **Compute Resources**: **GPU** `NVIDIA T4 x 1` / **CPU / Memory** `4C / 15G`
   - **Cost Estimation**: Hourly `¥12.78/Hour` / Daily `¥306.72/Day` / Monthly `¥9201.60/Month` / Yearly `¥111952.80/Year`
6. After confirming the inference engine, business strategy, and compute plan, click the **"Confirm Deployment"** button → the Step 3 "Publish Deployment" configuration popup will pop up, entering the deployment task configuration.

![Step 2: Smart Deployment Recommendation](./images/step-2-smart-deployment-recommendation.png)

#### Parameters - Step 2 Smart Deployment Recommendation

| Term | Type | Example | Description |
|------|------|---------|-------------|
| Deployment Mode | Radio Tab | `Single Node` (Validation, Low Concurrency, Cost) / `High Availability` | Required. Select the deployment architecture mode |
| Inference Engine | Radio Card | `vLLM` (Throughput-first, mature ecosystem, OpenAI API compatible) | Required. Select the model inference framework |
| Business Strategy | Radio Card | `Cost-Effective` (sorted by hourly price and resource utilization) | Required. Select the compute filter and sort strategy |
| Model Compute Matching Plan | Recommended Card | `Alibaba Cloud / cn-shanghai` / vllm / `ecs.gn6i-c4g1.xlarge` | Required. Smart recommendation based on cloud account + region + engine + strategy |
| Compute Resource - GPU | Tag | `NVIDIA T4 x 1` | Required. GPU model and count |
| Compute Resource - CPU / Memory | Tag | `4C / 15G` | Required. CPU cores and memory size |
| Cost Estimation - Hourly | Number | `¥12.78/Hour` | Required. Cost per hour |
| Cost Estimation - Daily | Number | `¥306.72/Day` | Required. Cost per day |
| Cost Estimation - Monthly | Number | `¥9201.60/Month` | Required. Cost per month |
| Cost Estimation - Yearly | Number | `¥111952.80/Year` | Required. Cost per year |

### Step 3: Publish Deployment (Popup Configuration)

1. After clicking the **"Confirm Deployment"** button in Step 2, the **"Publish Deployment"** configuration popup pops up (overlay on the Smart Deployment Recommendation page, can be closed).
2. The blue information bar at the top of the popup displays **"Selected Model: Qwen3-8b (Qwen3 / Text Generation / 1.0.0 / 128)"** and the **"Deployment Mode"** prompt at the top right (consistent with Step 2 selection).
3. Configure required fields:
   - **"\* Cloud Account"** (dropdown, required): Select from the connected cloud accounts (e.g., `aliyun-test`).
   - **"\* Task Name"** (text input, required, character count 0/36): Enter the deployment task name (e.g., `qwen3_8b_vllm_std`, current 17/36).
4. Configure optional fields:
   - **"Task Description"** (multi-line text, optional, character count 0/200): Enter the task description (e.g., "Optional description").
5. Select actions:
   - Click the **"Back to Recommendation"** button → Close the popup, return to the Step 2 Smart Deployment Recommendation page (you can adjust the compute plan).
   - Click the **"Start Deployment"** button → Submit the deployment task. After the deployment is complete, you can view the status in the **"My Deployments"** list.

![Step 3: Publish Deployment](./images/step-3-publish-deployment.png)

#### Parameters - Step 3 Publish Deployment

| Term | Type | Example | Description |
|------|------|---------|-------------|
| Cloud Account | Dropdown | `aliyun-test` | **Required**. Select from the connected cloud accounts |
| Task Name | Text | `qwen3_8b_vllm_std` | **Required**. Deployment task identifier, max 36 characters |
| Task Description | Multi-line Text | `Optional description` | Optional. Task description, max 200 characters |
| Start Deployment | Button | — | **Required**. Submit the deployment task. After submission, you can view the status in "My Deployments" |
| Back to Recommendation | Button | — | Optional. Close the popup, return to Step 2 to adjust the compute plan |

## Other Operations

| Operation | Steps |
|-----------|-------|
| Refresh Resources | On the Step 1 Model Library page, click the **"Refresh Resources"** button at the top right → Re-fetch the list of deployable cloud accounts and models |
| View Model Details | On the Step 1 Model Library page, click the **"Details"** button of the target model row → View the complete introduction, core features, and technical specifications of the model |
| Adjust Compute Plan | In the Step 3 popup, click the **"Back to Recommendation"** button → Return to the Step 2 Smart Deployment Recommendation page to re-select the inference engine / business strategy / compute plan |
| Start Deployment | In the Step 3 popup, after confirming the required fields are filled (Cloud Account + Task Name), click the **"Start Deployment"** button → Submit the deployment task |
| View Deployment Status | After deployment submission, enter the **"My Deployments"** list page → View the running status, API calls, monitoring, and event records of the new task |

## Notes

- **3-Step Process Order**: Quick Deployment is a **3-step process** (Step 1 Select Cloud Account and Model → Step 2 Smart Deployment Recommendation → Step 3 Publish Deployment popup), and the next step cannot be entered until the previous step is completed.
- **Step 2 ≠ Submit Deployment**: The **"Confirm Deployment"** button in Step 2 only opens the Step 3 popup, and does not directly submit; the actual submission is at the **"Start Deployment"** button in Step 3.
- **Required Field Validation**: The **"Start Deployment"** button in the Step 3 popup is enabled only when both **"Cloud Account"** and **"Task Name"** are filled; if either is empty, the button is grayed out.
- **Character Limits**: Task Name max 36 characters, Task Description max 200 characters; the input box displays the character count in real time at the bottom right.
- **Selected Model Cannot Be Changed**: The **"Selected Model"** info card (top) in the Step 3 popup comes from the Step 1 selection and cannot be modified in Step 3; to change the model, click outside the popup area to close it, and return to Step 1 to re-select.
- **Compute Plan Follows Selection**: Selecting different **Inference Engines** (vLLM / SGLang) and **Business Strategies** (Cost-Effective / High Performance / Spot Fast Delivery / GPU Count) in Step 2 will affect the **"Selected Plan"** in the Step 3 popup (e.g., `Alibaba Cloud / cn-shanghai / vllm / ecs.gn6i-c4g1.xlarge`); the popup information will be updated synchronously after adjusting the plan.
- **Prerequisite Account Access**: Before using Quick Deployment, you need to add the target cloud platform's account credentials (Access Key ID / Secret) on the **"Access Management > Access Accounts"** page first; otherwise, the "Cloud Account" dropdown in Step 3 will have no available options.
