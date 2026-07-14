# Model Usage

::: info Document Information
Version: v1.0
Updated: 2026-07-08
:::

## Feature Overview

Model Usage helps model providers analyze call volume, Token consumption, success rate, failure rate, and customer usage trends by model and time range. Use it to identify traffic peaks, usage drops, and statistical differences before checking call logs.

| Item | Content |
| --- | --- |
| Applicable role | Model provider |
| Navigation path | Usage & Revenue > Model Usage |
| Page route | /user/usage-revenue/model-usage |
| Managed objects | Model call volume, Token usage, customer distribution, time trends, and usage details |
| Typical use | View model call and consumption status |

### Beginner Explanation

Model Usage is used to view model call volume, Token consumption, and customer usage trends. It is more like a utility meter that helps model providers identify which models are used frequently and when abnormal peaks occur.

### Terms Quick Reference

| Term | Description |
| --- | --- |
| Call volume | Number of requests received by the model. |
| Token usage | Input and output Token consumption. |
| Usage details | Records split by time, customer, or model. |
| Statistical rules | Rules for usage aggregation and attribution. |

## Prerequisites

1. The current account has permission to view model usage.
2. The target model has call records in the statistical period.
3. Statistical time range, model, customer, and Token rules have been confirmed.
## Page Description

This page is used to view model call volume, Token consumption, success rate, failure rate, and customer usage trends. Users should filter by model, customer, and time range, and combine call logs to identify reasons for abnormal peaks or usage drops.

Page screenshot:

![Model usage overview](./images/overview.png)

Used to view call volume, Token consumption, and customer usage trends.

## Main Operations

### Steps

1. Go to `Usage & Revenue > Model Usage`.
2. Select time range, model, and customer dimension.
3. View call volume, Tokens, success rate, and failure rate trends.
4. Drill down abnormal dates into call logs or customer call analytics.
5. Export redacted statistical data as needed.

Key screenshot:

![Usage details](./images/usage-details.png)

Used to check model, customer, time, and consumption details.

### Parameters

| Field Name | Required | Field Type | Example | Description |
| --- | --- | --- | --- | --- |
| Time Range | Yes | Date range | `Last 30 days` | Usage statistical window. |
| Model | No | Dropdown | `qwen-plus` | Filter usage by model. |
| Customer | No | Dropdown | `customer-a` | View trends by customer dimension. |
| Token Usage | System-generated | Number | `120000` | Tokens consumed during the statistical period. |
| Success Rate | System-generated | Percentage | `99.2%` | Percentage of successful requests. |

### Pitfalls

- Usage statistics usually have delay and should not replace real-time call logs.
- Redact customer names, business identifiers, and fee fields before exporting data.
- Token rules should be checked together with model protocol and billing settings.

### Result Checks

1. Call volume, Tokens, success rate, and failure rate trends have data.
2. After model, customer, or time range changes, statistical rules update together.
3. Usage anomalies can be validated by drilling down into call logs or customer call analytics.
## FAQ

### Usage Suddenly Increases

**Symptom:**

Call volume or Tokens for a day or hour are significantly higher than usual.

**Possible Causes:**

- Customer business traffic increased.
- App retries or loop calls occurred.
- Statistical rule switch or backfill task completed.

**Handling:**

1. Split trends by customer and model.
2. View call logs during the abnormal period.
3. Check whether backfill or rule changes exist.

### Usage and Revenue Do Not Match

**Symptom:**

Model usage is high, but the revenue page does not increase accordingly.

**Possible Causes:**

- Revenue settlement is delayed.
- Some calls are free, deducted, or unbilled.
- Statistical time ranges differ.

**Handling:**

1. Align time range and model filters.
2. View currency and billing settings.
3. Review again after settlement tasks complete.

## Next Steps

1. View model revenue to verify income changes.
2. Go to call logs to troubleshoot abnormal requests.
3. Adjust rate limits, pricing, or customer operations strategy based on usage trends.
## Notes

- Usage statistics may be delayed.
- Token rules should be checked together with model protocol and billing settings.
- Redact customer names and business identifiers before screenshots or export.
