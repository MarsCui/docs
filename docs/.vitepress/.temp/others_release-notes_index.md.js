import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Release Notes","description":"","frontmatter":{"prev":false,"next":true},"headers":[],"relativePath":"others/release-notes/index.md","filePath":"others/release-notes/index.md"}');
const _sfc_main = { name: "others/release-notes/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="release-notes" tabindex="-1">Release Notes <a class="header-anchor" href="#release-notes" aria-label="Permalink to “Release Notes”">​</a></h1><p>This section records version updates, including features, improvements, fixes, and compatibility notes.</p><h2 id="documents" tabindex="-1">Documents <a class="header-anchor" href="#documents" aria-label="Permalink to “Documents”">​</a></h2><table tabindex="0"><thead><tr><th>Document</th><th>Purpose</th></tr></thead><tbody><tr><td><a href="./example.html">Release Notes (Example)</a></td><td>Example format for publishing release notes</td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("others/release-notes/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
