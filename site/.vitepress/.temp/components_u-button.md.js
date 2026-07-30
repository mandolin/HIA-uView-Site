import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"UButton","description":"","frontmatter":{"id":"components/u-button","locale":"zh-Hans","status":"pre-release","source":"https://github.com/mandolin/HIA-uView/blob/main/docs/button.md"},"headers":[],"relativePath":"components/u-button.md","filePath":"components/u-button.md"}');
const _sfc_main = { name: "components/u-button.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ubutton" tabindex="-1">UButton <a class="header-anchor" href="#ubutton" aria-label="Permalink to &quot;UButton&quot;">​</a></h1><p><code>UButton</code> 是首个通用本地操作组件契约，面向 UniApp Vue 3 的 <code>mp-weixin</code> profile。它表示用户意图，不是导航、身份、支付、表单提交或业务能力封装。</p><h2 id="受控-api" tabindex="-1">受控 API <a class="header-anchor" href="#受控-api" aria-label="Permalink to &quot;受控 API&quot;">​</a></h2><table tabindex="0"><thead><tr><th>属性或事件</th><th>作用</th></tr></thead><tbody><tr><td><code>variant</code></td><td>选择 <code>primary</code>、<code>secondary</code> 或 <code>text</code> 的语义操作样式，不采用上游 <code>type</code> API。</td></tr><tr><td><code>size</code></td><td>选择 <code>sm</code>、<code>md</code> 或 <code>lg</code> 的密度与触控目标配置。</td></tr><tr><td><code>block</code></td><td>使根节点占用可用行内宽度，不改变操作含义。</td></tr><tr><td><code>disabled</code> / <code>loading</code></td><td>抑制激活，并保留可辨识的状态呈现。</td></tr><tr><td><code>label</code> 或默认插槽</td><td>提供可见文字标签；首轮不支持纯图标和任意布局内容。</td></tr><tr><td><code>click(event)</code></td><td>仅在启用且非加载时发出一次；组件不添加防抖、导航、后端或业务幂等。</td></tr></tbody></table><h2 id="主题与可访问性边界" tabindex="-1">主题与可访问性边界 <a class="header-anchor" href="#主题与可访问性边界" aria-label="Permalink to &quot;主题与可访问性边界&quot;">​</a></h2><p>根命名空间为 <code>u-button</code>。组件使用 <code>--u-comp-button-*</code> token，而非硬编码原始色值。主操作映射到钴蓝；实底清透青必须使用深色前景，默认不使用白色。</p><p>WCAG 2.2 AA 是可控组件行为的验收目标，而非小程序或产品符合性认证。当前契约要求可见文字、非颜色状态信号、已文档化对比度和触控目标；键盘焦点、读屏语义和无障碍树尚未独立验证。</p><p>查看<a href="/design-system/tokens-and-theme.html">Token 与主题</a>与<a href="/compatibility-and-releases/compatibility-evidence.html">兼容性证据</a>。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/u-button.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const uButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  uButton as default
};
