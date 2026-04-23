import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"环境快速调研","description":"","frontmatter":{},"headers":[],"relativePath":"zh/product/investigation/quick-env-investigation.md","filePath":"zh/product/investigation/quick-env-investigation.md"}');
const _sfc_main = { name: "zh/product/investigation/quick-env-investigation.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="环境快速调研" tabindex="-1">环境快速调研 <a class="header-anchor" href="#环境快速调研" aria-label="Permalink to “环境快速调研”">​</a></h1><p>用于项目前期收集客户基础设施与部署环境信息，评估 AGIOne 平台上线可行性与改造范围。</p><h2 id="调研目标" tabindex="-1">调研目标 <a class="header-anchor" href="#调研目标" aria-label="Permalink to “调研目标”">​</a></h2><ul><li>判断环境是否满足部署前置条件</li><li>识别网络、安全、资源等关键风险</li><li>输出整改项与上线准备清单</li></ul><h2 id="调研清单-示例" tabindex="-1">调研清单（示例） <a class="header-anchor" href="#调研清单-示例" aria-label="Permalink to “调研清单（示例）”">​</a></h2><h3 id="_1-基础设施" tabindex="-1">1) 基础设施 <a class="header-anchor" href="#_1-基础设施" aria-label="Permalink to “1) 基础设施”">​</a></h3><ul><li>服务器规格（CPU、内存、GPU、磁盘）</li><li>操作系统版本与内核信息</li><li>虚拟化与容器化环境现状</li></ul><h3 id="_2-网络条件" tabindex="-1">2) 网络条件 <a class="header-anchor" href="#_2-网络条件" aria-label="Permalink to “2) 网络条件”">​</a></h3><ul><li>节点互通性与带宽情况</li><li>防火墙与端口开放策略</li><li>是否存在跨网段/跨区域部署</li></ul><h3 id="_3-平台与中间件" tabindex="-1">3) 平台与中间件 <a class="header-anchor" href="#_3-平台与中间件" aria-label="Permalink to “3) 平台与中间件”">​</a></h3><ul><li>Kubernetes / Docker 版本</li><li>存储方案（本地盘、NAS、对象存储）</li><li>监控日志平台现状</li></ul><h3 id="_4-安全与合规" tabindex="-1">4) 安全与合规 <a class="header-anchor" href="#_4-安全与合规" aria-label="Permalink to “4) 安全与合规”">​</a></h3><ul><li>身份认证体系（LDAP、AD、OIDC）</li><li>审计留痕与日志留存要求</li><li>等保/内控等合规要求</li></ul><h2 id="输出物-示例" tabindex="-1">输出物（示例） <a class="header-anchor" href="#输出物-示例" aria-label="Permalink to “输出物（示例）”">​</a></h2><table tabindex="0"><thead><tr><th>输出项</th><th>内容</th></tr></thead><tbody><tr><td>环境可行性结论</td><td>可部署 / 整改后部署 / 暂不建议</td></tr><tr><td>整改项清单</td><td>网络、资源、版本、权限问题</td></tr><tr><td>部署建议</td><td>单机、多机或高可用拓扑建议</td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("zh/product/investigation/quick-env-investigation.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const quickEnvInvestigation = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  quickEnvInvestigation as default
};
