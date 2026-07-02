# Tenant-Cloud Platform Authorization

## Preface

| Item            | Content                                                                                                                                |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Target Audience | Operator                                                                                                                               |
| Navigation Path | Authorization Management > Tenant-Cloud Platform Authorization                                                                          |
| Overview        | Assign the use permission of cloud platforms to different tenants, enabling precise control of tenants' use of cloud platforms   |

## Page Structure

### Search Area

The page top provides tenant name and tenant ID filter input boxes, and **"Search"** and **"Reset"** operation buttons.

### Action Buttons

The page top-right provides the **"Add Authorization"** button. The tip area displays the current function description text.

### Data List

The data table area displays the list of authorized tenants, including tenant name, tenant ID, authorized cloud platforms, and action columns.

## Operations

### Adding Authorization

1. Enter the platform homepage, click the **"Authorization Management > Tenant-Cloud Platform Authorization"** menu in the left navigation bar to enter the cloud platform authorization management page.
2. Click the **"Add Authorization"** button at the top right of the page to pop up the "Add Authorization" window.

![Tenant-Cloud Platform Authorization](./images/tenant-cloud_auth.png)

3. In the **"Choose Cloud Platform"** dropdown list, check the cloud platforms to be authorized (multiple selections supported, e.g., Huawei Cloud, Amazon, AGIOne-powerone).
4. Select the authorization scope (one of two):
   - **"Authorize Single Tenant"**: Authorize the specified tenant. At this time, fill in the target tenant name in the **"Choose Tenant"** input box;
   - **"Authorize All Tenants"**: Authorize all tenants without filling in the tenant name.
5. After confirming all configurations are correct, click the **"Confirm"** button to complete the authorization; to discard, click **"Cancel"**.

![Add Authorization](./images/add-authorization.png)

> Note: The administrator can assign the use permission of cloud platforms to different tenants here. After the authorization is completed, the tenant can only access and use the authorized cloud platform resources and services, so as to achieve precise control of the tenant's use of cloud platforms and ensure the standardization and security of resource access.

#### Parameters

| Term | Type | Example | Description |
|------|------|---------|-------------|
| Choose Cloud Platform | Multi-select Dropdown | `Huawei Cloud`, `Amazon`, `AGIOne-powerone` | Required. Supports selecting multiple cloud platforms simultaneously |
| Authorization Scope | Radio | `Authorize Single Tenant` / `Authorize All Tenants` | Required. Determines the authorization target |
| Choose Tenant | Text | `dushuangyan01` | **Required when authorizing a single tenant**. Fill in the target tenant name |

## Notes

- Before authorization, ensure that the target tenant already exists and the cloud platform has been correctly connected to the system.
- When the authorization scope is "Authorize All Tenants", new tenants will automatically obtain the use permission of the cloud platform.
- **The delete authorization operation is irreversible**. After deletion, the relevant tenants will no longer be able to access the cloud platform. Please operate with caution.
- Cloud platform authorization is a prerequisite for tenants to use cloud resources. Unauthorized tenants cannot access any cloud platform resources.
