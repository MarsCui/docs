# Runtime Instances

:::: info Document Information
Version: v1.0
Updated: 2026-07-08
::::

## Feature Overview

`Runtime Instances` is used to create and manage non-template runtime tasks. Regular users can select single-node or cluster form, specify image, specification, startup command, parameters, environment variables, and storage mounts, and start training, batch processing, or custom service instances.

| Item | Content |
| --- | --- |
| Applicable Role | Regular user |
| Navigation Path | Development Resources > Runtime Instances |
| Page Route | `/powerone/inference/online-inference` |
| Managed Objects | Runtime instances, single-node tasks, cluster tasks, images, specifications, startup commands, and runtime status |
| Typical Use | Create training, batch processing, custom service, or temporary runtime tasks |

### Beginner View

A runtime instance is like an on-demand task machine: you prepare the image, code, data, and startup command, and the platform starts the instance according to the selected specification. It is more task-execution oriented than Online IDE and more flexible than model instances.

### Terms Quick Reference

| Term | Description |
| --- | --- |
| Image | Instance runtime environment. |
| Startup Command | Command or script executed after container startup. |
| Batch Processing | One-time or periodic task that processes data, converts files, or generates results, usually exiting after completion. |
| Parameters | Command-line parameters passed to scripts or services. |
| Environment Variables | Key-value configuration passed to the container process. |
| Storage Mount | Mounts object storage, file storage, or shared directories to paths inside the container. |

## Prerequisites

1. The current account has permission to create runtime instances.
2. Available images and specifications exist.
3. Training scripts, model files, or input data have been prepared.
4. Output directories have been planned to object storage, file storage, or shared directories.
5. Startup commands do not contain real keys, passwords, tokens, or AK/SK.

## Page Description

The list page supports filtering by region and status, and provides refresh and create entrypoints. The creation page first selects single-node or cluster deployment type.

![Runtime Instances](./images/runtime-instances.png)

## Create Runtime Instance

### Procedure

1. Go to `Development Resources > Runtime Instances`.
2. Click `Create Instance`.
3. Select `Single Node` or `Cluster`.
4. Click `Fill Parameters`.
5. Fill in image, specification, startup command, parameters, environment variables, and storage mounts.
6. Submit and return to the list to view instance status.

### Startup Command Examples

#### Python Training Script

```bash
python train.py --model /mnt/models/base --data /mnt/data/train.jsonl --output /mnt/output --epochs 3
```

#### Shell Script

```bash
bash run.sh --config /mnt/config/config.yaml --output /mnt/output
```

#### Custom Service

```bash
python app.py --host 0.0.0.0 --port 8000 --model-dir /mnt/models/base
```

### Parameter Passing Methods

| Method | Applicable Scenario | Example |
| --- | --- | --- |
| Command-line parameters | Script supports argparse, click, or shell parameters. | `--epochs 3 --batch-size 8` |
| Environment variables | Framework reads environment variables to control behavior. | `MODEL_DIR=/mnt/models/base` |
| Configuration file | Many parameters or reusable configuration is needed. | `--config /mnt/config/config.yaml` |
| Mount path | Input data, model files, or output results. | `/mnt/data`, `/mnt/output` |

### Parameters

| Field Name | Required | Field Type | Example | Description |
| --- | --- | --- | --- | --- |
| Task Name | Yes | Text | `train-job-001` | Training task display name. |
| Image | Yes | Drop-down | `pytorch:2.3` | Training task image. |
| Startup Command | Yes | Text | `python train.py` | Training entry command. |
| Resource Specification | Yes | Drop-down | `1GPU-16C-64G` | Specification used by the training task. |
| Output Path | No | Text | `s3://bucket/output` | Training artifact output location. |

### Pitfalls

- Runtime instance status changes may affect downstream flows. Confirm impact before submission.
- Sanitize credentials, addresses, customer information, or business identifiers first.
- If the list is empty, check filters, region, and permissions first.

### Result Validation

1. The instance appears in the list.
2. Status enters Running, Succeeded, or a status matching the task type.
3. Logs contain no image pull, command execution, or mount errors.
4. Expected files are generated in the output directory.

## FAQ

### Instance Fails Immediately After Startup

**Symptom:**

The runtime instance status quickly becomes Failed.

**Possible Causes:**

- The startup command does not exist, the path is wrong, or it returns non-zero.
- The image lacks dependencies.
- The storage mount path is incorrect.
- Script parameters or environment variables do not meet program requirements.

**Solution:**

1. View instance logs and events.
2. Validate the command in Online IDE with the same image.
3. Check image, working directory, parameters, and mount path.
4. Write output to a persistent directory and retry.

### Instance Remains Queued or Creating

**Symptom:**

The instance does not enter the running state for a long time after submission.

**Possible Causes:**

- Target specification resources are insufficient.
- Tenant quota or credits are insufficient.
- Cluster scheduling is abnormal.
- Image pull or storage mount prerequisites are not met.

**Solution:**

1. Check resource quotas and usage.
2. Use a smaller specification or another region.
3. Contact the operator to confirm cluster resources and scheduling status.
4. Check image and storage configuration.

### Output Cannot Be Found After Task Completion

**Symptom:**

After the instance ends, result files are not found in the expected directory.

**Possible Causes:**

- Output was written to a temporary container directory.
- The output path did not mount persistent storage.
- The output directory in script parameters is incorrect.

**Solution:**

1. View `--output` in the startup command or configuration file.
2. Set the output directory to object storage, file storage, or shared directory mount path.
3. Rerun a small sample task to verify output.

## Follow-Up Operations

1. Enter instance details to view logs and output.
2. Evaluate resource consumption from the usage page.
3. Stop or release the instance after task completion.
4. Accumulate stable commands into team scripts or inference template parameters.

## Notes

- Do not write keys directly in startup commands, environment variables, or screenshots.
- Output data should be written to persistent storage to avoid loss after instance release.
