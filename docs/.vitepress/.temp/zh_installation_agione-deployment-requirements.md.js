import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"（AGIOne）部署配置要求","description":"","frontmatter":{},"headers":[],"relativePath":"zh/installation/agione-deployment-requirements.md","filePath":"zh/installation/agione-deployment-requirements.md"}');
const _sfc_main = { name: "zh/installation/agione-deployment-requirements.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="agione-部署配置要求" tabindex="-1">（AGIOne）部署配置要求 <a class="header-anchor" href="#agione-部署配置要求" aria-label="Permalink to “（AGIOne）部署配置要求”">​</a></h1><h2 id="文档说明" tabindex="-1">文档说明 <a class="header-anchor" href="#文档说明" aria-label="Permalink to “文档说明”">​</a></h2><p>本文件用于明确 AGIOne 在生产或 PoC 环境下的部署前置条件，包括硬件、软件、网络与账号权限要求。</p><h2 id="资源要求-示例" tabindex="-1">资源要求（示例） <a class="header-anchor" href="#资源要求-示例" aria-label="Permalink to “资源要求（示例）”">​</a></h2><table tabindex="0"><thead><tr><th>类型</th><th>最低配置</th><th>推荐配置</th></tr></thead><tbody><tr><td>控制节点</td><td>8C16G / 200G 磁盘</td><td>16C32G / 500G SSD</td></tr><tr><td>GPU 节点</td><td>16C64G / 1 张 24G+ GPU</td><td>32C128G / 2-4 张 40G+ GPU</td></tr><tr><td>存储</td><td>可用空间 &gt;= 500G</td><td>可用空间 &gt;= 2TB</td></tr></tbody></table><h2 id="软件要求-示例" tabindex="-1">软件要求（示例） <a class="header-anchor" href="#软件要求-示例" aria-label="Permalink to “软件要求（示例）”">​</a></h2><ul><li>操作系统：Ubuntu 20.04/22.04 或同等级发行版</li><li>容器环境：Docker 24.x+ 或 Kubernetes 1.24+</li><li>GPU 依赖：NVIDIA Driver 与 CUDA 版本需匹配</li></ul><h2 id="网络与权限要求-示例" tabindex="-1">网络与权限要求（示例） <a class="header-anchor" href="#网络与权限要求-示例" aria-label="Permalink to “网络与权限要求（示例）”">​</a></h2><ul><li>节点间网络互通，关键端口按策略开放</li><li>提供具备安装权限的系统账号</li><li>提前准备镜像仓库访问权限与证书材料</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("zh/installation/agione-deployment-requirements.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const agioneDeploymentRequirements = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  agioneDeploymentRequirements as default
};
