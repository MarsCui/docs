# Node Statistics

::: info Document Information
Version: v1.0
Updated: 2026-07-03
:::

::: warning Security Notice
Do not expose real node names, node IPs, tenant names, business identifiers, internal domains, or alert details in monitoring screenshots or descriptions. For external communication, prioritize sanitized resource IDs, time ranges, and symptom descriptions.
:::

## Feature Overview

`Node Statistics` is used to view node status, node role, resource utilization, heartbeat, and owning cluster, helping operators perform capacity inspections, locate exceptions, and make resource scheduling judgments.

| Item | Content |
| --- | --- |
| Applicable Role | Operator |
| Navigation Path | Monitoring > Node Statistics |
| Page Route | `/powerone/monitor/nodes` |
| Managed Objects | Node status, node role, resource utilization, heartbeat, and owning cluster |
| Typical Use | Locate resource bottlenecks, offline nodes, and abnormal job distribution by node |

### Beginner View

Node statistics are like a server inspection checklist. They show CPU, memory, disk, and status for each node, helping determine which machine an issue lands on.

### Terms Quick Reference

| Term | Description |
| --- | --- |
| Node Status | Whether a node is Ready, unschedulable, or abnormal. |
| CPU Usage | Current CPU load of the node. |
| Memory Usage | Node memory occupation. |
| Disk Watermark | Space usage of system disk or data disk. |

## Prerequisites

1. The current account has node monitoring view permissions.
2. The target node belongs to an accessed cluster.
3. Node CPU, memory, disk, and status metrics are reported normally.
4. The troubleshooting time range or affected task has been clarified.

## Page Description

Node statistics are used to view CPU, memory, disk, and runtime status for each node. Operators can use it to locate NotReady nodes, high-watermark nodes, or machines with interrupted collection curves.

The following figure shows the node statistics page.

![Node Statistics](./images/monitoring-nodes.png)

## View Node Statistics

### Procedure

1. Go to `Monitoring > Node Statistics`.
2. Confirm the region in the upper-right corner and page filters.
3. View lists, charts, or statistic cards.
4. Focus on abnormal status, high watermarks, long periods without updates, or data inconsistent with expectations.
5. When a node is abnormal, go to the cluster node page to view labels, taints, hardware, runtime, and job information.

### Key Focus

- Whether the node is online or Ready.
- Whether single-node resources are close to full load.
- Whether abnormal nodes are concentrated in the same cluster or availability zone.

### Parameters

| Field Name | Required | Field Type | Example | Description |
| --- | --- | --- | --- | --- |
| Node Name | Yes | Text | `node-gpu-01` | Locates a specific compute node. |
| Owning Cluster | Conditionally required | Drop-down | `cluster-prod-a` | Limits the cluster to which the node belongs. |
| CPU Usage | System-generated | Percentage | `72%` | Determines whether node CPU is close to bottleneck. |
| Memory Usage | System-generated | Percentage | `81%` | Determines node memory pressure. |
| Disk Usage | System-generated | Percentage | `68%` | Determines whether system disk or data disk is close to limit. |
| Node Status | System-generated | Status | `Ready` | Shows whether the node is schedulable, unavailable, or has alerts. |
| Update Time | System-generated | Date time | `2026-07-06 10:00` | Determines whether node metrics are latest data. |

### Pitfalls

- Node Ready does not mean the device plugin is definitely normal.
- High disk watermark may cause image pull or log write failures.
- During troubleshooting, judge together with node events and job logs.

### Result Validation

1. The node list displays node name, status, and key resource metrics.
2. Node status corresponds to cluster health and job scheduling results.
3. Metric update time can explain whether collection is delayed.

## Configuration Rules and Impact

- **Node status before resource watermarks**: When a node is NotReady, unschedulable, or collection is abnormal, handle the status problem first.
- **Disk pressure affects job stability**: High disk watermark may cause image pull, log write, or temporary file creation failures.
- **Single-node exception can cause local queueing**: Scheduling failure is not necessarily overall cluster capacity shortage. It may be caused by target node labels or taint restrictions.
- **Metric delay requires event judgment**: When node metrics are delayed, also view cluster events and job failure reasons.

## FAQ

### Node Status Is Abnormal

**Symptom:**

The node is displayed as unavailable, offline, or resource data is not updated for a long time.

**Possible Causes:**

- Node kubelet or container runtime is abnormal.
- The link from node to platform or monitoring collection is unreachable.
- The node is under maintenance, isolated, or has hardware failure.

**Solution:**

1. Go to the cluster node page to view node details.
2. Check kubelet, container runtime, and monitoring collection components.
3. Confirm whether the node is under maintenance or isolated.

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

1. When a node is NotReady, check cluster events and node status.
2. When resources have high watermarks, locate the instances or jobs occupying resources.
3. When accelerators are involved, continue viewing device monitoring.

## Notes

- Node names, IPs, labels, and equipment room information should be sanitized.
- A single-node exception does not necessarily mean the whole cluster is unavailable.
- Before node maintenance, confirm impact on running tasks and mounted storage.
