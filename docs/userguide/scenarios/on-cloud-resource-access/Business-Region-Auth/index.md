---
prev: false
next: true
---

# Authorize Business Types to Regions

Grant each business type access to the cloud regions it may use.

## Target Outcome

Each business type, such as inference deployment, can schedule only to its approved cloud regions.

## Applicable Roles

- Platform Operator

## Before You Start

- Enable the required resource-pool regions first.
- Confirm which business types are allowed in each region.

## Procedure

1. Open **Authorization Management > Business-Region Authorization** and select the business type and cloud platform.
2. Grant only the approved regions and save the authorization.

![Select authorized regions](./images/auth-regions.png)

3. Return to the authorization list and confirm the business type, platform, and saved region set.

![Verify business-region authorization](./images/business-region_auth-list.png)

4. Reopen the record and confirm that the effective region set persists.

See [Business-Region Authorization](../../../../usermanual/ai-infra-on-cloud/operator/auth-management/business-region-auth/).

## Completion Checklist

> **Purpose:** These are the exit criteria for the current feature task. Use them to decide whether the result is observable and reviewable and whether you can continue to the next step in the scenario. They do not repeat the procedure; if any item fails, follow the troubleshooting section below.

| Check | Pass Criteria |
| --- | --- |
| 1 | The business type has only the intended regions. |
| 2 | Saved authorization persists after refresh. |
| 3 | User deployment options follow the granted region set. |

## Troubleshooting

| Symptom | Check First |
| --- | --- |
| No region can be selected | Resource-pool enablement and cloud-platform status |
| Deployment shows an unexpected region | Business type, saved region selection, and current tenant authorization |
