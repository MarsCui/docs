# Maintain Accelerator Models

## Entry

- **Role:** Operator
- **Menu:** AI Infra (On-Prem) > Resource Pools > Accelerator Management
- **Route:** `/powerone/resourcepool/accelerators`

## Steps

1. Filter by the target NPU vendor.
2. Find the actual model and verify its family, memory, and adaptation state.
3. If it is missing, create the accelerator and enter the Kubernetes resource name.
4. Associate the model with the metric used by the cluster device plugin.
5. Save and verify the expected managed state.

![Accelerator management](./images/accelerators-list.png)

## Four-NPU Notes

- This page defines the card model, not the installed quantity. The cluster reports the actual card count.
- All four cards of the same model should use the same resource key.
- Memory and model metadata affect flavor and deployment feasibility checks.

## Completion Check

- The NPU model is visible.
- Its adaptation state and metric association are correct.
- The resource key matches the cluster.

[Accelerator Management manual](/usermanual/ai-infra-on-prem/operator/resource-pools/accelerators/)
