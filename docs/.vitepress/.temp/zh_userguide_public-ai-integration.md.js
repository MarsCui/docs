import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"公共算力接入","description":"","frontmatter":{},"headers":[],"relativePath":"zh/userguide/public-ai-integration.md","filePath":"zh/userguide/public-ai-integration.md"}');
const _sfc_main = { name: "zh/userguide/public-ai-integration.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="公共算力接入" tabindex="-1">公共算力接入 <a class="header-anchor" href="#公共算力接入" aria-label="Permalink to “公共算力接入”">​</a></h1><h2 id="文档说明" tabindex="-1">文档说明 <a class="header-anchor" href="#文档说明" aria-label="Permalink to “文档说明”">​</a></h2><p>本文档用于说明如何将公共 AI/算力资源接入平台，实现统一调度与治理。</p><h2 id="前置条件" tabindex="-1">前置条件 <a class="header-anchor" href="#前置条件" aria-label="Permalink to “前置条件”">​</a></h2><ul><li>已获取外部算力服务地址与访问凭证</li><li>平台到外部服务网络可达</li><li>具备资源接入配置权限</li></ul><h2 id="接入流程-示例" tabindex="-1">接入流程（示例） <a class="header-anchor" href="#接入流程-示例" aria-label="Permalink to “接入流程（示例）”">​</a></h2><ol><li>进入 <code>算力 &gt; 资源接入</code> 新建接入项。</li><li>选择接入类型并填写地址、密钥等信息。</li><li>配置访问策略、配额和资源标签。</li><li>执行连通性测试并保存。</li></ol><h2 id="验证清单-示例" tabindex="-1">验证清单（示例） <a class="header-anchor" href="#验证清单-示例" aria-label="Permalink to “验证清单（示例）”">​</a></h2><ul><li>连通性测试通过</li><li>接入资源在清单中可见</li><li>配额策略生效</li><li>测试任务可正常调度执行</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("zh/userguide/public-ai-integration.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const publicAiIntegration = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  publicAiIntegration as default
};
