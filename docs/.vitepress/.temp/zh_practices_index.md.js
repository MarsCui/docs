import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"最佳实践","description":"","frontmatter":{"prev":false,"next":true},"headers":[],"relativePath":"zh/practices/index.md","filePath":"zh/practices/index.md"}');
const _sfc_main = { name: "zh/practices/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="最佳实践" tabindex="-1">最佳实践 <a class="header-anchor" href="#最佳实践" aria-label="Permalink to “最佳实践”">​</a></h1><p>本章节汇总 AGIOne 在技术集成与项目交付中的可复用实践经验。</p><h2 id="文档结构" tabindex="-1">文档结构 <a class="header-anchor" href="#文档结构" aria-label="Permalink to “文档结构”">​</a></h2><h3 id="technical-ai-coding-client" tabindex="-1"><code>technical/ai-coding-client/</code> <a class="header-anchor" href="#technical-ai-coding-client" aria-label="Permalink to “technical/ai-coding-client/”">​</a></h3><p>AI 编码客户端接入实践与操作指引。</p><table tabindex="0"><thead><tr><th>文档</th><th>用途</th></tr></thead><tbody><tr><td><a href="./technical/ai-coding-client/openclaw.html">OpenClaw</a></td><td>OpenClaw 接入 AGIOne 的配置与验证示例</td></tr><tr><td><a href="./technical/ai-coding-client/claude-code.html">Claude Code</a></td><td>Claude Code 企业接入流程与治理建议</td></tr></tbody></table><h3 id="project" tabindex="-1"><code>project/</code> <a class="header-anchor" href="#project" aria-label="Permalink to “project/”">​</a></h3><p>项目级落地案例与交付经验总结。</p><table tabindex="0"><thead><tr><th>文档</th><th>用途</th></tr></thead><tbody><tr><td><a href="./project/thailand-cp.html">泰国 CP 裸金属算力管理与服务案例</a></td><td>真实项目实施路径、成效与可复用方法</td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("zh/practices/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
