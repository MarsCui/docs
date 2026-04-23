import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"User","description":"","frontmatter":{},"headers":[],"relativePath":"operations/admin-portal-manual/user.md","filePath":"operations/admin-portal-manual/user.md"}');
const _sfc_main = { name: "operations/admin-portal-manual/user.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="user" tabindex="-1">User <a class="header-anchor" href="#user" aria-label="Permalink to “User”">​</a></h1><h2 id="document-purpose" tabindex="-1">Document Purpose <a class="header-anchor" href="#document-purpose" aria-label="Permalink to “Document Purpose”">​</a></h2><p>This document explains how administrators manage users in the admin portal.</p><h2 id="typical-operations-example" tabindex="-1">Typical Operations (Example) <a class="header-anchor" href="#typical-operations-example" aria-label="Permalink to “Typical Operations (Example)”">​</a></h2><ul><li>Create user accounts for internal teams</li><li>Bind users to tenant/project scopes</li><li>Assign role templates and permission boundaries</li><li>Enable, disable, or reset account access</li></ul><h2 id="workflow-example" tabindex="-1">Workflow (Example) <a class="header-anchor" href="#workflow-example" aria-label="Permalink to “Workflow (Example)”">​</a></h2><ol><li>Navigate to <code>Admin Portal &gt; Users</code>.</li><li>Create a user with required profile fields.</li><li>Assign role and resource scope.</li><li>Notify user and verify first login success.</li></ol><h2 id="validation-checklist" tabindex="-1">Validation Checklist <a class="header-anchor" href="#validation-checklist" aria-label="Permalink to “Validation Checklist”">​</a></h2><ul><li>User can sign in successfully</li><li>Assigned permissions match expected scope</li><li>Audit logs record create/update actions</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("operations/admin-portal-manual/user.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const user = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  user as default
};
