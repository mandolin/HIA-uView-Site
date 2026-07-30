import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Token 与主题","description":"","frontmatter":{"id":"design-system/tokens-and-theme","locale":"zh-Hans","status":"pre-release","source":"https://github.com/mandolin/HIA-uView/blob/main/docs/design-system.md"},"headers":[],"relativePath":"design-system/tokens-and-theme.md","filePath":"design-system/tokens-and-theme.md"}');
const _sfc_main = { name: "design-system/tokens-and-theme.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="token-与主题" tabindex="-1">Token 与主题 <a class="header-anchor" href="#token-与主题" aria-label="Permalink to &quot;Token 与主题&quot;">​</a></h1><p>HIA-uView 先定义设计系统边界，再发布组件 API。首轮仅覆盖 HIA 浅色主题；暗色、高对比度、字体、图标、阴影和圆角体系需要独立证据与文档。</p><h2 id="三层-token" tabindex="-1">三层 token <a class="header-anchor" href="#三层-token" aria-label="Permalink to &quot;三层 token&quot;">​</a></h2><table tabindex="0"><thead><tr><th>层级</th><th>责任</th><th>使用规则</th></tr></thead><tbody><tr><td><code>ref</code></td><td>原始色彩、间距和时长等设计值</td><td>只供主题定义与 token 映射使用</td></tr><tr><td><code>sys</code></td><td>表面、文字、操作、状态、焦点与层级等语义意图</td><td>组件与应用布局应使用这一层</td></tr><tr><td><code>comp</code></td><td>单个组件的语义 token</td><td>仅组件所有者和已文档化主题扩展使用</td></tr></tbody></table><p>变量前缀分别为 <code>--u-ref-*</code>、<code>--u-sys-*</code> 与 <code>--u-comp-&lt;component&gt;-*</code>。</p><h2 id="颜色角色" tabindex="-1">颜色角色 <a class="header-anchor" href="#颜色角色" aria-label="Permalink to &quot;颜色角色&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Token</th><th>值</th><th>角色</th></tr></thead><tbody><tr><td><code>--u-ref-color-brand-cobalt</code></td><td><code>#0047AB</code></td><td>品牌、结构、主操作、选中状态与焦点</td></tr><tr><td><code>--u-ref-color-brand-cyan</code></td><td><code>#00A8D3</code></td><td>局部强调、数据高亮、进度与次要注意力</td></tr><tr><td><code>--u-ref-color-neutral-0</code></td><td><code>#FFFFFF</code></td><td>默认浅色表面与主操作前景</td></tr><tr><td><code>--u-ref-color-neutral-950</code></td><td><code>#001B2E</code></td><td>主文字与强调色前景</td></tr></tbody></table><p>钴蓝配白色按常规文字 4.5:1 阈值检查；清透青配深色前景，不默认白字。颜色不单独表达状态。该规则是主题与组件 fixture 的验证输入，不是平台无障碍认证。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("design-system/tokens-and-theme.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const tokensAndTheme = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  tokensAndTheme as default
};
