import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Dashboard","description":"","frontmatter":{},"headers":[],"relativePath":"usermanual/dashboard.md","filePath":"usermanual/dashboard.md"}');
const _sfc_main = { name: "usermanual/dashboard.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="dashboard" tabindex="-1">Dashboard <a class="header-anchor" href="#dashboard" aria-label="Permalink to “Dashboard”">​</a></h1><h2 id="document-purpose" tabindex="-1">Document Purpose <a class="header-anchor" href="#document-purpose" aria-label="Permalink to “Document Purpose”">​</a></h2><p>This document introduces dashboard modules and helps users quickly locate key operational information.</p><h2 id="dashboard-modules-example" tabindex="-1">Dashboard Modules (Example) <a class="header-anchor" href="#dashboard-modules-example" aria-label="Permalink to “Dashboard Modules (Example)”">​</a></h2><ul><li>Resource overview: compute usage, quota, and health</li><li>Model service status: deployment and endpoint state</li><li>Alerts and events: recent warnings and failures</li><li>Quick actions: common entry points for daily operations</li></ul><h2 id="typical-daily-workflow-example" tabindex="-1">Typical Daily Workflow (Example) <a class="header-anchor" href="#typical-daily-workflow-example" aria-label="Permalink to “Typical Daily Workflow (Example)”">​</a></h2><ol><li>Review service health and active alerts.</li><li>Check resource utilization and quota trends.</li><li>Open affected modules for troubleshooting.</li><li>Record actions and close resolved alerts.</li></ol><h2 id="validation-checklist-example" tabindex="-1">Validation Checklist (Example) <a class="header-anchor" href="#validation-checklist-example" aria-label="Permalink to “Validation Checklist (Example)”">​</a></h2><ul><li>Core widgets load successfully</li><li>Metrics refresh without timeout</li><li>Alert links open target detail pages</li><li>User-specific quick actions are available</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("usermanual/dashboard.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dashboard = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dashboard as default
};
