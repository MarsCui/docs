---
prev: false
next: true
---

# 模型的消费与收益

本场景帮助模型调用方核对自己的调用消耗，帮助模型提供方核对客户调用和模型收益，并用同一时间范围、模型和计费口径完成对账。

## 场景目标

- 调用方能从调用记录定位 Token、次数、时长和消费结果。
- 提供方能按模型和客户查看调用量、成功率和收益。
- 用量、收益和调用日志能在同一时间范围内互相验证。
- 异常可以定位到模型、调用方、账期或计费配置。

## 开始前准备

1. 确认当前账号是调用方还是模型提供方。
2. 明确目标模型、供应方、时间范围、账期和计费单位。
3. 准备调用记录中的请求时间或请求标识，排障材料保持脱敏。

## 操作流程

| 角色 | 操作 | 参考手册 | 完成标志 |
| --- | --- | --- | --- |
| 调用方 | 查看自己的调用概览和日志 | [我的调用概览](../../../usermanual/model-services/user/my-calls/overview/)、[调用日志](../../../usermanual/model-services/user/my-calls/call-logs/) | 调用状态、模型和时间可定位 |
| 调用方 | 查看模型用量 | [模型用量](../../../usermanual/model-services/user/usage-revenue/model-usage/) | Token、次数或时长与调用记录一致 |
| 提供方 | 查看客户调用概览、日志和分析 | [客户调用概览](../../../usermanual/model-services/user/customer-calls/overview/)、[客户调用日志](../../../usermanual/model-services/user/customer-calls/call-logs/)、[客户调用分析](../../../usermanual/model-services/user/customer-calls/call-analytics/) | 客户维度数据可定位 |
| 提供方 | 查看模型收益 | [模型收益](../../../usermanual/model-services/user/usage-revenue/model-revenue/) | 收益与有效调用和价格规则对应 |
| 双方 | 对照发布时的计费方式和币种 | [我的模型](../../../usermanual/model-services/user/studio/my-models/)、[币种设置](../../../usermanual/model-services/operator/settings/currency-settings/) | 计费单位、价格和账期一致 |

## 推荐对账顺序

1. 先从调用日志确认请求是否成功以及实际 Token、次数或时长。
2. 再查看模型用量，确认统计时间范围和模型筛选一致。
3. 提供方按相同范围查看客户调用和模型收益。
4. 如结果不一致，回到模型发布配置核对计费模式、价格、币种和生效时间。

## 完成检查

- [ ] 调用日志与用量统计中的模型、时间和调用数量一致。
- [ ] 失败或取消的调用是否计费符合当前规则。
- [ ] 提供方客户调用数据能对应调用方记录。
- [ ] 收益金额能回溯到有效用量和生效价格。
- [ ] 对账材料不包含完整 Prompt、响应正文或密钥。

## 常见失败分支

| 现象 | 优先检查 |
| --- | --- |
| 用量为空 | 时间范围、模型筛选、调用是否成功和统计延迟 |
| 用量突然升高 | 调用日志、客户或项目维度、重试和并发变化 |
| 收益为空 | 模型是否产生收费调用、价格配置和收益账期 |
| 用量与收益不一致 | 计费模式、币种、价格生效时间和免费调用规则 |

## 功能截图

![模型用量概览](./images/model-usage-overview.png)

![模型收益概览](./images/model-revenue-overview.png)
