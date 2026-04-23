import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"(AGIOne) Deployment Configuration Requirements","description":"","frontmatter":{},"headers":[],"relativePath":"installation/agione-deployment-requirements.md","filePath":"installation/agione-deployment-requirements.md"}');
const _sfc_main = { name: "installation/agione-deployment-requirements.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="agione-deployment-configuration-requirements" tabindex="-1">(AGIOne) Deployment Configuration Requirements <a class="header-anchor" href="#agione-deployment-configuration-requirements" aria-label="Permalink to “(AGIOne) Deployment Configuration Requirements”">​</a></h1><h2 id="document-purpose" tabindex="-1">Document Purpose <a class="header-anchor" href="#document-purpose" aria-label="Permalink to “Document Purpose”">​</a></h2><p>This document defines the deployment prerequisites for AGIOne, including hardware, software, network, and access requirements for PoC and production environments.</p><h2 id="resource-requirements-example" tabindex="-1">Resource Requirements (Example) <a class="header-anchor" href="#resource-requirements-example" aria-label="Permalink to “Resource Requirements (Example)”">​</a></h2><table tabindex="0"><thead><tr><th>Type</th><th>Minimum</th><th>Recommended</th></tr></thead><tbody><tr><td>Control Node</td><td>8 vCPU / 16 GB RAM / 200 GB disk</td><td>16 vCPU / 32 GB RAM / 500 GB SSD</td></tr><tr><td>GPU Node</td><td>16 vCPU / 64 GB RAM / 1x 24 GB+ GPU</td><td>32 vCPU / 128 GB RAM / 2-4x 40 GB+ GPU</td></tr><tr><td>Shared Storage</td><td>&gt;= 500 GB available</td><td>&gt;= 2 TB available</td></tr></tbody></table><h2 id="software-requirements-example" tabindex="-1">Software Requirements (Example) <a class="header-anchor" href="#software-requirements-example" aria-label="Permalink to “Software Requirements (Example)”">​</a></h2><ul><li>OS: Ubuntu 20.04/22.04 or equivalent enterprise Linux</li><li>Runtime: Docker 24.x+ or Kubernetes 1.24+</li><li>GPU stack: NVIDIA Driver and CUDA versions must be compatible</li></ul><h2 id="network-and-access-requirements-example" tabindex="-1">Network and Access Requirements (Example) <a class="header-anchor" href="#network-and-access-requirements-example" aria-label="Permalink to “Network and Access Requirements (Example)”">​</a></h2><ul><li>Inter-node connectivity is required for control and data traffic</li><li>Required service ports must be opened by policy</li><li>Installation account with sufficient privileges must be provided</li><li>Image registry and certificate access must be prepared in advance</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("installation/agione-deployment-requirements.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const agioneDeploymentRequirements = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  agioneDeploymentRequirements as default
};
