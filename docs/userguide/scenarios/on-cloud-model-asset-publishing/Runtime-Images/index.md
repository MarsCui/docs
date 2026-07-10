---
prev: false
next: true
---

# Runtime Images

Register the cloud runtime image used by an inference framework.

## Procedure

1. Open `Deployment Assets > Runtime Images` and add an image.
2. Enter the registry address, tag, framework type, and built-in state.
3. Confirm that the target cloud environment can pull the image.
4. Enable the image and verify that framework creation can select it.

See [Runtime Images](../../../../usermanual/ai-infra-on-cloud/operator/deploy-assets/runtime-images/).

## Completion Checklist

- [ ] Registry address and tag identify an immutable or controlled image.
- [ ] Target cloud environments can pull the image.
- [ ] Inference framework configuration can select it.

## Feature Screenshot

![Add a runtime image](./images/add-image.png)
