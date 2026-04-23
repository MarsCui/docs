import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"版本说明","description":"","frontmatter":{"prev":false,"next":true},"headers":[],"relativePath":"zh/others/release-notes/index.md","filePath":"zh/others/release-notes/index.md"}');
const _sfc_main = { name: "zh/others/release-notes/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="版本说明" tabindex="-1">版本说明 <a class="header-anchor" href="#版本说明" aria-label="Permalink to “版本说明”">​</a></h1><p>本章节用于记录版本更新内容，包括新增能力、优化项、修复项以及兼容性与升级注意事项。</p><h2 id="文档清单" tabindex="-1">文档清单 <a class="header-anchor" href="#文档清单" aria-label="Permalink to “文档清单”">​</a></h2><table tabindex="0"><thead><tr><th>文档</th><th>用途</th></tr></thead><tbody><tr><td><a href="./example.html">版本说明（示例）</a></td><td>版本说明的建议发布格式示例</td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("zh/others/release-notes/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
