# Billing Getting Started

::: info Document Information
Version: v1.0
Updated: 2026-07-10
:::

## 30-second Quick Check

| Check | What to confirm |
| --- | --- |
| Role | The account has permission for Billing Getting Started. |
| Entry | Open `Billing Getting Started` from the left menu. |
| Scope | Confirm the organization, member, billing cycle, customer, or rule scope before acting. |
| Risk | Do not submit create, delete, settlement, activation, approval, or publish actions unless the business impact is confirmed. |

## Feature Overview

Billing Getting Started introduces the core concepts, roles, object relationships, prerequisites, and recommended reading path for the Billing subsystem. Read this page before entering individual feature pages.

| Item | Content |
| --- | --- |
| Applicable role | Operator, provider, or billing viewer |
| Navigation path | Billing Getting Started |
| Page route | /billing/getting-started |
| Managed objects | Billing Getting Started records, status, filters, details, and related operation entries |
| Typical use | View, filter, verify, and maintain billing getting started information |

### Beginner Explanation

Billing Getting Started is part of the billing control loop. Treat it as a view for confirming money, quota, billing-cycle, customer, or settlement status before making financial decisions.

## Applicable Roles

| Role | What to read first | Main responsibility |
| --- | --- | --- |
| Operator admin | Operator-side pages | Prepare, govern, audit, and troubleshoot platform-level configuration. |
| Provider admin | User-side management pages | Manage members, quotas, organization settings, billing, and revenue data. |
| Regular user | Personal and usage pages | Check personal credentials, projects, bills, calls, or resource usage. |

## What Billing Is

Billing manages balances, top-ups, transactions, quota governance, monthly bills, provider revenue, settlement statements, reconciliation, adjustments, and License-related financial visibility.

## Role Relationships

| Role | What to read first | Main responsibility |
| --- | --- | --- |
| Operator admin | Operator-side pages | Prepare, govern, audit, and troubleshoot platform-level configuration. |
| Provider admin | User-side management pages | Manage members, quotas, organization settings, billing, and revenue data. |
| Regular user | Personal and usage pages | Check personal credentials, projects, bills, calls, or resource usage. |

## Billing Object Hierarchy

| Layer | Object | Purpose |
| --- | --- | --- |
| Organization | Tenant, provider, or customer scope | Defines visibility and ownership. |
| Record | Bill, settlement, member, role, Key, log, rule, or order | Carries the main business state. |
| Operation | View, search, create, edit, approve, transfer, publish, or configure | Changes or verifies the record state. |

## User-side and Operator-side Boundaries

| Side | Visible scope | Typical actions |
| --- | --- | --- |
| Operator side | Platform-level configuration and cross-organization operations | Govern settings, billing, reconciliation, License, logs, and rate-control rules. |
| User side | Organization or personal scope | View personal data, members, quotas, billing records, revenue, and organization defaults. |

## Terms Quick Reference

| Term | Meaning | Handling tip |
| --- | --- | --- |
| Billing cycle | The month or settlement period used for billing, revenue, and reconciliation. | Keep the cycle consistent across pages. |
| Transaction | A balance change or revenue/expense record. | Use it to explain amount differences. |
| Settlement statement | A statement generated for an organization and billing cycle. | Check status and amount before follow-up. |
| Adjustment | A controlled correction for abnormal billing records. | Use only after impact assessment. |

## Usage Prerequisites

1. The current account can access `Billing Getting Started`.
2. The target organization, member, customer, billing cycle, rule, or record scope has been confirmed.
3. Required upstream data is already available and the page has finished loading.
4. For high-risk changes, confirm the impact scope and rollback path before continuing.

## Parameters

| Field | Required | Type | Example | Description |
| --- | --- | --- | --- | --- |
| Keyword or name | No | Text | `Example name` | Used to locate a specific record. |
| Status | No | Enum | `Enabled` | Used to determine the current processing or availability state. |
| Time range or billing cycle | No | Date / Month | `2026-07` | Used to narrow statistics, logs, bills, or settlements. |
| Organization / customer / member | No | Text | `Example organization` | Used to identify the business ownership scope. |
| Operation | System generated | Button / link | `View Details` | Provides row-level entry points for follow-up checks. |

## Result Checks

| Check item | Success signal | If abnormal |
| --- | --- | --- |
| Page access | The `Billing Getting Started` page opens and data loads normally. | Check role permissions and refresh the page. |
| Filter result | The list changes according to the selected filters. | Reset filters and search again. |
| Record detail | Details, status, amount, permission, or configuration values are visible. | Confirm the record scope and permissions. |
| Follow-up path | Related pages or dialogs can be opened from visible entries. | Return to the sidebar and enter the downstream page directly. |

## Pitfalls

- Do not rely on one amount field alone for financial confirmation; cross-check transactions, bills, settlement statements, and reconciliation results.
- Do not repeat high-risk billing operations when the first attempt fails; check status and error details first.
- Remove sensitive customer, bank, contract, token, Key, or internal processing information before sharing screenshots or tickets.

## Recommended Reading Path

1. Start from the subsystem overview to confirm role boundaries.
2. Open `Billing Getting Started` when the target object is already known.
3. For amount, permission, or status mismatches, compare the related list, detail page, and downstream audit or reconciliation page.

## FAQ

### Target billing data is not visible in Billing Getting Started

The expected account, customer, order, bill, settlement, adjustment, or License record does not appear on this page.

**How to check:**

1. Confirm the current tenant, organization, customer, account, and role scope.
2. Check page filters such as billing cycle, time range, customer, account type, status, and keyword.
3. Verify that upstream actions, such as top-up, reconciliation, settlement, adjustment, or License activation, have completed successfully.
4. If the record was just created or updated, refresh the list and compare it with related transaction, bill, settlement, or operation records.

### Amount, status, or billing cycle does not match in Billing Getting Started

The displayed balance, consumption, settlement status, monthly bill, or License status differs from the expected result.

**How to check:**

1. Confirm that the same billing cycle, customer, account, currency, and resource scope are being compared.
2. Check whether pending top-up orders, adjustments, refunds, settlement reviews, or metering synchronization are still in progress.
3. Compare the summary number with the detail list and operation records on the related billing pages.
4. For financial-impacting differences, pause confirmation actions and escalate with desensitized record IDs, time range, customer scope, and screenshots without credentials.

## Notes

- Billing amounts, settlements, balances, and customer information are sensitive. Desensitize them before sharing.
- Keep page routes, API fields, Key, AK/SK, License, and other product terms in their UI form.
- Keep credentials, private operational details, and sensitive customer data out of the manual.
