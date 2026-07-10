---
prev: false
next: true
---

# 发布文本 / 对话模型

本页说明文本或对话模型发布时需要重点验证的配置。完整通用流程见 [发布公有模型](../provider-quick-guide)。

## 开始前准备

- 运营方已准备元模型、模型来源、模板、标签和币种。
- 已确认上游模型 ID、协议地址、认证方式和默认参数。
- 已明确上下文、输入输出 Token 限制、计费和限流策略。

## 操作要点

1. 在 `我的模型 > 我的发布` 选择发布到公有区或私有区。
2. 选择文本或对话模型对应的元模型和模型来源。
3. 配置上游模型 ID、请求地址和认证请求头。
4. 选择 OpenAI Chat Completions、Responses 或其他兼容协议并完成连通性测试。
5. 配置上下文、输入输出 Token、高级能力和默认参数。
6. 配置按 Token 计费、阶梯价格、缓存价格和免费额度。
7. 配置 RPM、TPM 等限流并保存或提交审核。

详细字段和结果校验见 [我的模型操作手册](../../../../usermanual/model-services/user/studio/my-models/) 和 [从发布到调用模型](../../../../usermanual/model-services/end-to-end/publish-and-call-model/)。

## 完成检查

- [ ] 协议测试通过，流式与非流式响应符合预期。
- [ ] 上下文和 Token 限制与上游模型能力一致。
- [ ] 计费和限流配置符合发布计划。
- [ ] 提交审核后能查看状态，发布后能在目标范围调用。

## 功能截图

![文本模型基本信息](../images/publish-basic-info-zh.png)

![模型来源与协议](../images/publish-source-protocol-zh.png)
