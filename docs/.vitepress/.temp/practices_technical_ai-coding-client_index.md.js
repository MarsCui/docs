import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"AI Coding Integration","description":"","frontmatter":{},"headers":[],"relativePath":"practices/technical/ai-coding-client/index.md","filePath":"practices/technical/ai-coding-client/index.md"}');
const _sfc_main = { name: "practices/technical/ai-coding-client/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ai-coding-integration" tabindex="-1">AI Coding Integration <a class="header-anchor" href="#ai-coding-integration" aria-label="Permalink to “AI Coding Integration”">​</a></h1><h2 id="document-purpose" tabindex="-1">Document Purpose <a class="header-anchor" href="#document-purpose" aria-label="Permalink to “Document Purpose”">​</a></h2><p>This page introduces best practices for integrating AI coding clients with AGIOne-managed compute and model services.</p><h2 id="included-integrations" tabindex="-1">Included Integrations <a class="header-anchor" href="#included-integrations" aria-label="Permalink to “Included Integrations”">​</a></h2><ul><li><a href="./openclaw.html">OpenClaw</a></li><li><a href="./claude-code.html">Claude Code</a></li></ul><h2 id="common-integration-principles" tabindex="-1">Common Integration Principles <a class="header-anchor" href="#common-integration-principles" aria-label="Permalink to “Common Integration Principles”">​</a></h2><ul><li>Use standardized API endpoints and token policies</li><li>Isolate project-level credentials and quotas</li><li>Enable request observability for debugging and governance</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("practices/technical/ai-coding-client/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
