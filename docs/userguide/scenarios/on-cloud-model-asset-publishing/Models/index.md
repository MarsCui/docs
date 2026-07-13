---
prev: false
next: true
---

# Cloud Model Assets

Assemble a meta-model, cloud deployment point, cloud model, compute plan, and output definition into a deployable asset.

## Target Outcome

A platform user can select the model asset in quick deployment and receive a valid API definition after deployment.

## Applicable Roles

- Platform Operator

## Before You Start

- Prepare the meta-model, cloud account, cloud region, runtime image, and inference framework.
- Confirm the cloud model identifier, compatible compute plan, and output protocol.

## Procedure

1. Open **Deployment Assets > Models**, confirm the target asset is not already present, and select **Add**.

![Review model assets](./images/models.png)

2. Select the meta-model and version that describe the cloud model capability.

![Select the meta-model](./images/step-1-meta-model.png)

3. Add the cloud deployment point and choose the authorized cloud account and region.

![Add a cloud deployment point](./images/step-2-add-cloud-deployment-point.png)

4. Assign the exact cloud model available at that deployment point.

![Assign the cloud model](./images/step-2-assign-cloud-model.png)

5. Select compute plans compatible with the model and expected workload.

![Select a compute plan](./images/step-2-select-compute-plan.png)

6. Configure the output protocol and API example using placeholders instead of real credentials.

![Configure model outputs](./images/step-2-add-output-configuration.png)

7. Review the complete configuration, publish the asset, and confirm it becomes available to quick deployment.

![Confirm the model asset configuration](./images/step-3-confirm-configuration.png)

See [Cloud Model Assets](../../../../usermanual/ai-infra-on-cloud/operator/deploy-assets/models/).

## Completion Checklist

> **Purpose:** These are the exit criteria for the current feature task. Use them to decide whether the result is observable and reviewable and whether you can continue to the next step in the scenario. They do not repeat the procedure; if any item fails, follow the troubleshooting section below.

| Check | Pass Criteria |
| --- | --- |
| 1 | Meta-model, deployment point, cloud model, and plan are compatible. |
| 2 | Output protocol and example use placeholders instead of real credentials. |
| 3 | The asset appears in regular-user quick deployment. |

## Troubleshooting

| Symptom | Check First |
| --- | --- |
| A deployment point has no selectable model or plan | Cloud-account synchronization, region, model availability, and plan compatibility |
| Platform users cannot see the asset | Asset status, authorization, business-region grant, and publication scope |
