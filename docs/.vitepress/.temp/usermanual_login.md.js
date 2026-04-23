import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Login","description":"","frontmatter":{},"headers":[],"relativePath":"usermanual/login.md","filePath":"usermanual/login.md"}');
const _sfc_main = { name: "usermanual/login.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="login" tabindex="-1">Login <a class="header-anchor" href="#login" aria-label="Permalink to “Login”">​</a></h1><h2 id="document-purpose" tabindex="-1">Document Purpose <a class="header-anchor" href="#document-purpose" aria-label="Permalink to “Document Purpose”">​</a></h2><p>This document describes standard login flow, security checks, and common troubleshooting guidance.</p><h2 id="login-methods-example" tabindex="-1">Login Methods (Example) <a class="header-anchor" href="#login-methods-example" aria-label="Permalink to “Login Methods (Example)”">​</a></h2><ul><li>Username/password login</li><li>Email or phone with one-time verification code</li><li>Enterprise SSO login (if enabled)</li></ul><h2 id="login-steps-example" tabindex="-1">Login Steps (Example) <a class="header-anchor" href="#login-steps-example" aria-label="Permalink to “Login Steps (Example)”">​</a></h2><ol><li>Open the login page.</li><li>Select a login method and enter credentials.</li><li>Complete verification challenge if prompted.</li><li>Click <code>Sign In</code> and confirm landing page access.</li></ol><h2 id="common-issues-example" tabindex="-1">Common Issues (Example) <a class="header-anchor" href="#common-issues-example" aria-label="Permalink to “Common Issues (Example)”">​</a></h2><ul><li>Incorrect password or expired verification code</li><li>Account locked after repeated failed attempts</li><li>Missing SSO binding for enterprise users</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("usermanual/login.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  login as default
};
