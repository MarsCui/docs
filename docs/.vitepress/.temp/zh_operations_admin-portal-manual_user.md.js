import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"用户管理","description":"","frontmatter":{},"headers":[],"relativePath":"zh/operations/admin-portal-manual/user.md","filePath":"zh/operations/admin-portal-manual/user.md"}');
const _sfc_main = { name: "zh/operations/admin-portal-manual/user.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="用户管理" tabindex="-1">用户管理 <a class="header-anchor" href="#用户管理" aria-label="Permalink to “用户管理”">​</a></h1><h2 id="文档说明" tabindex="-1">文档说明 <a class="header-anchor" href="#文档说明" aria-label="Permalink to “文档说明”">​</a></h2><p>本文档用于指导管理员在管理门户中完成用户全生命周期管理。</p><h2 id="常见操作-示例" tabindex="-1">常见操作（示例） <a class="header-anchor" href="#常见操作-示例" aria-label="Permalink to “常见操作（示例）”">​</a></h2><ul><li>创建内部用户账号</li><li>绑定租户或项目范围</li><li>分配角色模板与权限边界</li><li>启用、禁用或重置账号</li></ul><h2 id="操作流程-示例" tabindex="-1">操作流程（示例） <a class="header-anchor" href="#操作流程-示例" aria-label="Permalink to “操作流程（示例）”">​</a></h2><ol><li>进入 <code>管理门户 &gt; 用户管理</code>。</li><li>创建用户并填写基础信息。</li><li>分配角色与资源范围。</li><li>通知用户并验证首次登录。</li></ol><h2 id="验证清单" tabindex="-1">验证清单 <a class="header-anchor" href="#验证清单" aria-label="Permalink to “验证清单”">​</a></h2><ul><li>用户可正常登录</li><li>权限范围符合授权预期</li><li>审计日志记录完整</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("zh/operations/admin-portal-manual/user.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const user = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  user as default
};
