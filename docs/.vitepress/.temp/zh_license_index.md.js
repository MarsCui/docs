import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"购买与激活","description":"","frontmatter":{"prev":false,"next":true},"headers":[],"relativePath":"zh/license/index.md","filePath":"zh/license/index.md"}');
const _sfc_main = { name: "zh/license/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="购买与激活" tabindex="-1">购买与激活 <a class="header-anchor" href="#购买与激活" aria-label="Permalink to “购买与激活”">​</a></h1><p>本章节用于说明 AGIOne 许可证购买与激活的标准流程，支持在线支付激活和激活码激活两种方式。</p><h2 id="文档清单" tabindex="-1">文档清单 <a class="header-anchor" href="#文档清单" aria-label="Permalink to “文档清单”">​</a></h2><table tabindex="0"><thead><tr><th>文档</th><th>用途</th></tr></thead><tbody><tr><td><a href="./online-payment-activation.html">在线支付与激活</a></td><td>通过在线支付完成购买并激活平台许可证</td></tr><tr><td><a href="./activation-code-activation.html">激活码与激活</a></td><td>使用预发放激活码完成平台激活</td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("zh/license/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
