import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"(AGIOne) Quick Installation Guide","description":"","frontmatter":{},"headers":[],"relativePath":"installation/agione-quick-install.md","filePath":"installation/agione-quick-install.md"}');
const _sfc_main = { name: "installation/agione-quick-install.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="agione-quick-installation-guide" tabindex="-1">(AGIOne) Quick Installation Guide <a class="header-anchor" href="#agione-quick-installation-guide" aria-label="Permalink to “(AGIOne) Quick Installation Guide”">​</a></h1><h2 id="document-purpose" tabindex="-1">Document Purpose <a class="header-anchor" href="#document-purpose" aria-label="Permalink to “Document Purpose”">​</a></h2><p>This guide provides a fast-track installation flow for AGIOne and a minimal validation checklist for PoC or staging environments.</p><h2 id="installation-steps-example" tabindex="-1">Installation Steps (Example) <a class="header-anchor" href="#installation-steps-example" aria-label="Permalink to “Installation Steps (Example)”">​</a></h2><ol><li>Prepare environment: verify compute resources, OS, and network connectivity.</li><li>Install prerequisites: container runtime, GPU driver, and required system packages.</li><li>Deploy platform: run installer script or Helm-based deployment.</li><li>Validate services: verify core service health and endpoint availability.</li></ol><h2 id="quick-verification-checklist-example" tabindex="-1">Quick Verification Checklist (Example) <a class="header-anchor" href="#quick-verification-checklist-example" aria-label="Permalink to “Quick Verification Checklist (Example)”">​</a></h2><ul><li>Core services are in healthy status</li><li>Web console and API endpoints are reachable</li><li>At least one model can be loaded and queried successfully</li><li>Logs and basic monitoring dashboards are accessible</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("installation/agione-quick-install.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const agioneQuickInstall = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  agioneQuickInstall as default
};
