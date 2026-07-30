import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Component overview","description":"","frontmatter":{"id":"components/overview","locale":"en","status":"pre-release","source":"https://github.com/mandolin/HIA-uView/blob/main/docs/components.md"},"headers":[],"relativePath":"en/components/overview.md","filePath":"en/components/overview.md"}');
const _sfc_main = { name: "en/components/overview.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="component-overview" tabindex="-1">Component overview <a class="header-anchor" href="#component-overview" aria-label="Permalink to &quot;Component overview&quot;">​</a></h1><p>Current component contracts are private pre-release UniApp Vue 3 contracts for the <code>mp-weixin</code> profile. They are navigation and review entry points, not published npm APIs; automatic registration, device behavior, accessibility-tree behavior, App/H5, and complete upstream compatibility are not claimed.</p><h2 id="current-scope" tabindex="-1">Current scope <a class="header-anchor" href="#current-scope" aria-label="Permalink to &quot;Current scope&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Category</th><th>Components</th></tr></thead><tbody><tr><td>Actions and layout</td><td><code>UButton</code>, <code>UStack</code>, <code>UNavBar</code>, <code>UCell</code></td></tr><tr><td>Input and validation presentation</td><td><code>UInput</code>, <code>UField</code>, <code>UValidationMessage</code></td></tr><tr><td>Feedback and state</td><td><code>UModal</code>, <code>UNotice</code>, <code>UEmpty</code></td></tr><tr><td>Controlled selection</td><td><code>URadio</code>, <code>URadioGroup</code>, <code>UCheckbox</code>, <code>UCheckboxGroup</code></td></tr></tbody></table><p>Components keep familiar <code>u-*</code> template names and <code>U*</code> exports to lower reading and incremental-migration cost; that does not create a complete upstream API surface. Applications explicitly import styles and own routes, data, requests, identity, permissions, and domain rules.</p><h2 id="component-use-principles" tabindex="-1">Component-use principles <a class="header-anchor" href="#component-use-principles" aria-label="Permalink to &quot;Component-use principles&quot;">​</a></h2><ol><li>Read an individual contract before replacing or adopting a component.</li><li>Keep selection and state caller-controlled; components emit explicit intent only.</li><li>Do not assume an unlisted component, global service, request, storage, router, form engine, or business module exists.</li></ol><p>The first public reference page is <a href="/en/components/u-button.html">UButton</a>.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/components/overview.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const overview = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  overview as default
};
