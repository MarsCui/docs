import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"登录","description":"","frontmatter":{},"headers":[],"relativePath":"zh/usermanual/login.md","filePath":"zh/usermanual/login.md"}');
const _sfc_main = { name: "zh/usermanual/login.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="登录" tabindex="-1">登录 <a class="header-anchor" href="#登录" aria-label="Permalink to “登录”">​</a></h1><h2 id="文档说明" tabindex="-1">文档说明 <a class="header-anchor" href="#文档说明" aria-label="Permalink to “文档说明”">​</a></h2><p>本文档用于说明标准登录流程、安全校验方式和常见登录问题处理建议。</p><h2 id="登录方式-示例" tabindex="-1">登录方式（示例） <a class="header-anchor" href="#登录方式-示例" aria-label="Permalink to “登录方式（示例）”">​</a></h2><ul><li>账号密码登录</li><li>手机号/邮箱验证码登录</li><li>企业单点登录（已启用时）</li></ul><h2 id="操作流程-示例" tabindex="-1">操作流程（示例） <a class="header-anchor" href="#操作流程-示例" aria-label="Permalink to “操作流程（示例）”">​</a></h2><ol><li>打开登录页面。</li><li>选择登录方式并输入认证信息。</li><li>如有要求，完成图形或短信验证。</li><li>点击登录并确认进入系统首页。</li></ol><h2 id="常见问题-示例" tabindex="-1">常见问题（示例） <a class="header-anchor" href="#常见问题-示例" aria-label="Permalink to “常见问题（示例）”">​</a></h2><ul><li>密码错误或验证码过期</li><li>连续失败导致账号临时锁定</li><li>企业用户未完成 SSO 绑定</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("zh/usermanual/login.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  login as default
};
