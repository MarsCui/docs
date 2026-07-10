# Build an NPU Inference Template

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

## Completion Check

- The template is visible and available.
- Its flavor contains the expected NPU model and count.
- A test deployment reaches a creating or running state.

[Inference Templates manual](/usermanual/ai-infra-on-prem/operator/templates/inference-templates/)
