import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Deployment","description":"","frontmatter":{"prev":false,"next":true},"headers":[],"relativePath":"installation/index.md","filePath":"installation/index.md"}');
const _sfc_main = { name: "installation/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="deployment" tabindex="-1">Deployment <a class="header-anchor" href="#deployment" aria-label="Permalink to “Deployment”">​</a></h1><p>This section contains deployment, configuration, and acceptance documentation for AGIOne products.</p><h2 id="documents" tabindex="-1">Documents <a class="header-anchor" href="#documents" aria-label="Permalink to “Documents”">​</a></h2><table tabindex="0"><thead><tr><th>Document</th><th>Purpose</th></tr></thead><tbody><tr><td><a href="./agione-deployment-requirements.html">(AGIOne) Deployment Configuration Requirements</a></td><td>Minimum and recommended deployment requirements for AGIOne</td></tr><tr><td><a href="./calculator-deplyment-requirments.html">(Calculator) Deployment Configuration Requirements</a></td><td>Environment and resource requirements for Calculator deployment</td></tr><tr><td><a href="./agione-quick-install.html">(AGIOne) Quick Installation Guide</a></td><td>Fast installation and baseline verification for AGIOne</td></tr><tr><td><a href="./calculator-quick-install.html">(Calculator) Quick Installation Guide</a></td><td>Fast installation and baseline verification for Calculator</td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("installation/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
