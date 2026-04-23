import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Activation Code & Activation","description":"","frontmatter":{},"headers":[],"relativePath":"license/activation-code-activation.md","filePath":"license/activation-code-activation.md"}');
const _sfc_main = { name: "license/activation-code-activation.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="activation-code-activation" tabindex="-1">Activation Code &amp; Activation <a class="header-anchor" href="#activation-code-activation" aria-label="Permalink to “Activation Code &amp; Activation”">​</a></h1><h2 id="document-purpose" tabindex="-1">Document Purpose <a class="header-anchor" href="#document-purpose" aria-label="Permalink to “Document Purpose”">​</a></h2><p>This document explains how to activate AGIOne using an activation code provided by sales or support.</p><h2 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to “Prerequisites”">​</a></h2><ul><li>A valid activation code with available quota/time</li><li>Access to the platform license page</li><li>Required instance metadata (host ID, organization, contact)</li></ul><h2 id="process-example" tabindex="-1">Process (Example) <a class="header-anchor" href="#process-example" aria-label="Permalink to “Process (Example)”">​</a></h2><ol><li>Navigate to <code>License &gt; Activation</code>.</li><li>Enter activation code and verify code validity.</li><li>Confirm binding target and submit activation request.</li><li>Wait for activation result and refresh license status.</li></ol><h2 id="validation-checklist-example" tabindex="-1">Validation Checklist (Example) <a class="header-anchor" href="#validation-checklist-example" aria-label="Permalink to “Validation Checklist (Example)”">​</a></h2><ul><li>Activation code status changes to <code>Used</code> (or reduced remaining count)</li><li>Target instance shows <code>Activated</code> status</li><li>License expiry date and capacity are displayed correctly</li><li>No license-related blocking errors in system logs</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("license/activation-code-activation.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const activationCodeActivation = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  activationCodeActivation as default
};
