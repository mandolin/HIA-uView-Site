import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"项目介绍","description":"","frontmatter":{"id":"getting-started/introduction","locale":"zh-Hans","status":"pre-release","source":"https://github.com/mandolin/HIA-uView/blob/main/docs/architecture.md"},"headers":[],"relativePath":"getting-started/introduction.md","filePath":"getting-started/introduction.md"}');
const _sfc_main = { name: "getting-started/introduction.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="项目介绍" tabindex="-1">项目介绍 <a class="header-anchor" href="#项目介绍" aria-label="Permalink to &quot;项目介绍&quot;">​</a></h1><p>HIA-uView 是一个 npm monorepo，目前将边界拆分为 UI 和 Tool。初始兼容性目标是 UniApp Vue 3 的 <code>mp-weixin</code>；App、H5 与其他小程序不会因编译通过而自动获得支持。</p><h2 id="两个-workspace" tabindex="-1">两个 workspace <a class="header-anchor" href="#两个-workspace" aria-label="Permalink to &quot;两个 workspace&quot;">​</a></h2><table tabindex="0"><thead><tr><th>区域</th><th>当前职责</th><th>不负责</th></tr></thead><tbody><tr><td>HIA-uView-UI</td><td>组件、composable、平台适配、主题与 locale 边界</td><td>业务数据、后端、行业字段和 Biz 运行时规则</td></tr><tr><td>HIA-uView-Tool</td><td>校验、检查和查看 UI 声明元数据的开发期 CLI</td><td>应用运行时、源码扫描和业务辅助</td></tr></tbody></table><p>Tool 已实现的命令是只读的：<code>doctor</code>、<code>check contract</code>、<code>check adoption</code>、<code>inspect components</code> 与 <code>inspect compatibility</code>。它们不执行项目脚本、网络请求、构建或 DevTools。</p><h2 id="与-biz-的关系" tabindex="-1">与 Biz 的关系 <a class="header-anchor" href="#与-biz-的关系" aria-label="Permalink to &quot;与 Biz 的关系&quot;">​</a></h2><p>HIA-uView-Biz 是独立仓。未来 Biz 应通过已发布 UI 版本、文档化本地链接或专用集成 fixture 使用 UI；它不能导入 UI 源文件，也不与 UI/Tool 共用父级 lockfile。业务模块、adapter、身份、页面和业务工具属于 Biz 的 <code>main-repo</code>。</p><p>继续查看<a href="/components/overview.html">组件概览</a>或<a href="/tool/overview.html">Tool 概览</a>。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("getting-started/introduction.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const introduction = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  introduction as default
};
