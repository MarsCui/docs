# Scenario Overview - Publish Models

This scenario helps model providers publish models as services that can be tried and called.

## Applicable Roles

- Provider
- Operator when preconfiguration or review is required

## Goals

- Publish a model service that users can discover, try, and call.
- Configure protocol, billing, rate limits, publication scope, and review data.

## Before You Start

- Complete model-publishing preconfiguration.
- Prepare the source endpoint, protocol, model ID, and request headers.
- Define billing and rate-limit policies.

## Recommended Reading Order

1. [Publish Models Preconfiguration](../publish-model-preconfiguration/)
2. Choose the guide for the target model type
3. [Model Publishing Approval](../model-publishing-approval/)
4. [Model Experience and API Calling](../model-experience-api-calling/)

## Document Index

| Document | Description |
| --- | --- |
| [Publish Public Models](./provider-quick-guide) | Publish a model to the public marketplace, including model information, protocol testing, billing, rate limits, and approval submission |
| [Publish Text Models](./Text/) | Publish a text model through the text model publishing flow |
| [Publish Multimodal Models](./Multimodal/) | Publish a multimodal conversation model and configure compatible protocols and billing |
| [Publish Embedding Models](./Embedding/) | Publish an embedding model through an embeddings-compatible protocol |
| [Publish Image Models](./Image/) | Publish an image model with image-specific billing and response parsing |
| [Publish Speech Models](./Speech/) | Publish a speech model with audio protocol and character-based billing |
| [Publish Video Models](./Video/) | Publish an asynchronous video model with callback and result parsing |

## Completion Checklist

- [ ] Protocol testing passes and model source and request parameters work.
- [ ] Billing, rate limits, publication area, and publication time match the plan.
- [ ] Review status and comments are visible after submission.
- [ ] Intended users can find, try, and call the published model.

## Troubleshooting

| Symptom | Check First |
| --- | --- |
| Meta-model or source cannot be selected | Operator preconfiguration, state, and account visibility |
| Protocol test fails | Endpoint, headers, source model ID, protocol, and response parsing |
| Review cannot be submitted | Required fields, billing, rate limits, publication area, and test state |
| Published model is not visible | Review state, publication time, public/private scope, and tenant permission |
