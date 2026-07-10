# 配置规格指标与资源规格

## 功能入口

- **角色**：运营管理员
- **菜单**：AI 基础设施（On-Prem） > 资源池 > 规格指标 / 资源规格
- **路由**：`/powerone/resourcepool/flavor/type`、`/powerone/resourcepool/flavor/list`

## 操作步骤

1. 进入 **规格指标**，确认 NPU 指标的 k8s-key 与设备插件上报值一致。
2. 按需补充 selector-key，确保调度能够定位到正确的卡型或节点。
3. 进入 **资源规格**，分别创建 1 卡、2 卡和 4 卡规格。
4. 为每个规格配置 CPU、内存、NPU 数量及必要的存储要求。
5. 将规格关联到已接入集群，并使用测试作业验证可调度性。

![规格指标列表](./images/spec-metrics-list.png)

![资源规格列表](./images/resource-specs-list.png)

## 4 张 NPU 卡的推荐规划

| 规格 | NPU 数量 | 适用场景 |
| --- | ---: | --- |
| `npu-1` | 1 | 功能验证、小模型推理 |
| `npu-2` | 2 | 双卡并行或中等规模推理 |
| `npu-4` | 4 | 单任务独占全部卡 |

创建 4 卡规格前，应确认 4 张卡能否被同一节点或同一调度拓扑同时分配。若卡分布在多个节点，不要默认单个 Pod 可以跨节点申请全部 4 张卡。

## 完成检查

- 三档规格都能在模板或作业创建页被选择。
- 规格申请的资源 key 与节点上报一致。
- 1 卡测试作业成功后，再验证 2 卡和 4 卡规格。

## 操作手册

- [规格指标](/zh-CN/usermanual/ai-infra-on-prem/operator/resource-pools/spec-metrics/)
- [资源规格](/zh-CN/usermanual/ai-infra-on-prem/operator/resource-pools/resource-specs/)
