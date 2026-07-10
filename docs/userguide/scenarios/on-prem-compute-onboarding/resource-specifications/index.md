# Configure Metrics and Resource Specifications

## Entry

- **Role:** Operator
- **Menu:** AI Infra (On-Prem) > Resource Pools > Specification Metrics / Resource Specifications
- **Routes:** `/powerone/resourcepool/flavor/type`, `/powerone/resourcepool/flavor/list`

## Steps

1. Verify that the NPU metric k8s-key matches the device-plugin resource key.
2. Add selector keys when scheduling must target a specific model or node group.
3. Create one-card, two-card, and four-card resource specifications.
4. Configure CPU, memory, NPU count, and storage requirements.
5. Associate the specifications with the cluster and validate them with test workloads.

![Specification metrics](./images/spec-metrics-list.png)

![Resource specifications](./images/resource-specs-list.png)

## Recommended Four-Card Plan

| Flavor | NPU Count | Typical Use |
| --- | ---: | --- |
| `npu-1` | 1 | Functional checks and small-model inference |
| `npu-2` | 2 | Two-card parallel inference |
| `npu-4` | 4 | A workload that exclusively uses all cards |

Do not assume that a single pod can request all four cards when they are distributed across nodes.

## Completion Check

- All three flavors are selectable.
- Resource keys match node reporting.
- One-card validation passes before two-card and four-card validation.

- [Specification Metrics manual](/usermanual/ai-infra-on-prem/operator/resource-pools/spec-metrics/)
- [Resource Specifications manual](/usermanual/ai-infra-on-prem/operator/resource-pools/resource-specs/)
