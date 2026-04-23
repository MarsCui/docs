import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"User Guide","description":"","frontmatter":{"prev":false,"next":true},"headers":[],"relativePath":"userguide/index.md","filePath":"userguide/index.md"}');
const _sfc_main = { name: "userguide/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="user-guide" tabindex="-1">User Guide <a class="header-anchor" href="#user-guide" aria-label="Permalink to “User Guide”">​</a></h1><p>This section provides operational guidance for compute resource integration, compute resource management, and model deployment.</p><h2 id="documents" tabindex="-1">Documents <a class="header-anchor" href="#documents" aria-label="Permalink to “Documents”">​</a></h2><table tabindex="0"><thead><tr><th>Document</th><th>Purpose</th></tr></thead><tbody><tr><td><a href="./public-ai-integration.html">Public Integration</a></td><td>Integrate public AI/compute resources into the platform</td></tr><tr><td><a href="./a100-management.html">A100 Management</a></td><td>Manage A100 resources, quotas, and runtime status</td></tr><tr><td><a href="./mode-deployment.html">Model Deployment</a></td><td>Deploy models and validate runtime availability</td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("userguide/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
