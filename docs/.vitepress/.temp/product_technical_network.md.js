import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Network Planning","description":"","frontmatter":{},"headers":[],"relativePath":"product/technical/network.md","filePath":"product/technical/network.md"}');
const _sfc_main = { name: "product/technical/network.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="network-planning" tabindex="-1">Network Planning <a class="header-anchor" href="#network-planning" aria-label="Permalink to “Network Planning”">​</a></h1><h2 id="recommended-network-layout" tabindex="-1">Recommended Network Layout <a class="header-anchor" href="#recommended-network-layout" aria-label="Permalink to “Recommended Network Layout”">​</a></h2><p>AGIOne recommends separating traffic into management, service, and data planes to improve isolation and operability.</p><ul><li>Management plane: administration, monitoring, and log collection</li><li>Service plane: API ingress and business-system integrations</li><li>Data plane: model serving, storage access, and inter-node communication</li></ul><h2 id="port-policy-example" tabindex="-1">Port Policy (Example) <a class="header-anchor" href="#port-policy-example" aria-label="Permalink to “Port Policy (Example)”">​</a></h2><table tabindex="0"><thead><tr><th>Category</th><th>Example Ports</th><th>Notes</th></tr></thead><tbody><tr><td>Web/API</td><td>80 / 443 / 8080</td><td>External service ingress</td></tr><tr><td>Cluster communication</td><td>10250 / 6443</td><td>Kubernetes control and node communication</td></tr><tr><td>Observability</td><td>9090 / 3000</td><td>Metrics and visualization (depends on deployment)</td></tr><tr><td>Storage access</td><td>9000 / 2049</td><td>Object storage or network storage access</td></tr></tbody></table><h2 id="security-recommendations" tabindex="-1">Security Recommendations <a class="header-anchor" href="#security-recommendations" aria-label="Permalink to “Security Recommendations”">​</a></h2><ul><li>Open only required ports and enforce allowlists</li><li>Prefer HTTPS and internal PKI/certificates for production</li><li>For cross-subnet routing, explicitly define routes and firewall rules</li><li>Limit admin/control ports to internal networks whenever possible</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("product/technical/network.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const network = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  network as default
};
