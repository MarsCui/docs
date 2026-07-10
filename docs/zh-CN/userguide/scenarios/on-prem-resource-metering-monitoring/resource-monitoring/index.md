# 监控设备、节点与作业

## 功能入口

- **角色**：运营管理员
- **菜单**：AI 基础设施（On-Prem） > 监控 > 设备监控 / 节点统计 / 作业监控
- **路由**：`/powerone/monitor/device`、`/powerone/monitor/node`、`/powerone/monitor/work`

## 操作步骤

1. 在 **设备监控** 中按厂商、型号、节点筛选，确认全部 4 张 NPU 卡可见。
2. 检查每张卡的利用率、显存、温度和健康状态。
3. 在 **节点统计** 中确认承载 NPU 的节点在线，CPU、内存和磁盘没有异常高水位。
4. 在 **作业监控** 中定位占用 NPU 的部署或训练作业。
5. 将异常设备对应到节点和作业，再决定处理硬件、驱动、配额还是应用参数。

![设备监控](./images/devices.png)

![节点统计](./images/nodes.png)

![作业监控](./images/jobs.png)

## 4 张 NPU 卡的巡检表

| 检查项 | 预期结果 |
| --- | --- |
| 设备数量 | 4 张卡全部可见 |
| 健康状态 | 无离线、掉卡或持续告警 |
| 设备占用 | 与运行中作业申请卡数一致 |
| 节点状态 | Ready，指标持续更新 |
| 作业状态 | 无异常排队或反复失败 |

## 完成检查

- 可以从设备定位到节点和占用作业。
- 作业申请卡数、设备占用和租户配额三者一致。
- 异常设备能够被单独识别，不会误判为整个集群不可用。

## 操作手册

- [设备监控](/zh-CN/usermanual/ai-infra-on-prem/operator/monitoring/devices/)
- [节点统计](/zh-CN/usermanual/ai-infra-on-prem/operator/monitoring/nodes/)
- [作业监控](/zh-CN/usermanual/ai-infra-on-prem/operator/monitoring/jobs/)
