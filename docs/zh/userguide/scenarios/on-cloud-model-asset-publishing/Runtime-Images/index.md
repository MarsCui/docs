# 推理镜像
## 操作步骤

### 添加镜像

1. 进入平台首页，点击左侧导航栏的 **"部署资产 > 推理镜像"** 菜单，进入推理镜像页面。
2. 点击页面右上角的 **"添加镜像"** 按钮，弹出「添加镜像」窗口。
![推理镜像](./images/Runtime-Images-list.png)
3. 在窗口中填写：
   - **"镜像名称"**（多语言）：中文简体（如 `vllm`）/ English（如 `vllm`）两个 Tab 独立维护。
   - **"镜像仓库地址"**：填写镜像仓库完整地址（如 `eas-registry-vpc.cn-shanghai.cr.aliyuncs.com/pai-eas/vllmv`）。
   - **"镜像 Tag"**：填写镜像版本标签（如 `0.9.1-modelgallery`）。
   - **"框架类型"**（多选枚举）：vllm / tgi / sglang / ollama / asr / tts / sdk-stable-diffusion / comfyui，至少选 1 个，用于关联到推理框架。
   - **"是否内置"**：单选 `是` / `否`，标识该镜像是否为平台内置镜像。
   - **"描述"**（多语言）：中文简体 / English 两个 Tab 独立维护，说明镜像用途（如 `vllm 0.9.1 modelgallery`）。
4. 确认所有配置无误后，点击 **"保存"** 按钮完成镜像添加；如需放弃，点击 **"取消"**。
![新增镜像](./images/Add-Image.png)
#### 参数说明

| 字段名称 | 字段类型 | 示例 | 说明 |
|----------|----------|------|------|
| 镜像名称（多语言） | 文本 | 中文 `vllm` / English `vllm` | 必填，两个 Tab 独立维护 |
| 镜像仓库地址 | 文本 | `eas-registry-vpc.cn-shanghai.cr.aliyuncs.com/pai-eas/vllmv` | 必填，完整镜像仓库地址 |
| 镜像 Tag | 文本 | `0.9.1-modelgallery` | 必填，镜像版本标签 |
| 框架类型 | 多选 | `vllm`、`tgi`、`sglang` | 必填，至少选 1 个，关联到推理框架 |
| 是否内置 | 单选 | `是` / `否` | 必填，标识是否为平台内置镜像 |
| 描述（多语言） | 文本 | 中文 `vllm 0.9.1 modelgallery` / English `vllm 0.9.1 modelgallery` | 选填，两个 Tab 独立维护 |

