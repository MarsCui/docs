# Publish and Call a Model End to End

::: info Document Information
Version: v1.0
Updated: 2026-07-06
:::

::: warning Security Notice
Do not write real accounts, passwords, tokens, API Keys, AK/SK pairs, private keys, certificates, complete Endpoint credentials, internal access addresses, or business-sensitive information in documentation, screenshots, tickets, or comments.
:::

## Feature Overview

This document connects the Model Services operations of operator admins, model providers, and model callers into one end-to-end path: operator admins first maintain meta-models, model sources, templates, and tags; model providers publish single models or aggregation models and submit them for review; after operator admins complete review, model callers view, try, and call models in the model marketplace and Playground; finally, each role views call, usage, and revenue data.

| Item | Content |
| --- | --- |
| Applicable roles | Operator admins, model providers, model callers |
| Recommended prerequisites | [Getting Started](../../getting-started/), [Meta-models](../../operator/settings/meta-models/), [My Models](../../user/studio/my-models/) |
| Output | A configured, reviewed model that is visible in the model marketplace and can be tried and called |
| Typical use | New model listing, third-party Endpoint access, aggregation model publishing, review acceptance, and call troubleshooting |

## Beginner Explanation

Publishing and calling a model is like placing a model on a shelf and then completing a trial purchase: the operator prepares meta-models, sources, and templates; the provider publishes the model; the caller validates it in the marketplace, Playground, and API.

## End-to-End Flow

| Stage | Operator | Goal |
| --- | --- | --- |
| Base data preparation | Operator admin | Maintain meta-models, model sources, templates, and tags. |
| Single-model publishing | Model provider | Configure meta-model, source, Endpoint, protocol, billing, and rate limits. |
| Aggregation model publishing | Model provider | Select member models and configure routing policy, billing, and publishing method. |
| Review processing | Operator admin | Review model or app publishing requests. |
| Marketplace display | Model caller | View details, providers, quick start, and performance in the model marketplace. |
| Playground call | Model caller | Select a model in Playground and complete text, image, video, or audio trials. |
| Data viewing | All roles | View My Calls, call logs, usage details, model revenue, and customer calls. |
| Troubleshooting loop | All roles | Check base configuration, review status, Endpoint, billing, rate limits, and call logs based on the failure path. |

## Terms Quick Reference

| Term | Description |
| --- | --- |
| Meta-model | Capability abstraction that defines protocol, modalities, Token limits, and default parameters. |
| Model source | Endpoint, authentication, and request header configuration used to access the actual model capability. |
| Review record | The review record and handling comments created before a model or app is published. |
| Call log | Request record used to troubleshoot 401, 429, 5xx, timeout, and abnormal output issues. |

## Prerequisites

1. The operator admin has permissions for model service settings, app list, model reviews, and app reviews.
2. The model provider has permissions for Studio, model publishing, aggregation model creation, and review submission.
3. The model caller has permissions for the model marketplace, Playground, and My Calls.
4. The Endpoint, API Key, model source ID, protocol, and default parameters required for publishing are prepared and reachable.
5. Billing, rate limits, publishing region, and review workflow are clear.
6. All keys, internal Endpoint addresses, and sensitive call parameters in documentation and screenshots are redacted.

## Step 1: Operator Admin Maintains Meta-models

1. Go to `Settings > Meta-models`.
2. If the model author is missing, add the model author first.
3. Click add meta-model, then configure model name, model type, input modalities, output modalities, advanced capabilities, Token limits, protocol, and meta-model details.
4. After submission, confirm that the meta-model is visible in the list.

Result checks:

1. The target meta-model is visible in [Meta-models](../../operator/settings/meta-models/).
2. Model type, input/output modalities, protocol, and context limit meet publishing requirements.
3. The model provider can select this meta-model during publishing.

## Step 2: Operator Admin Maintains Model Sources

1. Go to `Settings > Model Sources`.
2. Click add model source.
3. Fill in provider, region, request URL, request headers, authentication information, and source description.
4. After submission, confirm that the model source is visible in the list.

Result checks:

1. The target source is visible in [Model Sources](../../operator/settings/model-source/).
2. Source region, request URL, and request header configuration are accurate.
3. The source can be selected or reused when publishing a model.

## Step 3: Operator Admin Maintains Templates and Tags

1. Go to `Settings > Templates`.
2. Add a template and select model provider, author, meta-model, protocol, capabilities, and default parameters.
3. Go to `Settings > Tags` and maintain classification tags required in the model marketplace and publishing flow.
4. Confirm that templates and tags are both available.

Result checks:

1. The target template is visible in [Templates](../../operator/settings/model-templates/).
2. The target tag is visible in [Tags](../../operator/settings/tags/).
3. The corresponding template and tag can be selected when publishing a model or aggregation model.

## Step 4: Model Provider Publishes a Single Model

1. Go to `Studio > My Models`.
2. Switch to `My Published` and click `Publish Model`.
3. Select a publishing region, such as publishing to a private region or public region.
4. In basic information, select meta-model and model source, then fill in request URL, API Key, model source ID, request headers, input/output modalities, advanced capabilities, and Token limits.
5. Select supported protocols and complete the protocol connectivity test.
6. Fill in personalized identifier, description, and publishing method.
7. Go to billing configuration, select free or Token-based billing, and configure tier prices, cache-hit pricing, WebSearch, and free quota.
8. Go to rate-limit configuration and set RPM, TPM, or no limit.
9. Click `Save Only` or `Submit for Review`.

Result checks:

