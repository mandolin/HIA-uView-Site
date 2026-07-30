import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"UButton","description":"","frontmatter":{"id":"components/u-button","locale":"en","status":"pre-release","source":"https://github.com/mandolin/HIA-uView/blob/main/docs/button.md"},"headers":[],"relativePath":"en/components/u-button.md","filePath":"en/components/u-button.md"}');
const _sfc_main = { name: "en/components/u-button.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ubutton" tabindex="-1">UButton <a class="header-anchor" href="#ubutton" aria-label="Permalink to &quot;UButton&quot;">​</a></h1><p><code>UButton</code> is the first generic local-action component contract for the UniApp Vue 3 <code>mp-weixin</code> profile. It represents user intent; it is not a wrapper for navigation, identity, payment, form submission, or business capability.</p><h2 id="controlled-api" tabindex="-1">Controlled API <a class="header-anchor" href="#controlled-api" aria-label="Permalink to &quot;Controlled API&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Property or event</th><th>Role</th></tr></thead><tbody><tr><td><code>variant</code></td><td>Selects <code>primary</code>, <code>secondary</code>, or <code>text</code> semantic action treatment; it does not adopt an upstream <code>type</code> API.</td></tr><tr><td><code>size</code></td><td>Selects <code>sm</code>, <code>md</code>, or <code>lg</code> density and touch-target profile.</td></tr><tr><td><code>block</code></td><td>Makes the root occupy available inline width without changing action meaning.</td></tr><tr><td><code>disabled</code> / <code>loading</code></td><td>Suppress activation while retaining a distinguishable state presentation.</td></tr><tr><td><code>label</code> or default slot</td><td>Supplies a visible text label; icon-only and arbitrary-layout content are not in the first contract.</td></tr><tr><td><code>click(event)</code></td><td>Emits once only when enabled and not loading; the component adds no debounce, navigation, backend, or business idempotency.</td></tr></tbody></table><h2 id="theme-and-accessibility-boundary" tabindex="-1">Theme and accessibility boundary <a class="header-anchor" href="#theme-and-accessibility-boundary" aria-label="Permalink to &quot;Theme and accessibility boundary&quot;">​</a></h2><p>The root namespace is <code>u-button</code>. The component uses <code>--u-comp-button-*</code> tokens instead of hard-coded raw colors. Primary action maps to cobalt; solid clear cyan must use a dark foreground and does not default to white.</p><p>WCAG 2.2 AA is an acceptance target for controllable component behavior, not mini-program or product conformance certification. The current contract requires visible text, non-color state signals, documented contrast, and a touch target; keyboard focus, screen-reader semantics, and accessibility-tree behavior are not independently verified.</p><p>See <a href="/en/design-system/tokens-and-theme.html">tokens and theme</a> and <a href="/en/compatibility-and-releases/compatibility-evidence.html">compatibility evidence</a>.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/components/u-button.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const uButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  uButton as default
};
