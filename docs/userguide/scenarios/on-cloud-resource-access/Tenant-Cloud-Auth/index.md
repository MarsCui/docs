---
prev: false
next: true
---

# Authorize Tenants to Cloud Platforms

Grant selected tenants access to a cloud platform after the platform and regions are ready.

## Target Outcome

The intended tenant can see the authorized cloud platform, while unrelated tenants cannot.

## Applicable Roles

- Platform Operator

## Before You Start

- Confirm that the tenant exists and the cloud platform is enabled.
- Decide whether the grant applies to one tenant or all tenants.

## Procedure

1. Open **Authorization Management > Tenant-Cloud Authorization** and select **Add Authorization**.
2. Select one tenant or the explicitly approved tenant set, choose the cloud platform, and save.

![Add tenant-cloud authorization](./images/add-authorization.png)

3. Return to the authorization list and confirm the tenant scope and platform.

![Verify tenant-cloud authorization](./images/tenant-cloud_auth.png)

4. Sign in with a target tenant user and a non-target tenant user to verify the authorization boundary.

See [Tenant-Cloud Authorization](../../../../usermanual/ai-infra-on-cloud/operator/auth-management/tenant-cloud-auth/).

## Completion Checklist

> **Purpose:** These are the exit criteria for the current feature task. Use them to decide whether the result is observable and reviewable and whether you can continue to the next step in the scenario. They do not repeat the procedure; if any item fails, follow the troubleshooting section below.

| Check | Pass Criteria |
| --- | --- |
| 1 | Only intended tenants receive the cloud grant. |
| 2 | A fresh tenant session reflects the authorization. |
| 3 | Revoked tenants no longer see the platform. |

## Troubleshooting

| Symptom | Check First |
| --- | --- |
| The tenant cannot see the platform | Tenant selection, authorization scope, platform status, and a refreshed user session |
| Too many tenants can see the platform | Whether the grant was accidentally set to all tenants |
