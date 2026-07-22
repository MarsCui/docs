# Currency Settings

::: info Document Information
Version: v1.0
Updated: 2026-07-08
:::

## Feature Overview

`Currency Settings` is used to maintain platform pricing units, exchange rates, display symbols, settlement rules, and enabled status, ensuring model usage, revenue, and customer bills use the same pricing basis.

| Item | Content |
| --- | --- |
| Applicable role | Operator |
| Navigation path | System Settings > Currency Settings |
| Page route | /operator/settings/currency-settings |
| Managed objects | Currency, exchange rate, display symbol, settlement rule, and enabled status |
| Typical use | Maintain billing display and revenue conversion rules for the model marketplace |

### Beginner Explanation

Currency settings are the pricing ruler inside the platform. They determine how usage is converted into credits, balance, or revenue. Unclear rules can cause mismatches among usage, revenue, and customer bills.

### Terms Quick Reference

| Term | Description |
| --- | --- |
| Currency | Currency unit used for price display or settlement. |
| Exchange Rate | Conversion ratio between currencies. |
| Settlement Rule | Calculation rule used for revenue, usage, or fee statistics. |
| Enabled Status | Controls whether the currency is available on pages. |

## Prerequisites

1. The current account has permission to configure currency or credits.
2. Measurement unit, conversion ratio, display precision, and applicable business scope have been confirmed.
3. Revenue, usage, and bill export rules are aligned with finance or operations rules.

## Page Description

This page is used to maintain billing currency, credit name, conversion ratio, display precision, and enabled status. Operators should keep these settings consistent with billing, revenue, and usage statistics, and avoid exposing real business pricing policies in documentation.

Page screenshot:

![Currency Settings](./images/currency-settings.png)

Used to maintain currency rules for price display and revenue statistics.

## Main Operations

### Manage Currency Settings

1. Go to `System Settings > Currency Settings`.
2. View the current currency, credit name, and conversion ratio.
3. When adding or editing, fill in display name, unit, precision, and enabled status.
4. Before saving, cross-check the rules with usage statistics and revenue pages.
5. After saving, validate the display result on model revenue and model usage pages.

## Parameter Reference

| Field Name | Required | Field Type | Example | Description |
| --- | --- | --- | --- | --- |
| Display Name | Yes | Text | `Credits` | Measurement unit name seen by users. |
| Conversion Ratio | Yes | Number | `1:1000` | Conversion rule from internal measurement value to display unit. |
| Precision | Yes | Number | `2` | Decimal places displayed on pages. |
| Applicable Scope | No | Multi-select | `Model calls` | Business scope affected by this currency configuration. |
| Status | Yes | Enum | `Enabled` | Controls whether the configuration takes effect. |

## Pitfalls

- Do not write real commercial discounts, customer contract prices, or internal settlement prices into screenshots.
- Changing conversion ratios affects revenue and usage display. Explain the rule before release.
- Do not mix multiple unit names on the same page.

## Result Validation

| Check Item | Success Criteria | Handling If Abnormal |
| --- | --- | --- |
| Unit is consistent | Units displayed on usage and revenue pages match currency settings. | Return to Currency Settings and check display name and enabled status. |
| Details can be reconciled | Raw measurement values and display values in exported details can be reconciled. | Check conversion ratio, precision, and statistical time range. |
| Effective period is clear | After configuration changes, new statistical periods display using the new rule. | Confirm effective time and wait for statistical tasks to refresh. |

## FAQ

### Revenue Amount Does Not Match Usage

**Symptom:**

Conversion results on the model revenue page and model usage page do not match.

**Possible Causes:**

- Conversion ratio or precision configuration is inconsistent.
- Statistical time ranges differ.
- Delayed settlement or refund adjustments exist.

**Handling:**

1. Check currency settings and statistical time ranges.
2. View raw measurement values in exported details.
3. Review again after the settlement task completes.

### Page Unit Display Is Abnormal

**Symptom:**

The page displays an old unit, or decimal places do not match expectations.

**Possible Causes:**

- The configuration is not enabled.
- Page cache has not refreshed.
- Some modules still use old configuration.

**Handling:**

1. Confirm that the new configuration is enabled.
2. Refresh the page or wait for cache updates.
3. Check whether related modules support this unit.

### Will Historical Data Change After Currency Changes?

**Symptom:**

After the operator changes the display name, precision, or conversion ratio, it is unclear whether historical revenue and usage will change together.

**Possible Causes:**

Different statistics pages may display data by effective time, billing cycle, or real-time configuration. Historical data and new-period data may not use the same rule.

**Handling:**

Record the effective time and impact scope before making changes. After the change, check historical billing cycles, new statistical periods, and exported details separately. If needed, state the rule change in external explanations.

## Next Steps

1. View the model revenue page.
2. View the model usage page.
3. Update external billing descriptions accordingly.

## Notes

- Do not expose real customer contract prices, discounts, or settlement amounts in screenshots.
- Conversion ratio changes need synchronized notes for statistical period and effective time.
- Use redacted sample amounts in external materials.
