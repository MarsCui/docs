# Accelerator Management

::: info Document Information
Version: v1.0
Updated: 2026-07-03
:::

::: warning Security Notice
Do not write real accounts, passwords, tokens, AK/SK, private keys, certificates, complete kubeconfig files, internal access addresses, or business-sensitive information in documentation, screenshots, tickets, or comments.
:::

## Feature Overview

`Accelerator Management` is used to maintain AI accelerator models, vendors, architectures, VRAM capacity, compute capability, and adaptation status that the platform can identify, and to associate accelerator models with specification metrics.

| Item | Content |
| --- | --- |
| Applicable Role | Operator |
| Navigation Path | Resource Pools > Accelerator Management |
| Page Route | /powerone/resourcepool/accelerators |
| Managed Objects | AI accelerator vendors, architectures, series, models, VRAM, compute metrics, and management status |
| Typical Use | Unify the accelerator dictionary, support specification metrics, and help resource specifications and inference templates identify available hardware |

### Beginner View

- **Accelerator model** is like a hardware identity card. It tells the platform whether this is A100, H100, Ascend 910B, or another model.
- **Specification metric** is like a scheduling label. It determines which resource key Kubernetes uses to request the corresponding accelerator.
- **Managed** means the platform can include this model in resource specifications and job scheduling.
- **Not adapted** models can be maintained as hardware information first, but cannot be opened as stable scheduling capability directly.

### Initial Maintenance Flow

1. Confirm the accelerator vendors, models, and Kubernetes resource keys that actually exist in the cluster.
2. Prepare the corresponding AI accelerator metrics in `Resource Pools > Specification Metrics`.
3. Go to `Resource Pools > Accelerator Management` to create or maintain accelerator models.
4. Associate accelerator models with the correct specification metrics.
5. Reference the metric in resource specifications and verify the scheduling result with a test job.

### Terms Quick Reference

| Term | Description |
| --- | --- |
| Vendor | Accelerator manufacturer, such as NVIDIA, Huawei, AMD, or Intel. |
| Architecture | Hardware architecture or generation under the same vendor, such as Ampere or Hopper. |
| VRAM | Single-card available VRAM capacity, used to determine whether a model and inference template can be deployed. |
| Compute Capability | Hardware-supported compute capability, used to distinguish CUDA capabilities. |
| Adaptation Status | Marks whether the model has completed platform management and specification metric binding. |

## Prerequisites

1. The current account has operator permissions and can enter `Resource Pools > Accelerator Management`.
2. The target accelerator model, VRAM capacity, vendor, architecture, and Kubernetes resource key have been confirmed.
3. If the model needs to be managed for job scheduling, the corresponding metric has been prepared in `Resource Pools > Specification Metrics`.

## Page Description

The page organizes accelerator models by vendor and architecture. The top area displays management status statistics, the left side supports vendor filtering, and cards display model, VRAM, compute power, and adaptation status.

The following figure shows the accelerator management list, where hardware models can be viewed by vendor and management status.


![Accelerator Management](./images/accelerators-list.png)

### Vendor and Status Filters

The top area and left-side filters help quickly locate a specific type of accelerator.

| Area | Description |
| --- | --- |
| Status Statistics | Displays the counts of managed, adapted but not managed, and not adapted models. |
| Vendor Filter | Narrows the scope by vendors such as NVIDIA, AMD, Intel, and Huawei. |
| Model Card | Displays series, model, VRAM, compute capability, and peak compute power under different precisions. |

## Create Accelerator

### Applicable Scenarios

- Before a new hardware model is connected to the platform, accelerator basic information must be maintained.
- An existing accelerator model needs to be supplemented into a manageable state.

### Pre-Operation Check

1. Confirm that the vendor, architecture, series, model, and VRAM capacity are accurate.
2. Confirm that the specification metric source is selected correctly, avoiding inconsistency between the scheduling key and the actual cluster.

