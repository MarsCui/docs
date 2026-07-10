---
prev: false
next: true
---

# Scenario Overview - On Cloud Resource Access

This scenario guides operators through connecting cloud platforms, accounts, and regions and authorizing them for the intended business types and tenants.

## Applicable Roles

- Operator

## Recommended Reading Order

1. Connect the cloud platform
2. Connect cloud accounts and resource pools
3. Grant business-region access
4. Grant tenant-cloud access

## Document Index

| Document | Description |
| --- | --- |
| [Cloud Platforms](./Access-CloudType/) | Add public or private cloud platforms |
| [Cloud Accounts](./Cloud-Accounts/) | Add an account under a platform |
| [Resource Pools](./Resource-Pools/) | Enable regions and maintain display data |
| [Business-Region Authorization](./Business-Region-Auth/) | Grant access by business type, platform, and region |
| [Tenant-Cloud Authorization](./Tenant-Cloud-Auth/) | Grant access by tenant and platform |

## Goals

- The target cloud platform and account are connected and valid.
- Required regions are enabled as resource pools.
- Business-region and tenant-cloud authorization match the intended scope.
- A regular user can see only the authorized cloud platform, region, and account entries.

## Before You Start

1. Confirm the cloud platform type and supported account verification method.
2. Prepare a cloud account with only the permissions required by AGIOne.
3. Identify the regions, business types, and tenants that should receive access.
4. Confirm network reachability and cost ownership before enabling resources.

## Procedure

| Step | Action | Guide | Completion Signal |
| --- | --- | --- | --- |
| 1 | Add or confirm the cloud platform | [Connect a Cloud Platform](./Access-CloudType/) | The platform is enabled |
| 2 | Add and validate the cloud account | [Connect a Cloud Account](./Cloud-Accounts/) | Account validation succeeds |
| 3 | Enable target regions as resource pools | [Resource Pools](./Resource-Pools/) | Required regions are enabled |
| 4 | Grant regions to business types | [Business-Region Authorization](./Business-Region-Auth/) | Business scope matches the plan |
| 5 | Grant the cloud platform to tenants | [Tenant-Cloud Authorization](./Tenant-Cloud-Auth/) | Tenant scope matches the plan |
| 6 | Validate with a regular user account | [Deploy a Cloud Model Service](../../../usermanual/ai-infra-on-cloud/end-to-end/deploy-cloud-model-service/) | Authorized resources are visible |

## Completion Checklist

- [ ] Cloud platform, account, and target regions are available.
- [ ] The business type has the intended regional access.
- [ ] The target tenant has cloud-platform access.
- [ ] A regular user sees only the authorized platforms, regions, and account entries.

## Troubleshooting

| Symptom | Check First |
| --- | --- |
| Cloud account validation fails | Platform type, account permission, network, and credential validity |
| User cannot see a region | Resource-pool state, business-region grant, and tenant-cloud grant |
| Authorization appears ineffective | Tenant, business type, role, and a fresh session |

## Related Scenarios

- [On Cloud Model Asset Publishing](../on-cloud-model-asset-publishing/)
- [On Cloud Model Deployment & Calling](../on-cloud-model-deployment-calling/)
- [Deployment Monitoring Manual](../../../usermanual/ai-infra-on-cloud/user/model-services/my-deployments/)
