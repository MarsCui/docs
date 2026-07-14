# Regions & Zones

::: info Document Information
Version: v1.0
Updated: 2026-07-08
:::

## Overview

`Regions & Zones` is used to maintain logical resource boundaries for AI Infra On-Prem resource pools. Operators must create a region first, then create availability zones under that region. After that, clusters can be registered in the corresponding availability zone to host jobs and display resource usage.

| Item | Description |
| --- | --- |
| Applicable Role | Operator |
| Navigation Path | Resource Pools > Regions & Zones |
| English Page Name | Regions & Zones |
| Managed Objects | Region, Availability Zone, region-associated components, and cluster resources under availability zones |
| Typical Uses | Divide compute resource pools, bind image and storage capabilities, host cluster registration, and support later job scheduling |

### Beginner Explanation

You can think of an On-Prem resource pool as an office system:

- **Region** is like a city, such as Wuhan or Beijing. It distinguishes the broad location or scope of resources.
- **Availability Zone** is like an office area or floor inside a city. It further divides where resources are hosted.
- **Cluster** is like a work area inside an office zone. It provides the actual CPU, GPU, memory, disk, and other compute resources.
- **Job** is like a specific piece of work. It must be scheduled onto a cluster to run.
- **Public Region** is like an open office area that all authorized users can share.
- **Dedicated Region** is like an independent office with access control, available only to specified teams or tenants.

Therefore, the first-time configuration order cannot be reversed: create a region first, then create an availability zone, register clusters into the availability zone, and finally submit a job to verify that the resources are usable.

### Initial Configuration Flow

For the first configuration, use the following order:

1. Connect an image service. The image service is usually Harbor. Harbor is a container image registry used to store and distribute images required by jobs.
2. Create a region and bind an available image service to the region. If required by the business, also bind object storage, file storage, or block storage.
3. Create an availability zone and assign it to the created region.
4. Go to `Resource Pools > Clusters` and register a Kubernetes cluster (a container orchestration system used to manage compute nodes, containers, and job scheduling) to the corresponding region and availability zone.
5. Associate specifications and storage with the cluster as required.
6. Submit a test job to verify image pulling, resource scheduling, storage mounting, and job results.

### Term Quick Reference

| Term | Description |
| --- | --- |
| Harbor | A container image registry used to store and distribute images required by jobs. After a region is bound to an image service, later jobs can pull images from the corresponding registry. |
| Endpoint | The service access entry, usually used by the platform or jobs to access components such as image and storage services. |
| IP | The service location address or access address, used to determine whether the component network is reachable. |
| Object Storage | Storage for unstructured data, suitable for model files, datasets, artifact packages, and similar content. |
| File Storage | Storage for shared directories, suitable for multiple nodes or jobs reading and writing the same file system concurrently. |
| Block Storage | Storage for independent disk volumes, suitable for scenarios that require independent volumes, low-level block devices, or specific storage performance. |

## Prerequisites

Before configuration, confirm that the following conditions are met:

1. The current account has operator permissions and can access `Resource Pools > Regions & Zones`.
2. At least one available image service has been connected. If the image service dropdown is empty, first go to `Resource Pools > Image Services` to check whether the component has been connected, enabled, and whether the current account has view or bind permissions.
3. If object storage, file storage, or block storage is required in the region, complete the corresponding storage component connection in advance. An empty dropdown usually means that the component has not been connected, has not been enabled, or is not accessible to the current account.
4. If clusters will be registered later, plan the region ID, availability zone ID, display names, and cluster ownership relationship in advance.

## Page Description

The page consists of the filter area, region list, and region detail area. After you enter the page, the system displays the region list that matches the current filter criteria by default. After you select a region, the right side displays the component bindings, availability zones, and cluster resources of that region.

In the screenshot, the upper-right corner is the `Add Region` entry, the left side is the region list, and the right side shows the component bindings and availability zone resources of the current region.

![Regions and Zones list](./images/regions-zones-list.png)

### Filter Area

The filter area is at the top of the page and is used to narrow down the region list.

| Filter Item | Description |
| --- | --- |
| Region Type | Filter by `Public Region` or `Dedicated Region`. Public regions can be shared by platform tenants. Dedicated regions are used to restrict the usage scope. |
| Status | Filter regions by `All`, `Normal`, `Disabled`, or `Invalid`. |
| Name | Enter a region name keyword and click `Search` to quickly locate regions. Click `Reset` to clear filter criteria. |

### Region List

The region list on the left displays the region name, status, and more action entry. After you click a region name, the detail area on the right refreshes to show the information of the selected region.

