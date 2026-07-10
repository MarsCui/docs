---
prev: false
next: true
---

# Platform Governance & Access Control

This scenario combines identity permissions, resource authorization, model visibility, API credentials, rate limits, and credits into one governance path for answering who can access what, how much they can use, and how changes are traced.

## Target Outcome

- Users, tenants, and roles form clear organizational boundaries.
- Cloud, On-Prem, and model resources are visible only in authorized scopes.
- API keys, projects, model grants, rate limits, and credits constrain calls together.
- Permission and credit changes can be validated with real roles and traced.

## Governance Layers

| Layer | Controlled Objects | Entry |
| --- | --- | --- |
| Identity | Tenants, users, roles, menus, and actions | [Identity Authorization](../identity-authorization/) |
| Cloud resources | Cloud platforms, regions, and tenant authorization | [On Cloud Resource Access](../on-cloud-resource-access/) |
| On-Prem resources | Regions, flavors, tenant quota, and credits | [On-Prem Compute Onboarding](../on-prem-compute-onboarding/), [Metering & Monitoring](../on-prem-resource-metering-monitoring/) |
| Models | Public/private scope, publishing approval, and visibility | [Publish Models](../publish-model/), [Model Publishing Approval](../model-publishing-approval/) |
| Calls | Personal keys, projects, model grants, rate limits, and balance | [Model Experience & API Calling](../model-experience-api-calling/) |

## Before You Start

1. Identify the governed object, owner, tenant, and business scope.
2. Apply least privilege and list capabilities that must be allowed and prohibited.
3. Define resource, call, cost or credit limits and effective time.
4. Prepare operator, provider, and caller validation accounts.

## Procedure

1. Use the [Identity and Access Model](../../../product/identity-access-model) to define identity boundaries.
2. Configure role and menu access and validate visibility with the target account.
3. Authorize cloud resources or allocate On-Prem flavors and quota.
4. Set public or private model scope and complete publishing approval when required.
5. Prepare caller credentials, project or model grants, rate limits, and credits.
6. Use the target account for a read-only check or controlled call.
7. Record the reason, scope, validation result, and rollback method.

## Completion Checklist

- [ ] Unauthorized accounts cannot see the target menu, resource, or model.
- [ ] Authorized accounts see only the agreed scope without extra governance permissions.
- [ ] Exceeding quota, credits, or rate limits is rejected or limited as defined.
- [ ] Revoked credentials or authorization no longer permit new requests.
- [ ] Records identify owner, tenant, object, and time.

## Troubleshooting

| Symptom | Check First |
| --- | --- |
| Menu is visible but resources are empty | Resource authorization, region, tenant scope, and filters |
| Model is visible but calls fail | Personal key, model grant, rate limit, balance, and protocol |
| Creation fails after quota increase | Account credits, cluster capacity, flavor association, and template scope |
| Access remains after revocation | Current session, cache, API permission, and whether revocation was saved |
| User has excessive access | Role inheritance, multiple assigned roles, and platform-level menus |

## Feature Screenshot

![Personal key management](./images/my-keys-live.png)
