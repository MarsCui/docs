---
prev: false
next: true
---

# My Deployments

Use My Deployments to verify runtime state, events, monitoring, API access, and lifecycle operations for a cloud model service.

## Target Outcome

The deployment reaches a healthy state, responds to a controlled request, and can be monitored and stopped when no longer needed.

## Applicable Roles

- Platform User
- Model Provider when publishing a validated deployment as a model service

## Before You Start

- Record the deployment name, cloud platform, region, and expected creation time.
- Prepare a harmless test request and understand that running resources may continue to incur cost.

## Procedure

1. Open **Model Services > My Deployments** and locate the deployment by name, cloud platform, and region.

![Locate the service in My Deployments](./images/my-deployments-list.png)

2. Review general state, events, and monitoring until the service is running.
3. Open API access and make one controlled request with redacted endpoint and authentication handling.
4. Start, stop, publish, or delete only after checking the current state, cost, and impact.

See [My Deployments](../../../../usermanual/ai-infra-on-cloud/user/model-services/my-deployments/).

## Completion Checklist

> **Purpose:** These are the exit criteria for the current feature task. Use them to decide whether the result is observable and reviewable and whether you can continue to the next step in the scenario. They do not repeat the procedure; if any item fails, follow the troubleshooting section below.

| Check | Pass Criteria |
| --- | --- |
| 1 | Runtime state and events show no repeated failure. |
| 2 | Monitoring reflects the service runtime window. |
| 3 | A controlled API call succeeds. |
| 4 | Lifecycle actions update state and release resources as expected. |

## Troubleshooting

| Symptom | Check First |
| --- | --- |
| Deployment stays in Creating or fails | Event records, cloud-account status, quota, capacity, image pull, and startup command |
| Service runs but API calls fail | API URL, request headers, model parameters, service port, and rate limit |
