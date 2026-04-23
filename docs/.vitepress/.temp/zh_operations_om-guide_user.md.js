import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"用户管理","description":"","frontmatter":{},"headers":[],"relativePath":"zh/operations/om-guide/user.md","filePath":"zh/operations/om-guide/user.md"}');
const _sfc_main = { name: "zh/operations/om-guide/user.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="用户管理" tabindex="-1">用户管理 <a class="header-anchor" href="#用户管理" aria-label="Permalink to “用户管理”">​</a></h1><h2 id="文档说明" tabindex="-1">文档说明 <a class="header-anchor" href="#文档说明" aria-label="Permalink to “文档说明”">​</a></h2><p>本文档用于说明运维流程中的用户相关处理步骤，覆盖登录故障、权限异常与账号治理。</p><h2 id="运维场景-示例" tabindex="-1">运维场景（示例） <a class="header-anchor" href="#运维场景-示例" aria-label="Permalink to “运维场景（示例）”">​</a></h2><ul><li>排查用户登录失败或无权限问题</li><li>轮换凭证并执行安全策略更新</li><li>审查用户操作记录，支持问题追踪</li><li>在安全事件中临时冻结高风险账号</li></ul><h2 id="标准流程-示例" tabindex="-1">标准流程（示例） <a class="header-anchor" href="#标准流程-示例" aria-label="Permalink to “标准流程（示例）”">​</a></h2><ol><li>明确影响范围与用户清单。</li><li>检查角色映射、凭证状态与变更记录。</li><li>执行修复操作（授权修正/解锁/重置）。</li><li>回归验证并登记处理记录。</li></ol><h2 id="验证清单" tabindex="-1">验证清单 <a class="header-anchor" href="#验证清单" aria-label="Permalink to “验证清单”">​</a></h2><ul><li>账号状态与访问结果符合预期</li><li>权限调整即时生效</li><li>审计日志可追溯</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("zh/operations/om-guide/user.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const user = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  user as default
};
