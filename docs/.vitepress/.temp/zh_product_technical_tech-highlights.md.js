import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"技术亮点","description":"","frontmatter":{},"headers":[],"relativePath":"zh/product/technical/tech-highlights.md","filePath":"zh/product/technical/tech-highlights.md"}');
const _sfc_main = { name: "zh/product/technical/tech-highlights.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="技术亮点" tabindex="-1">技术亮点 <a class="header-anchor" href="#技术亮点" aria-label="Permalink to “技术亮点”">​</a></h1><h2 id="核心亮点" tabindex="-1">核心亮点 <a class="header-anchor" href="#核心亮点" aria-label="Permalink to “核心亮点”">​</a></h2><h3 id="_1-异构模型统一纳管" tabindex="-1">1) 异构模型统一纳管 <a class="header-anchor" href="#_1-异构模型统一纳管" aria-label="Permalink to “1) 异构模型统一纳管”">​</a></h3><ul><li>一套控制面纳管多种模型后端</li><li>统一接口降低应用迁移成本</li><li>支持模型升级与策略切换</li></ul><h3 id="_2-企业级安全与隔离" tabindex="-1">2) 企业级安全与隔离 <a class="header-anchor" href="#_2-企业级安全与隔离" aria-label="Permalink to “2) 企业级安全与隔离”">​</a></h3><ul><li>租户级资源与权限隔离</li><li>请求链路可审计可追踪</li><li>适配私有化和内网部署</li></ul><h3 id="_3-可观测与可运维" tabindex="-1">3) 可观测与可运维 <a class="header-anchor" href="#_3-可观测与可运维" aria-label="Permalink to “3) 可观测与可运维”">​</a></h3><ul><li>模型服务健康度可视化</li><li>支持请求级性能诊断</li><li>告警可按业务分层配置</li></ul><h3 id="_4-面向落地的交付体系" tabindex="-1">4) 面向落地的交付体系 <a class="header-anchor" href="#_4-面向落地的交付体系" aria-label="Permalink to “4) 面向落地的交付体系”">​</a></h3><ul><li>提供标准化调研模板</li><li>支持从试点到规模化复制</li><li>兼容企业现有基础设施</li></ul><h2 id="差异化价值-示例" tabindex="-1">差异化价值（示例） <a class="header-anchor" href="#差异化价值-示例" aria-label="Permalink to “差异化价值（示例）”">​</a></h2><table tabindex="0"><thead><tr><th>维度</th><th>AGIOne</th><th>常见拼装方案</th></tr></thead><tbody><tr><td>交付效率</td><td>平台化能力开箱即用</td><td>需要多组件自建集成</td></tr><tr><td>运维复杂度</td><td>统一控制面治理</td><td>多系统分散维护</td></tr><tr><td>安全合规</td><td>内置权限与审计</td><td>需额外开发补齐</td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("zh/product/technical/tech-highlights.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const techHighlights = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  techHighlights as default
};
