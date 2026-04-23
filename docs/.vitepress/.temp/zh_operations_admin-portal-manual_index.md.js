import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"管理门户手册","description":"","frontmatter":{"prev":false,"next":true},"headers":[],"relativePath":"zh/operations/admin-portal-manual/index.md","filePath":"zh/operations/admin-portal-manual/index.md"}');
const _sfc_main = { name: "zh/operations/admin-portal-manual/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="管理门户手册" tabindex="-1">管理门户手册 <a class="header-anchor" href="#管理门户手册" aria-label="Permalink to “管理门户手册”">​</a></h1><p>本章节用于说明管理门户中的核心管理流程，包括用户管理与权限治理。</p><h2 id="文档清单" tabindex="-1">文档清单 <a class="header-anchor" href="#文档清单" aria-label="Permalink to “文档清单”">​</a></h2><table tabindex="0"><thead><tr><th>文档</th><th>用途</th></tr></thead><tbody><tr><td><a href="./user.html">用户管理</a></td><td>说明用户创建、角色授权、状态控制等管理操作</td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("zh/operations/admin-portal-manual/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
