import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Register","description":"","frontmatter":{},"headers":[],"relativePath":"usermanual/register.md","filePath":"usermanual/register.md"}');
const _sfc_main = { name: "usermanual/register.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="register" tabindex="-1">Register <a class="header-anchor" href="#register" aria-label="Permalink to “Register”">​</a></h1><h2 id="document-purpose" tabindex="-1">Document Purpose <a class="header-anchor" href="#document-purpose" aria-label="Permalink to “Document Purpose”">​</a></h2><p>This document explains how new users register an account and complete basic onboarding settings.</p><h2 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to “Prerequisites”">​</a></h2><ul><li>A valid email or phone number</li><li>Access to verification code channel (email/SMS)</li><li>Invitation code (if your organization enforces invite-only signup)</li></ul><h2 id="registration-steps-example" tabindex="-1">Registration Steps (Example) <a class="header-anchor" href="#registration-steps-example" aria-label="Permalink to “Registration Steps (Example)”">​</a></h2><ol><li>Open the sign-up page and choose registration method.</li><li>Enter email/phone, verification code, and password.</li><li>Accept terms and submit registration.</li><li>Complete profile fields such as display name and department.</li></ol><h2 id="validation-checklist-example" tabindex="-1">Validation Checklist (Example) <a class="header-anchor" href="#validation-checklist-example" aria-label="Permalink to “Validation Checklist (Example)”">​</a></h2><ul><li>New account is created successfully</li><li>Verification status is marked as completed</li><li>Initial profile is saved and visible</li><li>User can proceed to login without errors</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("usermanual/register.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const register = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  register as default
};
