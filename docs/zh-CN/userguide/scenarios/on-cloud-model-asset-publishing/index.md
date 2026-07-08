---
prev: false
next: true
---

# On Cloud 模型资产上架

指导运营管理员在完成云资源接入后，准备运行时资产（推理镜像、推理框架）并组装为可部署的模型资产，为后续的部署与调用提供业务侧资产。

## 文档索引

| 文档 | 说明 | 状态 |
| --- | --- | --- |
| 场景概览 | 模型资产上架场景的角色、目标、3 模块依赖与完成标志 | 当前页面 |
| [推理镜像](./Runtime-Images/) | 录入运行时镜像（仓库地址 + Tag + 框架类型 + 是否内置），作为推理框架的基础 | 已迁入 |
| [推理框架](./Frameworks/) | 绑定推理镜像 + 端口 + 启动命令，形成可部署的运行时模板（框架类型：vllm / tgi / sglang / ollama / asr / tts / sdk-stable-diffusion / comfyui）| 已迁入 |
| [模型库](./Models/) | 3 步添加模型：元模型 + 上架版本 → 部署配置（云侧部署点 + 云上模型 + 算力方案 + 输出配置）→ 确认 | 已迁入 |

## 相关场景

- **[On Cloud 云资源接入](../on-cloud-resource-access)**（上游）：本场景依赖其云平台 / 云账号 / 资源池 / 授权配置；元模型来自 [发布模型（预设置）](../publish-model-preconfiguration)
- **[On Cloud 模型部署与调用](../on-cloud-model-deployment-calling)**（下游）：在本场景的模型库基础上创建部署实例并对外提供调用
- **[On Cloud 资源计量监控](../on-cloud-resource-metering-monitoring)**（下游）：对已部署的模型进行用量与计费监控
- **[平台治理与访问控制](../platform-governance-access-control)**（横向）：在租户 / 组织维度的访问控制，约束模型资产的可见与可调用范围