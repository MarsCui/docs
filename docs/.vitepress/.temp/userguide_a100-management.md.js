import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"A100 Management","description":"","frontmatter":{},"headers":[],"relativePath":"userguide/a100-management.md","filePath":"userguide/a100-management.md"}');
const _sfc_main = { name: "userguide/a100-management.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="a100-management" tabindex="-1">A100 Management <a class="header-anchor" href="#a100-management" aria-label="Permalink to “A100 Management”">​</a></h1><h2 id="document-purpose" tabindex="-1">Document Purpose <a class="header-anchor" href="#document-purpose" aria-label="Permalink to “Document Purpose”">​</a></h2><p>This document explains how to manage A100 compute resources, including allocation, monitoring, and lifecycle operations.</p><h2 id="typical-operations-example" tabindex="-1">Typical Operations (Example) <a class="header-anchor" href="#typical-operations-example" aria-label="Permalink to “Typical Operations (Example)”">​</a></h2><ul><li>Register and label A100 nodes</li><li>Assign resource quotas to projects/tenants</li><li>Configure scheduling strategy and priority</li><li>Monitor utilization, memory, and health status</li></ul><h2 id="management-workflow-example" tabindex="-1">Management Workflow (Example) <a class="header-anchor" href="#management-workflow-example" aria-label="Permalink to “Management Workflow (Example)”">​</a></h2><ol><li>Open <code>Compute &gt; Resource Management</code>.</li><li>Filter resources by <code>GPU Type = A100</code>.</li><li>Configure quota and binding for target project.</li><li>Enable monitoring dashboards and alert policies.</li></ol><h2 id="validation-checklist-example" tabindex="-1">Validation Checklist (Example) <a class="header-anchor" href="#validation-checklist-example" aria-label="Permalink to “Validation Checklist (Example)”">​</a></h2><ul><li>A100 resources are visible and in healthy state</li><li>Quotas are enforced as configured</li><li>Scheduling behavior matches policy</li><li>Alerts are triggered for critical threshold events</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("userguide/a100-management.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const a100Management = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  a100Management as default
};
