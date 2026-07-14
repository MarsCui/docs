---
prev: false
next: true
---

# Add a User Access Account

Add the user's own cloud access account before starting a cloud model deployment.

## Target Outcome

The platform user has a validated cloud account that quick deployment can use within the authorized scope.

## Applicable Roles

- Platform User

## Before You Start

- Confirm that the Platform Operator has authorized the cloud platform and regions for your tenant.
- Prepare a dedicated least-privilege cloud credential.

## Procedure

1. Open **Access Management > Access Accounts** and confirm whether the intended user account already exists.

![Review access accounts](./images/access-accounts-list.png)

2. Select **Add Account**, choose the authorized cloud platform, and enter the dedicated credential through the protected form.

![Add an access account](./images/add-account.png)

3. Validate the account and confirm its status.
4. Open quick deployment and verify that the account and authorized regions are selectable.

See [User Access Accounts](../../../../usermanual/ai-infra-on-cloud/user/access-management/access-accounts/).

## Completion Checklist

> **Purpose:** These are the exit criteria for the current feature task. Use them to decide whether the result is observable and reviewable and whether you can continue to the next step in the scenario. They do not repeat the procedure; if any item fails, follow the troubleshooting section below.

| Check | Pass Criteria |
| --- | --- |
| 1 | Account validation succeeds. |
| 2 | The account is visible only to the intended user or tenant scope. |
| 3 | Quick deployment can use the account in an authorized region. |

## Troubleshooting

| Symptom | Check First |
| --- | --- |
| Account validation fails | Credential validity, cloud permissions, network access, and platform selection |
| Quick deployment cannot select the account | Tenant authorization, region scope, and account validation state |
