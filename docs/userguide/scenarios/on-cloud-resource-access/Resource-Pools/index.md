---
prev: false
next: true
---

# Enable Cloud Resource Pools

Enable the cloud regions that AGIOne may use and maintain readable localized names.

## Target Outcome

Only approved cloud regions are enabled as resource pools and can be selected by later authorization flows.

## Applicable Roles

- Platform Operator

## Before You Start

- Confirm that the cloud account has synchronized the expected regions.
- Decide which regions are approved for business use and how they should be displayed.

## Procedure

1. Open **Access Management > Resource Pools**, select the cloud platform, and review discovered regions.
2. Enable only regions approved for the target business and maintain readable localized names.

![Edit the resource-pool display name](./images/edit-name.png)

3. Return to the resource-pool list and confirm that approved regions are enabled and unapproved regions remain unavailable.

![Verify enabled resource pools](./images/resource-pools-list.png)

4. Open the authorization page and confirm that only enabled regions can be selected.

See [Resource Pools](../../../../usermanual/ai-infra-on-cloud/operator/access-management/resource-pools/).

## Completion Checklist

> **Purpose:** These are the exit criteria for the current feature task. Use them to decide whether the result is observable and reviewable and whether you can continue to the next step in the scenario. They do not repeat the procedure; if any item fails, follow the troubleshooting section below.

| Check | Pass Criteria |
| --- | --- |
| 1 | Required regions are enabled and clearly named. |
| 2 | Unapproved regions remain unavailable. |
| 3 | Authorization pages can select the enabled regions. |

## Troubleshooting

| Symptom | Check First |
| --- | --- |
| A region is absent | Account synchronization, cloud permissions, and platform-region support |
| A region cannot be authorized | Region enablement state and saved resource-pool configuration |
