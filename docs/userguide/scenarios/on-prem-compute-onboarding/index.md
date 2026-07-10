---
prev: false
next: true
---

# Scenario Overview - On-Prem Compute Onboarding

This scenario explains how to connect a local Kubernetes cluster and its GPU, NPU, or XPU devices to AGIOne, then expose the hardware through schedulable resource specifications. For the task “How do I manage four NPU cards?”, this scenario covers device identity, cluster onboarding, and flavor planning.

## Applicable Roles

- Operator
- Cluster administrator

## Goals

- AGIOne recognizes the target NPU model and resource key.
- Cluster nodes report all four NPU cards.
- Users can select one-card, two-card, and four-card resource specifications.

## Before You Start

- Prepare the Kubernetes connection information, region, and availability zone.
- Confirm the NPU vendor, model, memory, and device-plugin resource key.
- Confirm whether the four cards are on one node or distributed across nodes.

## Recommended Reading Order

1. [Maintain Accelerator Models](./accelerator-management/)
2. [Onboard the Cluster and Verify Devices](./cluster-onboarding/)
3. [Configure Metrics and Resource Specifications](./resource-specifications/)
4. [Build an Inference Template](../on-prem-inference-template/)
5. [Configure Quotas and Monitoring](../on-prem-resource-metering-monitoring/)

## Document Index

| Document | Description |
| --- | --- |
| [Maintain Accelerator Models](./accelerator-management/) | Verify the NPU model, memory, managed state, and Kubernetes resource key |
| [Onboard the Cluster and Verify Devices](./cluster-onboarding/) | Register the cluster and verify that all four NPU cards are reported |
| [Configure Metrics and Resource Specifications](./resource-specifications/) | Create scheduling metrics and one-card, two-card, and four-card flavors |

## Completion Criteria

- The cluster and nodes are available.
- AGIOne reports four target NPU cards.
- Inference templates or test workloads can select the new resource specifications.
