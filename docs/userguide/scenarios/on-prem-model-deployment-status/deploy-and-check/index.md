# Deploy and Check a Model

## Entry

- **Role:** Provider / End User
- **Menu:** AI Infra (On-Prem) > Model Deployment > Deployment Templates / Model Instances
- **Instance route:** `/powerone/quickstart/model-service`

## Steps

1. Select a published NPU inference template.
2. Select a one-card, two-card, or four-card flavor and enter instance parameters.
3. Submit and locate the instance on the Model Instances page.
4. If creation stalls, inspect workload events, image pulls, and scheduling results.
5. When running, verify the endpoint, health status, and actual NPU allocation.

![Model instances](./images/model-instances.png)

## Status Guide

| State | Action |
| --- | --- |
| Creating | Wait for image pull and scheduling; inspect workload events |
| Running | Verify health, endpoint, and device usage |
| Queued | Check quota, flavor, and available NPU count |
| Failed | Check image, command, driver, storage, and multi-card communication |

## Completion Check

- The instance is running.
- Device monitoring shows the requested cards assigned to the workload.
- A minimal service request succeeds.

[Model Instances manual](/usermanual/ai-infra-on-prem/user/model-deployment/online-inference/)
