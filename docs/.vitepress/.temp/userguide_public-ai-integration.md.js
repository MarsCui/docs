import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Public Integration","description":"","frontmatter":{},"headers":[],"relativePath":"userguide/public-ai-integration.md","filePath":"userguide/public-ai-integration.md"}');
const _sfc_main = { name: "userguide/public-ai-integration.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="public-integration" tabindex="-1">Public Integration <a class="header-anchor" href="#public-integration" aria-label="Permalink to “Public Integration”">​</a></h1><h2 id="document-purpose" tabindex="-1">Document Purpose <a class="header-anchor" href="#document-purpose" aria-label="Permalink to “Document Purpose”">​</a></h2><p>This document describes how to connect public AI/compute resources to the platform for unified scheduling and governance.</p><h2 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to “Prerequisites”">​</a></h2><ul><li>External resource endpoint and API credentials</li><li>Network route from platform to external endpoint</li><li>Tenant/project permissions to create integrations</li></ul><h2 id="integration-steps-example" tabindex="-1">Integration Steps (Example) <a class="header-anchor" href="#integration-steps-example" aria-label="Permalink to “Integration Steps (Example)”">​</a></h2><ol><li>Go to <code>Compute &gt; Integration</code> and create a new integration.</li><li>Select provider type and enter endpoint/credential information.</li><li>Configure access policy, quota, and region tags.</li><li>Run connection test and save configuration.</li></ol><h2 id="validation-checklist-example" tabindex="-1">Validation Checklist (Example) <a class="header-anchor" href="#validation-checklist-example" aria-label="Permalink to “Validation Checklist (Example)”">​</a></h2><ul><li>Connection test returns success</li><li>Resource appears in integration inventory</li><li>Quota policy is applied to target project</li><li>At least one test workload can be scheduled successfully</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("userguide/public-ai-integration.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const publicAiIntegration = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  publicAiIntegration as default
};
