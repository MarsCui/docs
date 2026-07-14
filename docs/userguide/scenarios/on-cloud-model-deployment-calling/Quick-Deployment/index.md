---
prev: false
next: true
---

# Quick Deployment

Deploy a cloud model by selecting an authorized account, model, inference engine, strategy, and compute plan.

## Target Outcome

A deployment request is created with an understood resource plan and cost estimate, then appears in My Deployments.

## Applicable Roles

- Platform User

## Before You Start

- Confirm that an authorized access account, region, and deployable model are available.
- Decide whether the workload needs a single-node or high-availability plan and define a cost limit.

## Procedure

1. Open the cloud model marketplace, select the target model, and start quick deployment.
2. Select the authorized access account and region, then review the model and deployment mode.

![Select the account, region, and model](./images/step-1.png)

3. Review the inference engine, business strategy, compute plan, estimated cost, and available capacity.

![Review the deployment plan](./images/step-2.png)

4. Submit the deployment only after the cost and scope are understood.
5. Open My Deployments and watch the state and events until the service becomes usable.

See [Quick Deployment](../../../../usermanual/ai-infra-on-cloud/user/model-services/quick-deployment/).

## Completion Checklist

> **Purpose:** These are the exit criteria for the current feature task. Use them to decide whether the result is observable and reviewable and whether you can continue to the next step in the scenario. They do not repeat the procedure; if any item fails, follow the troubleshooting section below.

| Check | Pass Criteria |
| --- | --- |
| 1 | Account, region, model, engine, and compute plan are selectable. |
| 2 | The request is submitted with the expected cost and scope. |
| 3 | My Deployments contains the new record. |

## Troubleshooting

| Symptom | Check First |
| --- | --- |
| No model or compute plan can be selected | Account authorization, region, asset compatibility, quota, and current capacity |
| Deployment creation fails | Required fields, cost selection, cloud-account state, and event details |
