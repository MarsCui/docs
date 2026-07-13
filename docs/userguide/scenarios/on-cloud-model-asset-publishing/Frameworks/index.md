---
prev: false
next: true
---

# Inference Frameworks

Combine a runtime image, startup command, service port, and framework type into a cloud deployment runtime.

## Target Outcome

A reusable inference framework can start the selected image and expose the expected service port.

## Applicable Roles

- Platform Operator

## Before You Start

- Prepare a validated runtime image.
- Confirm the framework type, startup command, model placeholder, service port, and health behavior.

## Procedure

1. Open **Deployment Assets > Inference Frameworks**, select **Add**, and choose the validated runtime image.

![Add an inference framework](./images/add-framework.png)

2. Configure the framework type, startup command, model placeholder, service port, and protocol behavior.
3. Validate the command, health behavior, and exposed port in the target environment.
4. Enable the framework, return to the framework list, and confirm that model assets can select it.

![Verify the inference framework in the list](./images/frameworks-list.png)

See [Inference Frameworks](../../../../usermanual/ai-infra-on-cloud/operator/deploy-assets/frameworks/).

## Completion Checklist

> **Purpose:** These are the exit criteria for the current feature task. Use them to decide whether the result is observable and reviewable and whether you can continue to the next step in the scenario. They do not repeat the procedure; if any item fails, follow the troubleshooting section below.

| Check | Pass Criteria |
| --- | --- |
| 1 | Image, framework type, command, and port are compatible. |
| 2 | Health and API behavior can be validated. |
| 3 | Model asset configuration can select the framework. |

## Troubleshooting

| Symptom | Check First |
| --- | --- |
| Framework startup fails | Image compatibility, command arguments, model path, and port |
| Framework is unavailable to a model asset | Framework status, framework type, and target-cloud compatibility |
