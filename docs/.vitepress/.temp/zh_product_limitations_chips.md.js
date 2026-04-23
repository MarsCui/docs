import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"纳管芯片","description":"","frontmatter":{},"headers":[],"relativePath":"zh/product/limitations/chips.md","filePath":"zh/product/limitations/chips.md"}');
const _sfc_main = { name: "zh/product/limitations/chips.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="纳管芯片" tabindex="-1">纳管芯片 <a class="header-anchor" href="#纳管芯片" aria-label="Permalink to “纳管芯片”">​</a></h1><h2 id="支持范围-示例" tabindex="-1">支持范围（示例） <a class="header-anchor" href="#支持范围-示例" aria-label="Permalink to “支持范围（示例）”">​</a></h2><p>本页用于说明 AGIOne 对不同芯片平台的纳管支持情况，便于前期选型与部署评估。</p><table tabindex="0"><thead><tr><th>芯片平台</th><th>支持状态</th><th>说明</th></tr></thead><tbody><tr><td>NVIDIA A100/H100</td><td>完全支持</td><td>适合生产高并发场景</td></tr><tr><td>NVIDIA A800</td><td>完全支持</td><td>常见私有化部署型号</td></tr><tr><td>NVIDIA T4/L4</td><td>条件支持</td><td>适合轻量场景与 PoC</td></tr><tr><td>国产 AI 芯片（部分）</td><td>评估支持</td><td>需结合驱动与框架验证</td></tr></tbody></table><h2 id="依赖要求-示例" tabindex="-1">依赖要求（示例） <a class="header-anchor" href="#依赖要求-示例" aria-label="Permalink to “依赖要求（示例）”">​</a></h2><ul><li>建议使用经过验证的驱动版本组合</li><li>容器运行时与 GPU 插件版本保持匹配</li><li>多机环境建议统一驱动与运行时版本</li></ul><h2 id="已知限制-示例" tabindex="-1">已知限制（示例） <a class="header-anchor" href="#已知限制-示例" aria-label="Permalink to “已知限制（示例）”">​</a></h2><ul><li>老旧显卡在大上下文场景可能性能波动</li><li>混合芯片集群调度能力受底层兼容影响</li><li>个别模型可能需专用算子或转换流程</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("zh/product/limitations/chips.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const chips = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  chips as default
};
