---
prev: false
next: true
---

# Publish a Video Model

Use the common [public model publishing flow](../provider-quick-guide), then validate asynchronous video generation and result parsing.

## Key Configuration

1. Select the video model type, source, protocol, and supported input modalities.
2. Configure request submission, task-status polling or callback, and result parsing.
3. Test success, failure, timeout, and incomplete-result responses.
4. Configure resolution-, duration-, or request-based pricing and rate limits.
5. Save or submit for review and verify in the video Playground.

See [My Models](../../../../usermanual/model-services/user/studio/my-models/) for maintained fields.

## Completion Checklist

- [ ] Task submission and asynchronous result retrieval both pass.
- [ ] Failure and timeout states are parsed into understandable results.
- [ ] Pricing dimensions match resolution and duration behavior.
- [ ] The published model works in the video Playground.

## Feature Screenshot

![Choose the publication area](./images/choose-where-to-publish.png)
