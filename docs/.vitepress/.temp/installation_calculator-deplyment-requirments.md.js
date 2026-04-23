import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"(Calculator) Deployment Configuration Requirements","description":"","frontmatter":{},"headers":[],"relativePath":"installation/calculator-deplyment-requirments.md","filePath":"installation/calculator-deplyment-requirments.md"}');
const _sfc_main = { name: "installation/calculator-deplyment-requirments.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="calculator-deployment-configuration-requirements" tabindex="-1">(Calculator) Deployment Configuration Requirements <a class="header-anchor" href="#calculator-deployment-configuration-requirements" aria-label="Permalink to “(Calculator) Deployment Configuration Requirements”">​</a></h1><h2 id="document-purpose" tabindex="-1">Document Purpose <a class="header-anchor" href="#document-purpose" aria-label="Permalink to “Document Purpose”">​</a></h2><p>This document describes the deployment prerequisites for Calculator and is used as a baseline for environment assessment and resource planning.</p><h2 id="resource-requirements-example" tabindex="-1">Resource Requirements (Example) <a class="header-anchor" href="#resource-requirements-example" aria-label="Permalink to “Resource Requirements (Example)”">​</a></h2><table tabindex="0"><thead><tr><th>Type</th><th>Minimum</th><th>Recommended</th></tr></thead><tbody><tr><td>Application Node</td><td>8 vCPU / 16 GB RAM / 200 GB disk</td><td>16 vCPU / 32 GB RAM / 500 GB SSD</td></tr><tr><td>Compute Node</td><td>16 vCPU / 64 GB RAM / 1x GPU</td><td>32 vCPU / 128 GB RAM / multi-GPU</td></tr><tr><td>Data Storage</td><td>&gt;= 300 GB available</td><td>&gt;= 1 TB available</td></tr></tbody></table><h2 id="software-requirements-example" tabindex="-1">Software Requirements (Example) <a class="header-anchor" href="#software-requirements-example" aria-label="Permalink to “Software Requirements (Example)”">​</a></h2><ul><li>Supported Linux distribution and kernel versions</li><li>Compatible container runtime and orchestration stack</li><li>Stable DNS, NTP, and internal network services</li></ul><h2 id="pre-delivery-check-recommendations" tabindex="-1">Pre-Delivery Check Recommendations <a class="header-anchor" href="#pre-delivery-check-recommendations" aria-label="Permalink to “Pre-Delivery Check Recommendations”">​</a></h2><ul><li>Validate resource capacity and expected growth margin</li><li>Confirm network routes and port opening policies</li><li>Confirm installation account permissions and security approvals</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("installation/calculator-deplyment-requirments.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const calculatorDeplymentRequirments = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  calculatorDeplymentRequirments as default
};
