import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Purchase & Activation","description":"","frontmatter":{"prev":false,"next":true},"headers":[],"relativePath":"license/index.md","filePath":"license/index.md"}');
const _sfc_main = { name: "license/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="purchase-activation" tabindex="-1">Purchase &amp; Activation <a class="header-anchor" href="#purchase-activation" aria-label="Permalink to “Purchase &amp; Activation”">​</a></h1><p>This section covers license purchasing and activation flows for AGIOne products.</p><h2 id="documents" tabindex="-1">Documents <a class="header-anchor" href="#documents" aria-label="Permalink to “Documents”">​</a></h2><table tabindex="0"><thead><tr><th>Document</th><th>Purpose</th></tr></thead><tbody><tr><td><a href="./online-payment-activation.html">Online Payment &amp; Activation</a></td><td>Purchase a license online and complete platform activation</td></tr><tr><td><a href="./activation-code-activation.html">Activation Code &amp; Activation</a></td><td>Activate the platform using a pre-issued activation code</td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("license/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
