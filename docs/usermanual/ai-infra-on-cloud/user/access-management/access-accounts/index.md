# Access Accounts

## Preface

| Item | Content |
| ---- | ------- |
| Applicable Role | User |
| Navigation Path | Access Management > Access Accounts |
| Function Description | Provides cloud platform account access, editing, and deletion functionality |

## Page Structure

### Search Area

The top of the page provides a cloud platform filter, a search box, and **"Search"** and **"Reset"** buttons.

### Action Button Area

The upper-right corner of the page provides the **"Add Cloud Account"** button for adding a cloud platform account.

### Data List Description

The account card list displays connected cloud platform accounts, including account name, cloud platform, account type, creation time, and other information.

## Operations

### Add Cloud Account

1. Enter the platform homepage and click **"Access Management"** in the left navigation bar to enter the Access Accounts management page.
2. Click the **"Add Cloud Account"** button in the upper-right corner of the page to open the "Add Account" window.

![Access Accounts](./images/access-accounts-list.png)

3. Configure account information:
   - Enter the **Account Name** (for example, `aliyun-test`);
   - Select the **Cloud Platform** (for example, Alibaba Cloud, Huawei Cloud, Amazon, etc.);
   - Enter the **Access Key ID**;
   - Enter the **Access Key Secret**.
4. After confirming that all information is configured correctly, click **"Confirm"** to complete the addition.

![Add Account](./images/add-account.png)

#### Parameters

| Field Name | Field Type | Example | Description |
|----------|----------|------|------|
| Account Name | Text | `aliyun-test` | Required. Custom account identifier |
| Select Cloud Platform | Dropdown | `Alibaba Cloud` | Required. Select the cloud platform to which the account belongs |
| Access Key ID | Text | `your-access-key-id` | Required. Access key ID of the cloud platform |
| Access Key Secret | Text | `your-access-key-secret` | Required. Access key Secret of the cloud platform |

## Other Operations

| Operation | Steps |
|----------|----------|
| Edit Account | Click the **"..."** (More) button in the upper-right corner of the target account card → Select **"Edit"** → Modify account information → Click **"Confirm"** |
| Delete Account | Click the **"..."** (More) button in the upper-right corner of the target account card → Select **"Delete"** → Confirm the operation (**Data cannot be recovered after deletion. Please operate with caution**) |

## Notes

- **Access Key Secret** is sensitive information. Keep it secure and do not disclose it.
- **Account deletion is irreversible**. Data cannot be recovered after deletion. Please operate with caution.
- Ensure that the entered Access Key ID and Access Key Secret are consistent with the cloud platform console. Otherwise, resource pulling may fail.
