# Device Monitoring

::: info Document Information
Version: v1.0
Updated: 2026-07-03
:::

::: warning Security Notice
Do not expose real node names, node IPs, tenant names, business identifiers, internal domains, or alert details in monitoring screenshots or descriptions. For external communication, prioritize sanitized resource IDs, time ranges, and symptom descriptions.
:::

## Feature Overview

`Device Monitoring` is used to view accelerator devices such as GPUs/NPUs, VRAM, utilization, temperature, and health status, helping operators perform capacity inspections, locate exceptions, and make resource scheduling judgments.

| Item | Content |
| --- | --- |
| Applicable Role | Operator |
| Navigation Path | Monitoring > Device Monitoring |
| Page Route | `/powerone/monitor/devices` |
| Managed Objects | Accelerator devices such as GPU/NPU, VRAM, utilization, temperature, and health status |
| Typical Use | Discover high accelerator load, insufficient VRAM, missing cards, and hardware health issues |

### Beginner View

Device monitoring is like an accelerator dashboard. It observes GPU/NPU utilization, VRAM, temperature, and health status to determine whether compute cards can continue hosting tasks.

### Terms Quick Reference

| Term | Description |
| --- | --- |
| Device Utilization | Current compute utilization of GPU/NPU. |
| VRAM Usage | Accelerator VRAM occupation ratio. |
| Temperature | Device operating temperature. |
| Health Status | Whether the device can be scheduled and run normally. |

## Prerequisites

1. The current account has device monitoring view permissions.
2. The target cluster has deployed device plugins and can report GPU/NPU metrics.
3. Device model, VRAM, temperature, and health status can be collected.
4. The accelerator model or job scope to focus on has been confirmed.

## Page Description

Device monitoring is used to view GPU/NPU utilization, VRAM, temperature, and health status. Operators can use it to determine whether accelerators are offline, overheating, out of VRAM, or occupied by a single task for a long time.

The following figure shows the device monitoring page.

![Device Monitoring](./images/monitoring-devices.png)

## View Device Monitoring

### Procedure

1. Go to `Monitoring > Device Monitoring`.
2. Confirm the region in the upper-right corner and page filters.
3. View lists, charts, or statistic cards.
4. Focus on abnormal status, high watermarks, long periods without updates, or data inconsistent with expectations.
5. When a device is abnormal, combine node statistics, job monitoring, and underlying driver status to judge whether it is job occupation or a hardware issue.

### Key Focus

- Whether devices are identified and continuously reported.
- Whether VRAM and utilization are close to limits.
- Whether temperature, error counts, or health status are abnormal.

### Parameters

| Field Name | Required | Field Type | Example | Description |
| --- | --- | --- | --- | --- |
| Device Model | Yes | Text | `NVIDIA A800` | Shows GPU/NPU or other accelerator model. |
| Owning Node | Conditionally required | Text | `node-gpu-01` | Locates the node where the device resides. |
| Device ID | System-generated | Text | `GPU-0` | Distinguishes multiple devices on the same node. |
| GPU/NPU Utilization | System-generated | Percentage | `92%` | Determines whether compute units are under high load. |
| VRAM Usage | System-generated | Capacity | `62 GB / 80 GB` | Determines whether a model or job occupies all VRAM. |
| Temperature | System-generated | Number | `71°C` | Helps judge cooling and hardware health. |
| Health Status | System-generated | Status | `Normal` | Shows whether the device is available, alerted, or offline. |

### Pitfalls

- Full VRAM does not necessarily mean compute is fully loaded. Judge together with utilization.
- Temperature exceptions should be escalated to operations promptly for hardware and cooling checks.
- When devices are invisible, check drivers, plugins, and node status first.

### Result Validation

1. The device list displays model, node, utilization, VRAM, temperature, and health status.
2. Abnormal devices can be mapped to nodes and affected jobs.
3. VRAM and utilization trends match the job runtime window.

## Configuration Rules and Impact

- **VRAM watermark directly affects model startup**: When VRAM is insufficient, instance creation may fail even if total cluster resources look sufficient.
- **View temperature and health together**: High temperature, missing cards, or driver exceptions can all cause job failures.
- **Device dimension is suitable for hotspot location**: When cluster watermarks are normal but jobs are slow, use the device dimension to confirm whether a single-card hotspot exists.
- **Model differences affect schedulability**: The same specification may require a specific GPU/NPU model, driver, or compute capability.

## FAQ

### Device Data Is Empty

**Symptom:**

The node has accelerators, but device monitoring shows no data.

**Possible Causes:**

- The node has not installed or enabled the corresponding device collection component.
- Driver, device plugin, or collection permissions are abnormal.
- Filters do not cover the target cluster or node.

**Solution:**

1. Confirm that the target node has accelerators.
2. Check device plugin, driver, and monitoring collection status.
3. Reset filters and view again by cluster and node.

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

1. When VRAM is high, enter job monitoring to locate occupying tasks.
2. When temperature or health is abnormal, contact operations to handle hardware or drivers.
3. When model resources are insufficient, review accelerator configuration and specification association.

## Notes

- Device serial numbers, node locations, and internal hardware IDs should be sanitized.
- Empty utilization does not necessarily indicate an exception. Combine it with the task time range.
- Device health exceptions should be handled according to hardware procedures first.
