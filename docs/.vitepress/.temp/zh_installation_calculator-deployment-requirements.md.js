import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"（算魔方）部署配置要求","description":"","frontmatter":{},"headers":[],"relativePath":"zh/installation/calculator-deployment-requirements.md","filePath":"zh/installation/calculator-deployment-requirements.md"}');
const _sfc_main = { name: "zh/installation/calculator-deployment-requirements.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="算魔方-部署配置要求" tabindex="-1">（算魔方）部署配置要求 <a class="header-anchor" href="#算魔方-部署配置要求" aria-label="Permalink to “（算魔方）部署配置要求”">​</a></h1><h2 id="文档说明" tabindex="-1">文档说明 <a class="header-anchor" href="#文档说明" aria-label="Permalink to “文档说明”">​</a></h2><p>本文件用于说明算魔方产品在交付部署前的环境要求，作为实施评估与资源申请依据。</p><h2 id="资源要求-示例" tabindex="-1">资源要求（示例） <a class="header-anchor" href="#资源要求-示例" aria-label="Permalink to “资源要求（示例）”">​</a></h2><table tabindex="0"><thead><tr><th>类型</th><th>最低配置</th><th>推荐配置</th></tr></thead><tbody><tr><td>应用节点</td><td>8C16G / 200G 磁盘</td><td>16C32G / 500G SSD</td></tr><tr><td>计算节点</td><td>16C64G / 1 张 GPU</td><td>32C128G / 多 GPU</td></tr><tr><td>数据存储</td><td>可用空间 &gt;= 300G</td><td>可用空间 &gt;= 1TB</td></tr></tbody></table><h2 id="软件要求-示例" tabindex="-1">软件要求（示例） <a class="header-anchor" href="#软件要求-示例" aria-label="Permalink to “软件要求（示例）”">​</a></h2><ul><li>Linux 发行版版本在受支持范围内</li><li>容器运行时与编排组件版本兼容</li><li>网络、DNS、时间同步服务正常</li></ul><h2 id="交付前检查建议" tabindex="-1">交付前检查建议 <a class="header-anchor" href="#交付前检查建议" aria-label="Permalink to “交付前检查建议”">​</a></h2><ul><li>完成资源容量核对与冗余评估</li><li>完成网络连通性与端口策略确认</li><li>完成安装账号权限与安全策略审批</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("zh/installation/calculator-deployment-requirements.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const calculatorDeploymentRequirements = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  calculatorDeploymentRequirements as default
};
