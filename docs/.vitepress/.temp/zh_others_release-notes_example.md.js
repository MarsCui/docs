import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"版本说明（示例）","description":"","frontmatter":{},"headers":[],"relativePath":"zh/others/release-notes/example.md","filePath":"zh/others/release-notes/example.md"}');
const _sfc_main = { name: "zh/others/release-notes/example.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="版本说明-示例" tabindex="-1">版本说明（示例） <a class="header-anchor" href="#版本说明-示例" aria-label="Permalink to “版本说明（示例）”">​</a></h1><h2 id="v1-2-0-2026-04-22" tabindex="-1">v1.2.0（2026-04-22） <a class="header-anchor" href="#v1-2-0-2026-04-22" aria-label="Permalink to “v1.2.0（2026-04-22）”">​</a></h2><h3 id="新增" tabindex="-1">新增 <a class="header-anchor" href="#新增" aria-label="Permalink to “新增”">​</a></h3><ul><li>新增在线支付与许可证激活流程说明</li><li>新增算力接入与模型部署的用户指南页面</li></ul><h3 id="优化" tabindex="-1">优化 <a class="header-anchor" href="#优化" aria-label="Permalink to “优化”">​</a></h3><ul><li>优化常用部署模板下的模型冷启动时延</li><li>增强管理操作的审计日志可追溯性</li></ul><h3 id="修复" tabindex="-1">修复 <a class="header-anchor" href="#修复" aria-label="Permalink to “修复”">​</a></h3><ul><li>修复部分 SSO 场景下登录跳转异常</li><li>修复高时延网络下仪表盘组件加载问题</li></ul><h3 id="兼容性说明" tabindex="-1">兼容性说明 <a class="header-anchor" href="#兼容性说明" aria-label="Permalink to “兼容性说明”">​</a></h3><ul><li>推荐 Kubernetes：1.24 - 1.29</li><li>推荐 Ubuntu：20.04 / 22.04</li></ul><h3 id="升级注意事项" tabindex="-1">升级注意事项 <a class="header-anchor" href="#升级注意事项" aria-label="Permalink to “升级注意事项”">​</a></h3><ul><li>本版本无破坏性变更</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("zh/others/release-notes/example.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const example = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  example as default
};
