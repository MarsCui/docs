import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Claude Code","description":"","frontmatter":{},"headers":[],"relativePath":"practices/technical/ai-coding-client/claude-code.md","filePath":"practices/technical/ai-coding-client/claude-code.md"}');
const _sfc_main = { name: "practices/technical/ai-coding-client/claude-code.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="claude-code" tabindex="-1">Claude Code <a class="header-anchor" href="#claude-code" aria-label="Permalink to “Claude Code”">​</a></h1><h2 id="document-purpose" tabindex="-1">Document Purpose <a class="header-anchor" href="#document-purpose" aria-label="Permalink to “Document Purpose”">​</a></h2><p>This document provides a practical guide for connecting Claude Code to AGIOne model services in enterprise environments.</p><h2 id="integration-steps-example" tabindex="-1">Integration Steps (Example) <a class="header-anchor" href="#integration-steps-example" aria-label="Permalink to “Integration Steps (Example)”">​</a></h2><ol><li>Prepare AGIOne endpoint and project-scoped token.</li><li>Configure Claude Code client with endpoint, auth header, and model ID.</li><li>Apply workspace-level policy for safe prompt and output handling.</li><li>Validate generation quality and fallback behavior.</li></ol><h2 id="operational-recommendations" tabindex="-1">Operational Recommendations <a class="header-anchor" href="#operational-recommendations" aria-label="Permalink to “Operational Recommendations”">​</a></h2><ul><li>Use separate environments for development and production</li><li>Enforce token rotation and least-privilege access</li><li>Keep prompt templates versioned for stable team workflows</li></ul><h2 id="validation-checklist" tabindex="-1">Validation Checklist <a class="header-anchor" href="#validation-checklist" aria-label="Permalink to “Validation Checklist”">​</a></h2><ul><li>Client can call the configured model successfully</li><li>Access control policies are enforced by project scope</li><li>Request logs are traceable for audit and troubleshooting</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("practices/technical/ai-coding-client/claude-code.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const claudeCode = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  claudeCode as default
};
