import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"User","description":"","frontmatter":{},"headers":[],"relativePath":"operations/om-guide/user.md","filePath":"operations/om-guide/user.md"}');
const _sfc_main = { name: "operations/om-guide/user.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="user" tabindex="-1">User <a class="header-anchor" href="#user" aria-label="Permalink to “User”">​</a></h1><h2 id="document-purpose" tabindex="-1">Document Purpose <a class="header-anchor" href="#document-purpose" aria-label="Permalink to “Document Purpose”">​</a></h2><p>This document describes user-focused O&amp;M operations for platform stability and compliance.</p><h2 id="o-m-scenarios-example" tabindex="-1">O&amp;M Scenarios (Example) <a class="header-anchor" href="#o-m-scenarios-example" aria-label="Permalink to “O&amp;M Scenarios (Example)”">​</a></h2><ul><li>Troubleshoot user login and permission issues</li><li>Rotate credentials and enforce policy updates</li><li>Review user activity for incident investigation</li><li>Suspend high-risk accounts during security events</li></ul><h2 id="standard-procedure-example" tabindex="-1">Standard Procedure (Example) <a class="header-anchor" href="#standard-procedure-example" aria-label="Permalink to “Standard Procedure (Example)”">​</a></h2><ol><li>Confirm issue scope and affected users.</li><li>Check role mapping, token status, and recent changes.</li><li>Apply remediation (role fix/reset/unlock).</li><li>Verify recovery and record incident notes.</li></ol><h2 id="validation-checklist" tabindex="-1">Validation Checklist <a class="header-anchor" href="#validation-checklist" aria-label="Permalink to “Validation Checklist”">​</a></h2><ul><li>User access is restored or intentionally blocked</li><li>Policy changes are reflected immediately</li><li>Operation is recorded in audit trail</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("operations/om-guide/user.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const user = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  user as default
};
