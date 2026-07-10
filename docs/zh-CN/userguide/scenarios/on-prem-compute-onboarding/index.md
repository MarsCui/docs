---
prev: false
next: true
---

# 场景概览-On-Prem 算力纳管

本场景介绍如何把本地 Kubernetes 集群及其中的 GPU、NPU、XPU 接入 AGIOne，并把硬件能力转换为可调度的资源规格。对于“我有 4 张 NPU 卡，如何管理？”这一任务，本场景负责完成卡型识别、集群接入和规格规划。

## 适用角色

- 运营管理员
- 集群运维人员

## 场景目标

- 平台能够识别目标 NPU 型号和资源 key。
- 集群节点能够上报全部 4 张 NPU 卡。
- 用户可以选择 1 卡、2 卡或 4 卡资源规格。

## 开始前准备

- 已准备 Kubernetes 集群连接信息和目标地域、可用区。
- 已确认 NPU 厂商、型号、单卡显存及设备插件上报的资源 key。
- 已确认 4 张卡位于哪些节点，以及是否允许跨节点调度。

## 推荐阅读路径

1. [维护加速卡型号](./accelerator-management/)
2. [接入集群并核对设备](./cluster-onboarding/)
3. [配置规格指标与资源规格](./resource-specifications/)
4. [构建推理模板](../on-prem-inference-template/)
5. [配置配额并监控资源](../on-prem-resource-metering-monitoring/)

## 文档索引

| 文档 | 说明 |
| --- | --- |
| [维护加速卡型号](./accelerator-management/) | 确认 NPU 型号、显存、适配状态和 Kubernetes 资源 key |
| [接入集群并核对设备](./cluster-onboarding/) | 注册集群，确认节点和 4 张 NPU 卡全部上报 |
| [配置规格指标与资源规格](./resource-specifications/) | 建立调度指标，并规划 1 卡、2 卡、4 卡规格 |

## 完成标志

- 集群状态可用，节点状态正常。
- 平台识别到 4 张目标 NPU 卡。
- 资源规格能够被推理模板或测试作业选择。

## 相关场景

- [On-Prem 推理模板构建](../on-prem-inference-template/)
- [On-Prem 模型部署与状态检查](../on-prem-model-deployment-status/)
- [On-Prem 资源计量与监控](../on-prem-resource-metering-monitoring/)
