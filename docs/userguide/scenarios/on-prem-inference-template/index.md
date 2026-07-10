---
prev: false
next: true
---

# Scenario Overview - On-Prem Inference Template Building

This scenario combines a model, inference framework, startup parameters, and resource specification into a reusable deployment template. For four NPU cards, the template constrains the card model, card count, and startup mode.

## Applicable Roles

- Operator
- Inference platform administrator

## Goals

- Create an inference template that uses an NPU resource specification.
- Make the template explicitly use one, two, or four cards.
- Allow users to deploy a model from the template.

## Before You Start

- Complete accelerator, cluster, metric, and resource-specification setup.
- Prepare the model configuration, framework, and runtime image.
- Confirm multi-card parallel parameters and driver compatibility.

## Recommended Reading Order

1. [On-Prem Compute Onboarding](../on-prem-compute-onboarding/)
2. [Build an NPU Inference Template](./build-inference-template/)
3. [Deploy and Check a Model](../on-prem-model-deployment-status/)

## Document Index

| Document | Description |
| --- | --- |
| [Build an NPU Inference Template](./build-inference-template/) | Select the model, framework, resource specification, and startup parameters |

## Completion Criteria

- The template is available.
- It selects the expected NPU flavor.
- A deployment uses the intended card count and parallel parameters.
