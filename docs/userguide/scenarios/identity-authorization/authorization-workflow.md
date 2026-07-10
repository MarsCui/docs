---
prev: false
next: true
---

# Identity Authorization

This scenario guides platform administrators through setting organizational boundaries with tenants, packaging permissions in roles, assigning roles to users, and verifying menu, button, and resource access.

## Target Outcome

- The user belongs to the correct tenant and has a role appropriate to the job.
- The user sees only authorized subsystems, menus, and buttons.
- Platform governance permissions remain separate from regular tenant permissions.
- Changes can be verified by a new session and traced through records.

## Roles

- `admin`: maintains tenants, users, roles, menus, and platform permissions.
- `operator`: confirms operational access requirements without taking ownership of permission metadata.
- `provider` and `enduser`: validation accounts for the resulting access model.

## Before You Start

1. Confirm the organization, tenant, and responsibilities of the user.
2. Prefer built-in roles and create a custom role only when responsibilities are not covered.
3. List required and explicitly prohibited menus, actions, and resource scopes.
4. Prepare a validation account that does not carry production workloads.

## Procedure

| Step | Action | Reference | Completion Signal |
| --- | --- | --- | --- |
| 1 | Understand tenant, user, role, and menu relationships | [Identity and Access Model](../../../product/identity-access-model) | Boundaries and role choice are clear |
| 2 | Select a role from the default capability matrix | [Role Comparison](../../../product/role-comparison) | Role matches responsibilities |
| 3 | Create or maintain the user and assign tenant and role | [User Management](../../../operations/admin-portal-manual/user) | User is active with correct assignments |
| 4 | If required, configure a custom role with menu, action, and API permissions | [Custom Roles and Menu Permissions](../../../product/identity-access-model#_8-custom-roles-and-menu-permissions) | The role contains only necessary permissions |
| 5 | Sign in with the validation account and inspect menus and actions | [Operations User Management](../../../operations/om-guide/user) | Allowed items work and prohibited items do not |
| 6 | Record the result and reason for the change | [Operations Guide](../../../operations/om-guide/) | The change is traceable |

## Completion Checklist

- [ ] The user belongs to the correct tenant and is active.
- [ ] The role matches responsibilities without unnecessary platform permissions.
- [ ] Required menus and actions are available.
- [ ] Prohibited menus, actions, and resources are unavailable.
- [ ] A fresh session reflects the change and records are traceable.

## Troubleshooting

| Symptom | Check First |
| --- | --- |
| Target menu is missing | Tenant assignment, role assignment, menu permission, and a fresh session |
| Menu is visible but actions fail | Action permission code, API permission, and role-menu mapping |
| User sees another tenant's resources | Tenant boundary, resource authorization, and business filters |
| Changes do not take effect | Session cache, re-login, role state, and whether changes were saved |
| Custom role is too broad | Compare it with built-in roles and remove unrelated menus and APIs |

## Feature Screenshot

![Role management](./images/roles-live.png)
