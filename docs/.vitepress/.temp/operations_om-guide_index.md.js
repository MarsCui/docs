import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"O&M Guide","description":"","frontmatter":{"prev":false,"next":true},"headers":[],"relativePath":"operations/om-guide/index.md","filePath":"operations/om-guide/index.md"}');
const _sfc_main = { name: "operations/om-guide/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="o-m-guide" tabindex="-1">O&amp;M Guide <a class="header-anchor" href="#o-m-guide" aria-label="Permalink to “O&amp;M Guide”">​</a></h1><p>This section provides operational guidance for daily operation and maintenance workflows.</p><h2 id="documents" tabindex="-1">Documents <a class="header-anchor" href="#documents" aria-label="Permalink to “Documents”">​</a></h2><table tabindex="0"><thead><tr><th>Document</th><th>Purpose</th></tr></thead><tbody><tr><td><a href="./user.html">User</a></td><td>O&amp;M user operations for access governance, role updates, and account troubleshooting</td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("operations/om-guide/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
