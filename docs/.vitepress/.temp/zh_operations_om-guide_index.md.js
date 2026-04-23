import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"运维指南","description":"","frontmatter":{"prev":false,"next":true},"headers":[],"relativePath":"zh/operations/om-guide/index.md","filePath":"zh/operations/om-guide/index.md"}');
const _sfc_main = { name: "zh/operations/om-guide/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="运维指南" tabindex="-1">运维指南 <a class="header-anchor" href="#运维指南" aria-label="Permalink to “运维指南”">​</a></h1><p>本章节用于说明运维场景下的标准操作流程，帮助提升平台稳定性与治理规范性。</p><h2 id="文档清单" tabindex="-1">文档清单 <a class="header-anchor" href="#文档清单" aria-label="Permalink to “文档清单”">​</a></h2><table tabindex="0"><thead><tr><th>文档</th><th>用途</th></tr></thead><tbody><tr><td><a href="./user.html">用户管理</a></td><td>运维侧用户访问治理、权限变更与账号异常处理</td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("zh/operations/om-guide/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
