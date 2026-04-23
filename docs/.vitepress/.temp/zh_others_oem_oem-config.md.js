import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"产品OEM配置","description":"","frontmatter":{},"headers":[],"relativePath":"zh/others/oem/oem-config.md","filePath":"zh/others/oem/oem-config.md"}');
const _sfc_main = { name: "zh/others/oem/oem-config.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="产品oem配置" tabindex="-1">产品OEM配置 <a class="header-anchor" href="#产品oem配置" aria-label="Permalink to “产品OEM配置”">​</a></h1><blockquote><p>待补充：第三方部署产品后的OEM配置手册</p></blockquote></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("zh/others/oem/oem-config.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const oemConfig = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  oemConfig as default
};
