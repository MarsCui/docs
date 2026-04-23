import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"用户指南","description":"","frontmatter":{"prev":false,"next":true},"headers":[],"relativePath":"zh/userguide/index.md","filePath":"zh/userguide/index.md"}');
const _sfc_main = { name: "zh/userguide/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="用户指南" tabindex="-1">用户指南 <a class="header-anchor" href="#用户指南" aria-label="Permalink to “用户指南”">​</a></h1><p>本章节用于说明算力资源接入、算力资源管理和模型部署等日常使用流程。</p><h2 id="文档清单" tabindex="-1">文档清单 <a class="header-anchor" href="#文档清单" aria-label="Permalink to “文档清单”">​</a></h2><table tabindex="0"><thead><tr><th>文档</th><th>用途</th></tr></thead><tbody><tr><td><a href="./public-ai-integration.html">公共算力接入</a></td><td>接入外部公共算力并纳入统一管理</td></tr><tr><td><a href="./a100-management.html">A100 管理</a></td><td>管理 A100 算力资源、配额与运行状态</td></tr><tr><td><a href="./mode-deployment.html">模型部署</a></td><td>执行模型部署并完成上线验证</td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("zh/userguide/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
