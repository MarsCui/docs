---
prev: false
next: true
---

# Publish a Text or Chat Model

This page highlights configuration and validation for text or chat models. See [Publish Public Models](../provider-quick-guide) for the common end-to-end flow.

## Before You Start

- The operator has prepared the meta-model, model source, template, tags, and currency.
- Upstream model ID, protocol endpoint, authentication, and defaults are known.
- Context, input/output token limits, billing, and rate limits are defined.

## Key Steps

1. Open `My Models > My Publications` and choose the public or private area.
2. Select the text or chat meta-model and model source.
3. Configure upstream model ID, request URL, and authentication headers.
4. Select Chat Completions, Responses, or another compatible protocol and pass connectivity testing.
5. Configure context, input/output tokens, advanced capabilities, and defaults.
6. Configure token billing, tiers, cache pricing, and any free quota.
7. Configure RPM and TPM limits, then save or submit for review.

See [My Models](../../../../usermanual/model-services/user/studio/my-models/) and [Publish and Call a Model](../../../../usermanual/model-services/end-to-end/publish-and-call-model/) for detailed operations.

## Completion Checklist

- [ ] Protocol tests pass for expected streaming and non-streaming behavior.
- [ ] Context and token limits match upstream capabilities.
- [ ] Billing and rate limits match the publication plan.
- [ ] Review state is visible and the published model is callable in its intended scope.

## Feature Screenshots

![Text model basic information](../images/publish-basic-info-en.png)

![Model source and protocol](../images/publish-source-protocol-en.png)
