import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"仪表盘","description":"","frontmatter":{},"headers":[],"relativePath":"zh/usermanual/dashboard.md","filePath":"zh/usermanual/dashboard.md"}');
const _sfc_main = { name: "zh/usermanual/dashboard.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="仪表盘" tabindex="-1">仪表盘 <a class="header-anchor" href="#仪表盘" aria-label="Permalink to “仪表盘”">​</a></h1><h2 id="文档说明" tabindex="-1">文档说明 <a class="header-anchor" href="#文档说明" aria-label="Permalink to “文档说明”">​</a></h2><p>本文档用于介绍仪表盘核心模块，帮助用户快速掌握日常监控与操作入口。</p><h2 id="模块说明-示例" tabindex="-1">模块说明（示例） <a class="header-anchor" href="#模块说明-示例" aria-label="Permalink to “模块说明（示例）”">​</a></h2><ul><li>资源总览：算力使用率、配额与健康状态</li><li>模型服务：部署状态与接口可用性</li><li>告警事件：近期异常与处理状态</li><li>快捷入口：常用功能跳转</li></ul><h2 id="日常使用流程-示例" tabindex="-1">日常使用流程（示例） <a class="header-anchor" href="#日常使用流程-示例" aria-label="Permalink to “日常使用流程（示例）”">​</a></h2><ol><li>查看服务健康状态与告警摘要。</li><li>检查资源利用率与趋势变化。</li><li>进入对应模块处理异常问题。</li><li>记录处理动作并确认告警恢复。</li></ol><h2 id="验证清单-示例" tabindex="-1">验证清单（示例） <a class="header-anchor" href="#验证清单-示例" aria-label="Permalink to “验证清单（示例）”">​</a></h2><ul><li>核心看板组件加载正常</li><li>指标刷新无明显延迟</li><li>告警可跳转到明细页面</li><li>常用操作入口可正常访问</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("zh/usermanual/dashboard.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dashboard = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dashboard as default
};
