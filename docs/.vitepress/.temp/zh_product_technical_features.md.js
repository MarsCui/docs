import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"功能与能力","description":"","frontmatter":{},"headers":[],"relativePath":"zh/product/technical/features.md","filePath":"zh/product/technical/features.md"}');
const _sfc_main = { name: "zh/product/technical/features.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="功能与能力" tabindex="-1">功能与能力 <a class="header-anchor" href="#功能与能力" aria-label="Permalink to “功能与能力”">​</a></h1><h2 id="功能总览" tabindex="-1">功能总览 <a class="header-anchor" href="#功能总览" aria-label="Permalink to “功能总览”">​</a></h2><p>AGIOne 提供从模型接入到应用交付的全链路能力：</p><ul><li>模型纳管：统一接入主流模型与推理后端</li><li>服务治理：流量控制、配额管理、访问鉴权</li><li>应用支撑：Prompt 管理、知识检索、工具调用</li><li>可观测能力：指标监控、日志审计、异常告警</li></ul><h2 id="能力清单-示例" tabindex="-1">能力清单（示例） <a class="header-anchor" href="#能力清单-示例" aria-label="Permalink to “能力清单（示例）”">​</a></h2><table tabindex="0"><thead><tr><th>能力域</th><th>具体能力</th><th>说明</th></tr></thead><tbody><tr><td>接入能力</td><td>统一 API 接入</td><td>屏蔽底层模型差异，减少改造成本</td></tr><tr><td>调度能力</td><td>多模型路由</td><td>按策略分发请求与灰度切换</td></tr><tr><td>安全能力</td><td>租户与项目隔离</td><td>支持细粒度权限控制</td></tr><tr><td>运维能力</td><td>全链路可观测</td><td>监控延迟、吞吐和错误率</td></tr></tbody></table><h2 id="支持场景-示例" tabindex="-1">支持场景（示例） <a class="header-anchor" href="#支持场景-示例" aria-label="Permalink to “支持场景（示例）”">​</a></h2><ul><li>智能问答：知识检索 + 模型生成</li><li>文档处理：批量解析、结构化抽取</li><li>智能助手：与 OA/CRM/客服系统联动</li></ul><h2 id="性能评估口径-示例" tabindex="-1">性能评估口径（示例） <a class="header-anchor" href="#性能评估口径-示例" aria-label="Permalink to “性能评估口径（示例）”">​</a></h2><table tabindex="0"><thead><tr><th>指标</th><th>目标值</th><th>备注</th></tr></thead><tbody><tr><td>平均响应延迟</td><td>&lt;= 2.5s</td><td>以问答请求为基准</td></tr><tr><td>峰值吞吐</td><td>&gt;= 120 QPS</td><td>与资源规格相关</td></tr><tr><td>请求成功率</td><td>&gt;= 99.5%</td><td>不含外部依赖异常</td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("zh/product/technical/features.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const features = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  features as default
};