The `...` menu in the region list is used to perform region-level actions, such as editing, disabling, or enabling a region.

### Region Details

Region details display the resource capabilities associated with the current region, including:

- Image component: displays the bound image service address, status, Endpoint, IP, description, and other information.
- Storage components: displays configuration summaries such as quotas, buckets, IP addresses, or other settings for enabled object storage, file storage, and block storage components.
- Availability zones: displays the availability zone status, availability zone ID, update time, description, and cluster count under the region.

Endpoint is the service access entry, usually used by the platform or jobs to access the corresponding component. IP is the service location address or access address, used to determine whether the component network is reachable.

### Availability Zones and Cluster Resources

After expanding an availability zone, you can view the cluster resource usage under that availability zone. Cluster cards usually display the following information:

- Cluster name.
- GPU, CPU, MEM, and DISK resource usage.
- Node count, job count, and creation time.

Resource usage is displayed in the "used/total" format, which helps you quickly determine whether a specific availability zone or cluster has a resource bottleneck.

## Add Region

### Applicable Scenarios

Add a region when the platform needs to connect a new compute resource area, or when resource pools need to be divided by data center, city, or business scope. The following scenarios usually require adding a region:

- During the first deployment of an On-Prem resource pool, at least one region must be created.
- When a new data center is added, new compute resources are purchased, or a new resource supply area is connected, create regions based on resource location.
- When resources need to be isolated by tenant, department, or business line, create a dedicated region.

### Configuration Basics

Before adding a region, confirm the resource boundary and component selection logic:

- **Region** is used to divide broad resource boundaries. It usually corresponds to a city, data center, resource pool, or tenant boundary.
- **Availability Zone** must belong to a region and is used to further distinguish data center areas, network domains, resource groups, or cluster groups under a region.
- **Image Service** is a key dependency of a region. If no image service is available, later jobs may fail to pull runtime images.
- **Storage Components** are enabled based on business needs. Object storage is suitable for model files and datasets, file storage is suitable for shared directories, and block storage is suitable for independent disk volumes.
- **Public Region** is suitable for shared resource pools, such as shared test resource pools or public training resource pools. **Dedicated Region** is suitable for department-owned or tenant-owned production compute resource pools.
- Storage component navigation paths are `Resource Pools > Object Storage`, `Resource Pools > File Storage`, and `Resource Pools > Block Storage`.

### Pre-Operation Confirmation

An available image service must already exist before you add a region. Without an image service, even if the region can be created, later jobs may fail to pull runtime images.

Confirm the following first:

1. An available image service already exists in `Resource Pools > Image Services`.
2. The current account has permission to bind the image service.
3. If object storage, file storage, or block storage needs to be enabled, the corresponding component has been connected and is available in `Resource Pools > Object Storage`, `Resource Pools > File Storage`, or `Resource Pools > Block Storage`.
4. The region ID has been determined according to the long-term plan. The region ID is a resource boundary identifier and cannot be modified after creation.

### Steps

1. Go to `Resource Pools > Regions & Zones`.
2. Click `Add Region` in the upper-right corner of the page to open the Add Region dialog.
3. In the `Region Basics` section, fill in the region ID, visibility policy, and multilingual display names.
4. In the `Resource Capability Binding` section, select an image service and enable object storage, file storage, or block storage as needed.

The following screenshot shows the region basics area of the Add Region form, where the region ID, visibility policy, and multilingual display names are configured.

![Region basics](./images/regionbasics.png)

The following screenshot shows the resource binding area of the Add Region form, where the image service and optional storage components are selected.

![Resource binding](./images/resource-binding.png)

5. After confirming that the configuration is correct, click `Confirm` to submit.
6. To discard the configuration, click `Cancel` to close the dialog.

### Parameter Description

| Field Name | Required | Field Type | Example | Description |
| --- | --- | --- | --- | --- |
| Object Name | Yes | Text | `resource-a` | The object name on the current page. |
| Region | Conditionally required | Dropdown | `Wuhan` | The region to which the object belongs. |
| Associated Resource | Conditionally required | Text | `cluster-a` | The resource that the object depends on or is associated with. |
| Status | System-generated | Enum | `Available` | The current status of the object. |
| Maintenance Notes | No | Multi-line text | `Used in production` | Records the purpose, boundary, and maintenance information. |

### Troubleshooting Tips

- The region ID cannot be modified after creation. Confirm the naming, regional meaning, and tenant boundary before submitting.
- If the image service is unavailable, jobs may fail to pull images. Confirm that the image component status is normal before adding a region.
- Storage components are not mandatory. Enable a storage component only when the business requires the corresponding storage capability.
- A public region expands the resource visibility scope, while a dedicated region restricts the resource scope. Confirm the tenant or department boundary before configuration.