### Procedure

1. Go to `Resource Pools > Accelerator Management`.
2. Click `Create Accelerator`.
3. Fill in the vendor, architecture, series, model, single-card VRAM, and compute capability.
4. Maintain peak compute power under different precision modes.
5. Select the adaptation status and specification metric source.
6. Click `Save`.

The following figure shows the create accelerator dialog. Focus on hardware basic information and specification metric association.

### Parameters

| Field Name | Required | Field Type | Example | Description |
| --- | --- | --- | --- | --- |
| Accelerator Vendor | Yes | Text | `NVIDIA` | Accelerator device vendor. |
| Model | Yes | Text | `A100` | Accelerator model. |
| Resource Name | Yes | Text | `nvidia.com/gpu` | Kubernetes resource name. |
| VRAM Capacity | No | Text | `80GiB` | Single-card VRAM capacity. |
| Status | System-generated | Enum | `Enabled` | Whether it can be referenced by specifications. |

### Pitfalls

- Do not merge cards with similar display names but different resource keys into the same model.
- VRAM capacity affects inference templates and VRAM estimation results. Verify it against hardware information before submission.

### Result Validation

1. The new model appears in the accelerator list.
2. Status statistics match expectations.
3. The resource specification creation page can select the metric corresponding to this accelerator.

## Configuration Rules and Impact

- **Resource key consistency**: The k8s-key in the accelerator metric must be consistent with the resource key actually reported by the cluster.
- **Naming stability**: Vendor, series, and model should be consistent with hardware procurement or driver identification.
- **Pre-management validation**: Before management, use a test job to verify resource requests, scheduling, and monitoring display.

## FAQ

### Accelerator Model Is Maintained but Not Selectable in Resource Specifications

**Symptom:**

The model is visible in Accelerator Management, but no corresponding metric is available when creating a resource specification.

**Possible Causes:**

- The accelerator is not associated with a specification metric.
- The specification metric status is unavailable.
- The accelerator model is in a not adapted or not managed state.

**Solution:**

1. Check the adaptation status of the accelerator model.
2. Go to specification metrics and confirm the corresponding k8s-key and selector-key.
3. Create the resource specification after management validation is complete.

### VRAM Capacity Causes Inaccurate Template Recommendations

**Symptom:**

The inference template recommends specifications that are too large or too small and do not match the actual accelerator capability.

**Possible Causes:**

- Single-card VRAM is filled in incorrectly.
- Model, series, or architecture does not match the real hardware.
- The VRAM estimation rule does not cover this model.

**Solution:**

1. Verify the hardware inventory and driver identification result.
2. Correct the single-card VRAM and model information.
3. Add test data for this model in the VRAM estimation configuration.

### Accelerator Monitoring Has No Corresponding Device

**Symptom:**

The node has an accelerator, but device monitoring or resource specifications cannot identify it.

**Possible Causes:**

- The device plugin has not reported resources.
- The accelerator model does not match selector-key.
- The monitoring collection component does not support this model.

**Solution:**

1. Check the node device plugin and resource reporting.
2. Verify the accelerator model, selector-key, and specification metric.
3. Contact operations to confirm monitoring collection adaptation.

## Follow-Up Operations

1. Go to `Resource Pools > Specification Metrics` to maintain or confirm the corresponding metric.
2. Go to `Resource Pools > Resource Specifications` to create a specification that includes this accelerator.
3. Verify that this model can be selected correctly in an inference template or test job.

## Notes

- Accelerator model, vendor, architecture, and VRAM capacity should remain consistent with hardware inventory, driver identification, and monitoring collection.
- Before managing a model, confirm that the device plugin can report resources, specification metrics can identify the resource key, and monitoring can collect utilization and VRAM.
- Different driver or firmware versions may affect resource identification and stability. Submit a test job for validation before production access.
- Do not mix card models with similar display names but different resource keys.
