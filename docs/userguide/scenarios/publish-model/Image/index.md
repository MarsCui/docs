---
prev: false
next: true
---

# Publish an Image Model

Use the common [public model publishing flow](../provider-quick-guide), then validate image-generation or image-processing behavior.

## Target Outcome

The image model passes protocol testing, publishes in the intended scope, and returns a usable image result or URL.

## Applicable Roles

- Model Provider

## Before You Start

- Prepare the model source, identifier, credential, image endpoint, and a non-sensitive test prompt.
- Confirm supported size, format, count, synchronous or asynchronous behavior, billing, and limits.

## Procedure

1. Open `My Models > My Publications`, select `Publish Model`, and choose the private or public publication area that matches the intended audience.

![Choose the publication area](./images/choose-where-to-publish.png)

2. Select the image meta-model and model source, then enter the upstream request URL, credential, and exact source model ID.

![Model source and meta-model information](./images/step-1-model-source_meta-model-information.png)

3. Confirm that the model type is `Image` so the platform exposes the correct capability and configuration fields.

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
| 1 | Representative image requests pass protocol testing. |
| 2 | Image count, size, format, and result parsing are correct. |
| 3 | Billing units match the configured image dimensions. |
| 4 | The published model works in the image Playground. |

## Troubleshooting

| Symptom | Check First |
| --- | --- |
| Protocol test fails | Endpoint, credential, model identifier, request parameters, and source network access |
| No image can be opened | Response mapping, result URL lifetime, format, callback, and content policy |
