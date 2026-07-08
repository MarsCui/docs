# File Storage Component

:::: info Document Information
Version: v1.0
Updated: 2026-07-06
::::

## Feature Overview

`File Storage Component` is used to connect shared directory capabilities. Common implementations include NFS. File storage is suitable for multiple jobs, nodes, or instances to read and write the same directory, such as shared datasets, model repositories, code directories, and output results.

| Item | Content |
| --- | --- |
| Applicable Role | Operator |
| Navigation Path | Resource Pools > File Storage Component |
| Page Route | `/powerone/resourcepool/file-storage` |
| Managed Objects | NFS service, shared path, access policy, capacity, mount path, and associated regions |
| Typical Use | Provide shared directory mounts, model repositories, local Git repositories, or dataset directories |

### Beginner View

A file storage component is like a shared filing cabinet in the platform. It determines which clusters can mount shared directories. Operators first connect NFS or compatible shared storage to the platform, and then user-side instances and jobs can use the same directory to read data, models, and output files.

### Terms Quick Reference

| Term | Description |
| --- | --- |
| NFS | Network File System, used to share directories over the network. |
| Export Path | The shared directory exported by the NFS server. |
| Mount Path | The path after mounting inside a container or node. |
| Read/Write Policy | Controls whether the mounted directory is read-only or read/write. |
| Tenant Isolation | Permission boundaries that prevent different tenants from accidentally reading or writing the same directory. |

## Prerequisites

1. NFS or an equivalent file storage service has been deployed.
2. The shared path has been created, and access permissions, directory ownership, and network policies have been confirmed.
3. Target cluster nodes can access the NFS service address and exported directory.
4. Tenant directories, read/write policies, capacity, and backup policies have been planned.

## Page Description

The page displays connected file storage components, status, service address, shared path, capacity, and associated regions.

The following figure shows the file storage component page.

![File Storage Component](./images/file-storage-list.png)

## Register File Storage Component

### Pre-Operation Check

1. The NFS service address is accessible from target cluster nodes.
2. The shared path has been exported and permissions comply with the read/write policy.
3. The mount path does not conflict with container system directories or application directories.
4. Tenant isolation method and directory naming rules have been confirmed.

### Procedure

1. Go to `Resource Pools > File Storage Component`.
2. Click the register or add entrypoint.
3. Fill in the component name, NFS service address, shared path, capacity, and associated regions.
4. If the page provides connection testing, complete verification first.
5. After submission, return to the list and check component status.

### Parameters

| Field Name | Required | Field Type | Example | Description |
| --- | --- | --- | --- | --- |
| Component Name | Yes | Text | `nfs-shared-prod` | Display name of the file storage component. |
| Access Protocol | Yes | Enum | `NFS` | Shared file system protocol. |
| Shared Path | Yes | Text | `/exports/share` | Example path. Sanitize it before screenshots. |
| Bound Cluster | Conditionally required | Multi-select | `cluster-a` | Clusters that are allowed to mount the shared directory. |
| Status | System-generated | Enum | `Available` | Component registration and mount capability status. |

### Pitfalls

- Resource pool configuration affects job scheduling. Confirm running instances before making changes.
- If a drop-down list is empty, check region, permissions, and dependent component status first.
- Prepare replacement resources and a rollback plan before deleting or disabling resources.

### Result Validation

1. The component appears in the list and its status matches expectations.
2. The target region or cluster can select this file storage component.
3. A test job can mount the directory and complete read/write verification.
4. Directory capacity and permissions match expectations.

## FAQ

### File Storage Mount Fails

**Symptom:**

The job cannot mount the shared directory at startup, or the directory is not visible after mounting.

**Possible Causes:**

- The NFS service address or shared path is incorrect.
- Network from the target node to the NFS service is unreachable.
- NFS export permissions, directory ownership, or access policy is incorrect.

**Solution:**

1. Check the service address, shared path, and network connectivity.
2. Verify NFS mounting on the target node.
3. Adjust export permissions, directory ownership, and read/write policy.

### Cannot Write After Mounting

**Symptom:**

The directory is visible in the container, but writing files fails.

**Possible Causes:**

- The directory is configured as read-only.
- NFS server permissions or UID/GID do not match.
- The tenant directory isolation policy is inconsistent with the actual path.

**Solution:**

1. Confirm whether the access policy requires read/write.
2. Check server-side directory ownership, permissions, and export configuration.
3. Verify tenant subdirectory rules and the container runtime user.

## Follow-Up Operations

1. Reference the file storage component in region or cluster storage configuration.
2. Use a test job to verify read/write, concurrency, and capacity limits.
3. Include shared directories in backup, cleanup, and permission audits.

## Notes

- Do not configure shared directories with an overly broad public read/write scope.
- Before deleting or adjusting a shared path, confirm that no running jobs, model repositories, or code repositories depend on it.
