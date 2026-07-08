# AI Infra On-Prem

:::: info Document Information
Version: v1.0
Updated: 2026-07-08
::::

## Subsystem Positioning

AI Infra On-Prem is designed for local or private computing resources. It helps operators manage regions, availability zones, clusters, nodes, storage, images, templates, quotas, and monitoring, and helps regular users create instances and jobs and view usage.

### Beginner View

On-Prem is like an owned computing campus: operators plan the campus, connect machines, and define rules, while regular users request resources, run models, and view status in the opened areas.

## Core Terms Quick Reference

| Term | Description |
| --- | --- |
| Region / Availability Zone | A hierarchy that divides resources by physical location or logical isolation. |
| Cluster | A Kubernetes cluster that carries compute, storage, and scheduling capabilities. |
| Node | A server in a cluster that actually runs instances or jobs. |
| Resource Specification | The CPU, memory, and GPU/NPU combination selected when a user creates an instance or job. |
| Template | A deployable plan that combines a model, framework, image, startup parameters, and VRAM rules. |
| Quota / Usage | Controls available resource limits and records actual consumption. |

## Role Entrypoints

| Role | Recommended Entrypoint | Typical Tasks |
| --- | --- | --- |
| Operator | [Resource Pools](./operator/resource-pools/regions-zones/), [Templates](./operator/templates/inference-templates/), [Quota Metering](./operator/quotas-metering/tenant-quotas/) | Connect clusters, maintain specifications, open templates, monitor capacity, and adjust quotas. |
| Regular User | [Quick Start](./user/quick-start/inference-templates/), [Extension Services](./user/extensions/images/), [Quotas and Usage](./user/quotas-usage/quotas/) | Select templates or images to create instances, view resource status, and troubleshoot runtime issues. |

## Where Should I Start

| Your Goal | Start Here | Next Step |
| --- | --- | --- |
| Manage local clusters and resource pools | AI Infra On-Prem | Region / Cluster / Specification / Template |
| Manage cloud accounts and cloud deployments | AI Infra On-Cloud | Cloud account / Resource pool / Authorization / Quick deployment |
| Publish or call models | Model Services | Model marketplace / My Models / Playground |

## Recommended Reading Path

1. New users should first read [Platform Getting Started](./getting-started/) to understand resource hierarchy and role boundaries.
2. Operators should prepare resources in the order of region, cluster, specification, template, and quota.
3. Regular users should create model services in the order of template, image, storage, instance, and monitoring.
4. For the complete workflow, read [Deploy a Model Service from Scratch](./end-to-end/deploy-model-service/).

## Prerequisites

1. You have confirmed whether the current account is an operator or a regular user.
2. You have selected the target region, availability zone, or resource pool.
3. Before creating instances, you have confirmed specifications, images, storage, quotas, and cluster capability.
4. For troubleshooting, prepare a sanitized time range, resource ID, error message, and log summary.

## FAQ

### User Side Cannot See Resources

**Symptom:**

After a regular user enters the creation page or monitoring page, the target region, specification, image, or cluster data is not visible.

**Possible Causes:**

- The operator has not opened the resource visibility scope.
- The region, specification, image, or template has not been associated.
- The current account lacks the required permissions.

**Solution:**

1. Confirm the current region and account role.
2. Check specifications, templates, images, and quotas against the prerequisites.
3. Contact the operator to verify the resource opening scope and account permissions.

### Instance Creation Fails

**Symptom:**

After a user submits an instance, job, or model service, the task is queued, fails, or cannot start.

**Possible Causes:**

- Quota is insufficient, cluster capacity is insufficient, or the specification cannot be scheduled.
- Image pull, startup command, environment variables, or storage mount is abnormal.
- Template parameters do not match the model capability.

**Solution:**

1. View instance events, logs, and user-side monitoring.
2. Verify the image address, startup command, storage path, and resource specification.
3. If the issue still cannot be located, provide the sanitized resource ID and failure time to the operator.

## Follow-Up Operations

1. Operators should continuously maintain resource pools, templates, quotas, and monitoring.
2. Regular users should view usage, logs, and monitoring promptly after creating resources.
3. Before publishing, periodically check documentation screenshots, example commands, and sensitive information sanitization.
