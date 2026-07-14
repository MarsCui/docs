# Identity and Access Model

:::: info Document Information
Version: v1.1
Updated: 2026-07-13
::::

## Core Relationship

In AGIOne, access is determined through four connected concepts:

**Tenant defines the organization boundary -> User identifies the person -> Role defines the responsibility -> Authorization determines the visible resources and actions**

| Object | Beginner-friendly Meaning | What It Affects |
| --- | --- | --- |
| Tenant | The organization or customer space to which an account belongs | Data boundary and the resources available to the organization |
| User | The account used by a person to sign in | Personal identity, operation records, and assigned roles |
| Role | A set of responsibilities, such as operator or model provider | Menus, task ownership, and permitted operations |
| Authorization scope | The resources, records, and actions opened to a tenant or account | Visible regions, resource pools, clusters, cloud accounts, models, templates, billing records, License data, settings, audit logs, API rate-control rules, and data |

An account needs both the correct role and the correct resource authorization. Having a menu does not mean that every resource is visible, and seeing a resource does not mean that every action is allowed.

## How Access Is Decided

```text
Sign in
  -> Identify tenant and user
  -> Load assigned role permissions
  -> Apply resource authorization scope
  -> Display permitted menus, buttons, and data
```

When a documented menu or object is not visible, check the account role, tenant, authorization scope, and prerequisite resources before treating it as a product fault.

## Default Role Model

| Role | Main Responsibility | Typical Scope |
| --- | --- | --- |
| `admin` | Manage platform identity and access foundations | Tenants, users, roles, menus, and platform-level permission configuration |
| `operator` | Prepare and govern platform resources, published content, finance operations, and settings | Resource onboarding, templates, authorization, quotas, monitoring, base settings, reviews, customer finance, License, audit, and API rate control |
| `provider` | Supply and operate model services | Publish single or aggregate models, maintain versions and pricing, submit reviews, view customer calls and revenue, and manage authorized team settings |
| `enduser` | Consume authorized platform capabilities | Discover and experience models, call APIs, deploy available services, and view personal calls, usage, billing, or settings |

The exact menus available to a role can vary with the deployed version and platform configuration. Use the current environment as the final source for visible entries.

## Tenant Boundary

- A tenant represents an organization or customer boundary.
- A tenant can contain multiple users with different roles.
- Model providers and end users can belong to the same tenant while receiving different permissions.
- Cross-tenant access must be explicitly governed; users should not assume that resources or data from another tenant are visible.
- Platform-level identity governance should remain with the deployment owner or an authorized platform administration team.

## Role and Authorization Are Different

| Situation | Role Check | Authorization Check |
| --- | --- | --- |
| A menu is missing | Confirm that the account has the role responsible for the task | Confirm that the menu is enabled for the role in this deployment |
| A region, cluster, or resource pool is missing | Confirm that the role can use the relevant subsystem | Confirm tenant, business-region, or resource-pool authorization |
| A model is missing from Model Marketplace | Confirm that the account is an end user or another permitted consumer | Confirm model review status, visibility, and access scope |
| A provider cannot publish | Confirm the `provider` role | Confirm required model sources, templates, tags, and tenant permissions |
| A billing or License record is missing | Confirm that the account has the billing, finance, provider, or user-side role needed for the task | Confirm billing cycle, organization, customer, account, License scope, and synchronization status |
| A settings or API rate-control entry is missing | Confirm that the account can manage settings or audit tasks | Confirm organization scope, role-menu configuration, and rule visibility |
| An operation button is missing | Confirm task ownership for the current role | Confirm button-level permission and resource state |

## Recommended Responsibility Split

| Participant | Recommended Role | Responsibility Boundary |
| --- | --- | --- |
| Deployment owner | `admin` | Maintains tenants, users, roles, and platform access foundations |
| Platform operations, finance, security, or infrastructure team | `operator` | Prepares resources, maintains governance configuration, reviews content, manages customer finance or License, maintains settings, and monitors platform operations |
| Model or technical team | `provider` | Publishes and maintains models, submits reviews, operates provider-side calls and revenue, and maintains authorized team settings |
| Business user or application developer | `enduser` | Experiences and calls authorized models and views personal usage, billing, or settings |

Avoid assigning `admin` or broad `operator` permissions only to make a missing menu visible. Adjust the role or resource authorization to the minimum scope required by the task.

## Troubleshooting Access

1. Confirm the current subsystem and target task.
2. Confirm the signed-in user, tenant, and role.
3. Compare the task with the [Role Comparison](./role-comparison).
4. Confirm that the target region, resource pool, cluster, cloud account, model, template, billing record, License, setting, audit log, or rate-control rule has been authorized.
5. Confirm that the prerequisite resource has been prepared by the operator.
6. If the entry is still missing, record the page path, expected entry, account role, tenant, and time of observation for the platform administrator.

::: details Implementation Notes for Maintainers
Some deployments use a designated platform tenant for `admin` and `operator`, with ordinary tenants carrying `provider` and `enduser`. Role-menu, user-role, button, and API permission mappings may be stored in implementation objects such as `sys_role`, `sys_role_menu`, `sys_user_role`, and `sys_menu`, with backend permission checks applied to APIs. These names are implementation details and should not be used as the primary customer explanation or assumed to be stable public interfaces.
:::

## Related Documentation

- [Role Comparison](./role-comparison)
- [Features and Capabilities](./technical/features)
- [Scenario Guide](../userguide/scenarios)
- [User Manual](../usermanual/)
