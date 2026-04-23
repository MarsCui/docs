import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"AGIOne","text":"AI 网关平台文档","tagline":"统一的 AI 模型管理、GPU 纳管与 API 网关","actions":[{"theme":"brand","text":"快速开始","link":"/zh/product/"},{"theme":"alt","text":"部署指南","link":"/zh/deployment/"}]},"features":[{"title":"产品概述","details":"产品定位、功能能力、技术亮点、兼容性与限制说明","link":"/zh/product/"},{"title":"交付部署","details":"部署配置要求与快速安装指南（AGIOne / 算魔方）","link":"/zh/deployment/"},{"title":"购买与激活","details":"在线支付激活与激活码激活流程","link":"/zh/license/"},{"title":"用户指南","details":"算力接入、算力管理与模型部署流程","link":"/zh/userguide/"},{"title":"用户手册","details":"注册、登录与仪表盘使用指引","link":"/zh/usermanual/"},{"title":"最佳实践","details":"技术集成实践与项目交付案例","link":"/zh/practices/technical/"},{"title":"运维","details":"管理门户手册与运维指南","link":"/zh/operations/admin-portal-manual/"},{"title":"其他","details":"常见问题与版本说明","link":"/zh/others/faq/"}]},"headers":[],"relativePath":"zh/index.md","filePath":"zh/index.md"}');
const _sfc_main = { name: "zh/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("zh/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
