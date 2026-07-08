---
prev: false
next: true
---

# On Cloud 模型部署与调用

指导用户（租户成员）从云上模型广场快速部署模型实例，并获取 API 调用能力。

## 文档索引

| 文档 | 说明 | 状态 |
| --- | --- | --- |
| 场景概览 | 模型部署与调用场景的用户侧视角、3 模块旅程与平台侧依赖 | 当前页面 |
| [接入账号](./Access-Accounts/) | 用户添加自己的云账号（账号名 + 云平台 + Access Key ID / Secret）| 已迁入 |
| [快速部署](./Quick-Deployment/) | 2 步快速部署：Step 1 选云账号 + 模型 → Step 2 智能推荐（部署模式 + 推理引擎 + 业务策略 + 算力方案）| 已迁入 |
| [我的部署](./My-Deployments/) | 部署列表（云平台 Tab + 3 个筛选）+ 8 种操作（启动 / 停止 / 详情 / API 调用 / 监控 / 事件 / 发布 / 删除）| 已迁入 |

## 相关场景

### 平台侧（上游 / Operator 视角）
- **[On Cloud 云资源接入](../on-cloud-resource-access)**：用户需先确认 Operator 已接入目标云平台并完成业务-资源池授权 / 租户-云平台授权
- **[On Cloud 模型资产上架](../on-cloud-model-asset-publishing)**：用户可在"快速部署 Step 1"中可选的模型库由本场景提供

### 平台侧（下游 / 跨场景跳转）
- **[发布模型](../publish-model)**：在"我的部署 → 发布"操作后跳转至此，完成 Step 1 基本信息 + Step 2 计费 + Step 3 限流，把部署实例发布为可调用服务
- **[On Cloud 资源计量监控](../on-cloud-resource-metering-monitoring)**：对已部署的实例进行用量与计费监控

### 用户侧（下游）
- **[模型的体验与调用](../model-experience-api-calling)**：发布完成后，最终用户如何检索、体验与 API 调用