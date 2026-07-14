---
prev: false
next: true
---

# Publish a Video Model

Use the common [public model publishing flow](../provider-quick-guide), then validate asynchronous video generation and result parsing.

## Target Outcome

The video model accepts a task, reports asynchronous progress correctly, and returns a playable result after publication.

## Applicable Roles

- Model Provider

## Before You Start

- Prepare the source, identifier, credential, task endpoint, status endpoint or callback, and a harmless prompt.
- Confirm duration, resolution, polling behavior, result lifetime, billing, timeout, and rate limits.

## Procedure

1. Open `My Models > My Publications`, select `Publish Model`, and choose the private or public publication area that matches the intended audience.

![Choose the publication area](./images/choose-where-to-publish.png)

2. Select the video meta-model and model source, then enter the upstream request URL, credential, and exact source model ID.

![Model source and meta-model information](./images/step-1-model-source_meta-model-information.png)

3. Confirm that the model type is `Video` so the platform exposes the correct capability and configuration fields.

![Confirm the model type](./images/step-1-model-type.png)

4. Configure the authentication and other required request headers. Use the protected credential field and add only headers required by the upstream service.

![Configure request headers](./images/step-1-request-header-configuration.png)

5. Set the supported input and output modalities, token or media limits, and model-specific parameters so they match the upstream service.

![Configure model parameters](./images/step-1-model-parameter-configuration.png)

6. Select the supported native protocol, configure its endpoint and parameters, and run the connectivity test before continuing.

![Test the official native protocol](./images/step-1-official-native-protocol.png)

7. Enter the model's public identifier and a description that states its actual tested capability.

![Complete basic information](./images/step-1-basic-information.png)

8. Choose immediate or scheduled publication according to the release plan.

![Choose the publication method](./images/step-1-publication-method.png)

9. Configure free or paid billing with units that match this model type, then verify the displayed price.

![Configure billing](./images/step-2-billing-configuration.png)

10. Configure RPM, TPM, or the applicable model-specific rate limit, then save the model or submit it for review.

![Configure rate limits](./images/step-3-rate-limit-configuration.png)

See [My Models](../../../../usermanual/model-services/user/studio/my-models/) for maintained publication fields.

## Completion Checklist

> **Purpose:** These are the exit criteria for the current feature task. Use them to decide whether the result is observable and reviewable and whether you can continue to the next step in the scenario. They do not repeat the procedure; if any item fails, follow the troubleshooting section below.

| Check | Pass Criteria |
| --- | --- |
| 1 | Task submission and asynchronous result retrieval both pass. |
| 2 | Failure and timeout states are parsed into understandable results. |
| 3 | Pricing dimensions match resolution and duration behavior. |
| 4 | The published model works in the video Playground. |

## Troubleshooting

| Symptom | Check First |
| --- | --- |
| Task is created but never completes | Status endpoint, task-ID mapping, polling interval, callback, and timeout |
| Result URL is unavailable | Response mapping, URL lifetime, storage permission, and content policy |
