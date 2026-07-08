# Image Management

## Feature Overview

`Image Management` is used to manage image entries and tags in image repositories, supporting runtime environment selection for jobs, IDEs, inference services, and other workloads.

| Item | Content |
| --- | --- |
| Applicable Role | Operator |
| Navigation Path | Resource Pools > Image Management |
| Page Route | /powerone/resourcepool/image |
| Managed Objects | Image name, tags, creation time, update time, and image operations |
| Typical Use | Synchronize images, upload images, maintain image tags, and clean up unused image records |

### Beginner View

- **Image** is the foundation of a job runtime environment and contains frameworks, dependencies, and startup scripts.
- **Tags** distinguish uses such as IDE, inference, and training.
- **Sync** refreshes the image list from image components.

### Maintenance Flow

1. Register an available image component first.
2. Sync or upload images.
3. Maintain clear tags for images.
4. Reference images in models, frameworks, or job templates.
5. Confirm that no jobs depend on an image before cleanup.

### Terms Quick Reference

| Term | Description |
| --- | --- |
| Image Tag | A label used to describe image use or version. |
| Sync | Pulls the latest image list from image services. |
| Image Upload | Adds a new image package or image metadata to platform management. |

## Prerequisites

1. An image component has been connected.
2. The current account has image management permissions.
3. Image naming, tags, and usage have been planned.

## Page Description

The page displays image name, tags, creation time, update time, and operation entrypoints in a table.

The following figure shows the image management list, where image tags can be maintained and upload or sync can be performed.


![Image Management](./images/images-list.png)

## Upload Image

### Applicable Scenario

- Add a runtime image that can be used by jobs.

### Pre-Operation Check

1. Confirm that the image source is trusted.
2. Confirm that the image name and tags comply with naming conventions.

### Procedure

1. Go to `Resource Pools > Image Management`.
2. Click `Upload Image`.
3. Fill in image information or select the upload file according to page requirements.
4. Before submission, confirm that it will not overwrite an image currently in use.

The following figure shows the image upload entrypoint. Confirm image use and tags before uploading.

### Parameters

| Field Name | Required | Field Type | Example | Description |
| --- | --- | --- | --- | --- |
| Image Name | Yes | Text | `pytorch-training` | Image display name. |
| Image Address | Yes | Text | `registry.example.com/ai/pytorch:2.3` | Image repository address. The example uses a placeholder. |
| Image Type | No | Enum | `Training` | Development, training, or inference use. |
| Architecture | No | Enum | `amd64` | Image CPU architecture. |
| Status | System-generated | Enum | `Available` | Image sync and selectable status. |

### Pitfalls

- Do not upload images from unknown sources or images that contain keys.

### Result Validation

1. The image appears in the list.
2. The image can be selected on job or template creation pages.

## Configuration Rules and Impact

- **Image before job**: The target image must be pullable before a job can run.
- **Stable tags**: Tags are used for filtering and recommendation. Do not change their semantics casually.
- **Delete carefully**: Before deleting an image, confirm that no jobs, templates, or model versions depend on it.

## FAQ

### Page List Is Empty

**Symptom:** No resource records are visible after entering the page.

**Possible Causes:**

- Filters, region, permissions, or dependent resource status do not match the current page.
- Page data is still syncing, or the corresponding resource has not been created.

**Solution:**

1. Click `Reset` to clear filters.
2. Confirm whether the region in the upper-right corner is selected correctly.
3. Check whether the resource has been connected or created in the current region.
4. Confirm that the current account has view permissions for this page.

### Add or Register Button Is Not Visible

**Symptom:** The page only shows the list, and no add, register, or create entrypoint is visible.

**Possible Causes:**

- Filters, region, permissions, or dependent resource status do not match the current page.
- Page data is still syncing, or the corresponding resource has not been created.

**Solution:**

1. Confirm that the current account is an operator.
2. Check whether License, menu permissions, and region permissions are complete.
3. Refresh the page and enter the target navigation again.
4. If it is still not visible, contact the platform administrator to verify role authorization.

## Follow-Up Operations

1. Enter model configuration, framework configuration, or the job creation flow to verify that the image is selectable.

## Notes

- Image names and tags should reflect framework, version, hardware environment, and use. Avoid using only `latest` in production.
- Do not expose registry credentials, robot passwords, Image Pull Secret, or internal registry addresses in image descriptions, tags, screenshots, or tickets.
- Before deleting or taking an image offline, confirm that no model configuration, framework configuration, runtime instance, online IDE, or template still depends on it.
- After image sync, spot-check whether the image is selectable on the user side, avoiding a case where the repository has the image but the platform list is not refreshed.
