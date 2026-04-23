import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"售前资料","description":"","frontmatter":{"prev":false,"next":true},"headers":[],"relativePath":"zh/product/index.md","filePath":"zh/product/index.md"}');
const _sfc_main = { name: "zh/product/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="售前资料" tabindex="-1">售前资料 <a class="header-anchor" href="#售前资料" aria-label="Permalink to “售前资料”">​</a></h1><p>本章节包含 AGIOne 产品售前相关文档，按目录结构组织，便于快速查阅与交付复用。</p><h2 id="文档结构" tabindex="-1">文档结构 <a class="header-anchor" href="#文档结构" aria-label="Permalink to “文档结构”">​</a></h2><p>产品售前文档分为三个目录：</p><h3 id="technical" tabindex="-1"><code>technical/</code> <a class="header-anchor" href="#technical" aria-label="Permalink to “technical/”">​</a></h3><p>技术概述与产品能力说明。</p><table tabindex="0"><thead><tr><th>文档</th><th>用途</th></tr></thead><tbody><tr><td><a href="./technical/overview.html">概述</a></td><td>产品定位、架构与核心能力</td></tr><tr><td><a href="./technical/features.html">功能与能力</a></td><td>支持场景、关键功能与性能口径</td></tr><tr><td><a href="./technical/network.html">网络规划</a></td><td>典型网络架构与端口规划建议</td></tr><tr><td><a href="./technical/tech-highlights.html">技术亮点</a></td><td>产品差异化能力与技术优势</td></tr></tbody></table><h3 id="limitations" tabindex="-1"><code>limitations/</code> <a class="header-anchor" href="#limitations" aria-label="Permalink to “limitations/”">​</a></h3><p>兼容性边界与已知约束。</p><table tabindex="0"><thead><tr><th>文档</th><th>用途</th></tr></thead><tbody><tr><td><a href="./limitations/chips.html">纳管芯片</a></td><td>支持芯片范围与纳管注意事项</td></tr><tr><td><a href="./limitations/support-matrix.html">支持矩阵</a></td><td>OS/容器/模型/接口支持情况</td></tr><tr><td><a href="./limitations/limitations.html">其他限制</a></td><td>非芯片类限制与风险提示</td></tr></tbody></table><h3 id="investigation" tabindex="-1"><code>investigation/</code> <a class="header-anchor" href="#investigation" aria-label="Permalink to “investigation/”">​</a></h3><p>售前调研模板与信息收集指引。</p><table tabindex="0"><thead><tr><th>文档</th><th>用途</th></tr></thead><tbody><tr><td><a href="./investigation/quick-requirement-investigation.html">需求快速调研</a></td><td>收集业务场景与目标需求</td></tr><tr><td><a href="./investigation/quick-env-investigation.html">环境快速调研</a></td><td>收集部署环境与前置条件</td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("zh/product/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
