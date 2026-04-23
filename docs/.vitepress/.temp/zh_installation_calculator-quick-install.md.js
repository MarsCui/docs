import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"（算魔方）快速安装指南","description":"","frontmatter":{},"headers":[],"relativePath":"zh/installation/calculator-quick-install.md","filePath":"zh/installation/calculator-quick-install.md"}');
const _sfc_main = { name: "zh/installation/calculator-quick-install.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="算魔方-快速安装指南" tabindex="-1">（算魔方）快速安装指南 <a class="header-anchor" href="#算魔方-快速安装指南" aria-label="Permalink to “（算魔方）快速安装指南”">​</a></h1><h2 id="文档说明" tabindex="-1">文档说明 <a class="header-anchor" href="#文档说明" aria-label="Permalink to “文档说明”">​</a></h2><p>本指南用于算魔方产品的快速安装与上线前基础验证，适合演示环境和交付初期使用。</p><h2 id="安装流程-示例" tabindex="-1">安装流程（示例） <a class="header-anchor" href="#安装流程-示例" aria-label="Permalink to “安装流程（示例）”">​</a></h2><ol><li>环境准备：确认计算节点、网络与存储可用</li><li>部署准备：获取安装包、镜像与配置模板</li><li>执行安装：按步骤完成组件部署与参数配置</li><li>验证上线：完成功能连通、性能与稳定性基础检查</li></ol><h2 id="快速验收项-示例" tabindex="-1">快速验收项（示例） <a class="header-anchor" href="#快速验收项-示例" aria-label="Permalink to “快速验收项（示例）”">​</a></h2><ul><li>Web/API 访问正常</li><li>关键服务无异常重启</li><li>核心功能完成一次端到端验证</li><li>基础监控指标可见且无明显告警</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("zh/installation/calculator-quick-install.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const calculatorQuickInstall = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  calculatorQuickInstall as default
};
