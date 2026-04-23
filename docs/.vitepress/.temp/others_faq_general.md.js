import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"General FAQ","description":"","frontmatter":{},"headers":[],"relativePath":"others/faq/general.md","filePath":"others/faq/general.md"}');
const _sfc_main = { name: "others/faq/general.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="general-faq" tabindex="-1">General FAQ <a class="header-anchor" href="#general-faq" aria-label="Permalink to “General FAQ”">​</a></h1><h2 id="account" tabindex="-1">Account <a class="header-anchor" href="#account" aria-label="Permalink to “Account”">​</a></h2><h3 id="q-i-cannot-login-what-should-i-check-first" tabindex="-1">Q: I cannot login. What should I check first? <a class="header-anchor" href="#q-i-cannot-login-what-should-i-check-first" aria-label="Permalink to “Q: I cannot login. What should I check first?”">​</a></h3><ul><li>Verify username/password or verification code validity</li><li>Confirm account status is not locked/disabled</li><li>Check SSO binding if enterprise login is enabled</li></ul><h3 id="q-how-do-i-reset-my-password" tabindex="-1">Q: How do I reset my password? <a class="header-anchor" href="#q-how-do-i-reset-my-password" aria-label="Permalink to “Q: How do I reset my password?”">​</a></h3><ul><li>Use the <code>Forgot password</code> flow (if enabled), or contact admin to reset in admin portal.</li></ul><h2 id="deployment" tabindex="-1">Deployment <a class="header-anchor" href="#deployment" aria-label="Permalink to “Deployment”">​</a></h2><h3 id="q-installation-fails-due-to-image-pull-errors" tabindex="-1">Q: Installation fails due to image pull errors. <a class="header-anchor" href="#q-installation-fails-due-to-image-pull-errors" aria-label="Permalink to “Q: Installation fails due to image pull errors.”">​</a></h3><ul><li>Confirm registry network connectivity</li><li>Verify registry credentials and certificate trust</li><li>Check node DNS and time synchronization (NTP)</li></ul><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to “Usage”">​</a></h2><h3 id="q-model-requests-are-slow-how-to-troubleshoot" tabindex="-1">Q: Model requests are slow. How to troubleshoot? <a class="header-anchor" href="#q-model-requests-are-slow-how-to-troubleshoot" aria-label="Permalink to “Q: Model requests are slow. How to troubleshoot?”">​</a></h3><ul><li>Check resource utilization (GPU/CPU/memory)</li><li>Review request logs and error rate</li><li>Validate concurrency and quota policies</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("others/faq/general.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const general = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  general as default
};
