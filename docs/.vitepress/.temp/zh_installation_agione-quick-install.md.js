import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"（AGIOne）快速安装指南","description":"","frontmatter":{},"headers":[],"relativePath":"zh/installation/agione-quick-install.md","filePath":"zh/installation/agione-quick-install.md"}');
const _sfc_main = { name: "zh/installation/agione-quick-install.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="agione-快速安装指南" tabindex="-1">（AGIOne）快速安装指南 <a class="header-anchor" href="#agione-快速安装指南" aria-label="Permalink to “（AGIOne）快速安装指南”">​</a></h1><h2 id="文档说明" tabindex="-1">文档说明 <a class="header-anchor" href="#文档说明" aria-label="Permalink to “文档说明”">​</a></h2><p>本指南用于 AGIOne 的快速安装与基础验收，适用于 PoC 或标准化测试环境。</p><h2 id="安装流程-示例" tabindex="-1">安装流程（示例） <a class="header-anchor" href="#安装流程-示例" aria-label="Permalink to “安装流程（示例）”">​</a></h2><ol><li>准备环境：确认节点资源、系统版本、网络连通性</li><li>安装依赖：容器运行时、GPU 驱动、必要系统组件</li><li>部署平台：执行安装脚本或 Helm 安装命令</li><li>验证功能：检查服务状态、接口可用性与基础模型调用</li></ol><h2 id="快速验收项-示例" tabindex="-1">快速验收项（示例） <a class="header-anchor" href="#快速验收项-示例" aria-label="Permalink to “快速验收项（示例）”">​</a></h2><ul><li>平台核心服务状态均为正常</li><li>管理页面可访问并完成登录</li><li>至少 1 个模型可成功加载并响应请求</li><li>日志与监控链路可正常查看</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("zh/installation/agione-quick-install.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const agioneQuickInstall = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  agioneQuickInstall as default
};
