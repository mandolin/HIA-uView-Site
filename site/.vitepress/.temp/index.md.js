import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"HIA-uView","description":"","frontmatter":{"id":"home","locale":"zh-Hans","status":"pre-release","source":"https://github.com/mandolin/HIA-uView/blob/main/README.md","layout":"home","hero":{"name":"HIA-uView","text":"面向 UniApp 小程序的受边界约束 UI 框架","tagline":"从明确的组件契约、主题 token 与验证证据开始。","actions":[{"theme":"brand","text":"开始使用","link":"/getting-started/introduction"},{"theme":"alt","text":"查看兼容性边界","link":"/compatibility-and-releases/compatibility-evidence"}]},"features":[{"title":"组件先行","details":"当前组件以显式契约、受控状态和本地验证为基础，不把业务规则带入 UI 层。"},{"title":"清晰主题边界","details":"钴蓝承担主结构，清透青用于局部强调；组件消费语义 token，而非散布原始色值。"},{"title":"证据分级","details":"编译、受限本地 DevTools fixture 与 jsdom 证据分别记录，未验证环境不作推断。"}]},"headers":[],"relativePath":"index.md","filePath":"index.md"}');
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="hia-uview" tabindex="-1">HIA-uView <a class="header-anchor" href="#hia-uview" aria-label="Permalink to &quot;HIA-uView&quot;">​</a></h1><p>HIA-uView 是一个面向 UniApp 的 UI 框架项目，当前优先服务于微信小程序的 Vue 3 开发。它包含 UI 与开发期 Tool 两个 workspace；本站与它们独立，以便内容、部署和回退拥有自己的审阅边界。</p><p>首发站点只描述已有公开事实。所有组件与 Tool 仍处于预发布阶段，不能据此推断已发布 npm API、真机、跨端、审核或线上服务支持。</p><h2 id="从这里开始" tabindex="-1">从这里开始 <a class="header-anchor" href="#从这里开始" aria-label="Permalink to &quot;从这里开始&quot;">​</a></h2><ul><li><a href="/getting-started/introduction.html">项目介绍</a>：了解 UI、Tool 与 Biz 的职责分界。</li><li><a href="/components/overview.html">组件概览</a>：查看当前 14 个私有预发布组件的范围。</li><li><a href="/design-system/tokens-and-theme.html">Token 与主题</a>：了解色彩、语义 token 和无障碍目标。</li><li><a href="/compatibility-and-releases/compatibility-evidence.html">兼容性证据</a>：区分已经观察的证据和明确未验证的环境。</li></ul><h2 id="公开来源与限制" tabindex="-1">公开来源与限制 <a class="header-anchor" href="#公开来源与限制" aria-label="Permalink to &quot;公开来源与限制&quot;">​</a></h2><p>本站内容由 HIA-uView 公开仓的 README 与契约文档人工审阅后归纳，不复制 uView 系列站点的代码、文案、图片、统计或视觉识别。请在采用前阅读<a href="/migration-and-source/migration-from-uview.html">迁移说明</a>和<a href="/compatibility-and-releases/compatibility-evidence.html">兼容性边界</a>。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
