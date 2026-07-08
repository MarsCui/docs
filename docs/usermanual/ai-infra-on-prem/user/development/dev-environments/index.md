# Online IDE

:::: info Document Information
Version: v1.0
Updated: 2026-07-08
::::

## Feature Overview

`Online IDE` is used to create and manage interactive development environments. Regular users can select single-node or cluster form and start a development environment based on platform images and specifications for code debugging, data processing, and experiment validation.

| Item | Content |
| --- | --- |
| Applicable Role | Regular user |
| Navigation Path | Development Resources > Online IDE |
| Page Route | `/powerone/dev-training/dev-ide` |
| Managed Objects | Online development environments, single-node IDEs, cluster IDEs, images, specifications, and runtime status |
| Typical Use | Create an interactive development environment, debug code online, run Notebook, or prepare training and inference scripts |

### Beginner View

You can understand Online IDE as a cloud development machine running in the resource pool. You do not need to install a GPU environment locally. Select an image and specification, and the platform creates an accessible development environment.

### First-Time Flow

1. Go to `Development Resources > Online IDE`.
2. View the existing IDE list and status.
3. Click `Create IDE`.
4. Select `Single Node` or `Cluster` deployment type.
5. Continue filling in image, specification, storage, and startup parameters.
6. After creation, return to the list to view status and enter the IDE.

### Terms Quick Reference

| Term | Description |
| --- | --- |
| Image | Container environment required to run a job, usually from platform image services or a custom image project. |
| Specification | Resource package that a job can request, such as CPU, memory, GPU model, and card count. |
| Quota | Resource upper limit available to a tenant. Common dimensions include GPU, CPU, memory, and specifications. |
| Single Node | Single-node development environment, suitable for regular debugging and small-scale experiments. |
| Cluster | Cluster development environment, suitable for scenarios that require primary/worker nodes or distributed resources. |

## Prerequisites

1. The current account has permission to create online IDEs.
2. The target region has available specifications and quota.
3. An available image exists and contains the required development tools.
4. If data or code directories need to be mounted, related storage has been prepared.

## Page Description

The list page supports filtering by region and status, and provides refresh and create entrypoints. In the screenshot, the current list is empty. After clicking `Create IDE`, you enter the creation page and can select single-node or cluster deployment type.

![Online IDE](./images/online-ide.png)

### Page Areas

| Field/Area | Description |
| --- | --- |
| Filter Area | Filters IDEs by region, status, and keyword. |
| Refresh | Refreshes list status. |
| Create IDE | Enters the online IDE creation flow. |
| Single Node / Cluster | Distinguishes single-node and cluster forms in the list or creation page. |
| Pagination Area | View by page when there are many IDEs. |

## Create Online IDE

### Applicable Scenario

Create an online IDE when an interactive development, debugging, or Notebook environment is needed.

### Pre-Operation Check

1. Target specification and quota are available.
2. The image contains Python, CUDA, frameworks, or other development dependencies.
3. The runtime cycle has been confirmed to avoid long idle resource consumption.

### Procedure

1. Go to `Development Resources > Online IDE`.
2. Click `Create IDE`.
3. On the creation page, select `Single Node` or `Cluster`.
4. Click `Fill Parameters` to enter parameter filling.
5. Select region, image, specification, storage, and other configuration.
6. Submit and return to the list to wait until the IDE becomes available.

The following figure shows the online IDE creation page. Users first select deployment type, then enter parameter filling.

### Parameters

| Field Name | Required | Field Type | Example | Description |
| --- | --- | --- | --- | --- |
| Environment Name | Yes | Text | `ide-pytorch` | Online IDE display name. |
| Image | Yes | Drop-down | `pytorch:2.3` | Development environment image. |
| Resource Specification | Yes | Drop-down | `1GPU-16C-64G` | Compute specification used by the IDE. |
| Storage Mount | No | Path | `/mnt/workspace` | Workspace mount path. |
| Startup Command | No | Text | `jupyter lab` | IDE startup command. |

### Pitfalls

- Cluster mode may require more quota. Use single-node first for regular debugging.
- If the image lacks dependencies, the IDE may start but code may fail to run.
- Stop or release IDEs that are not used for a long time.

### Result Validation

1. A new IDE appears in the list after creation.
2. Status enters Running or Accessible.
3. Web IDE, JupyterLab, or the corresponding development entrypoint can be opened.

## Search and Refresh IDEs

### Applicable Scenario

When there are many IDEs or status changes, quickly locate the target environment.

### Procedure

1. Select region or status in the filter area.
2. Enter a keyword and click `Search`.
3. If no result is returned after filtering, click `Reset`.
4. Click `Refresh` to get the latest status.

### Pitfalls

- Status refresh may be delayed immediately after creation submission.
- Existing IDEs may also be hidden when filters are too narrow.

## Configuration Rules and Impact

- Online IDEs occupy quotas and cluster resources. The longer they run, the more they consume.
- Images, specifications, and storage are configured by operators. Regular users can only select visible items.
- Before stopping, deleting, or releasing an IDE, confirm that code and output have been saved to persistent directories.

## FAQ

### Create IDE Button Is Unavailable or Invisible

**Symptom:** The list page has no creation entrypoint.

**Possible Causes:**

- The current account has no creation permission.
- Online IDE is not opened in the selected region.
- Page loading or permission status is abnormal.

**Solution:**

1. Refresh the page.
2. Confirm the current region.
3. Contact the operator to check account permissions and resource pool configuration.

### IDE Cannot Be Opened After Creation

**Symptom:** The list has an IDE, but the access entrypoint cannot be opened or the page keeps loading.

**Possible Causes:**

- The instance is still starting.
- The image startup script is abnormal.
- Network entrypoint or proxy is unavailable.

**Solution:**

1. Wait until the status enters Running.
2. View instance logs or events.
3. Contact the operator to check cluster entrypoint and image configuration.

## Follow-Up Operations

1. Enter the IDE to write and debug code.
2. Save important code, data, and output to persistent storage.
3. Stop or release the IDE when it is not in use.

## Notes

- Do not write account passwords, tokens, or private keys into Notebook, code repositories, or screenshots.
- Confirm storage mount paths before creation to avoid saving output only in temporary container directories.