### Result Validation

After the region is submitted successfully, check whether the configuration has taken effect:

1. Confirm that the new region appears in the region list on the left.
2. Confirm that the region status is `Normal` or the expected status.
3. Select the region and confirm that the image component is displayed in the detail area on the right.
4. If storage components are enabled, confirm that the corresponding storage components appear in the associated component list.
5. If clusters will be registered later, go to the cluster registration page and confirm that the region can be selected.

## Add Availability Zone

### Applicable Scenarios

Add an availability zone when a region needs to host new clusters, or when resources need to be further divided by data center rack, network domain, or resource group. The following scenarios usually require adding an availability zone:

- Multiple clusters exist under the same region and resources need to be divided by cluster group.
- Different data center areas, floors, network domains, or rack areas exist in the same city or data center.
- Network isolation, fault isolation, or resource grouping is required to avoid mixing all clusters in the same availability zone.

### Pre-Operation Confirmation

Before adding an availability zone, you must first create and select the target region. An availability zone cannot exist outside a region. Selecting the wrong owner affects later cluster registration and job scheduling.

Confirm the following first:

1. The target region has been created, and its status is `Normal` or the status expected for the current operation.
2. The target region has been selected in the region list on the left.
3. The availability zone ID has been determined according to the region plan. It is recommended to include the region prefix and a sequence number, such as `wuhan-1` or `wuhan-gpu-1`.
4. The availability zone ID cannot be modified after creation.

### Steps

1. Select the target region in the region list on the left.
2. In the `Availability Zone` section on the right, click `Add Availability Zone` to open the Add Availability Zone dialog.
3. Confirm that the `Region` field is the target region.
4. Fill in the availability zone ID.
5. Fill in the availability zone display name in each multilingual tab.
6. Fill in the description as needed, such as geographical location, data center number, or business purpose.

The following screenshot shows the Add Availability Zone form. The top area shows the owning region, and the middle area is used to fill in the availability zone ID and multilingual display names.

![Add Availability Zone](./images/add-availability-zone.png)

7. Click `Confirm` to submit.

### Parameter Description

| Field Name | Required | Field Type | Example | Filling Instructions |
| --- | --- | --- | --- | --- |
| Region | Yes | Dropdown | `Wuhan` | The parent region to which the availability zone belongs. When adding an availability zone, this is usually automatically filled from the currently selected region. Confirm that the ownership is correct before submitting. |
| Availability Zone ID | Yes | Text | `wuhan-1` | The unique identifier of the availability zone. It is recommended to use lowercase letters, numbers, and hyphens, such as `wuhan-1` or `wuhan-gpu-1`. It cannot be modified after creation. |
| Display Name (Multilingual) | Yes | Multilingual tabs | Simplified Chinese `Wuhan-1` / English `Wuhan-1` | The availability zone name displayed in different language environments. Keep the regional meaning consistent with the availability zone ID. |
| Description | No | Multi-line text | `Wuhan zone 1` | You can enter the data center location, purpose, network boundary, or maintenance notes to make later operations easier to identify. |

### Troubleshooting Tips

- Select the target region before adding an availability zone. Do not create the availability zone under the wrong region.
- The availability zone ID cannot be modified after creation. Include the region prefix and sequence number to avoid names that are hard to distinguish across regions.
- After an availability zone is created, it cannot run jobs by itself. You still need to register clusters under the availability zone.

### Result Validation

After the availability zone is submitted successfully, check whether the configuration has taken effect:

1. Confirm that the new availability zone appears in the target region details.
2. Confirm that the availability zone ID, display name, and description are as expected.
3. Confirm that the availability zone status is `Normal` or the expected status.
4. Go to the cluster registration page and confirm that the new availability zone can be selected under the region.

## Manage Regions

### Search Regions

Use this when there are many regions and you need to quickly locate a target region.

1. Enter a region name keyword in the `Name` input box at the top.
2. Click `Search`.
3. View the filtered results in the region list on the left.
4. To restore the default list, click `Reset`.

You can also use the `Search by Name` input box above the region list on the left to quickly locate a region within the current list.

### Filter Regions

For filter item descriptions, see `Page Description > Filter Area`. To filter regions, follow these steps:

1. Select the region type or status in the top filter area, or enter a region name.
2. Click `Search` to view the filtered results.
3. To change filter criteria, adjust the filter items and click `Search` again.
4. To restore the default list, click `Reset`.

### Edit Region

Edit a region when the region display name, visibility policy, or resource capability binding needs to be adjusted.

