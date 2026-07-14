# Business Units

::: info Document Information
Version: v1.0
Updated: 2026-07-10
:::

## Feature Overview

`Business Units` is used to view, filter, and maintain business units information. It helps platform operator, billing operator work with business units records and related status from a consistent page entry.

| Item | Content |
| --- | --- |
| Applicable role | Platform operator, billing operator |
| Navigation path | Customer Billing > Business Units |
| Page route | /billing/customers/business-units |
| Managed objects | Business Units records and related status |
| Typical use | View, filter, and maintain business units information |

### Beginner Explanation

Business Units is part of the billing control loop. Treat it as a view for confirming money, quota, billing-cycle, customer, or settlement status before making financial decisions.

### Terms Quick Reference

| Term | Meaning | Handling tip |
| --- | --- | --- |
| Billing cycle | The month or settlement period used for billing, revenue, and reconciliation. | Keep the cycle consistent across pages. |
| Transaction | A balance change or revenue/expense record. | Use it to explain amount differences. |
| Settlement statement | A statement generated for an organization and billing cycle. | Check status and amount before follow-up. |
| Adjustment | A controlled correction for abnormal billing records. | Use only after impact assessment. |

## Prerequisites

1. The current account can access `Customer Billing > Business Units`.
2. The target organization, member, customer, billing cycle, rule, or record scope has been confirmed.
3. Required upstream data is already available and the page has finished loading.
4. For high-risk changes, confirm the impact scope and rollback path before continuing.

## Page Description

The page usually includes filters, summary cards, data tables, detail entries, status fields, and related operation buttons for business units records and related status.

| Area | Description |
| --- | --- |
| Filters | Narrow records by keyword, status, time range, organization, customer, member, or billing cycle. |
| Summary area | Displays key balances, counts, trends, warnings, or processing progress when available. |
| List or table | Shows records, statuses, timestamps, owners, amounts, and row-level actions. |
| Details or dialog | Provides more context before follow-up operations. |

The following screenshot shows business units list.

![Business Units list](./images/business-units-list.png)

The following screenshot shows business units screenshot.

![Business Units screenshot](./images/business-units-create.png)

## Main Operations

Use the following operations to work with business units records and related status. Complete view-only checks before opening dialogs that may create, save, submit, activate, transfer, settle, publish, or delete data.

### Add a Business Unit

1. Go to `Customer Billing > Business Units`.
2. Use filters or tabs to locate the target record.
3. Select the target row or entry related to business units records and related status.
4. Click the visible `Add a Business Unit` entry when it is available.
5. Before confirming any high-risk dialog, review the affected scope, amount, permission, or configuration and cancel if the impact is unclear.

### Edit a Business Unit

1. Go to `Customer Billing > Business Units`.
2. Use filters or tabs to locate the target record.
3. Select the target row or entry related to business units records and related status.
4. Click the visible `Edit a Business Unit` entry when it is available.
5. Before confirming any high-risk dialog, review the affected scope, amount, permission, or configuration and cancel if the impact is unclear.

## Parameters

| Field | Required | Type | Example | Description |
| --- | --- | --- | --- | --- |
| Keyword or name | No | Text | `Example name` | Used to locate a specific record. |
| Status | No | Enum | `Enabled` | Used to determine the current processing or availability state. |
| Time range or billing cycle | No | Date / Month | `2026-07` | Used to narrow statistics, logs, bills, or settlements. |
| Organization / customer / member | No | Text | `Example organization` | Used to identify the business ownership scope. |
| Operation | System generated | Button / link | `View Details` | Provides row-level entry points for follow-up checks. |

## Pitfalls

- Do not rely on one amount field alone for financial confirmation; cross-check transactions, bills, settlement statements, and reconciliation results.
- Do not repeat high-risk billing operations when the first attempt fails; check status and error details first.
- Remove sensitive customer, bank, contract, token, Key, or internal processing information before sharing screenshots or tickets.

## Result Checks

| Check item | Success signal | If abnormal |
| --- | --- | --- |
| Page access | The `Customer Billing > Business Units` page opens and data loads normally. | Check role permissions and refresh the page. |
| Filter result | The list changes according to the selected filters. | Reset filters and search again. |
| Record detail | Details, status, amount, permission, or configuration values are visible. | Confirm the record scope and permissions. |
| Follow-up path | Related pages or dialogs can be opened from visible entries. | Return to the sidebar and enter the downstream page directly. |

## FAQ

### Business Units Troubleshooting

**Issue Symptom:**

The expected result is not visible on the `Business Units` page, or the available action does not match the current business expectation.

**Possible Causes:**

- The current role, organization scope, status filter, time range, or billing cycle does not match the target record.
- Upstream data, permissions, synchronization, or review status has not finished updating.
- The action may be restricted because it affects business units records and related status.

**Handling:**

1. Reset filters and search again from `Customer Billing > Business Units`.
2. Open the target detail page and verify status, owner, time range, and related fields.
3. If the issue remains, provide desensitized page route, record ID, time range, and symptom summary for troubleshooting.

### Business Units Troubleshooting

**Issue Symptom:**

The expected result is not visible on the `Business Units` page, or the available action does not match the current business expectation.

**Possible Causes:**

- The current role, organization scope, status filter, time range, or billing cycle does not match the target record.
- Upstream data, permissions, synchronization, or review status has not finished updating.
- The action may be restricted because it affects business units records and related status.

**Handling:**

1. Reset filters and search again from `Customer Billing > Business Units`.
2. Open the target detail page and verify status, owner, time range, and related fields.
3. If the issue remains, provide desensitized page route, record ID, time range, and symptom summary for troubleshooting.

### The Operation Does Not Complete as Expected

**Issue Symptom:**

The expected result is not visible on the `Business Units` page, or the available action does not match the current business expectation.

**Possible Causes:**

- The current role, organization scope, status filter, time range, or billing cycle does not match the target record.
- Upstream data, permissions, synchronization, or review status has not finished updating.
- The action may be restricted because it affects business units records and related status.

**Handling:**

1. Reset filters and search again from `Customer Billing > Business Units`.
2. Open the target detail page and verify status, owner, time range, and related fields.
3. If the issue remains, provide desensitized page route, record ID, time range, and symptom summary for troubleshooting.

## Next Steps

1. Open the related detail page if the list value requires verification.
2. Cross-check transactions, monthly bills, settlement statements, and reconciliation results when amounts differ.
3. Escalate with desensitized record IDs, billing cycle, organization, customer, time range, and issue symptom when needed.

## Notes

- Billing amounts, settlements, balances, and customer information are sensitive. Desensitize them before sharing.
- Keep page routes, API fields, Key, AK/SK, License, and other product terms in their UI form.
- Keep credentials, private operational details, and sensitive customer data out of the manual.
