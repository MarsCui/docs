# Monitor Devices, Nodes, and Workloads

## Entry

- **Role:** Operator
- **Menu:** AI Infra (On-Prem) > Monitoring > Device / Node / Workload Monitoring
- **Routes:** `/powerone/monitor/device`, `/powerone/monitor/node`, `/powerone/monitor/work`

## Steps

1. In Device Monitoring, verify that all four NPU cards are visible.
2. Check utilization, memory, temperature, and health for each card.
3. In Node Monitoring, verify that accelerator nodes are Ready and not resource constrained.
4. In Workload Monitoring, locate deployments or training jobs using the cards.
5. Correlate an abnormal device with its node and workload before choosing a hardware, driver, quota, or application fix.

![Device monitoring](./images/devices.png)

![Node monitoring](./images/nodes.png)

![Workload monitoring](./images/jobs.png)

## Completion Check

- Every device maps to a node and occupying workload.
- Requested card count, device usage, and tenant quota agree.
- A single unhealthy card can be isolated without treating the entire cluster as unavailable.

- [Device Monitoring manual](/usermanual/ai-infra-on-prem/operator/monitoring/devices/)
- [Node Monitoring manual](/usermanual/ai-infra-on-prem/operator/monitoring/nodes/)
- [Workload Monitoring manual](/usermanual/ai-infra-on-prem/operator/monitoring/jobs/)
