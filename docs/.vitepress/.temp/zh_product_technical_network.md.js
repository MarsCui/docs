import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"网络规划","description":"","frontmatter":{},"headers":[],"relativePath":"zh/product/technical/network.md","filePath":"zh/product/technical/network.md"}');
const _sfc_main = { name: "zh/product/technical/network.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="网络规划" tabindex="-1">网络规划 <a class="header-anchor" href="#网络规划" aria-label="Permalink to “网络规划”">​</a></h1><h2 id="网络架构建议" tabindex="-1">网络架构建议 <a class="header-anchor" href="#网络架构建议" aria-label="Permalink to “网络架构建议”">​</a></h2><p>AGIOne 推荐按管理面、业务面、数据面进行网络分层，确保安全隔离与可运维性。</p><ul><li>管理面：用于运维管理、监控与日志采集</li><li>业务面：用于 API 请求接入与业务系统调用</li><li>数据面：用于模型服务、存储和节点间通信</li></ul><h2 id="端口策略-示例" tabindex="-1">端口策略（示例） <a class="header-anchor" href="#端口策略-示例" aria-label="Permalink to “端口策略（示例）”">​</a></h2><table tabindex="0"><thead><tr><th>类型</th><th>示例端口</th><th>说明</th></tr></thead><tbody><tr><td>Web/API</td><td>80 / 443 / 8080</td><td>对外服务入口</td></tr><tr><td>集群通信</td><td>10250 / 6443</td><td>Kubernetes 控制与节点通信</td></tr><tr><td>监控日志</td><td>9090 / 3000</td><td>指标与可视化（按实际部署）</td></tr><tr><td>存储访问</td><td>9000 / 2049</td><td>对象存储或网络存储</td></tr></tbody></table><h2 id="安全建议" tabindex="-1">安全建议 <a class="header-anchor" href="#安全建议" aria-label="Permalink to “安全建议”">​</a></h2><ul><li>仅开放必要端口，采用白名单策略</li><li>生产环境优先使用 HTTPS 与内部证书体系</li><li>跨网段通信需明确路由与防火墙规则</li><li>核心管理端口建议仅内网可达</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("zh/product/technical/network.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const network = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  network as default
};
