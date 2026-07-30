import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"组件概览","description":"","frontmatter":{"id":"components/overview","locale":"zh-Hans","status":"pre-release","source":"https://github.com/mandolin/HIA-uView/blob/main/docs/components.md"},"headers":[],"relativePath":"components/overview.md","filePath":"components/overview.md"}');
const _sfc_main = { name: "components/overview.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="组件概览" tabindex="-1">组件概览 <a class="header-anchor" href="#组件概览" aria-label="Permalink to &quot;组件概览&quot;">​</a></h1><p>当前组件契约为 <code>mp-weixin</code> profile 的私有预发布 UniApp Vue 3 契约。它们是导航与审阅入口，不是已发布 npm API，也不承诺自动注册、真机、无障碍树、App/H5 或完整上游兼容。</p><h2 id="当前范围" tabindex="-1">当前范围 <a class="header-anchor" href="#当前范围" aria-label="Permalink to &quot;当前范围&quot;">​</a></h2><table tabindex="0"><thead><tr><th>类别</th><th>组件</th></tr></thead><tbody><tr><td>操作与布局</td><td><code>UButton</code>、<code>UStack</code>、<code>UNavBar</code>、<code>UCell</code></td></tr><tr><td>输入与校验呈现</td><td><code>UInput</code>、<code>UField</code>、<code>UValidationMessage</code></td></tr><tr><td>反馈与状态</td><td><code>UModal</code>、<code>UNotice</code>、<code>UEmpty</code></td></tr><tr><td>受控选择</td><td><code>URadio</code>、<code>URadioGroup</code>、<code>UCheckbox</code>、<code>UCheckboxGroup</code></td></tr></tbody></table><p>组件保留熟悉的 <code>u-*</code> 模板命名和 <code>U*</code> 导出，以降低阅读和逐项迁移成本；这不等于拥有完整上游 API 面。应用显式导入样式，并拥有路由、数据、请求、身份、权限和领域规则。</p><h2 id="组件使用原则" tabindex="-1">组件使用原则 <a class="header-anchor" href="#组件使用原则" aria-label="Permalink to &quot;组件使用原则&quot;">​</a></h2><ol><li>先阅读单个契约，再逐个替换或采用组件。</li><li>保持选择和状态为调用方受控；组件只发出明确意图。</li><li>不假定未列组件、global service、request、storage、router、form engine 或业务模块已经存在。</li></ol><p>首个公开参考页为 <a href="/components/u-button.html">UButton</a>。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/overview.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const overview = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  overview as default
};
