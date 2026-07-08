---
prev: false
next: true
---

# On Cloud 云资源接入

指导运营管理员将外部云平台资源（云厂商、云账号、地域）接入 AGIOne 平台，并完成面向业务与租户的授权分配，为后续的部署、调用与计量提供底层资源。

## 文档索引

| 文档 | 说明 | 状态 |
| --- | --- | --- |
| 场景概览 | 云资源接入场景的角色、目标、2 大类 / 5 模块依赖与完成标志 | 当前页面 |
| [接入云平台](./Access-CloudType/) | 添加公有云 / 私有云厂商，配置厂商标识、多语言显示名、（私有云）链接地址、Logo | 已迁入 |
| [接入账号](./Cloud-Accounts/) | 在已接入的云平台下添加云账号，配置 Access Key ID / Secret | 已迁入 |
| [接入资源池](./Resource-Pools/) | 按云平台启用 / 禁用地域节点，维护多语言显示名 | 已迁入 |
| [业务-资源池授权](./Business-Region-Auth/) | 按业务类型 × 云平台 × 地域分配使用权限，实现地域级精准管控 | 已迁入 |
| [租户-云平台授权](./Tenant-Cloud-Auth/) | 按租户 × 云平台分配使用权限（支持单个租户或所有租户）| 已迁入 |

## 相关场景

- **[On Cloud 模型资产上架](../on-cloud-model-asset-publishing)**：在本场景的云平台 / 云账号 / 资源池基础上，配置推理框架、模型库与推理镜像（部署资产）
- **[On Cloud 模型部署与调用](../on-cloud-model-deployment-calling)**：完成资产上架后的部署与调用流程
- **[On Cloud 资源计量监控](../on-cloud-resource-metering-monitoring)**：对已部署的云上资源进行用量与计费监控
- **[平台治理与访问控制](../platform-governance-access-control)**：在租户 / 组织维度的访问控制，与本场景的"授权"形成互补