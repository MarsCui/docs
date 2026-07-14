---
prev: false
next: true
---

# Connect a Cloud Platform

Register the cloud-platform type before connecting accounts and regions.

## Target Outcome

The required public- or private-cloud platform is available for later account access and authorization.

## Applicable Roles

- Platform Operator

## Before You Start

- Confirm the cloud type, vendor identifier, localized display name, and private-cloud URL when applicable.
- Confirm that you are authorized to maintain platform-level access settings.

## Procedure

1. Open **Access Management > Cloud Platforms** and review existing platform entries.

![Review connected cloud platforms](./images/access-cloudtype-list.png)

2. Select **Add Platform** and enter the provider identifier and localized display names.

![Add a cloud platform](./images/add-platform.png)

3. For a private cloud, configure the platform access URL and verify network reachability.
4. Enable the platform and confirm that it appears when adding cloud accounts.

See [Cloud Platform Access](../../../../usermanual/ai-infra-on-cloud/operator/access-management/access-cloudtype/).

## Completion Checklist

> **Purpose:** These are the exit criteria for the current feature task. Use them to decide whether the result is observable and reviewable and whether you can continue to the next step in the scenario. They do not repeat the procedure; if any item fails, follow the troubleshooting section below.

| Check | Pass Criteria |
| --- | --- |
| 1 | Platform identifier and display names are correct. |
| 2 | Private-cloud access URL is reachable when applicable. |
| 3 | The platform is available in account creation. |

## Troubleshooting

| Symptom | Check First |
| --- | --- |
| The platform is missing when adding an account | Platform status, vendor identifier, and saved display configuration |
| A private-cloud page cannot be opened | Access URL, DNS, network route, and certificate |
