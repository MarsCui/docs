---
prev: false
next: true
---

# Scenario Overview - On-Prem Resource Metering and Monitoring

This scenario explains how to grant NPU quota and inspect device, node, and workload usage. For four NPU cards, it answers who may use how many cards, which workload occupies each card, and whether any device is unhealthy.

## Applicable Roles

- Operator
- Provider and End User viewing their own usage

## Goals

- Grant an appropriate NPU quota to the tenant.
- Show all four cards in device monitoring.
- Correlate an abnormal card with its node and workload.

## Before You Start

- NPU onboarding and monitoring collection are complete.
- The tenant allocation policy is defined.
- A test workload is available.

## Recommended Reading Order

1. [Configure Tenant NPU Quota](./tenant-quotas/)
2. [Monitor Devices, Nodes, and Workloads](./resource-monitoring/)
3. [Deploy and Check a Model](../on-prem-model-deployment-status/)

## Document Index

| Document | Description |
| --- | --- |
| [Configure Tenant NPU Quota](./tenant-quotas/) | Grant the tenant an allowed NPU count |
| [Monitor Devices, Nodes, and Workloads](./resource-monitoring/) | Verify health and usage from device, node, and workload views |

## Completion Criteria

- Tenant quota supports the intended workload.
- Device monitoring shows all four cards.
- Workload usage, node capacity, and device utilization agree.
