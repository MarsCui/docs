---
prev: false
next: true
---

# Publish a Speech Model

Use the common [public model publishing flow](../provider-quick-guide), then validate audio- and speech-specific behavior.

## Key Configuration

1. Select the speech model type, source, audio protocol, and supported formats.
2. Test representative text-to-speech or speech input according to model capability.
3. Configure synchronous or asynchronous result parsing and output format.
4. Configure character-, duration-, or request-based billing and rate limits.
5. Save or submit for review and verify in the audio Playground.

See [My Models](../../../../usermanual/model-services/user/studio/my-models/) for maintained fields.

## Completion Checklist

- [ ] Protocol tests return playable audio or the expected speech result.
- [ ] Format, sample rate, and asynchronous parsing match the upstream service.
- [ ] Billing units and limits match actual usage.
- [ ] The published model works in the audio Playground.

## Feature Screenshot

![Choose the publication area](./images/Choose-where-to-publish.png)
