import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"支持矩阵","description":"","frontmatter":{},"headers":[],"relativePath":"zh/product/limitations/support-matrix.md","filePath":"zh/product/limitations/support-matrix.md"}');
const _sfc_main = { name: "zh/product/limitations/support-matrix.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="支持矩阵" tabindex="-1">支持矩阵 <a class="header-anchor" href="#支持矩阵" aria-label="Permalink to “支持矩阵”">​</a></h1><h2 id="软硬件支持矩阵-示例" tabindex="-1">软硬件支持矩阵（示例） <a class="header-anchor" href="#软硬件支持矩阵-示例" aria-label="Permalink to “软硬件支持矩阵（示例）”">​</a></h2><p>用于快速确认环境兼容性，实际项目以发布说明与现场验证结果为准。</p><h3 id="操作系统支持" tabindex="-1">操作系统支持 <a class="header-anchor" href="#操作系统支持" aria-label="Permalink to “操作系统支持”">​</a></h3><table tabindex="0"><thead><tr><th>操作系统</th><th>版本</th><th>支持状态</th></tr></thead><tbody><tr><td>Ubuntu</td><td>20.04 / 22.04</td><td>推荐</td></tr><tr><td>CentOS / Rocky</td><td>7.x / 8.x</td><td>条件支持</td></tr><tr><td>Kylin / UOS</td><td>指定版本</td><td>评估支持</td></tr></tbody></table><h3 id="容器与编排支持" tabindex="-1">容器与编排支持 <a class="header-anchor" href="#容器与编排支持" aria-label="Permalink to “容器与编排支持”">​</a></h3><table tabindex="0"><thead><tr><th>组件</th><th>版本建议</th><th>说明</th></tr></thead><tbody><tr><td>Docker</td><td>24.x+</td><td>建议开启兼容配置</td></tr><tr><td>Kubernetes</td><td>1.24 - 1.29</td><td>推荐配合 GPU Operator</td></tr><tr><td>Helm</td><td>3.10+</td><td>用于安装与升级管理</td></tr></tbody></table><h3 id="模型支持-示例" tabindex="-1">模型支持（示例） <a class="header-anchor" href="#模型支持-示例" aria-label="Permalink to “模型支持（示例）”">​</a></h3><table tabindex="0"><thead><tr><th>模型类别</th><th>代表模型</th><th>支持状态</th></tr></thead><tbody><tr><td>通用对话模型</td><td>Llama/Qwen 等</td><td>支持</td></tr><tr><td>向量模型</td><td>BGE/GTE 等</td><td>支持</td></tr><tr><td>重排序模型</td><td>BGE-Reranker 等</td><td>条件支持</td></tr><tr><td>多模态模型</td><td>视觉语言模型（部分）</td><td>评估支持</td></tr></tbody></table><h3 id="接口支持" tabindex="-1">接口支持 <a class="header-anchor" href="#接口支持" aria-label="Permalink to “接口支持”">​</a></h3><table tabindex="0"><thead><tr><th>接口类型</th><th>支持状态</th><th>说明</th></tr></thead><tbody><tr><td>REST API</td><td>支持</td><td>推荐默认接入方式</td></tr><tr><td>OpenAI 兼容接口</td><td>支持</td><td>便于应用快速迁移</td></tr><tr><td>WebSocket（按场景）</td><td>条件支持</td><td>需结合版本确认</td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("zh/product/limitations/support-matrix.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const supportMatrix = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  supportMatrix as default
};
