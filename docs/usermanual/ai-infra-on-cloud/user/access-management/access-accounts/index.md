# My Access Accounts

::: info Document Information
Version: v1.0
Updated: 2026-07-06
:::

::: warning Security Notice
Cloud account access involves AK/SK, access keys, cloud provider accounts, authorization policies, and resource permissions. Do not expose real AK/SK, account IDs, Secret Key, access tokens, or internal Endpoint values in documentation, screenshots, tickets, or comments. Use placeholders for all examples.
:::

## Feature Overview

`My Access Accounts` is used to maintain user-side cloud accounts, access keys, authorization status, and available resource scope, supporting multi-cloud scheduling, resource authorization, and model deployment workflows.

| Item | Content |
| --- | --- |
| Applicable role | User |
| Navigation path | Access Management > My Access Accounts |
| Page route | /user/access-management/access-accounts |
| Managed objects | User-side cloud accounts, access keys, authorization status, and available resource scope |
| Typical use | Users maintain their own cloud accounts or view authorized accounts |

### Beginner View

My Access Accounts is like the user's cloud resource pass. It is used to view which cloud accounts, regions, and resource scopes have been authorized to the user, so the corresponding resources can be selected later when deploying model services.

### Terms

| Term | Description |
| --- | --- |
| Access account | Cloud account entry that users can view or maintain. |
| Authorization status | Whether the account is allowed to be used for deployment. |
| Available region | Cloud resource regions currently available to the account. |
| Resource scope | CPU, GPU, storage, or other resource types available to the account. |

## Prerequisites

1. The current account has permission to view or maintain My Access Accounts.
2. The cloud account to be used has been authorized or self-service access is allowed.
3. The target business region and available region have been confirmed.

## Page Description

The page displays available access accounts, authorization status, cloud platforms, available regions, and resource scope to users. Users should first confirm whether the account is authorized and whether the region matches, then enter the deployment workflow. If an account needs to be added or modified, operate according to page permissions.

Page screenshot:

![My Access Account List](./images/access-accounts-list.png)

Used to confirm the cloud accounts, regions, and authorization status available to the current account.

## Main Operations

### Procedure

1. Go to `Access Management > My Access Accounts`.
2. View the cloud platform, authorization status, and available regions of each account.
3. When adding a self-owned cloud account, use the page entry to fill in account name, cloud platform, and authorization method.
4. Submit and wait for validation or operator review.
5. Return to Quick Deployment and confirm that the corresponding cloud resources can be selected.

Key step screenshot:

![Add Access Account](./images/add-account.png)

After adding, confirm that authorization status is available before Quick Deployment.

### Parameters

| Field | Required | Type | Example | Description |
| --- | --- | --- | --- | --- |
| Account name | Yes | Text | `my-cloud-account` | User-side display name. |
| Cloud platform | Yes | Dropdown | `Alibaba Cloud` | Cloud platform that owns the account. |
| Authorization status | System-generated | Enum | `Authorized` | Determines whether it can be used for deployment. |
| Available region | System-generated | Multi-select | `cn-shanghai` | Cloud regions available to the account. |
| Resource scope | System-generated | Text | `GPU / CPU` | Resource types available to the current account. |

### Pitfalls

- Users should not expose cloud account IDs, AK/SK, or authorization policies in screenshots or tickets.
- An account being authorized does not mean all regions are available. Verify the business region before deployment.
- Deleting or disabling an account may affect scaling or reconstruction of existing deployments.

### Result Validation

1. The account list shows authorization status and available regions.
2. The Quick Deployment page can show cloud resources matching the account.
3. Accounts without permission or authorization do not appear in selectable resources.

## FAQ

### Account Shows Unauthorized

**Issue Symptom:**

The account is visible in the list, but its status is unauthorized or unavailable.

**Possible Causes:**

- The operator has not completed authorization.
- Account validation failed.
- The account's available region does not match the current business region.

**Handling:**

1. View status and prompts in account details.
2. Confirm the business region selected for deployment.
3. Contact the operator to handle authorization or validation issues.

### Deployment Page Cannot See Account Resources

**Issue Symptom:**

Account status is normal, but corresponding resources are absent during Quick Deployment.

**Possible Causes:**

- The resource pool is not opened to the current tenant.
- Business region authorization is missing.
- The current account has no deployment permission.

**Handling:**

1. Confirm business region and deployment permissions.
2. Contact the operator to verify resource pools and authorization scope.
3. Refresh the page and re-enter the deployment workflow.

## Next Steps

1. Enter Quick Deployment to create a model service.
2. View My Deployments to confirm service status.
3. Contact the operator to adjust authorization scope as needed.

## Notes

- Do not expose cloud account IDs, AK/SK, or authorization policies in screenshots.
- An account being authorized does not mean all regions are available.
- Account deletion or disabling may affect existing deployments.
