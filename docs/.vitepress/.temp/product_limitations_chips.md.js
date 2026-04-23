import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Managed Chips","description":"","frontmatter":{},"headers":[],"relativePath":"product/limitations/chips.md","filePath":"product/limitations/chips.md"}');
const _sfc_main = { name: "product/limitations/chips.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="managed-chips" tabindex="-1">Managed Chips <a class="header-anchor" href="#managed-chips" aria-label="Permalink to “Managed Chips”">​</a></h1><h2 id="supported-chips-for-governance-example" tabindex="-1">Supported Chips for Governance (Example) <a class="header-anchor" href="#supported-chips-for-governance-example" aria-label="Permalink to “Supported Chips for Governance (Example)”">​</a></h2><p>This page describes AGIOne support for chip platforms under governance/management, to help with early-stage sizing and environment assessment.</p><table tabindex="0"><thead><tr><th>Chip Platform</th><th>Support Status</th><th>Notes</th></tr></thead><tbody><tr><td>NVIDIA A100/H100</td><td>Fully supported</td><td>Recommended for production high-concurrency workloads</td></tr><tr><td>NVIDIA A800</td><td>Fully supported</td><td>Common for on‑prem deployments</td></tr><tr><td>NVIDIA T4/L4</td><td>Conditionally supported</td><td>Suitable for light workloads and PoC</td></tr><tr><td>Domestic AI accelerators (selected models)</td><td>Under evaluation</td><td>Requires driver/framework version validation</td></tr></tbody></table><h2 id="version-and-dependency-requirements-example" tabindex="-1">Version and Dependency Requirements (Example) <a class="header-anchor" href="#version-and-dependency-requirements-example" aria-label="Permalink to “Version and Dependency Requirements (Example)”">​</a></h2><ul><li>Use validated driver version combinations</li><li>Container runtime and GPU plugins must match kernel/driver compatibility</li><li>In multi-node clusters, standardize driver versions across nodes</li></ul><h2 id="known-limitations-example" tabindex="-1">Known Limitations (Example) <a class="header-anchor" href="#known-limitations-example" aria-label="Permalink to “Known Limitations (Example)”">​</a></h2><ul><li>Some legacy GPUs may be unstable under long-context inference workloads</li><li>Mixed-chip clusters may be constrained by low-level driver compatibility for cross-node scheduling</li><li>Some models may require chip-specific operators or conversion flows</li></ul><h2 id="evaluation-recommendations" tabindex="-1">Evaluation Recommendations <a class="header-anchor" href="#evaluation-recommendations" aria-label="Permalink to “Evaluation Recommendations”">​</a></h2><ul><li>Run a 24-hour stability stress test before production go-live</li><li>Benchmark key models per chip type as a baseline</li><li>For non-recommended models, run PoC validation before production deployment</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("product/limitations/chips.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const chips = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  chips as default
};
