import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Model Deployment","description":"","frontmatter":{},"headers":[],"relativePath":"userguide/mode-deployment.md","filePath":"userguide/mode-deployment.md"}');
const _sfc_main = { name: "userguide/mode-deployment.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="model-deployment" tabindex="-1">Model Deployment <a class="header-anchor" href="#model-deployment" aria-label="Permalink to “Model Deployment”">​</a></h1><h2 id="document-purpose" tabindex="-1">Document Purpose <a class="header-anchor" href="#document-purpose" aria-label="Permalink to “Document Purpose”">​</a></h2><p>This document provides a quick guide for deploying models, validating runtime readiness, and handling common deployment checks.</p><h2 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to “Prerequisites”">​</a></h2><ul><li>Available compute resources and runtime image</li><li>Model artifact path (registry/object storage/local repository)</li><li>Deployment permission for target project</li></ul><h2 id="deployment-steps-example" tabindex="-1">Deployment Steps (Example) <a class="header-anchor" href="#deployment-steps-example" aria-label="Permalink to “Deployment Steps (Example)”">​</a></h2><ol><li>Go to <code>Model &gt; Deployment</code> and click <code>Create</code>.</li><li>Select model source and runtime template.</li><li>Set replicas, resource limits, and route policy.</li><li>Submit deployment and wait for status <code>Running</code>.</li></ol><h2 id="validation-checklist-example" tabindex="-1">Validation Checklist (Example) <a class="header-anchor" href="#validation-checklist-example" aria-label="Permalink to “Validation Checklist (Example)”">​</a></h2><ul><li>Deployment status is healthy</li><li>Inference endpoint is reachable</li><li>Baseline test prompt returns expected response</li><li>Logs show no startup or dependency errors</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("userguide/mode-deployment.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const modeDeployment = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  modeDeployment as default
};
