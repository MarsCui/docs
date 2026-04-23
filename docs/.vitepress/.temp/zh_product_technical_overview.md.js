import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"概述","description":"","frontmatter":{},"headers":[],"relativePath":"zh/product/technical/overview.md","filePath":"zh/product/technical/overview.md"}');
const _sfc_main = { name: "zh/product/technical/overview.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="概述" tabindex="-1">概述 <a class="header-anchor" href="#概述" aria-label="Permalink to “概述”">​</a></h1><h2 id="产品定位" tabindex="-1">产品定位 <a class="header-anchor" href="#产品定位" aria-label="Permalink to “产品定位”">​</a></h2><p>AGIOne 是面向企业级场景的 AI 平台，聚焦于本地化部署、统一纳管与模型服务化，帮助客户在可控环境下快速落地 AI 应用。</p><h2 id="目标客户与典型场景" tabindex="-1">目标客户与典型场景 <a class="header-anchor" href="#目标客户与典型场景" aria-label="Permalink to “目标客户与典型场景”">​</a></h2><ul><li>政企客户：关注数据安全、权限隔离与私有化部署</li><li>金融客户：关注审计追踪、配额控制与稳定性</li><li>制造客户：关注视觉识别、知识问答与业务系统对接</li></ul><p>典型场景示例：</p><ul><li>企业知识库问答（RAG）</li><li>文档理解与智能检索</li><li>多模型统一接入与路由</li><li>AI 应用监控与运维治理</li></ul><h2 id="架构概览" tabindex="-1">架构概览 <a class="header-anchor" href="#架构概览" aria-label="Permalink to “架构概览”">​</a></h2><ul><li>接入层：API 网关、鉴权、限流</li><li>服务层：模型编排、推理调度、应用能力</li><li>资源层：GPU 资源池、存储、日志监控</li><li>运维层：告警审计、策略与发布管理</li></ul><h2 id="交付价值" tabindex="-1">交付价值 <a class="header-anchor" href="#交付价值" aria-label="Permalink to “交付价值”">​</a></h2><ul><li>降低 AI 平台建设复杂度</li><li>缩短从 PoC 到生产上线周期</li><li>统一模型管理与运维标准</li><li>在合规前提下提升资源利用率</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("zh/product/technical/overview.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const overview = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  overview as default
};
