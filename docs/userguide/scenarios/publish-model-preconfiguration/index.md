# Scenario Overview - Publish Models Preconfiguration

This scenario helps operators prepare the required settings before providers publish public models.

## Applicable Roles

- Operator

## Goals

- Prepare model authors, meta-models, model sources, and templates.
- Prepare tags, currencies, and model-review capabilities.
- Let providers publish models from standardized settings.

## Before You Start

- Define model type, modalities, and protocol.
- Prepare upstream endpoints, regions, and header rules.
- Define billing currency and review ownership.

## Recommended Reading Order

1. Meta-models
2. Model sources
3. Model templates
4. Tags, currencies, and reviews

## Document Index

| Document | Description |
| --- | --- |
| [Model Publishing Preconfiguration](./model-publishing-preconfiguration) | End-to-end preconfiguration workflow |
| [Meta-Models](./Meta-models/) | Authors, model types, modalities, capabilities, token limits, and protocols |
| [Model Sources](./Model-Source/) | Endpoints, regions, and request-header rules |
| [Model Templates](./Model-Templates/) | Reusable combinations of meta-models, sources, modalities, and protocols |

## Completion Checklist

- [ ] Providers can select the intended author, meta-model, source, and template.
- [ ] Modality, protocol, token limits, and advanced capabilities are consistent.
- [ ] Tags and currency support publication and billing.
- [ ] Model review entry and reviewer role are available.

## Troubleshooting

| Symptom | Check First |
| --- | --- |
| Provider cannot see a template | Template state, publication scope, meta-model, and source association |
| Model source test fails | Regional endpoint, request headers, protocol URL, and connectivity |
| Billing cannot be configured | Currency, billing unit, model type, and pricing rule |
