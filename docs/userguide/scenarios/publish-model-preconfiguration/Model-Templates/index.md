---
prev: false
next: true
---

# Model Templates

Model templates combine authors, providers, meta-models, model-source identifiers, modalities, protocols, and defaults into a reusable publishing starting point.

## Target Outcome

A provider and model source are combined with a meta-model into an accurate, reusable publication template.

## Applicable Roles

- Platform Operator

## Before You Start

- Prepare the model author, model source, region, and meta-model.
- Confirm the provider model ID, capabilities, token limits, protocol endpoint, and defaults.

## Procedure

1. Open **Settings > Model Templates** and select the intended model source.

![Select the model source](./images/model-source-list.png)

2. Enter the provider identity and the exact upstream model ID.

![Configure provider information](./images/step-1-provider-information.png)

3. Select the official model author.

![Select the model author](./images/step-1-select-author.png)

4. Select the prepared meta-model that matches the provider model.

![Select the meta-model](./images/step-2-select-meta-model.png)

5. Confirm supported input and output modalities against the provider documentation.

![Configure input and output modalities](./images/step-2-input_output-modalities.png)

6. Enable only verified advanced capabilities.

![Configure advanced capabilities](./images/step-2-advanced-capability-configuration.png)

7. Enter context, input, and output token limits.

![Configure token limits](./images/step-2-token-limit.png)

8. Configure the supported official native protocol, endpoint, and default parameters.

![Configure the official native protocol](./images/step-2-official-native-protocol.png)

9. Preview the complete template, publish it to the intended provider scope, and verify that the provider can select it.

![Preview the model template](./images/step-3-preview.png)

See [Model Templates in the User Manual](../../../../usermanual/model-services/operator/settings/model-templates/).

## Completion Checklist

> **Purpose:** These are the exit criteria for the current feature task. Use them to decide whether the result is observable and reviewable and whether you can continue to the next step in the scenario. They do not repeat the procedure; if any item fails, follow the troubleshooting section below.

| Check | Pass Criteria |
| --- | --- |
| 1 | Referenced author, meta-model, and source are available. |
| 2 | Previewed capabilities and protocol defaults are correct. |
| 3 | Intended providers can select the template. |

## Troubleshooting

| Symptom | Check First |
| --- | --- |
| Template is absent during publication | Status, source region, meta-model, and provider association |
| Template defaults are incorrect | Model ID, modalities, token limits, endpoint, and protocol parameters |
