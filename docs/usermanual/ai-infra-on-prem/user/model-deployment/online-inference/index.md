# Model Instances

## Feature Overview

`Model Instances` is used to view model services created through deployment templates. Regular users can filter instances by instance type, status, and name here, and enter subsequent details, logs, or access troubleshooting flows.

| Item | Content |
| --- | --- |
| Applicable Role | Regular user |
| Navigation Path | Model Deployment > Model Instances |
| Page Route | `/powerone/quickstart/model-service` |
| Managed Objects | Model service instances created through deployment templates |
| Typical Use | View the model instance list, filter instances by type and status, and locate instance runtime status |

### Beginner View

Model instances can be understood as model services that have already been ordered and started. Deployment templates are responsible for creation, while the Model Instances page is responsible for checking whether creation succeeded, whether the instance is still running, and whether further troubleshooting is needed.

### First-Time Flow

1. Create a model instance in `Model Deployment > Deployment Templates` first.
2. Go to `Model Deployment > Model Instances`.
3. Filter the list by instance type or status.
4. Use search conditions to locate the target instance.
5. View instance status and enter details or logs if necessary.

### Terms Quick Reference

| Term | Description |
| --- | --- |
| Instance | A runtime object created by the platform and scheduled to a cluster, such as a model service, online IDE, or runtime instance. |
| Specification | Resource package that a job can request, such as CPU, memory, GPU model, and card count. |
| Single Instance | One model service instance runs independently, suitable for testing or low-traffic scenarios. |
| Multi-instance | One model service has multiple replicas, suitable for higher availability or higher concurrency. |
| Cluster Instance | Model service running in cluster form, usually for more complex deployment requirements. |

## Prerequisites

1. At least one model instance has been created, or you are preparing to view the current empty-list state.
2. The current account has permission to view model instances.
3. For troubleshooting, you can enter instance details, logs, or monitoring pages.

## Page Description

The page provides instance type, status, search, and reset entrypoints. In the current environment screenshot, the list is empty, indicating that the tenant has no model service instances under the current conditions.

![Model Instances](./images/model-instances.png)

### Page Areas

| Field/Area | Description |
| --- | --- |
| Instance Type Filter | Narrows the scope by All, Single Instance, Multi-instance, Cluster, and other types. |
| Status Filter | Views instances by all statuses or a specific runtime status. |
| Search Area | Enter conditions and click `Search` to locate the target instance. |
| List Area | Displays model instances and their status. When no data exists, it displays No model services. |
| Pagination Area | View by page when there are many instances. |

## View Model Instances

### Applicable Scenario

When you need to confirm whether a model service was created successfully, is still running, or has exceptions, view the model instance list.

### Pre-Operation Check

1. Model instance creation has been completed, or you explicitly need to confirm that there are no instances.
2. Filters are not too narrow, avoiding false empty results.

### Procedure

1. Go to `Model Deployment > Model Instances`.
2. Select instance type and status.
3. Enter instance name keyword and click `Search`.
4. View target instance status in the list.
5. If troubleshooting is needed, enter instance details or logs.

### Parameters

| Field Name | Required | Field Type | Example | Description |
| --- | --- | --- | --- | --- |
| Service Name | Yes | Text | `qwen-service` | Online inference service name. |
| Model | Yes | Drop-down | `qwen-7b` | Model to deploy. |
| Inference Template | Yes | Drop-down | `qwen-vllm-template` | Template used by the service. |
| Instance Count | Yes | Number | `1` | Number of inference service replicas. |
| Access Method | System-generated | Text | `Internal access` | Access entrypoint after service creation. |

### Pitfalls

- An empty list does not necessarily mean there are no instances. Click `Reset` to clear filters first.
- Newly created instances may need time for status refresh.

### Result Validation

1. The target instance appears in the list.
2. Instance status matches expectations.
3. Pagination total matches the filters.

## Configuration Rules and Impact

- Model instances are usually created from deployment templates. The list page may not provide a direct creation entrypoint.
- Instance status should be based on the list and detail pages. The overview page only provides entrypoints and summaries.
- Delete, stop, or restart instances are impactful operations. Confirm business access and data saving before execution.

## FAQ

### Instance Is Not Visible in the List After Creation

**Symptom:** After deployment template submission, the model instance list is still empty.

**Possible Causes:**

- Current filters filtered out the instance.
- The instance is still being created and the list has not refreshed.
- Creation flow submission failed.

**Solution:**

1. Click `Reset` and search again.
2. Refresh the page and view again.
3. Return to deployment templates or operation records to confirm whether submission succeeded.

### Instance Status Is Abnormal

**Symptom:** The instance shows Failed, Unavailable, or remains Creating for a long time.

**Possible Causes:**

- Image pull failed.
- Resources are insufficient or the specification cannot be scheduled.
- Startup parameters or model files are abnormal.

**Solution:**

1. Enter instance details to view logs.
2. Confirm quota and target specification.
3. Contact the operator to check image, cluster, and template configuration.

## Follow-Up Operations

1. View instance details and logs.
2. Confirm service access address and invocation method.
3. Track runtime cost in `Resource Usage`.

## Notes

- During troubleshooting, do not expose internal access credentials or API keys in screenshots.
- Before providing external service, confirm access control, instance specification, and runtime cycle.
