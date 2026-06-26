# InfraHub Access Overview

## Preface

| Item            | Content                                                                                                                                                                                                                  |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Target Audience | Operator                                                                                                                                                                                                                 |
| Navigation Path | Access Workbench > Access Overview                                                                                                                                                                                        |
| Overview        | The Operator's access workbench homepage, divided into 3 major blocks summarizing cloud resource access, operational resources, and authorization status, with "Open" entries for each resource module                |

## Page Structure

The page consists of **3 blocks** arranged top to bottom: ① Access Infrastructure (statistics cards) → ② Operational Resources List (resource table) → ③ Authorization Status (cards).

### Access Infrastructure

3 statistics cards arranged horizontally, each displaying the total count of the corresponding module, the tag cloud of the accessed items, and an entry link to the detail list:

- **Accessed Cloud Platforms**: Statistics of the total number of accessed public cloud / private cloud vendors (e.g., 5 in the figure), the card below shows vendor icons by vendor (AGIOne-powerone / Alibaba Cloud / Amazon / Google Cloud / Huawei Cloud, etc.), and the bottom provides a **"Access Cloud Platform →"** entry.
- **Accessed Resource Pools**: Statistics of the total number of enabled regions (e.g., 7 in the figure), the card below shows the number of regions by cloud platform (e.g., Huawei Cloud 1 / Google Cloud 2 / Amazon 1 / Alibaba Cloud 3), and the bottom provides a **"Access Resource Pools →"** entry.
- **Accessed Accounts**: Statistics of the total number of accessed cloud accounts (e.g., 4 in the figure), the card below lists the account names (e.g., `HuaweiOperatorAccount` / `google-prod-account` / `aws` / `aliyun-wh-dev`) and their affiliated cloud vendors, and the bottom provides a **"Access Accounts →"** entry.

### Operational Resources List

A 5-column resource list table (Resource / Quantity / Prerequisites / Support / Entry), displaying the platform's core operational resources from **bottom to top of the dependency chain**, with each row providing an **"Open"** entry to jump to the corresponding module:

| Resource | Quantity | Prerequisites | Support | Entry |
| --- | --- | --- | --- | --- |
| Inference Images | 7788 | Cloud Platform > Resource Pool | Registers runtime images under cloud platform resource pools for inference framework version selection and subsequent inference runs. | Open |
| Inference Frameworks | 47 | Cloud Platform > Resource Pool > Access Account > Inference Image | Binds cloud platform, resource pool, access account, and runtime image, building a framework version selectable for model configuration. | Open |
| Models / Library Models | 40 | Meta-model > Cloud Platform > Resource Pool > Inference Framework | Associates meta-model, cloud configuration, resource specification, and framework version as a model entry for policy configuration and inference deployment. | Open |
| Policies | 1 | Model / Library Model > Inference Framework Version | Orchestrates active-standby routing based on model cloud configuration and framework version, supporting high-availability inference deployment scheduling. | Open |

> Note: The "Prerequisites" of each row use the `>` separator to express **layered dependencies**. For example, to create a "Model / Library Model", you need to first complete the configuration of "Meta-model + Cloud Platform + Resource Pool + Inference Framework".

### Authorization Status

2 authorization cards arranged horizontally, each displaying statistics and details of two types of authorization, with a **"Manage Authorization →"** entry:

- **Tenant-Cloud Platform Authorization**: Subtitle "Statistics on whether tenants have configured cloud platform authorization"; displays **Total Tenants / Authorized Tenants / Unauthorized Tenants** 3 metrics.
- **Business-Resource Pool Authorization**: Subtitle "Define the range of regions available for each business type of tenants"; displays the number of authorized resource pools by business type and the number of regions distributed by cloud platform (e.g., Inference Deployment 7: Huawei Cloud 1 / Amazon 1 / ...).

## Operations

### Viewing Access Overview

1. Enter the platform homepage, click the **"Access Workbench > Access Overview"** menu in the left navigation bar to enter the InfraHub Access Overview page.
2. The page displays the current data of the 3 major blocks by default:
   - Access Infrastructure (totals and accessed items of Cloud Platform / Resource Pool / Account)
   - Operational Resources List (quantities and dependency chains of Inference Images / Inference Frameworks / Model Library / Policies)
   - Authorization Status (Tenant Authorization Statistics + Business-Resource Pool Authorization Distribution)

![InfraHub Access Overview](./images/access-overview.png)

### Jumping to Detail Modules

The Access Infrastructure / Authorization Status blocks provide **"→"** entry jumps:

- Click **"Access Cloud Platform →"** → Jump to [Access Cloud Type](../../access-management/access-cloudtype/)
- Click **"Access Resource Pools →"** → Jump to [Access Resource Pools](../../access-management/resource-pools/)
- Click **"Access Accounts →"** → Jump to [Access Cloud Accounts](../../access-management/cloud-accounts/)
- Click **"Manage Authorization →"** (Tenant-Cloud Platform Authorization card) → Jump to [Tenant-Cloud Platform Authorization](../../auth-management/tenant-cloud-auth/)
- Click **"Manage Authorization →"** (Business-Resource Pool Authorization card) → Jump to [Business-Resource Pool Authorization](../../auth-management/business-region-auth/)

### Jumping to Operational Resources

Click the **"Open"** button at the end of each row in the Operational Resources List to jump to the corresponding module:

- Click **"Open" on the Inference Images row** → Jump to [Inference Images](../../deploy-assets/runtime-images/)
- Click **"Open" on the Inference Frameworks row** → Jump to [Inference Frameworks](../../deploy-assets/frameworks/)
- Click **"Open" on the Model / Library Model row** → Jump to [Model Library](../../deploy-assets/models/)
- Click **"Open" on the Policies row** → Jump to [Policy Management](../../scheduling-governance/policies/)

## Other Operations

| Operation | Steps |
|-----------|-------|
| Quick Access | Click the **"Quick Access"** menu in the left navigation bar (located below "Access Overview") → Enter the 5-step guided process (Access Cloud Platform → Tenant-Cloud Platform Authorization → Access Account → Access Resource Pool → Business-Resource Pool Authorization) |
| Drill Down to Details | Click the **"→"** of any block or the **"Open"** button of a resource row → Jump to the detail list of the corresponding module |

## Notes

- **Data Source**: Access Overview is an aggregate statistics view, with data sourced from sub-modules such as Access Management, Authorization Management, and Deployment Assets; changes in any sub-module will be reflected in real-time (or near real-time) in the overview view.
- **Dependency Chain**: The "Prerequisites" chain for each row in the Operational Resources List is a strong dependency from bottom to top; if upstream resources are missing, the entry of the corresponding row may not be able to continue configuration after jumping due to no available options.
- **Authorization Coverage**: The Authorization Status cards only display statistical overviews; details (Authorized Tenant List / Authorized Region List) need to be viewed by entering the corresponding management page.
- **Access Overview is for Operator internal use only**, not directly for tenants.
- The "Policies" resource in Access Overview comes from the **Scheduling Governance** partition, and is in the same deployment resource chain as "Models / Library Models / Inference Frameworks" in "Operational Resources", but is managed by a different menu path.
