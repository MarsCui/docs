# AI Infra On-Cloud

::: info Document Information
Version: v1.0
Updated: 2026-07-06
:::

::: warning Security Notice
Do not expose real AK/SK, Secret Key, cloud account IDs, authorization policies, Endpoint, API Key, tenant names, business regions, or cost data in On-Cloud documentation or screenshots. Use placeholders for all examples.
:::

## Subsystem Positioning

AI Infra On-Cloud is designed for cloud resource access, authorization, resource pool governance, and cloud model service deployment. It connects cloud provider accounts, resource pools, business authorization, deployment assets, and scheduling policies.

### Beginner View

On-Cloud is like a multi-cloud resource scheduling hub: operators connect accounts and resources from different cloud providers to the platform, authorize them by tenant and business region, and then users quickly deploy model services based on the authorized resources.

## Core Terms

| Term | Description |
| --- | --- |
| Cloud account | An account or authorization subject used to access cloud provider resources. |
| Resource pool | A resource collection abstracted from a cloud account that can be authorized and scheduled. |
| Tenant authorization | Controls which cloud accounts, resource pools, and regions a tenant can use. |
| Business region authorization | Controls which regions or resource scopes a business scenario can deploy to. |
| Deployment assets | Model library, inference frameworks, runtime images, and deployment configurations. |
| Scheduling policy | Determines how cloud deployments select resources, fallback options, and priorities. |

## Role Entries

| Role | Recommended Entry | Typical Tasks |
| --- | --- | --- |
| Operator | [Quick Access](./operator/access-workbench/quick-start/), [Cloud Accounts](./operator/access-management/cloud-accounts/), [Authorization Management](./operator/auth-management/tenant-cloud-auth/) | Connect clouds, enable resource pools, configure authorization, and maintain deployment assets and scheduling policies. |
| User | [My Access Accounts](./user/access-management/access-accounts/), [Quick Deployment](./user/model-services/quick-deployment/), [My Deployments](./user/model-services/my-deployments/) | View available cloud resources, submit deployments, copy invocation information, and check status. |

## Where Should I Start

| Your Goal | Start Here | Next Step |
| --- | --- | --- |
| Manage local clusters and resource pools | AI Infra On-Prem | Region / Cluster / Specification / Template |
| Manage cloud accounts and cloud deployments | AI Infra On-Cloud | Cloud accounts / Resource pools / Authorization / Quick deployment |
| Publish or call models | Model Services | Model marketplace / My models / Playground |

## Recommended Reading Path

1. Beginners should read [Getting Started](./getting-started/) first to understand cloud accounts, resource pools, and authorization relationships.
2. Operators should configure cloud platforms, cloud accounts, resource pools, authorization, deployment assets, and scheduling policies in sequence.
3. Users should start from access accounts to confirm available resources, then initiate quick deployment.
4. For the complete workflow, read [Deploy a Cloud Model Service from Scratch](./end-to-end/deploy-cloud-model-service/).

## Prerequisites

1. The operator has prepared cloud provider authorization and least-privilege policies.
2. Resource pools, tenant authorization, business region authorization, and deployment assets have been configured.
3. The user has obtained permissions for the target account, region, resource pool, and model deployment.
4. Before deployment and invocation, Endpoint, API Key, costs, and resource capacity have been confirmed.

## FAQ

### Why Users Cannot See Cloud Resources

**Issue Symptom:**

A user cannot see the target account, region, or resource in Quick Deployment or My Access Accounts.

**Possible Causes:**

- The cloud account has not completed validation or resource synchronization.
- Tenant authorization or business region authorization does not cover the current account.
- The resource pool is not enabled or has insufficient capacity.

**Handling:**

1. First check the authorization status in My Access Accounts.
2. Ask the operator to verify the resource pool, tenant authorization, and business region authorization.
3. If the resource pool is abnormal, wait for synchronization or switch to an available region.

### Why Deployment Creation Fails

**Issue Symptom:**

A task fails after quick deployment submission, stays in creation for a long time, or cannot generate invocation information.

**Possible Causes:**

- Cloud account authorization has expired or the resource pool is unavailable.
- The model, framework, image, or scheduling policy does not match.
- Cost, quota, or instance capacity is insufficient.

**Handling:**

1. Check events, status, and error information in My Deployments.
2. Verify that the model, specification, region, and authorized account are consistent.
3. Provide a redacted deployment ID, time, and error summary to the operator.

## Next Steps

1. Operators should regularly check cloud account key rotation, resource synchronization, and authorization scope.
2. Users should check Endpoint, API Key, events, and monitoring after deployment.
3. If cost or capacity is abnormal, cross-check On-Cloud deployment records, Model Services invocation records, and the cloud provider bill.
