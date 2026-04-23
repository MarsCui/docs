import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"常见问题（FAQ）","description":"","frontmatter":{"prev":false,"next":true},"headers":[],"relativePath":"zh/others/faq/index.md","filePath":"zh/others/faq/index.md"}');
const _sfc_main = { name: "zh/others/faq/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="常见问题-faq" tabindex="-1">常见问题（FAQ） <a class="header-anchor" href="#常见问题-faq" aria-label="Permalink to “常见问题（FAQ）”">​</a></h1><p>本章节汇总常见问题与快速排查建议，便于自助支持与交付阶段快速定位。</p><h2 id="文档清单" tabindex="-1">文档清单 <a class="header-anchor" href="#文档清单" aria-label="Permalink to “文档清单”">​</a></h2><table tabindex="0"><thead><tr><th>文档</th><th>用途</th></tr></thead><tbody><tr><td><a href="./general.html">通用问题</a></td><td>账号、部署、使用过程中的常见问题</td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("zh/others/faq/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
