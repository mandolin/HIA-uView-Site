import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Tokens and theme","description":"","frontmatter":{"id":"design-system/tokens-and-theme","locale":"en","status":"pre-release","source":"https://github.com/mandolin/HIA-uView/blob/main/docs/design-system.md"},"headers":[],"relativePath":"en/design-system/tokens-and-theme.md","filePath":"en/design-system/tokens-and-theme.md"}');
const _sfc_main = { name: "en/design-system/tokens-and-theme.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="tokens-and-theme" tabindex="-1">Tokens and theme <a class="header-anchor" href="#tokens-and-theme" aria-label="Permalink to &quot;Tokens and theme&quot;">​</a></h1><p>HIA-uView defines design-system boundaries before publishing component APIs. The first profile covers the HIA light theme only; dark mode, high contrast, fonts, icons, shadows, and a radius system need independent evidence and documentation.</p><h2 id="three-token-layers" tabindex="-1">Three token layers <a class="header-anchor" href="#three-token-layers" aria-label="Permalink to &quot;Three token layers&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Layer</th><th>Responsibility</th><th>Consumer rule</th></tr></thead><tbody><tr><td><code>ref</code></td><td>Raw design values such as color, spacing, and duration</td><td>Used only by theme definitions and token mappings</td></tr><tr><td><code>sys</code></td><td>Semantic intent such as surface, text, action, state, focus, and layer</td><td>Components and application layouts should consume this layer</td></tr><tr><td><code>comp</code></td><td>Semantic token for one component</td><td>Used only by the owning component and documented theme extensions</td></tr></tbody></table><p>Variable prefixes are <code>--u-ref-*</code>, <code>--u-sys-*</code>, and <code>--u-comp-&lt;component&gt;-*</code>.</p><h2 id="color-roles" tabindex="-1">Color roles <a class="header-anchor" href="#color-roles" aria-label="Permalink to &quot;Color roles&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Token</th><th>Value</th><th>Role</th></tr></thead><tbody><tr><td><code>--u-ref-color-brand-cobalt</code></td><td><code>#0047AB</code></td><td>Brand, structure, primary action, selected state, and focus</td></tr><tr><td><code>--u-ref-color-brand-cyan</code></td><td><code>#00A8D3</code></td><td>Local emphasis, data highlighting, progress, and secondary attention</td></tr><tr><td><code>--u-ref-color-neutral-0</code></td><td><code>#FFFFFF</code></td><td>Default light surface and primary-action foreground</td></tr><tr><td><code>--u-ref-color-neutral-950</code></td><td><code>#001B2E</code></td><td>Primary text and accent foreground</td></tr></tbody></table><p>Cobalt with white is checked against the normal-text 4.5:1 threshold; clear cyan uses a dark foreground and does not default to white. Color never communicates state on its own. This rule is verification input for themes and component fixtures, not platform accessibility certification.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/design-system/tokens-and-theme.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const tokensAndTheme = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  tokensAndTheme as default
};
