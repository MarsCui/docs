import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"激活码与激活","description":"","frontmatter":{},"headers":[],"relativePath":"zh/license/activation-code-activation.md","filePath":"zh/license/activation-code-activation.md"}');
const _sfc_main = { name: "zh/license/activation-code-activation.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="激活码与激活" tabindex="-1">激活码与激活 <a class="header-anchor" href="#激活码与激活" aria-label="Permalink to “激活码与激活”">​</a></h1><h2 id="文档说明" tabindex="-1">文档说明 <a class="header-anchor" href="#文档说明" aria-label="Permalink to “文档说明”">​</a></h2><p>本文档用于说明通过激活码方式完成 AGIOne 平台许可证激活的步骤与校验项。</p><h2 id="前置条件" tabindex="-1">前置条件 <a class="header-anchor" href="#前置条件" aria-label="Permalink to “前置条件”">​</a></h2><ul><li>已获取有效激活码（来自销售或支持团队）</li><li>具有平台许可证管理访问权限</li><li>已准备实例信息（主机标识、组织、联系人）</li></ul><h2 id="操作流程-示例" tabindex="-1">操作流程（示例） <a class="header-anchor" href="#操作流程-示例" aria-label="Permalink to “操作流程（示例）”">​</a></h2><ol><li>进入 <code>许可证 &gt; 激活</code> 页面。</li><li>输入激活码并校验有效性。</li><li>选择绑定目标并提交激活请求。</li><li>刷新页面确认激活状态与授权信息。</li></ol><h2 id="验证清单-示例" tabindex="-1">验证清单（示例） <a class="header-anchor" href="#验证清单-示例" aria-label="Permalink to “验证清单（示例）”">​</a></h2><ul><li>激活码状态更新为“已使用”或可用次数减少</li><li>目标实例状态显示“已激活”</li><li>到期时间与授权额度显示正确</li><li>系统日志中无许可证相关阻塞错误</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("zh/license/activation-code-activation.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const activationCodeActivation = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  activationCodeActivation as default
};
