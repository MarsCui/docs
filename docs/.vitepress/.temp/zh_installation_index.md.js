import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"部署","description":"","frontmatter":{"prev":false,"next":true},"headers":[],"relativePath":"zh/installation/index.md","filePath":"zh/installation/index.md"}');
const _sfc_main = { name: "zh/installation/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="部署" tabindex="-1">部署 <a class="header-anchor" href="#部署" aria-label="Permalink to “部署”">​</a></h1><p>本章节包含 AGIOne 产品的部署、配置和验收相关文档。</p><h2 id="文档目录" tabindex="-1">文档目录 <a class="header-anchor" href="#文档目录" aria-label="Permalink to “文档目录”">​</a></h2><table tabindex="0"><thead><tr><th>文档</th><th>说明</th></tr></thead><tbody><tr><td><a href="./agione-deployment-requirements.html">(AGIOne) 部署与配置要求</a></td><td>AGIOne 的最低和推荐部署要求</td></tr><tr><td><a href="./calculator-deployment-requirements.html">(Calculator) 部署与配置要求</a></td><td>Calculator 的环境及资源需求</td></tr><tr><td><a href="./agione-quick-install.html">(AGIOne) 快速安装指南</a></td><td>AGIOne 的快速安装与基线校验</td></tr><tr><td><a href="./calculator-quick-install.html">(Calculator) 快速安装指南</a></td><td>Calculator 的快速安装与基线校验</td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("zh/installation/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
