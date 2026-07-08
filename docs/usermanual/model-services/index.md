# Model Services

::: info Document Information
Version: v1.0
Updated: 2026-07-06
:::

::: warning Security Notice
Model Services documentation and screenshots must not expose real Endpoints, API Keys, request header authentication values, model source secrets, internal model IDs, customer call content, revenue amounts, or business pricing policies. Use placeholders in all examples.
:::

## Subsystem Positioning

Model Services covers model publishing, review, experimentation, calling, logs, and revenue analysis. It helps model providers publish models, callers discover and use models, and operators govern model capabilities and review workflows.

### Beginner Explanation

Model Services works like a model capability marketplace plus an operations console: model providers package and list models, callers try them in the model marketplace and Playground, and operators maintain meta-models, sources, templates, and review rules.

## Core Terms Quick Reference

| Term | Description |
| --- | --- |
| Meta-model | A capability abstraction that describes model protocol, modalities, Token limits, and default parameters. |
| Model source | The Endpoint, authentication method, and request header configuration used to call the actual model. |
| Provider | The entity that provides model capabilities, pricing, and service quality. |
| Personal Key | The personal access credential used by a user to call model services. |
| Review record | A review record created before a model or app is published. |
| Playground | A page for trying model outputs for text, image, audio, or video scenarios. |
| Call log | A troubleshooting entry that records request ID, error code, latency, Token usage, and redacted summary. |
| Revenue statistics | Revenue statistics by model, customer, and time. |

## Role Entry Points

| Role | Recommended Entry | Typical Tasks |
| --- | --- | --- |
| Model provider | [My Models](./user/studio/my-models/), [Model Revenue](./user/usage-revenue/model-revenue/) | Publish models, maintain versions, and view calls and revenue. |
| Model caller | [Model Marketplace](./user/discover/models/), [Playground](./user/playground/text/), [My Calls](./user/my-calls/overview/) | Discover models, try outputs, integrate APIs, and troubleshoot calls. |
| Operator admin | [Meta-models](./operator/settings/meta-models/), [Model Sources](./operator/settings/model-source/), [Model Reviews](./operator/approvals/model-reviews/) | Maintain base configuration, review models, and govern visibility. |

## Where Should I Start

| Your Goal | Start Here | Next Step |
| --- | --- | --- |
| Manage local clusters and resource pools | AI Infra On-Prem | Regions / clusters / specifications / templates |
| Manage cloud accounts and cloud deployments | AI Infra On-Cloud | Cloud accounts / resource pools / authorization / quick deployment |
| Publish or call models | Model Services | Model marketplace / My Models / Playground |

## Recommended Reading Path

1. New users should first read [Getting Started](./getting-started/) to understand the relationship between model publishing, review, and calling.
2. Operator admins should first maintain meta-models, sources, templates, and tags.
3. Model providers publish models and check review results.
4. Callers enter Playground from the model marketplace, then continuously optimize with call logs, usage, and revenue data.
5. For the full workflow, read [Publish and Call a Model End to End](./end-to-end/publish-and-call-model/).

## Prerequisites

1. Confirm whether the current account is a model provider, caller, or operator admin.
2. Before publishing a model, prepare the model source, protocol, pricing, rate limits, and security notes.
3. Before calling a model, confirm the Personal Key, Endpoint, quota, and model visibility scope.
4. Before viewing revenue or customer calls, confirm that the current account has the required data permissions.

## FAQ

### Model Is Not Visible After Publishing

**Symptom:**

After submission, the model cannot be found in the model marketplace or My Models list.

**Possible Causes:**

- The model is still under review or the publishing task has not completed.
- Visibility scope, provider, or tag configuration is incorrect.
- Model source, template, or meta-model configuration is incomplete.

**Handling:**

1. Check the review record and publishing status in My Models.
2. Verify visibility scope, source, and template configuration.
3. If the review passed but the model is still invisible, contact the operator to check the publishing index.

### Model Call Fails

**Symptom:**

Playground or API calls return authentication failure, rate limit, timeout, or upstream errors.

**Possible Causes:**

- Personal Key, API Key, or request headers are invalid.
- The model source Endpoint is unavailable.
- Rate limits, Token limits, or billing quota limits are triggered.

**Handling:**

1. Confirm that placeholders in call examples have been replaced with valid credentials.
2. Check request ID, error code, and latency in call logs.
3. Contact the provider or operator to verify source health, rate limits, and quota.

## Next Steps

1. Operator admins should periodically check consistency across meta-models, sources, and templates.
2. Model providers should track call quality, revenue, and customer feedback after publishing.
3. Callers should complete validation in Playground and call logs before production integration.
