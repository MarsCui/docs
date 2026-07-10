---
prev: false
next: true
---

# Scenario Overview - On-Prem Model Deployment and Status Check

This scenario shows how to create a model instance from an inference template and determine success from the instance, workload, node, and device views. For four NPU cards, it verifies that the deployment actually receives the requested card count.

## Applicable Roles

- Provider
- End User
- Operator assisting with troubleshooting

## Goals

- Create a model instance from an NPU template.
- Interpret creating, running, queued, failed, and stopped states.
- Verify the allocated NPU count.

## Before You Start

- A valid template and sufficient tenant quota are available.
- The cluster has enough free NPU cards.
- The model files, image, and startup parameters are ready.

## Recommended Reading Order

1. [On-Prem Inference Template Building](../on-prem-inference-template/)
2. [Deploy and Check a Model](./deploy-and-check/)
3. [On-Prem Resource Metering and Monitoring](../on-prem-resource-metering-monitoring/)

## Document Index

| Document | Description |
| --- | --- |
| [Deploy and Check a Model](./deploy-and-check/) | Create an instance and verify state, workload events, and NPU allocation |

## Completion Criteria

- The model instance is running.
- The workload uses the card count selected by the template.
- Health checks and the service endpoint work.
