---
prev: false
next: true
---

# Scenario Overview - On Cloud Model Deployment and Calling

This scenario guides regular users through adding or confirming a cloud access account, deploying a model from the cloud marketplace, and validating service state and API access.

## Applicable Roles

- Model Provider and Platform User

## Recommended Reading Order

1. Add or verify an access account
2. Create a quick deployment
3. Review status, events, monitoring, and API access in My Deployments

## Document Index

| Document | Description |
| --- | --- |
| [Access Accounts](./Access-Accounts/) | Add and validate the user's cloud account |
| [Quick Deployment](./Quick-Deployment/) | Select an account, model, and recommended deployment plan |
| [My Deployments](./My-Deployments/) | Review state, details, API access, monitoring, events, and lifecycle actions |

## Goals

- The user's cloud access account is valid and authorized regions are visible.
- Quick deployment selects a model, inference engine, strategy, and compute plan.
- The deployment reaches running with usable events and monitoring.
- A controlled API request succeeds with the deployment endpoint and authentication method.

## Scenario Flow

**Main path:** Prepare a user access account → Select a model and compute plan → Check deployment state → Call and manage the lifecycle

| Stage | Key Result |
| --- | --- |
| 1. Prepare the account | The user cloud account passes validation and authorized regions are visible |
| 2. Create deployment | Model, engine, strategy, specification, and estimated cost are confirmed and submitted |
| 3. Check runtime | The deployment reaches Running without repeated event or monitoring errors |
| 4. Call and manage | The API request succeeds and cloud resources can be stopped or released as needed |

## Before You Start

1. The operator has completed cloud resource access and model asset publication.
2. The target tenant has cloud-platform and regional authorization.
3. Cost ownership, cloud-account permission, and deployment capacity are confirmed.

## Procedure

| Step | Action | Guide | Completion Signal |
| --- | --- | --- | --- |
| 1 | Add or confirm the user cloud account | [Access Accounts](./Access-Accounts/) | Account validation succeeds |
| 2 | Select the cloud model and deployment plan | [Quick Deployment](./Quick-Deployment/) | The deployment request is submitted |
| 3 | Review state, events, monitoring, and access information | [My Deployments](./My-Deployments/) | Deployment reaches running |
| 4 | Make a controlled API request | [My Deployments](../../../usermanual/ai-infra-on-cloud/user/model-services/my-deployments/) | Endpoint returns the expected response |
| 5 | Publish the deployment as a model service when required | [Publish Models](../publish-model/) | Publication enters the intended state |

## Completion Checklist

> **Purpose:** These are the scenario exit criteria. Use them to decide whether the outcome is observable and reviewable and whether you can continue to the next scenario. They do not repeat the procedure; if any item fails, return to the relevant feature guide and follow its troubleshooting section.

| Check | Pass Criteria |
| --- | --- |
| 1 | The access account is valid and authorized regions are visible. |
| 2 | Quick deployment can select the target model, engine, and plan. |
| 3 | Deployment is running without repeated errors in events or monitoring. |
| 4 | A controlled request succeeds with redacted endpoint and API key handling. |
| 5 | Stopping or deleting a test deployment releases resources as expected. |

## Troubleshooting

| Symptom | Check First |
| --- | --- |
| No account or region is available | Account validation, resource grants, and tenant scope |
| Recommendation has no plan | Model asset, framework, compute plans, and regional capacity |
| Deployment remains creating or fails | Events, account permission, image, quota, and cloud resource state |
| Deployment runs but calls fail | Endpoint, authentication, port, protocol, and service health |

## Related Scenarios

- [On Cloud Resource Access](../on-cloud-resource-access/)
- [On Cloud Model Asset Publishing](../on-cloud-model-asset-publishing/)
- [Model Experience & API Calling](../model-experience-api-calling/)
