import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Claude Code","description":"","frontmatter":{},"headers":[],"relativePath":"zh/practices/technical/ai-coding-client/claude-code.md","filePath":"zh/practices/technical/ai-coding-client/claude-code.md"}');
const _sfc_main = { name: "zh/practices/technical/ai-coding-client/claude-code.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="claude-code" tabindex="-1">Claude Code <a class="header-anchor" href="#claude-code" aria-label="Permalink to “Claude Code”">​</a></h1><h2 id="文档说明" tabindex="-1">文档说明 <a class="header-anchor" href="#文档说明" aria-label="Permalink to “文档说明”">​</a></h2><p>本文档用于指导 Claude Code 在企业环境中接入 AGIOne 模型服务。</p><h2 id="接入流程-示例" tabindex="-1">接入流程（示例） <a class="header-anchor" href="#接入流程-示例" aria-label="Permalink to “接入流程（示例）”">​</a></h2><ol><li>准备 AGIOne 接入地址与项目级 Token。</li><li>在 Claude Code 客户端配置 endpoint、认证头与模型标识。</li><li>配置工作区策略，约束提示词与输出安全。</li><li>完成效果验证与异常回退测试。</li></ol><h2 id="运维建议" tabindex="-1">运维建议 <a class="header-anchor" href="#运维建议" aria-label="Permalink to “运维建议”">​</a></h2><ul><li>开发与生产环境分离管理</li><li>定期轮换 Token 并最小化权限</li><li>对团队公共 Prompt 模板进行版本管理</li></ul><h2 id="验证清单" tabindex="-1">验证清单 <a class="header-anchor" href="#验证清单" aria-label="Permalink to “验证清单”">​</a></h2><ul><li>客户端可成功调用目标模型</li><li>权限边界按项目配置生效</li><li>请求链路可追踪，满足审计与排障需求</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("zh/practices/technical/ai-coding-client/claude-code.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const claudeCode = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  claudeCode as default
};
