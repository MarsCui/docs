---
prev: false
next: true
---

# Publish an Image Model

Use the common [public model publishing flow](../provider-quick-guide), then validate image-generation or image-processing behavior.

## Key Configuration

1. Select the image model type, source, protocol, and supported input/output modalities.
2. Test image size, count, format, and optional asynchronous behavior.
3. Configure response parsing so generated image URLs or files are returned correctly.
4. Configure per-image or combination pricing and rate limits.
5. Save or submit for review and verify in the image Playground.

See [My Models](../../../../usermanual/model-services/user/studio/my-models/) for maintained fields.

## Completion Checklist

- [ ] Representative image requests pass protocol testing.
- [ ] Image count, size, format, and result parsing are correct.
- [ ] Billing units match the configured image dimensions.
- [ ] The published model works in the image Playground.

## Feature Screenshot

![Choose the publication area](./images/choose-where-to-publish.png)
