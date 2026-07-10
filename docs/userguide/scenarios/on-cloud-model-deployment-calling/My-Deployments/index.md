---
prev: false
next: true
---

# My Deployments

Use My Deployments to verify runtime state, events, monitoring, API access, and lifecycle operations for a cloud model service.

## Procedure

1. Open `Model Services > My Deployments` and locate the deployment.
2. Review general state, events, and monitoring until the service is running.
3. Open API access and use redacted endpoint and authentication handling for a controlled request.
4. Start, stop, publish, or delete only after checking current state and impact.

See [My Deployments](../../../../usermanual/ai-infra-on-cloud/user/model-services/my-deployments/).

## Completion Checklist

- [ ] Runtime state and events show no repeated failure.
- [ ] Monitoring reflects the service runtime window.
- [ ] A controlled API call succeeds.
- [ ] Lifecycle actions update state and release resources as expected.

## Feature Screenshot

![My Deployments](./images/my-deployments-list.png)
