import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"通用问题","description":"","frontmatter":{},"headers":[],"relativePath":"zh/others/faq/general.md","filePath":"zh/others/faq/general.md"}');
const _sfc_main = { name: "zh/others/faq/general.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="通用问题" tabindex="-1">通用问题 <a class="header-anchor" href="#通用问题" aria-label="Permalink to “通用问题”">​</a></h1><h2 id="账号相关" tabindex="-1">账号相关 <a class="header-anchor" href="#账号相关" aria-label="Permalink to “账号相关”">​</a></h2><h3 id="问-无法登录-优先检查什么" tabindex="-1">问：无法登录，优先检查什么？ <a class="header-anchor" href="#问-无法登录-优先检查什么" aria-label="Permalink to “问：无法登录，优先检查什么？”">​</a></h3><ul><li>校验账号密码或验证码是否有效</li><li>确认账号未被锁定/禁用</li><li>如启用企业登录，确认 SSO 绑定是否完成</li></ul><h3 id="问-如何重置密码" tabindex="-1">问：如何重置密码？ <a class="header-anchor" href="#问-如何重置密码" aria-label="Permalink to “问：如何重置密码？”">​</a></h3><ul><li>通过“忘记密码”（如已启用）自助重置，或联系管理员在管理门户重置。</li></ul><h2 id="部署相关" tabindex="-1">部署相关 <a class="header-anchor" href="#部署相关" aria-label="Permalink to “部署相关”">​</a></h2><h3 id="问-安装时拉取镜像失败怎么办" tabindex="-1">问：安装时拉取镜像失败怎么办？ <a class="header-anchor" href="#问-安装时拉取镜像失败怎么办" aria-label="Permalink to “问：安装时拉取镜像失败怎么办？”">​</a></h3><ul><li>确认节点到镜像仓库网络可达</li><li>校验仓库凭证与证书信任链</li><li>检查 DNS 与时间同步（NTP）</li></ul><h2 id="使用相关" tabindex="-1">使用相关 <a class="header-anchor" href="#使用相关" aria-label="Permalink to “使用相关”">​</a></h2><h3 id="问-模型请求变慢-如何排查" tabindex="-1">问：模型请求变慢，如何排查？ <a class="header-anchor" href="#问-模型请求变慢-如何排查" aria-label="Permalink to “问：模型请求变慢，如何排查？”">​</a></h3><ul><li>查看 GPU/CPU/内存利用率是否异常</li><li>检查请求日志与错误率</li><li>核对并发与配额策略是否合理</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("zh/others/faq/general.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const general = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  general as default
};
