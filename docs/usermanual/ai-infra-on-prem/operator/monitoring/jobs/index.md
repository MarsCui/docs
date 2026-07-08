# Job Monitoring

## Feature Overview

`Job Monitoring` is used to view model instances, online IDEs, runtime instances, training tasks, and historical jobs, helping operators perform capacity inspections, locate exceptions, and make resource scheduling judgments.

| Item | Content |
| --- | --- |
| Applicable Role | Operator |
| Navigation Path | Monitoring > Job Monitoring |
| Page Route | `/powerone/monitor/jobs` |
| Managed Objects | Model instances, online IDEs, runtime instances, training tasks, and historical jobs |
| Typical Use | Locate queueing, failures, high resource consumption, and long-running issues by job |

### Beginner View

Job monitoring is like a task queue and execution list. It shows training, inference, or development task status, queueing reasons, runtime duration, and resource occupation.

### Terms Quick Reference

| Term | Description |
| --- | --- |
| Job Status | Queued, running, succeeded, failed, or canceled. |
| Queueing Reason | Reason the job cannot start due to insufficient resources, quota limits, or scheduling constraints. |
| Runtime Duration | Duration from job startup to the current time. |
| Failure Information | Error summary or event when a job fails. |

## Prerequisites

1. The current account has job monitoring view permissions.
2. The platform has collected job status, events, queueing, and runtime duration.
3. The target tenant, user, or cluster scope has been clarified.
4. For troubleshooting, job ID or submission time has been prepared.

## Page Description

Job monitoring is used to view job queueing, running status, failure causes, and resource occupation. Operators can use it to analyze insufficient resources, image pull failures, startup exceptions, or long-running tasks.

The following figure shows the job monitoring page.

![Job Monitoring](./images/monitoring-jobs.png)

## View Job Monitoring

### Procedure

1. Go to `Monitoring > Job Monitoring`.
2. Confirm the region in the upper-right corner and page filters.
3. View lists, charts, or statistic cards.
4. Focus on abnormal status, high watermarks, long periods without updates, or data inconsistent with expectations.
5. When a job is abnormal, go to instance details to view logs, events, image pull, startup command, and storage mount.

### Key Focus

- Whether failed and queued jobs increase abnormally.
- Whether long-running jobs occupy critical resources.
- Whether job tenant, specification, image, and cluster match expectations.

### Parameters

| Field Name | Required | Field Type | Example | Description |
| --- | --- | --- | --- | --- |
| Job ID | Yes | Text | `job-20260706-001` | Locates a single job or task instance. |
| Job Status | System-generated | Status | `Running` | Shows whether the job is queued, running, succeeded, or failed. |
| Tenant / User | Conditionally required | Text | `tenant-a` | Used to locate job ownership by tenant or user. |
| Queue Duration | System-generated | Duration | `18 minutes` | Determines whether scheduling is waiting or resources are insufficient. |
| Runtime Duration | System-generated | Duration | `2 hours 15 minutes` | Determines whether the job runs longer than expected. |
| GPU Occupation | System-generated | Number | `2 * A800` | Shows accelerator specification and quantity occupied by the job. |
| Failure Information | System-generated | Text | `ImagePullBackOff` | Helps locate job failure causes. |

### Pitfalls

- Job queueing is not necessarily a failure. It may be caused by insufficient resources or quotas.
- Failure causes should be judged together with events, logs, and image pull status.
- Long-running jobs should be evaluated for resource occupation and cost.

### Result Validation

1. The job list displays ID, status, queue duration, runtime duration, and resource occupation.
2. Failed jobs show an error summary or event entrypoint.
3. Statistics change accordingly after filtering by tenant, cluster, or time range.

## Configuration Rules and Impact

- **For queueing, check resources and scheduling conditions first**: Queueing is not necessarily a platform fault. It may be caused by specification, labels, quotas, or cluster capacity limits.
- **Use events with failure information**: Error codes and events can distinguish image, storage, startup command, permission, and insufficient resource issues.
- **Runtime duration helps discover stuck tasks**: Long-running tasks should be judged together with logs, resource utilization, and business expectations.
- **Resource occupation affects other users**: When large jobs are submitted intensively, monitor tenant quotas and cluster watermarks at the same time.

## FAQ

### Job Remains Queued for a Long Time

**Symptom:**

In job monitoring, a task remains queued or scheduling for a long time.

**Possible Causes:**

- Target specification resources are insufficient.
- Quota is insufficient or template constraints are too strict.
- Image pull, storage mount, or node scheduling conditions are not satisfied.

**Solution:**

1. View job details and events.
2. Check remaining resources in clusters, nodes, and devices.
3. Verify tenant quota, image address, and storage mount.

### Page List Is Empty

**Symptom:**

No monitoring records or charts are visible after entering the page.

**Possible Causes:**

- Filters limit the result scope.
- The target region does not yet have related resources or job data.
- The current account has no view permission for this monitoring object.
- Monitoring collection data has not been reported.

**Solution:**

1. Click reset to clear filters.
2. Confirm whether the region in the upper-right corner is correct.
3. Go to resource pool or job pages to confirm whether objects exist.
4. Contact the platform administrator to check permissions and collection links.

## Follow-Up Operations

1. For queueing issues, verify quotas, specifications, and cluster capacity.
2. For failure issues, verify images, startup commands, storage, and events.
3. For long-running tasks, enter usage and monitoring pages to evaluate consumption.

## Notes

- Job names, image addresses, data paths, and log contents may contain sensitive information.
- Before terminating a job, confirm business impact and output file retention policy.
- High-frequency failed jobs should be reviewed through templates or images.
