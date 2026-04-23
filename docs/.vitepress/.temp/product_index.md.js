import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Pre-Sales","description":"","frontmatter":{"prev":false,"next":true},"headers":[],"relativePath":"product/index.md","filePath":"product/index.md"}');
const _sfc_main = { name: "product/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="pre-sales" tabindex="-1">Pre-Sales <a class="header-anchor" href="#pre-sales" aria-label="Permalink to “Pre-Sales”">​</a></h1><p>This section contains pre-sales documentation for AGIOne products.</p><h2 id="documentation-structure" tabindex="-1">Documentation Structure <a class="header-anchor" href="#documentation-structure" aria-label="Permalink to “Documentation Structure”">​</a></h2><p>The product pre-sales documents are organized into three directories:</p><h3 id="technical" tabindex="-1"><code>technical/</code> <a class="header-anchor" href="#technical" aria-label="Permalink to “technical/”">​</a></h3><p>Technical overview and product capability details.</p><table tabindex="0"><thead><tr><th>Document</th><th>Purpose</th></tr></thead><tbody><tr><td><a href="./technical/overview.html">Overview</a></td><td>Product positioning, architecture, and core capabilities</td></tr><tr><td><a href="./technical/features.html">Features &amp; Ability</a></td><td>Supported frameworks, models, protocols, and functional abilities</td></tr><tr><td><a href="./technical/tech-highlights.html">Technical Highlights</a></td><td>Key technical advantages and differentiated highlights</td></tr></tbody></table><h3 id="limitations" tabindex="-1"><code>limitations/</code> <a class="header-anchor" href="#limitations" aria-label="Permalink to “limitations/”">​</a></h3><p>Compatibility boundaries and known constraints.</p><table tabindex="0"><thead><tr><th>Document</th><th>Purpose</th></tr></thead><tbody><tr><td><a href="./limitations/chips.html">Managed Chips</a></td><td>Supported chip platforms and management scope</td></tr><tr><td><a href="./limitations/support-matrix.html">Support Matrix</a></td><td>Compatibility matrix for hardware/software environments</td></tr><tr><td><a href="./limitations/limitations.html">Other Limitations</a></td><td>Product usage limitations and constraints</td></tr></tbody></table><h3 id="investigation" tabindex="-1"><code>investigation/</code> <a class="header-anchor" href="#investigation" aria-label="Permalink to “investigation/”">​</a></h3><p>Pre-sales investigation templates for requirement and environment assessment.</p><table tabindex="0"><thead><tr><th>Document</th><th>Purpose</th></tr></thead><tbody><tr><td><a href="./investigation/quick-requirement-investigation.html">Quick Requirements Investigation</a></td><td>Rapid requirement collection and scenario confirmation</td></tr><tr><td><a href="./investigation/quick-env-investigation.html">Quick Environmental Investigation</a></td><td>Rapid environment check for deployment readiness</td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("product/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
