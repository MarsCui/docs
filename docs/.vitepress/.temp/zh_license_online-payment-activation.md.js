import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"在线支付与激活","description":"","frontmatter":{},"headers":[],"relativePath":"zh/license/online-payment-activation.md","filePath":"zh/license/online-payment-activation.md"}');
const _sfc_main = { name: "zh/license/online-payment-activation.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="在线支付与激活" tabindex="-1">在线支付与激活 <a class="header-anchor" href="#在线支付与激活" aria-label="Permalink to “在线支付与激活”">​</a></h1><h2 id="文档说明" tabindex="-1">文档说明 <a class="header-anchor" href="#文档说明" aria-label="Permalink to “文档说明”">​</a></h2><p>本文档用于说明如何通过在线支付方式购买许可证，并完成 AGIOne 平台激活。</p><h2 id="前置条件" tabindex="-1">前置条件 <a class="header-anchor" href="#前置条件" aria-label="Permalink to “前置条件”">​</a></h2><ul><li>拥有可下单与支付权限的账号</li><li>可访问支付/计费相关网络</li><li>已准备待激活实例信息（实例 ID、组织信息、联系人）</li></ul><h2 id="操作流程-示例" tabindex="-1">操作流程（示例） <a class="header-anchor" href="#操作流程-示例" aria-label="Permalink to “操作流程（示例）”">​</a></h2><ol><li>登录购买门户并选择产品版本。</li><li>选择计费周期与许可证规格。</li><li>完成在线支付并确认订单状态。</li><li>将订单绑定到目标实例并发起激活。</li><li>在许可证管理页面确认激活结果。</li></ol><h2 id="验证清单-示例" tabindex="-1">验证清单（示例） <a class="header-anchor" href="#验证清单-示例" aria-label="Permalink to “验证清单（示例）”">​</a></h2><ul><li>订单状态为“已支付”</li><li>目标实例许可证状态为“已激活”</li><li>有效期与授权额度与订单一致</li><li>授权功能可正常使用</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("zh/license/online-payment-activation.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const onlinePaymentActivation = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  onlinePaymentActivation as default
};
