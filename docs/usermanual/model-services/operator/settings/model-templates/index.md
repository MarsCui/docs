# Model Templates

:::: info Document Information
Version: v1.0
Updated: 2026-07-06
::::

## Feature Overview

`Model Templates` is used to maintain or view vendor templates, source previews, protocols, default parameters, and publishing forms. It supports model publishing, experimentation, calling, statistics, and operational governance.

| Item | Content |
| --- | --- |
| Applicable role | Operator |
| Navigation path | System Settings > Model Templates |
| Page route | /operator/settings/model-templates |
| Managed objects | Vendor templates, source previews, protocols, default parameters, and publishing forms |
| Typical use | Provide reusable templates for model publishing |

### Beginner Explanation

A model template is like a preset for the model publishing form. After a template is configured, model providers can fill fewer repeated fields, but the Endpoint, request headers, and default parameters in the template must be secure and controlled.

### Terms Quick Reference

| Term | Description |
| --- | --- |
| Template | Reusable model publishing configuration set. |
| Vendor configuration preview | Displays Base URL, documentation URL, and request header examples. |
| Default advanced parameters | Preset parameters such as temperature and max Token used when publishing a model. |
| Protocol mapping | Mapping between the template and model call protocols. |

## Prerequisites

1. The current account has model template maintenance permission.
2. Selectable providers, authors, meta-models, and model sources have been maintained.
3. Default parameters, request header previews, and publishing form fields have been confirmed.
4. Before enabling the template, the publishing flow has been validated with a sample model.
## Page Description

This page maintains model publishing templates. A template combines provider, meta-model, default parameters, protocol, and source preview to help model providers reduce repeated input.

Page screenshot:

![Model template list](./images/model-source-list.png)

Used to view template status, provider, and associated configuration.

## Main Operations

### Steps

1. Go to `System Settings > Model Templates`.
2. Select provider or vendor configuration.
3. Associate applicable meta-models and model sources.
4. Configure protocol, default advanced parameters, and request header preview.
5. After saving, validate the template with a test model publishing flow.

Key screenshots:

![Select meta-model](./images/step-2-select-meta-model.png)

The template must be associated with the correct meta-model capability.

![Input/output modalities](./images/step-2-input-output-modalities.png)

Template modalities should match the meta-model and model source.

![Template preview](./images/step-3-preview.png)

Preview the fields and default parameters shown to users before release.

### Parameters

| Field Name | Required | Field Type | Example | Description |
| --- | --- | --- | --- | --- |
| Template Name | Yes | Text | `OpenAI-compatible template` | Template name selectable during model publishing. |
| Provider | Yes | Dropdown | `OpenAI Compatible` | Vendor or source type corresponding to the template. |
| Meta-model | Yes | Dropdown | `Qwen Text` | Capability definition referenced by default in the template. |
| Default Parameters | No | JSON | `{"top_p":0.8}` | Parameters carried into model publishing. |
| Request Header Preview | No | JSON | `{"Authorization":"Bearer <key>"}` | Show placeholders only. Do not write real keys. |


### Pitfalls

- Template default parameters affect all models that reference the template.
- Provider and meta-model capability mismatches cause call failures after publishing.
- Request header previews can contain placeholders only.


### Result Checks

1. The template can be selected in the model publishing flow.
2. Provider, meta-model, source preview, and default parameters are carried into the publishing form correctly.
3. Protocols, modalities, and Token limits are consistent with the associated meta-model.
4. After the template is disabled, it no longer appears in new publishing flows.
## FAQ

### Target Template Is Missing from Publishing Flow

**Symptom:**

The model provider cannot see the expected template when creating a model.

**Possible Causes:**

- The template is not enabled.
- The meta-model or source associated with the template is unavailable.
- The template's applicable provider does not match the current selection.

**Handling:**

1. Confirm template status.
2. Check associated meta-model, source, and provider.
3. Re-enter the publishing flow and verify the dropdown.

### Parameters Carried by the Template Are Incorrect

**Symptom:**

Parameters, request headers, or modalities auto-filled in the publishing form do not match expectations.

**Possible Causes:**

- Template default parameters were not updated.
- Meta-model limits changed but the template was not synchronized.
- Source preview still points to old configuration.

**Handling:**

1. Update template default parameters and request header preview.
2. Check meta-model limits.
3. After saving, run through the publishing flow with a test model.
## Next Steps

1. Use the template to create or update a test model and confirm that default parameters, pricing, and visibility scope take effect.
2. Go to model details or Playground and validate the call examples and parameter descriptions generated by the template.
3. After template changes, notify affected providers to avoid using old rules in the publishing flow.

## Notes

- Template default parameters affect the model marketplace and Playground user experience. Confirm the rules before release.
- The meta-model, source, pricing, and visibility scope associated with the template should stay consistent.
- After adjusting a template, sample-check model details, quick-start examples, and call logs to confirm they are displayed according to the new template.
