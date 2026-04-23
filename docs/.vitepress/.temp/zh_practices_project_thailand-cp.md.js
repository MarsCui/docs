import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"泰国 CP 裸金属算力管理与服务案例","description":"","frontmatter":{},"headers":[],"relativePath":"zh/practices/project/thailand-cp.md","filePath":"zh/practices/project/thailand-cp.md"}');
const _sfc_main = { name: "zh/practices/project/thailand-cp.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="泰国-cp-裸金属算力管理与服务案例" tabindex="-1">泰国 CP 裸金属算力管理与服务案例 <a class="header-anchor" href="#泰国-cp-裸金属算力管理与服务案例" aria-label="Permalink to “泰国 CP 裸金属算力管理与服务案例”">​</a></h1><h2 id="项目背景" tabindex="-1">项目背景 <a class="header-anchor" href="#项目背景" aria-label="Permalink to “项目背景”">​</a></h2><p>泰国 CP 需要在多团队场景下统一管理裸金属 GPU 资源，并提供稳定可控的 AI 服务能力。</p><h2 id="核心挑战" tabindex="-1">核心挑战 <a class="header-anchor" href="#核心挑战" aria-label="Permalink to “核心挑战”">​</a></h2><ul><li>硬件异构导致节点标准不统一</li><li>传统流程下资源可视化与治理能力不足</li><li>多租户场景下需要配额与权限隔离</li></ul><h2 id="实施方案-示例" tabindex="-1">实施方案（示例） <a class="header-anchor" href="#实施方案-示例" aria-label="Permalink to “实施方案（示例）”">​</a></h2><ol><li>统一节点纳管标准与资源标签体系。</li><li>建立项目级配额与访问控制边界。</li><li>引入集中监控、告警与审计机制。</li><li>标准化模型服务模板并分阶段推广。</li></ol><h2 id="实施成效-示例" tabindex="-1">实施成效（示例） <a class="header-anchor" href="#实施成效-示例" aria-label="Permalink to “实施成效（示例）”">​</a></h2><ul><li>缩短资源纳管与服务交付周期</li><li>提升资源利用率与运维稳定性</li><li>减少跨团队资源冲突与协作成本</li></ul><h2 id="经验总结" tabindex="-1">经验总结 <a class="header-anchor" href="#经验总结" aria-label="Permalink to “经验总结”">​</a></h2><ul><li>先做资源基线标准，再推进规模化扩展</li><li>将可观测能力前置到项目初期</li><li>通过分阶段验收降低上线风险</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("zh/practices/project/thailand-cp.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const thailandCp = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  thailandCp as default
};