1. Find the target region in the region list on the left.
2. Click `...` on the right side of the target region.
3. Select `Edit`.
4. Adjust editable fields as needed.
5. Click `Confirm` to save.

The `...` menu on the right side of a region card opens region-level actions such as `Edit` and `Disable`.

Before editing a region, confirm the impact of the adjustment. Pay special attention to the visibility policy and resource capability binding, because they may affect tenant visibility, job image pulling, or storage capability.

### Disable or Enable Region

Disable a region when it requires maintenance, is being taken offline, or temporarily needs to stop hosting new resources. Before disabling a region, confirm whether availability zones, clusters, or running jobs still exist under the region.

1. Find the target region in the region list on the left.
2. Click `...` on the right side of the target region.
3. Select `Disable` or `Enable`.
4. Read the confirmation prompt and confirm the impact scope.
5. Submit after confirmation.

Disabling a region usually affects new resource creation or new job scheduling under that region. Before the operation, confirm whether clusters, running jobs, or tenant resource dependencies still exist.

## Manage Availability Zones

### Edit Availability Zone

Edit an availability zone when the availability zone display name or description needs to be adjusted.

1. Select the target region.
2. Find the target availability zone in the `Availability Zone` section on the right.
3. Click `Edit` in the availability zone row.
4. Modify editable fields.
5. Click `Confirm` to save.

### Disable or Enable Availability Zone

Disable an availability zone when it requires maintenance or needs to stop hosting new jobs temporarily.

1. Select the target region.
2. Find the target availability zone in the `Availability Zone` section on the right.
3. Click `Disable` or `Enable`.
4. Read the confirmation prompt and submit.

Disabling an availability zone usually affects new job assignment under that availability zone. Before the operation, confirm the current status of clusters and jobs under the availability zone.

### View Availability Zone Resources

1. Select the target region.
2. Expand the target availability zone in the `Availability Zone` section on the right.
3. View the cluster list under the availability zone.
4. Determine the resource load based on GPU, CPU, MEM, and DISK usage.
5. If resources are insufficient, go to `Clusters` to view cluster details, nodes, and monitoring data.

## Configuration Rules and Impact

- **Configuration order**: Create a region first, then create an availability zone, and finally register clusters under the corresponding availability zone.
- **Image service**: Bind an available image service when adding a region. Otherwise, later jobs may fail to pull images normally.
- **Storage components**: Enable object storage, file storage, and block storage as needed. Do not force-enable a component in a region before the corresponding component is connected.
- **Public region**: Suitable for platform-wide shared resource pools, such as shared test resource pools or public training resource pools.
- **Dedicated region**: Suitable for tenant-limited, business-limited, or isolated resource pools, such as department-owned GPU resource pools.
- **Disable impact**: Disabling a region or availability zone may affect new job scheduling, new cluster registration, or new resource creation. In production environments, confirm the business window and impact scope before the operation.
- **Resource observation**: Cluster resource usage under an availability zone helps quickly assess capacity, but it does not replace cluster node monitoring. When troubleshooting resource bottlenecks, go to the cluster or node detail page.
- **Multilingual display name**: Display names need to be maintained separately for Chinese and English to avoid empty names or inconsistent meanings in different language environments.

## FAQ

### Image service dropdown is empty

**Symptom:** When adding a region, the image service dropdown has no selectable items.

**Possible Causes:**

- The image component has not been connected.
- The image component has been connected but is not enabled or is in an abnormal state.
- The current account does not have permission to view or bind image services.

**How to Handle:**

1. Go to `Resource Pools > Image Services` and check whether an available image service exists.
2. Confirm that the image service status is normal and that the Endpoint or access address is usable.
3. Confirm that the current account has permission to bind the image service.
4. Return to the Add Region dialog, refresh the page, and try again.

### Storage component cannot be enabled or dropdown is empty

**Symptom:** Object storage, file storage, or block storage cannot be selected, or there are no selectable components after the switch is enabled.

**Possible Causes:**

- The corresponding storage component has not been connected.
- The component is not enabled, is abnormal, or cannot be bound.
- The current account does not have permission to view or bind the corresponding component.

**How to Handle:**

1. According to the component type, go to `Resource Pools > Object Storage`, `Resource Pools > File Storage`, or `Resource Pools > Block Storage`.
2. Check whether the component has been connected and is available.
3. Check whether the component matches the target region plan.
4. After confirming permissions, reopen the Add Region dialog.

### Region status is abnormal

**Symptom:** After a region is created, its status is not `Normal`, or it appears in the `Disabled` or `Invalid` list when filtering.

