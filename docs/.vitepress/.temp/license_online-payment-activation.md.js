import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Online Payment & Activation","description":"","frontmatter":{},"headers":[],"relativePath":"license/online-payment-activation.md","filePath":"license/online-payment-activation.md"}');
const _sfc_main = { name: "license/online-payment-activation.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="online-payment-activation" tabindex="-1">Online Payment &amp; Activation <a class="header-anchor" href="#online-payment-activation" aria-label="Permalink to “Online Payment &amp; Activation”">​</a></h1><h2 id="document-purpose" tabindex="-1">Document Purpose <a class="header-anchor" href="#document-purpose" aria-label="Permalink to “Document Purpose”">​</a></h2><p>This document describes the end-to-end process for purchasing a license online and activating AGIOne.</p><h2 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to “Prerequisites”">​</a></h2><ul><li>A valid platform account with purchase permissions</li><li>Reachable billing/payment network endpoints</li><li>Target deployment information (instance ID, organization, contact)</li></ul><h2 id="process-example" tabindex="-1">Process (Example) <a class="header-anchor" href="#process-example" aria-label="Permalink to “Process (Example)”">​</a></h2><ol><li>Sign in to the purchase portal and choose the product edition.</li><li>Select billing cycle and license capacity.</li><li>Complete online payment and confirm order status.</li><li>Bind the order to target instance and trigger activation.</li><li>Verify activation status in the license management page.</li></ol><h2 id="validation-checklist-example" tabindex="-1">Validation Checklist (Example) <a class="header-anchor" href="#validation-checklist-example" aria-label="Permalink to “Validation Checklist (Example)”">​</a></h2><ul><li>Order status is <code>Paid</code> and visible in billing records</li><li>License status is <code>Activated</code> on the target instance</li><li>License validity period and quota match purchase details</li><li>Platform features gated by license are available</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("license/online-payment-activation.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const onlinePaymentActivation = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  onlinePaymentActivation as default
};
