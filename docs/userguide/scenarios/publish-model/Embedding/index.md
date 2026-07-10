---
prev: false
next: true
---

# Publish an Embedding Model

Use the common [public model publishing flow](../provider-quick-guide), then validate embedding-specific behavior.

## Key Configuration

1. Select an embedding meta-model and text input modality.
2. Configure the upstream model ID and an embeddings-compatible endpoint.
3. Test single-string and batch input and verify vector dimensions.
4. Configure input-token billing and rate limits; output-token billing normally does not apply.
5. Save or submit the model for review.

See [My Models](../../../../usermanual/model-services/user/studio/my-models/) for maintained publication fields.

## Completion Checklist

- [ ] Protocol testing returns vectors with the expected dimension.
- [ ] Single and batch input behave correctly.
- [ ] Billing and limits use embedding-appropriate units.
- [ ] The model can be found and called in its intended scope.

## Feature Screenshot

![Choose the publication area](./images/choose-where-to-publish.png)
