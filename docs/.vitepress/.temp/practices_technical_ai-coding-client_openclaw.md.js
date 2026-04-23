import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"OpenClaw Integration","description":"","frontmatter":{},"headers":[],"relativePath":"practices/technical/ai-coding-client/openclaw.md","filePath":"practices/technical/ai-coding-client/openclaw.md"}');
const _sfc_main = { name: "practices/technical/ai-coding-client/openclaw.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="openclaw-integration" tabindex="-1">OpenClaw Integration <a class="header-anchor" href="#openclaw-integration" aria-label="Permalink to “OpenClaw Integration”">​</a></h1><h2 id="document-purpose" tabindex="-1">Document Purpose <a class="header-anchor" href="#document-purpose" aria-label="Permalink to “Document Purpose”">​</a></h2><p>This document describes a recommended integration pattern between OpenClaw and AGIOne services.</p><h2 id="integration-steps-example" tabindex="-1">Integration Steps (Example) <a class="header-anchor" href="#integration-steps-example" aria-label="Permalink to “Integration Steps (Example)”">​</a></h2><ol><li>Create a dedicated project and API token in AGIOne.</li><li>Configure OpenClaw endpoint to AGIOne gateway URL.</li><li>Set model routing and request timeout policies.</li><li>Run connectivity and prompt-response validation tests.</li></ol><h2 id="recommended-configuration-example" tabindex="-1">Recommended Configuration (Example) <a class="header-anchor" href="#recommended-configuration-example" aria-label="Permalink to “Recommended Configuration (Example)”">​</a></h2><ul><li>Separate tokens for dev/staging/production</li><li>Enable request retry with capped backoff</li><li>Configure usage quota and alert thresholds</li></ul><h2 id="validation-checklist" tabindex="-1">Validation Checklist <a class="header-anchor" href="#validation-checklist" aria-label="Permalink to “Validation Checklist”">​</a></h2><ul><li>Authentication succeeds with configured token</li><li>Request latency is within expected baseline</li><li>Error logs are visible in monitoring pipeline</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("practices/technical/ai-coding-client/openclaw.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const openclaw = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  openclaw as default
};
