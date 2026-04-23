import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"OpenClaw","description":"","frontmatter":{},"headers":[],"relativePath":"zh/practices/technical/ai-coding-client/openclaw.md","filePath":"zh/practices/technical/ai-coding-client/openclaw.md"}');
const _sfc_main = { name: "zh/practices/technical/ai-coding-client/openclaw.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="openclaw" tabindex="-1">OpenClaw <a class="header-anchor" href="#openclaw" aria-label="Permalink to “OpenClaw”">​</a></h1><h2 id="文档说明" tabindex="-1">文档说明 <a class="header-anchor" href="#文档说明" aria-label="Permalink to “文档说明”">​</a></h2><p>本文档用于说明 OpenClaw 接入 AGIOne 的推荐方式与常见配置项。</p><h2 id="接入流程-示例" tabindex="-1">接入流程（示例） <a class="header-anchor" href="#接入流程-示例" aria-label="Permalink to “接入流程（示例）”">​</a></h2><ol><li>在 AGIOne 中创建项目并生成 API Token。</li><li>在 OpenClaw 配置 AGIOne 网关地址与鉴权信息。</li><li>配置模型路由策略与请求超时参数。</li><li>执行连通性与问答质量验证。</li></ol><h2 id="配置建议" tabindex="-1">配置建议 <a class="header-anchor" href="#配置建议" aria-label="Permalink to “配置建议”">​</a></h2><ul><li>按环境隔离 Token（开发/测试/生产）</li><li>设置重试策略并限制最大退避时间</li><li>配置配额与告警阈值，便于成本与稳定性治理</li></ul><h2 id="验证清单" tabindex="-1">验证清单 <a class="header-anchor" href="#验证清单" aria-label="Permalink to “验证清单”">​</a></h2><ul><li>Token 鉴权通过</li><li>请求时延符合预期</li><li>日志与异常信息可被观测系统采集</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("zh/practices/technical/ai-coding-client/openclaw.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const openclaw = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  openclaw as default
};
