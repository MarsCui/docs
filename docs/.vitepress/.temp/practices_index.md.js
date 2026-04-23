import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Best Practices","description":"","frontmatter":{"prev":false,"next":true},"headers":[],"relativePath":"practices/index.md","filePath":"practices/index.md"}');
const _sfc_main = { name: "practices/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="best-practices" tabindex="-1">Best Practices <a class="header-anchor" href="#best-practices" aria-label="Permalink to “Best Practices”">​</a></h1><p>This section provides technical and project best practices for AGIOne delivery and ecosystem integration.</p><h2 id="documentation-structure" tabindex="-1">Documentation Structure <a class="header-anchor" href="#documentation-structure" aria-label="Permalink to “Documentation Structure”">​</a></h2><h3 id="technical-ai-coding-client" tabindex="-1"><code>technical/ai-coding-client/</code> <a class="header-anchor" href="#technical-ai-coding-client" aria-label="Permalink to “technical/ai-coding-client/”">​</a></h3><p>AI coding client integration practices and implementation guidance.</p><table tabindex="0"><thead><tr><th>Document</th><th>Purpose</th></tr></thead><tbody><tr><td><a href="./technical/ai-coding-client/openclaw.html">OpenClaw</a></td><td>Integration approach and configuration example for OpenClaw</td></tr><tr><td><a href="./technical/ai-coding-client/claude-code.html">Claude Code</a></td><td>Integration approach and operation checklist for Claude Code</td></tr></tbody></table><h3 id="project" tabindex="-1"><code>project/</code> <a class="header-anchor" href="#project" aria-label="Permalink to “project/”">​</a></h3><p>Project-level implementation cases and reusable delivery experience.</p><table tabindex="0"><thead><tr><th>Document</th><th>Purpose</th></tr></thead><tbody><tr><td><a href="./project/thailand-cp.html">Bare Metal Compute Resource Management and Services for Thailand CP</a></td><td>Real-world project case and delivery lessons learned</td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("practices/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