1. The target model is visible in [My Models](../../user/studio/my-models/).
2. The protocol connectivity test passes.
3. The model is saved or submitted for review successfully.

## Step 5: Model Provider Creates an Aggregation Model

1. Go to `Studio > My Models`.
2. Switch to `My Aggregations` and click `Create Aggregation Model`.
3. Select a publishing region.
4. Select model type and model subtype.
5. Add two or more published member models.
6. Configure enabled status, minimum success rate, maximum concurrency rate, maximum context length, input Token cost, and output Token cost for member models.
7. Fill in personalized identifier, select matching strategy, tags, description, and publishing method.
8. Configure billing method, billing mode, and price.
9. Click `Save Only` or `Submit for Review`.

Result checks:

1. The target aggregation model is visible in the My Aggregations list in [My Models](../../user/studio/my-models/).
2. The member model count is at least two.
3. Matching strategy, billing configuration, and publishing method match expectations.

## Step 6: Operator Admin Processes Model Review

1. Go to `Approvals > Model Reviews`.
2. View the pending model list and filter by model name, status, or submission information.
3. Open target model details and check meta-model, source, Endpoint, protocol, billing, rate limits, tags, and publishing region.
4. Approve or reject based on the review result.

Result checks:

1. The target review record status is updated in [Model Reviews](../../operator/approvals/model-reviews/).
2. After approval, the model can enter the listing or display flow.
3. When rejected, the reason is clear and the model provider can revise accordingly.

## Step 7: Model Caller Views the Model in the Marketplace

1. Go to `Discover > Model Marketplace`.
2. Filter models by model name, model type, provider, tag, or search box.
3. Open target model details and view provider, quick start, performance, and overview.
4. Record the protocol, price, context, capability, and limits that must be confirmed before calling.

Result checks:

1. The target model is visible in [Model Marketplace](../../user/discover/models/).
2. Provider, quick start, performance, and overview information is complete on the model details page.
3. The caller can prepare integration based on quick-start information.

## Step 8: Model Caller Tries the Model in Playground

1. Go to `Playground > Text Chat`, or enter image generation, video generation, or audio generation according to model type.
2. Click model selection and choose the target model.
3. Configure parameters such as Temperature, Top-P, Max Tokens, and Stream.
4. Enter test content and start generation.
5. Check response content, elapsed time, error information, and model effect.

Result checks:

1. The target model can be selected in [Text Chat](../../user/playground/text/).
2. The model returns an expected response.
3. If the call fails, the error information can help locate Endpoint, protocol, rate-limit, or billing issues.

## Step 9: View Calls, Usage, and Revenue

1. The caller goes to `My Calls > Overview` to view overall call trends.
2. The caller goes to `My Calls > Call Analytics` and `Call Logs` to view model-level and single-request details.
3. The model provider goes to `Usage & Revenue > Model Revenue` to view revenue overview and revenue details.
4. The model provider goes to `Usage & Revenue > Model Usage` to view consumption details.
5. The model provider goes to `Customer Calls` to view customer-level overview, analytics, and logs.

Result checks:

1. Call data is visible in [My Call Overview](../../user/my-calls/overview/).
2. A single request can be located in [Call Logs](../../user/my-calls/call-logs/).
3. Revenue and consumption can be viewed in [Model Revenue](../../user/usage-revenue/model-revenue/) and [Model Usage](../../user/usage-revenue/model-usage/).

## Common Failure Path Troubleshooting

### Failure Branch: Model Review Is Rejected

Next hop: [Model Reviews](../../operator/approvals/model-reviews/)

**Symptom:** The model provider cannot publish after submission, and the review record shows rejection.

**Troubleshooting Path:**

1. Read the review comments and complete model description, pricing, samples, usage boundaries, and authorization materials.
2. Check whether model source, protocol, request headers, and security policy meet requirements.
3. Before resubmitting, validate source connectivity and output quality in a controlled environment.

### Failure Branch: Model Source Connectivity Fails

Next hop: [Model Sources](../../operator/settings/model-source/)

**Symptom:** The model source test fails, or Playground cannot call the model after publishing.

**Troubleshooting Path:**

1. Check Endpoint, authentication request headers, API Key, and return format.
2. Confirm that the upstream service has no rate limits, allowlist restrictions, or network access restrictions.
3. After a redacted request sample passes validation, associate the source with a template or publish the model.

### Failure Branch: Call Returns 401/429/5xx

Next hop: [My Call Logs](../../user/my-calls/call-logs/)

**Symptom:** The caller fails through API or Playground and receives authentication, rate-limit, or upstream errors.

**Troubleshooting Path:**

1. For 401, first check Personal Key, API Key, request headers, and model visibility scope.
2. For 429, first check QPM, Token limits, customer quota, and provider rate limits.
3. For 5xx, first check request ID, latency, and model source health in call logs.

## Completion Check

| Check Item | Success Signal | Next Step |
| --- | --- | --- |
| Model visible | The target model can be searched in the model marketplace | Enter details and quick start |
| Normal status | Model review has passed and Playground can return results | Start production calling or revenue tracking |
| Troubleshooting entry available | Review records, call logs, or source tests can locate the error | Continue troubleshooting by failure branch |

## Next Steps

1. Convert verified meta-models, sources, templates, Endpoints, protocols, and default parameters into team standards.
2. Build stable tags, billing, rate limits, and quick-start instructions for high-frequency models.
3. Periodically check call logs, revenue, customer calls, and failure rates.
4. Before delisting or deleting deprecated models, confirm caller impact scope and alternatives.
