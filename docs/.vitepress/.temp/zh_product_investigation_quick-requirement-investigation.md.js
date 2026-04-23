import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"需求快速调研","description":"","frontmatter":{},"headers":[],"relativePath":"zh/product/investigation/quick-requirement-investigation.md","filePath":"zh/product/investigation/quick-requirement-investigation.md"}');
const _sfc_main = { name: "zh/product/investigation/quick-requirement-investigation.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="需求快速调研" tabindex="-1">需求快速调研 <a class="header-anchor" href="#需求快速调研" aria-label="Permalink to “需求快速调研”">​</a></h1><p>用于项目前期收集客户 AI 场景需求，评估需求满足性，并形成可执行的实施建议。</p><h2 id="调研目标" tabindex="-1">调研目标 <a class="header-anchor" href="#调研目标" aria-label="Permalink to “调研目标”">​</a></h2><ul><li>明确业务目标与成功指标</li><li>识别优先落地场景与价值预期</li><li>明确 PoC 范围与阶段性里程碑</li></ul><h2 id="调研清单-示例" tabindex="-1">调研清单（示例） <a class="header-anchor" href="#调研清单-示例" aria-label="Permalink to “调研清单（示例）”">​</a></h2><h3 id="_1-业务背景" tabindex="-1">1) 业务背景 <a class="header-anchor" href="#_1-业务背景" aria-label="Permalink to “1) 业务背景”">​</a></h3><ul><li>当前业务痛点是什么？</li><li>期望通过 AI 解决哪些问题？</li><li>涉及哪些业务部门与角色？</li></ul><h3 id="_2-场景需求" tabindex="-1">2) 场景需求 <a class="header-anchor" href="#_2-场景需求" aria-label="Permalink to “2) 场景需求”">​</a></h3><ul><li>目标场景：知识问答 / 文档处理 / 智能助手 / 其他</li><li>日均请求量与峰值并发预估</li><li>对响应时延、准确率、稳定性的要求</li></ul><h3 id="_3-数据与合规" tabindex="-1">3) 数据与合规 <a class="header-anchor" href="#_3-数据与合规" aria-label="Permalink to “3) 数据与合规”">​</a></h3><ul><li>数据来源与类型（文本、图片、结构化）</li><li>是否包含敏感数据</li><li>是否要求本地化部署或专有网络</li></ul><h2 id="输出物-示例" tabindex="-1">输出物（示例） <a class="header-anchor" href="#输出物-示例" aria-label="Permalink to “输出物（示例）”">​</a></h2><table tabindex="0"><thead><tr><th>输出项</th><th>内容</th></tr></thead><tbody><tr><td>场景优先级清单</td><td>按业务价值与实施难度分级</td></tr><tr><td>需求匹配评估</td><td>AGIOne 能力与需求映射</td></tr><tr><td>实施建议</td><td>PoC 周期、资源与责任分工</td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("zh/product/investigation/quick-requirement-investigation.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const quickRequirementInvestigation = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  quickRequirementInvestigation as default
};
