import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"OEM Configuration","description":"","frontmatter":{},"headers":[],"relativePath":"others/oem/oem-config.md","filePath":"others/oem/oem-config.md"}');
const _sfc_main = { name: "others/oem/oem-config.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="oem-configuration" tabindex="-1">OEM Configuration <a class="header-anchor" href="#oem-configuration" aria-label="Permalink to “OEM Configuration”">​</a></h1><blockquote><p>TODO: OEM configuration manual for third-party product deployments</p></blockquote></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("others/oem/oem-config.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const oemConfig = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  oemConfig as default
};
