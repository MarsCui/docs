---
prev: false
next: true
---

# Connect a Cloud Account

Connect an operator-managed cloud account used to discover and deploy regional resources.

## Target Outcome

AGIOne can validate the cloud account and discover only the regions and resources that it is permitted to use.

## Applicable Roles

- Platform Operator

## Before You Start

- Create a dedicated least-privilege cloud credential for AGIOne.
- Confirm that the target cloud platform has already been connected.

## Procedure

1. Open **Access Management > Cloud Accounts** and select **Add Account**.
2. Select the cloud platform and enter the account identity and dedicated secret through the protected form.

![Add a cloud account](./images/add-account.png)

3. Validate the account and review the minimum permissions required by AGIOne.
4. Return to the account list and confirm the validation state and discovered regions.

![Verify the cloud account in the list](./images/cloud-accounts-list.png)

See [Cloud Accounts](../../../../usermanual/ai-infra-on-cloud/operator/access-management/cloud-accounts/).

## Completion Checklist

> **Purpose:** These are the exit criteria for the current feature task. Use them to decide whether the result is observable and reviewable and whether you can continue to the next step in the scenario. They do not repeat the procedure; if any item fails, follow the troubleshooting section below.

| Check | Pass Criteria |
| --- | --- |
| 1 | Account validation succeeds. |
| 2 | Only required cloud permissions are granted. |
| 3 | Regions and resources are discovered as expected. |

## Troubleshooting

| Symptom | Check First |
| --- | --- |
| Account validation fails | Credential status, required cloud permissions, time synchronization, and network access |
| Regions are missing | Cloud permissions, account region scope, and resource synchronization status |
