import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"注册","description":"","frontmatter":{},"headers":[],"relativePath":"zh/usermanual/register.md","filePath":"zh/usermanual/register.md"}');
const _sfc_main = { name: "zh/usermanual/register.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="注册" tabindex="-1">注册 <a class="header-anchor" href="#注册" aria-label="Permalink to “注册”">​</a></h1><h2 id="文档说明" tabindex="-1">文档说明 <a class="header-anchor" href="#文档说明" aria-label="Permalink to “文档说明”">​</a></h2><p>本文档用于指导新用户完成账号注册与首次资料配置。</p><h2 id="前置条件" tabindex="-1">前置条件 <a class="header-anchor" href="#前置条件" aria-label="Permalink to “前置条件”">​</a></h2><ul><li>可用手机号或邮箱</li><li>可接收验证码</li><li>如组织启用邀请制，需提前获取邀请码</li></ul><h2 id="操作流程-示例" tabindex="-1">操作流程（示例） <a class="header-anchor" href="#操作流程-示例" aria-label="Permalink to “操作流程（示例）”">​</a></h2><ol><li>打开注册页面，选择注册方式。</li><li>输入手机号/邮箱、验证码与密码。</li><li>阅读并同意协议后提交注册。</li><li>完成昵称、部门等基础资料设置。</li></ol><h2 id="验证清单-示例" tabindex="-1">验证清单（示例） <a class="header-anchor" href="#验证清单-示例" aria-label="Permalink to “验证清单（示例）”">​</a></h2><ul><li>账号创建成功</li><li>验证状态显示已完成</li><li>资料保存成功并可查看</li><li>可正常跳转到登录页面</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("zh/usermanual/register.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const register = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  register as default
};
