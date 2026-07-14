---
prev: false
next: true
---

# Scenario Overview - On Cloud Model Asset Publishing

This scenario guides operators through preparing runtime images and inference frameworks and assembling them into cloud-deployable model assets.

## Applicable Roles

- Platform Operator

## Recommended Reading Order

1. Maintain runtime images
2. Maintain inference frameworks
3. Assemble a deployable model asset in the model library

## Document Index

| Document | Description |
| --- | --- |
| [Runtime Images](./Runtime-Images/) | Maintain repository, tag, framework type, and built-in state |
| [Inference Frameworks](./Frameworks/) | Bind images, ports, and startup commands |
| [Model Assets](./Models/) | Combine meta-model, deployment point, compute plan, and output settings |

## Goals

- Runtime images are available in the intended cloud environment.
- Inference frameworks define compatible images, commands, ports, and protocols.
- Model-library entries combine meta-models, deployment points, cloud models, compute plans, and output configuration.
- Regular users can select the published asset during quick deployment.

## Scenario Flow

**Main path:** Register a runtime image → Build an inference framework → Create the model asset → Verify user deployment availability

| Stage | Key Result |
| --- | --- |
| 1. Register the image | The target cloud can pull a controlled runtime-image version |
| 2. Build the framework | Image, startup command, port, and framework type are compatible |
| 3. Create the model asset | Meta-model, deployment point, cloud model, compute plan, and output protocol are linked |
| 4. Verify availability | Platform Users see the model and available plan in quick deployment |

## Before You Start

1. Complete [On Cloud Resource Access](../on-cloud-resource-access/).
2. Confirm the cloud image, framework type, startup command, service port, and output protocol.
3. Confirm that meta-models and target compute plans already exist.

## Procedure

| Step | Action | Guide | Completion Signal |
| --- | --- | --- | --- |
| 1 | Register the runtime image | [Runtime Images](./Runtime-Images/) | Image is enabled and reachable |
| 2 | Create the inference framework | [Inference Frameworks](./Frameworks/) | Command, port, and protocol are complete |
| 3 | Add the deployable model asset | [Model Library](./Models/) | Model, deployment point, plan, and output are linked |
| 4 | Validate the asset in the user deployment flow | [Deploy a Cloud Model Service](../../../usermanual/ai-infra-on-cloud/end-to-end/deploy-cloud-model-service/) | The asset is visible and deployable |

## Completion Checklist

> **Purpose:** These are the scenario exit criteria. Use them to decide whether the outcome is observable and reviewable and whether you can continue to the next scenario. They do not repeat the procedure; if any item fails, return to the relevant feature guide and follow its troubleshooting section.

| Check | Pass Criteria |
| --- | --- |
| 1 | The runtime image can be pulled in the target cloud environment. |
| 2 | Framework command, port, and protocol match the model. |
| 3 | The model asset links its meta-model, deployment point, compute plan, and output configuration. |
| 4 | A regular user can see the model and available plan in quick deployment. |

## Troubleshooting

| Symptom | Check First |
| --- | --- |
| Image or framework cannot be selected | Asset state, framework type, region, and association |
| Model is missing in user deployment | Publication state, deployment scope, authorization, and tenant visibility |
| Deployed API is unavailable | Startup command, port, output configuration, and health state |

## Related Scenarios

- [On Cloud Resource Access](../on-cloud-resource-access/)
- [On Cloud Model Deployment & Calling](../on-cloud-model-deployment-calling/)
- [Deployment Monitoring Manual](../../../usermanual/ai-infra-on-cloud/user/model-services/my-deployments/)
