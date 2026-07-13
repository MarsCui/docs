---
prev: false
next: true
---

# Runtime Images

Register the cloud runtime image used by an inference framework.

## Target Outcome

A controlled runtime image is available for inference-framework configuration in the target cloud environment.

## Applicable Roles

- Platform Operator

## Before You Start

- Confirm the full registry address, immutable or controlled tag, and supported framework types.
- Verify that the target cloud environment can authenticate to and pull from the registry.

## Procedure

1. Open **Deployment Assets > Runtime Images**, select **Add**, and enter the registry address, controlled tag, framework type, and built-in state.

![Add a runtime image](./images/add-image.png)

2. Confirm that the target cloud environment can authenticate to and pull the image.
3. Enable the image and return to the list to verify its name, tag, framework type, and status.

![Verify the runtime image in the list](./images/runtime-images-list.png)

4. Open inference-framework creation and confirm that the image is selectable.

See [Runtime Images](../../../../usermanual/ai-infra-on-cloud/operator/deploy-assets/runtime-images/).

## Completion Checklist

> **Purpose:** These are the exit criteria for the current feature task. Use them to decide whether the result is observable and reviewable and whether you can continue to the next step in the scenario. They do not repeat the procedure; if any item fails, follow the troubleshooting section below.

| Check | Pass Criteria |
| --- | --- |
| 1 | Registry address and tag identify an immutable or controlled image. |
| 2 | Target cloud environments can pull the image. |
| 3 | Inference framework configuration can select it. |

## Troubleshooting

| Symptom | Check First |
| --- | --- |
| Image pull fails | Registry address, tag, pull permission, network route, and architecture |
| Image is selectable but the service fails | Framework compatibility, startup command, exposed port, and image contents |