**Possible Causes:**

- The region has been manually disabled.
- The bound image service or storage component is in an abnormal state.
- The region configuration does not meet platform check conditions.

**How to Handle:**

1. Clear the status filter and confirm whether the region exists.
2. Open the region details and check the image component and storage component status.
3. If the region is disabled, confirm the impact scope before enabling it.
4. If a component is abnormal, repair the corresponding component first, then return to the region page and confirm the status.

### Availability Zone ID reports an error

**Symptom:** When adding an availability zone, the availability zone ID cannot be submitted or the system reports a validation failure.

**Possible Causes:**

- The availability zone ID duplicates an existing availability zone.
- The name does not meet page validation requirements.
- The wrong region is selected, causing the ID plan to be inconsistent with the ownership relationship.

**How to Handle:**

1. Check whether the currently selected region is correct.
2. Use a recommended format that includes the region prefix and sequence number, such as `wuhan-1`.
3. Avoid temporary meanings, spaces, or names that are hard to identify.
4. If submission still fails, use a combination of lowercase letters, numbers, and hyphens and try again.

### Region ID / Availability Zone ID naming is hard to maintain after using a poor name

**Symptom:** The region or availability zone has been created, but the ID meaning is unclear. Later cluster registration, resource ownership troubleshooting, or capacity statistics become difficult.

**Possible Causes:**

- A name with a temporary meaning is used, such as `test1`.
- A name without business meaning is used, such as `aaa`.
- A seemingly standardized name lacks regional meaning, such as `region01`.
- The availability zone ID does not reflect the owning region, resource type, or sequence number.

**How to Handle:**

1. When creating new resources, use names that reflect the region and hierarchy.
2. Recommended region IDs: `wuhan`, `prod-wuhan`.
3. Recommended availability zone IDs: `wuhan-1`, `wuhan-gpu-1`, `prod-wuhan-1`.
4. Not recommended: `test1`, because its test meaning becomes invalid over time; `aaa`, because the resource ownership cannot be identified; `region01`, because the actual region cannot be determined.
5. Created region IDs and availability zone IDs are disabled on the edit page and cannot be modified after creation. If the existing naming already affects maintenance, plan a new region or availability zone and gradually migrate clusters and jobs.

### Failed to disable a region

**Symptom:** Disabling a region fails, or the system reports that dependent resources exist.

**Possible Causes:**

- Availability zones or clusters still exist under the region.
- Running jobs or resource dependencies still exist under the region.
- The current account does not have sufficient permissions.

**How to Handle:**

1. Expand the region details and check availability zones and cluster resources.
2. Go to `Resource Pools > Clusters` and confirm the status and jobs of related clusters.
3. Complete job migration or resource decommissioning during a business window.
4. Confirm permissions and the impact scope before disabling the region again.

### No cluster resources under an availability zone

**Symptom:** The availability zone has been created, but no cluster cards or resource usage are displayed after it is expanded.

**Possible Causes:**

- No cluster has been registered under the availability zone.
- The cluster was registered to another region or availability zone.
- The cluster is abnormal, and resource information is not displayed normally.

**How to Handle:**

1. Go to `Resource Pools > Clusters` and check whether clusters belong to the region and availability zone.
2. If no cluster exists, register a cluster according to the initial configuration flow.
3. If the cluster ownership is wrong, adjust it using the platform-supported method or register it again.
4. If the cluster status is abnormal, continue troubleshooting on the cluster details and node pages.

## Next Steps

After completing this chapter, continue to check or perform the following:

1. Go to `Resource Pools > Clusters` to register clusters, and confirm that the new region and availability zone can be selected.
2. In the region details, confirm that the image service status is normal and that Endpoint and IP information are as expected.
3. If storage components are enabled, confirm that object storage, file storage, or block storage components are normal.
4. Associate specifications and required storage with the target cluster.
5. Submit a test job and confirm that images can be pulled, resources can be scheduled, storage can be mounted, and the job can run normally.

## Notes

- Region IDs and availability zone IDs are resource boundary identifiers. Name them according to long-term plans and avoid temporary names.
- Region IDs can contain only lowercase letters, numbers, and hyphens. Availability zone IDs are also recommended to use a combination of lowercase letters, numbers, and hyphens.
- Region IDs and availability zone IDs cannot be modified after creation. Confirm the naming, ownership, and display names before submitting.
- Before taking screenshots, check whether credentials, tokens, certificates, private keys, access keys, or internal sensitive data are exposed on the page.
- The current account must have permissions to view and bind image services, storage components, regions, and availability zones. If a dropdown is empty, first check component status and account permissions.
