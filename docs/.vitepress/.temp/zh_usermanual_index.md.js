import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"用户手册","description":"","frontmatter":{"prev":false,"next":true},"headers":[],"relativePath":"zh/usermanual/index.md","filePath":"zh/usermanual/index.md"}');
const _sfc_main = { name: "zh/usermanual/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="用户手册" tabindex="-1">用户手册 <a class="header-anchor" href="#用户手册" aria-label="Permalink to “用户手册”">​</a></h1><p>本章节用于说明账号注册、登录与仪表盘使用的基础流程。</p><h2 id="文档清单" tabindex="-1">文档清单 <a class="header-anchor" href="#文档清单" aria-label="Permalink to “文档清单”">​</a></h2><table tabindex="0"><thead><tr><th>文档</th><th>用途</th></tr></thead><tbody><tr><td><a href="./register.html">注册</a></td><td>创建用户账号并完成初始化信息设置</td></tr><tr><td><a href="./login.html">登录</a></td><td>完成登录与常见登录问题处理</td></tr><tr><td><a href="./dashboard.html">仪表盘</a></td><td>了解核心看板模块与日常操作入口</td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("zh/usermanual/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
