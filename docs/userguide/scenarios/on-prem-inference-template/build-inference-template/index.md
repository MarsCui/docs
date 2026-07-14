# Build an NPU Inference Template

## Target Outcome

The template exposes a compatible framework, model, runtime configuration, and one-card or four-card NPU plan.

## Applicable Roles

- Platform Operator

## Before You Start

- Prepare the model configuration, framework, image, resource specification, ports, and storage requirements.
- Decide whether four cards form one distributed instance or several smaller instances.

## Entry

- **Role:** Operator
- **Menu:** AI Infra (On-Prem) > Templates > Inference Templates
- **Route:** `/powerone/fast-build-v2/inference-templates`

## Steps

1. Create a template and enter its purpose.
2. Select the model configuration and inference framework.
3. Select a resource specification containing the target NPU model.
4. Configure the command, environment variables, ports, health check, and model path.
5. Align multi-card parallel parameters with the two-card or four-card flavor.
6. Save and validate the template with a test deployment.

![Inference templates](./images/inference-templates-list.png)

## Four-NPU Strategy

- Keep separate one-card, two-card, and four-card templates.
- State whether a four-card template requires one node or supports multi-node deployment.
- Validate drivers, runtime, collective communication, and health checks with a small model first.

## Completion Checklist

> **Purpose:** These are the exit criteria for the current feature task. Use them to decide whether the result is observable and reviewable and whether you can continue to the next step in the scenario. They do not repeat the procedure; if any item fails, follow the troubleshooting section below.

| Check | Pass Criteria |
| --- | --- |
| 1 | The template is visible and available. |
| 2 | Its flavor contains the expected NPU model and count. |
| 3 | A test deployment reaches a creating or running state. |

## Troubleshooting

| Symptom | Check First |
| --- | --- |
| Framework or model is unavailable | Status, region, compatibility, and template prerequisites |
| Four-card deployment cannot start | Specification, distributed parameters, free cards, ports, and storage |

## User Manual

[Inference Templates](/usermanual/ai-infra-on-prem/operator/templates/inference-templates/)
