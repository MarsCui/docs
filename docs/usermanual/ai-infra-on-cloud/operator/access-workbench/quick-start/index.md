# Quick Start

## Preface

| Item            | Content                                                              |
| --------------- | -------------------------------------------------------------------- |
| Target Audience | Operator                                                             |
| Navigation Path | Access Workbench > Quick Access                                       |
| Overview        | Guide users through steps to complete the cloud platform access quick start page |

## Page Structure

### Search Area

None (this page is a guide page and does not require search functionality).

### Action Buttons

Each step card provides corresponding action buttons: **"Continue Configuration"** / **"Continue Authorization"** / **"Continue Add"** / **"Go to Authorization"**.

### Data List

The step process area displays a 5-step guided process, including step numbers, step names, and action buttons.

## Operations

Follow the page guidance to complete the following 5 steps in order:

### Step 1: Access Cloud Platform

Click the **"Continue Configuration"** button to register or add a public cloud / private cloud vendor platform as the basis for all subsequent access operations.

### Step 2: Cloud Platform Authorization

Click the **"Continue Authorization"** button to grant the use permission of the cloud platform to the specified tenant. The tenant can use the resources of the corresponding cloud platform only after authorization.

### Step 3: Access Account

Click the **"Continue Add"** button to bind the cloud platform access credentials (AK/SK, etc.) for the tenant. The system will pull and manage cloud resources through the account.

### Step 4: Access Resource Pool

Click the **"Continue Configuration"** button to configure the available cloud regions and availability zones. After being enabled, the resource pool can be used normally by the business system.

### Step 5: Resource Pool Authorization

Click the **"Go to Authorization"** button to assign the access permission of the resource pool to the business unit. After completion, the business system can officially call cloud computing resources.

![Quick Start](./images/quick-start.png)

## Notes

- Before performing the access operation, ensure that you have the administrator permission of the target cloud platform.
- Cloud platform authorization must be performed for a specific tenant. Unauthorized tenants cannot use the corresponding cloud resources.
- When accessing the account, keep the AK/SK credentials properly to avoid leakage.
- After the resource pool region is enabled, it cannot be disabled at will, so as not to affect the online business.
