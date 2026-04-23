import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"A100 管理","description":"","frontmatter":{},"headers":[],"relativePath":"zh/userguide/a100-management.md","filePath":"zh/userguide/a100-management.md"}');
const _sfc_main = { name: "zh/userguide/a100-management.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="a100-管理" tabindex="-1">A100 管理 <a class="header-anchor" href="#a100-管理" aria-label="Permalink to “A100 管理”">​</a></h1><h2 id="文档说明" tabindex="-1">文档说明 <a class="header-anchor" href="#文档说明" aria-label="Permalink to “文档说明”">​</a></h2><p>本文档用于说明 A100 资源的纳管、配额配置、监控与运维管理流程。</p><h2 id="常见管理项-示例" tabindex="-1">常见管理项（示例） <a class="header-anchor" href="#常见管理项-示例" aria-label="Permalink to “常见管理项（示例）”">​</a></h2><ul><li>注册并标记 A100 节点</li><li>为项目或租户配置资源配额</li><li>设置调度策略与优先级</li><li>监控利用率、显存和健康状态</li></ul><h2 id="操作流程-示例" tabindex="-1">操作流程（示例） <a class="header-anchor" href="#操作流程-示例" aria-label="Permalink to “操作流程（示例）”">​</a></h2><ol><li>进入 <code>算力 &gt; 资源管理</code>。</li><li>按 GPU 类型筛选 <code>A100</code> 资源。</li><li>配置目标项目绑定与配额策略。</li><li>开启监控面板和告警策略。</li></ol><h2 id="验证清单-示例" tabindex="-1">验证清单（示例） <a class="header-anchor" href="#验证清单-示例" aria-label="Permalink to “验证清单（示例）”">​</a></h2><ul><li>A100 资源状态正常</li><li>配额限制按预期生效</li><li>调度结果符合策略设定</li><li>异常阈值可触发告警</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("zh/userguide/a100-management.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const a100Management = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  a100Management as default
};
