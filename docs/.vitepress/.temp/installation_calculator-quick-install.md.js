import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"(Calculator) Quick Installation Guide","description":"","frontmatter":{},"headers":[],"relativePath":"installation/calculator-quick-install.md","filePath":"installation/calculator-quick-install.md"}');
const _sfc_main = { name: "installation/calculator-quick-install.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="calculator-quick-installation-guide" tabindex="-1">(Calculator) Quick Installation Guide <a class="header-anchor" href="#calculator-quick-installation-guide" aria-label="Permalink to “(Calculator) Quick Installation Guide”">​</a></h1><h2 id="document-purpose" tabindex="-1">Document Purpose <a class="header-anchor" href="#document-purpose" aria-label="Permalink to “Document Purpose”">​</a></h2><p>This guide describes the quick installation process for Calculator and a baseline validation approach for initial delivery.</p><h2 id="installation-steps-example" tabindex="-1">Installation Steps (Example) <a class="header-anchor" href="#installation-steps-example" aria-label="Permalink to “Installation Steps (Example)”">​</a></h2><ol><li>Environment readiness: verify node resources, storage, and internal connectivity.</li><li>Deployment preparation: prepare installation package, image access, and configuration templates.</li><li>Install components: execute installation commands and complete required parameters.</li><li>Post-install check: validate key services and end-to-end connectivity.</li></ol><h2 id="quick-verification-checklist-example" tabindex="-1">Quick Verification Checklist (Example) <a class="header-anchor" href="#quick-verification-checklist-example" aria-label="Permalink to “Quick Verification Checklist (Example)”">​</a></h2><ul><li>Web/API access is available</li><li>Key services are stable without repeated restarts</li><li>One core workflow is verified end-to-end</li><li>Basic observability metrics are visible without critical alerts</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("installation/calculator-quick-install.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const calculatorQuickInstall = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  calculatorQuickInstall as default
};
