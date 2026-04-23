import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"其他限制","description":"","frontmatter":{},"headers":[],"relativePath":"zh/product/limitations/limitations.md","filePath":"zh/product/limitations/limitations.md"}');
const _sfc_main = { name: "zh/product/limitations/limitations.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="其他限制" tabindex="-1">其他限制 <a class="header-anchor" href="#其他限制" aria-label="Permalink to “其他限制”">​</a></h1><h2 id="功能边界说明" tabindex="-1">功能边界说明 <a class="header-anchor" href="#功能边界说明" aria-label="Permalink to “功能边界说明”">​</a></h2><p>本页汇总除芯片与版本矩阵外的通用限制条件，帮助项目团队在方案阶段提前识别风险。</p><h2 id="已知限制项-示例" tabindex="-1">已知限制项（示例） <a class="header-anchor" href="#已知限制项-示例" aria-label="Permalink to “已知限制项（示例）”">​</a></h2><h3 id="_1-规模与性能限制" tabindex="-1">1) 规模与性能限制 <a class="header-anchor" href="#_1-规模与性能限制" aria-label="Permalink to “1) 规模与性能限制”">​</a></h3><ul><li>超大模型在低显存节点需做量化或分片</li><li>高并发场景需提前进行容量规划与限流</li><li>跨地域部署可能影响实时交互时延</li></ul><h3 id="_2-集成与改造限制" tabindex="-1">2) 集成与改造限制 <a class="header-anchor" href="#_2-集成与改造限制" aria-label="Permalink to “2) 集成与改造限制”">​</a></h3><ul><li>部分遗留系统缺少标准 API，需适配开发</li><li>对接身份系统时需确认协议兼容性</li><li>非标准网络拓扑可能影响节点发现</li></ul><h3 id="_3-运维治理限制" tabindex="-1">3) 运维治理限制 <a class="header-anchor" href="#_3-运维治理限制" aria-label="Permalink to “3) 运维治理限制”">​</a></h3><ul><li>日志与审计保留周期受存储容量影响</li><li>极端负载下告警噪声可能增加</li><li>多租户场景建议设置资源配额</li></ul><h2 id="风险规避建议" tabindex="-1">风险规避建议 <a class="header-anchor" href="#风险规避建议" aria-label="Permalink to “风险规避建议”">​</a></h2><ul><li>在 PoC 阶段完成关键场景压测与演练</li><li>生产环境预留 20%-30% 资源冗余</li><li>建立版本升级与回滚机制</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("zh/product/limitations/limitations.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const limitations = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  limitations as default
};
