import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Release Notes (Example)","description":"","frontmatter":{},"headers":[],"relativePath":"others/release-notes/example.md","filePath":"others/release-notes/example.md"}');
const _sfc_main = { name: "others/release-notes/example.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="release-notes-example" tabindex="-1">Release Notes (Example) <a class="header-anchor" href="#release-notes-example" aria-label="Permalink to “Release Notes (Example)”">​</a></h1><h2 id="v1-2-0-2026-04-22" tabindex="-1">v1.2.0 (2026-04-22) <a class="header-anchor" href="#v1-2-0-2026-04-22" aria-label="Permalink to “v1.2.0 (2026-04-22)”">​</a></h2><h3 id="added" tabindex="-1">Added <a class="header-anchor" href="#added" aria-label="Permalink to “Added”">​</a></h3><ul><li>New license activation flow for online payment</li><li>User guide pages for compute integration and model deployment</li></ul><h3 id="improved" tabindex="-1">Improved <a class="header-anchor" href="#improved" aria-label="Permalink to “Improved”">​</a></h3><ul><li>Reduced model cold-start time in common deployment templates</li><li>Enhanced audit logs for admin operations</li></ul><h3 id="fixed" tabindex="-1">Fixed <a class="header-anchor" href="#fixed" aria-label="Permalink to “Fixed”">​</a></h3><ul><li>Fixed intermittent login redirect issue in some SSO setups</li><li>Fixed dashboard widget loading under high latency networks</li></ul><h3 id="compatibility-notes" tabindex="-1">Compatibility Notes <a class="header-anchor" href="#compatibility-notes" aria-label="Permalink to “Compatibility Notes”">​</a></h3><ul><li>Recommended Kubernetes: 1.24 - 1.29</li><li>Recommended Ubuntu: 20.04 / 22.04</li></ul><h3 id="upgrade-notes" tabindex="-1">Upgrade Notes <a class="header-anchor" href="#upgrade-notes" aria-label="Permalink to “Upgrade Notes”">​</a></h3><ul><li>No breaking changes in this release</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("others/release-notes/example.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const example = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  example as default
};
