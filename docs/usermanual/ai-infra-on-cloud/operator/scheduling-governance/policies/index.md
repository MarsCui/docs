# Policy Management

## Preface

| Item            | Content                                                                                                                                                              |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Target Audience | Operator                                                                                                                                                             |
| Navigation Path | Scheduling Governance > Policy Management                                                                                                                          |
| Overview        | Centrally manage scheduling policies and governance rules on the multi-cloud scheduling platform, used to constrain resource scheduling, traffic distribution, rate limiting and degradation, and other runtime behaviors |

## Page Structure

### Search Area

The page top provides policy name search, policy type filter, status filter (All / Enabled / Disabled), and **"Search"** and **"Reset"** buttons.

### Action Buttons

The page top-right provides **"Add Policy"**, **"Export"**, and **"Import"** buttons for policy creation and batch configuration management.

### Data List

The data table displays the policy list, including policy name, policy type, description, association scope, status, creation time, and action columns (Details / Edit / Enable-Disable / ...).

## Operations

### Adding a Policy

1. Enter the platform homepage, click the **"Scheduling Governance > Policy Management"** menu in the left navigation bar to enter the policy management page.
2. Click the **"Add Policy"** button at the top right of the page to pop up the "Add Policy" window.

![Policy Management](./images/policies.png)

3. Configure the policy information:
   - Fill in the **"Policy Name"** and **"Policy Description"**;
   - Select the **"Policy Type"** (e.g., Scheduling Policy / Traffic Distribution / Rate Limiting and Degradation / Fallback Routing, etc.);
   - Configure the **"Association Scope"** (applicable cloud platform / business type / tenant);
   - Configure the **"Policy Rules"** (specific rule items provided according to the policy type).
4. After confirming all information is correct, click the **"Confirm"** button to complete the addition.

#### Parameters

| Term | Type | Example | Description |
|------|------|---------|-------------|
| Policy Name | Text | `infer-default-policy` | Required. Custom policy identifier |
| Policy Description | Text | — | Optional. Used to explain the use and applicable scenarios of the policy |
| Policy Type | Radio | `Scheduling Policy` | Required. Identifies the category of the policy |
| Association Scope | Multi-select | `Alibaba Cloud / Inference Deployment` | Required. Configure the cloud platform and business type to which the policy applies |
| Policy Rules | List | — | Required. Specific rule configuration items provided according to the policy type |
| Status | Radio | `Enabled` / `Disabled` | Required. Controls whether the policy takes effect |

## Other Operations

| Operation | Steps |
|-----------|-------|
| View Policy Details | Click the target policy's **"Details"** button → View the policy content in the "Basic Information" and "Rule Configuration" tabs → Click the back arrow at the top left to exit |
| Edit Policy | Click the target policy's **"Edit"** button → Modify the policy description, association scope, rule configuration, etc. → Click **"Confirm"** |
| Enable / Disable | Click the target policy's **"Enable"** / **"Disable"** button → Confirm the status change |
| Delete Policy | Click the target policy's **"..."** (More) button → Select **"Delete"** → **This action is irreversible. Please operate with caution.** |
| Export / Import Configuration | Click the **"Export"** / **"Import"** buttons at the top right of the page → Batch management of policy configurations |

## Notes

- **Deletion operations are irreversible.** Please operate with caution. Before deletion, all bindings of the policy with associated scopes should be removed first.
- Before enabling a policy, ensure that there are schedulable resources or services within the association scope, otherwise the policy may not take effect.
- After modifying policy rules, it may take a certain period of time (from seconds to minutes) to take effect across the platform.
- Multiple policies may have priority conflicts. Please refer to the priority description of the policy type when configuring.
- Policies are the core configuration of platform scheduling and governance. Verify changes in the test environment before applying them to the production environment.
