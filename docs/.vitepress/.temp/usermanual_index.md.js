import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"User Manual","description":"","frontmatter":{"prev":false,"next":true},"headers":[],"relativePath":"usermanual/index.md","filePath":"usermanual/index.md"}');
const _sfc_main = { name: "usermanual/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="user-manual" tabindex="-1">User Manual <a class="header-anchor" href="#user-manual" aria-label="Permalink to “User Manual”">​</a></h1><p>This section provides quick-start instructions for account registration, login, and dashboard usage.</p><h2 id="documents" tabindex="-1">Documents <a class="header-anchor" href="#documents" aria-label="Permalink to “Documents”">​</a></h2><table tabindex="0"><thead><tr><th>Document</th><th>Purpose</th></tr></thead><tbody><tr><td><a href="./register.html">Register</a></td><td>Create a new user account and complete initial profile setup</td></tr><tr><td><a href="./login.html">Login</a></td><td>Sign in securely and handle common login scenarios</td></tr><tr><td><a href="./dashboard.html">Dashboard</a></td><td>Understand dashboard modules and daily operations</td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("usermanual/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
