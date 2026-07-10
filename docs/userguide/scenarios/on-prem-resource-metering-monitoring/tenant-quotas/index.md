# Configure Tenant NPU Quota

## Entry

- **Role:** Operator
- **Menu:** AI Infra (On-Prem) > Quotas & Metering > Tenant Quotas
- **Route:** `/powerone/quota-metric/tenant`

## Steps

1. Locate the tenant.
2. Review the NPU quota and current usage.
3. Set the limit to at least four when one workload must use all four cards.
4. Save and verify that the four-card flavor is selectable for the user.
5. Submit a test workload and verify that quota usage changes.

![Tenant quotas](./images/tenant-quotas-list.png)

## Quota Strategy

- With only four physical cards, avoid granting multiple tenants a simultaneous guaranteed four-card allocation.
- A four-card flavor and a tenant limit of four are separate requirements; both must pass.
- Reserve operational capacity when the cards should not be occupied permanently.

## Completion Check

- Tenant quota is updated.
- Authorized NPU flavors are selectable.
- Insufficient quota produces a clear result instead of unexplained queuing.

[Tenant Quotas manual](/usermanual/ai-infra-on-prem/operator/quotas-metering/tenant-quotas/)
