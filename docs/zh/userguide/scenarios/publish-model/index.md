---
prev: false
next: true
---

# 发布模型

指导模型提供方将上游模型接入 AGIOne 平台，发布为可体验、可调用的模型服务。

## 文档索引

| 文档 | 说明 | 状态 |
| --- | --- | --- |
| 场景概览 | 发布模型场景的角色、目标、完成标志、支持的模型类型与通用三步流程 | 当前页面 |
| [发布多模态（对话）模型](./Multimodal/) | 多模态对话模型发布；支持 OpenAI-ChatCompletions / OpenAI-Responses / Anthropic-Messages 协议；阶梯计费 + 缓存命中独立计价 + 联网搜索 | 已迁入 |
| [发布嵌入模型](./Embedding/) | 嵌入模型发布；仅 OpenAI-Embeddings 协议；输入模态为文本；无输出模态 / 输出 Token 限制 / 回调配置 | 已迁入 |
| [发布图片模型](./Image/) | 图片模型发布；OpenAI-Images 协议；支持按张计费（识别字段 `n`）；可配置异步返回结果解析 | 已迁入 |
| [发布语音模型](./Speech/) | 语音（TTS）模型发布；OpenAI-Audio 协议；按字符计费；支持异步返回结果解析 | 已迁入 |
| [发布视频模型](./Video/) | 视频模型发布；OpenAI-Video 协议；通常为异步调用，需配置回调地址、厂商模板与 6 项返回结果解析；按分辨率等多维组合定价 | 已迁入 |

## 相关场景

- **[发布模型（预设置）](../publish-model-preconfiguration)**：发布前需由运营管理员完成元模型、模型来源、模板、标签、币种与审核配置
- **[模型发布审批](../model-publishing-approval)**：提交审核后由管理员完成审批流程
- **[发布聚合模型](../publish-aggregation-model)**：聚合模型路由策略的独立场景说明
- **[模型的体验与调用](../model-experience-api-calling)**：发布完成后，最终用户如何检索、体验与 API 调用