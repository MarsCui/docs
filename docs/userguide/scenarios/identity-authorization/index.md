---
prev: false
next: true
---

# Scenario Overview - Identity Authorization

This scenario uses organizations, members, and roles to define which menus, actions, and business resources a user may access.

## Applicable Roles

- Administrator and Operator
- Provider and End User used to verify the result

## Goals

- Assign users to the correct organization and role.
- Enforce least privilege for menus, actions, and resources.
- Verify changes through a fresh session and operation logs.

## Before You Start

- Define the target user, organization, and job responsibility.
- List required and explicitly forbidden capabilities.
- Prepare a verification account.

## Recommended Reading Order

1. Define organization and role boundaries
2. Configure members and roles
3. Verify access with the target account

## Document Index

| Document | Description |
| --- | --- |
| [Identity Authorization Workflow](./authorization-workflow) | Role design, member assignment, access verification, and a role-page screenshot |

## Completion Criteria

- Authorized functions work, while unauthorized functions are hidden or blocked.
