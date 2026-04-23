import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"模型部署","description":"","frontmatter":{},"headers":[],"relativePath":"zh/userguide/mode-deployment.md","filePath":"zh/userguide/mode-deployment.md"}');
const _sfc_main = { name: "zh/userguide/mode-deployment.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="模型部署" tabindex="-1">模型部署 <a class="header-anchor" href="#模型部署" aria-label="Permalink to “模型部署”">​</a></h1><h2 id="文档说明" tabindex="-1">文档说明 <a class="header-anchor" href="#文档说明" aria-label="Permalink to “文档说明”">​</a></h2><p>本文档用于指导模型部署、运行状态校验与上线前基础检查。</p><h2 id="前置条件" tabindex="-1">前置条件 <a class="header-anchor" href="#前置条件" aria-label="Permalink to “前置条件”">​</a></h2><ul><li>已准备可用算力资源和运行镜像</li><li>已准备模型文件来源（仓库/对象存储等）</li><li>具备目标项目部署权限</li></ul><h2 id="部署流程-示例" tabindex="-1">部署流程（示例） <a class="header-anchor" href="#部署流程-示例" aria-label="Permalink to “部署流程（示例）”">​</a></h2><ol><li>进入 <code>模型 &gt; 部署</code>，点击新建。</li><li>选择模型来源与运行模板。</li><li>设置副本数、资源限制和路由策略。</li><li>提交部署并等待状态变为“运行中”。</li></ol><h2 id="验证清单-示例" tabindex="-1">验证清单（示例） <a class="header-anchor" href="#验证清单-示例" aria-label="Permalink to “验证清单（示例）”">​</a></h2><ul><li>部署状态健康</li><li>推理接口可正常访问</li><li>基线请求返回符合预期</li><li>日志无启动失败或依赖异常</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("zh/userguide/mode-deployment.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const modeDeployment = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  modeDeployment as default
};
