import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Introduction","description":"","frontmatter":{"id":"getting-started/introduction","locale":"en","status":"pre-release","source":"https://github.com/mandolin/HIA-uView/blob/main/docs/architecture.md"},"headers":[],"relativePath":"en/getting-started/introduction.md","filePath":"en/getting-started/introduction.md"}');
const _sfc_main = { name: "en/getting-started/introduction.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h1><p>HIA-uView is an npm monorepo that currently separates UI and Tool boundaries. Its initial compatibility target is UniApp Vue 3 for <code>mp-weixin</code>; App, H5, and other mini-program support cannot be inferred merely because code compiles.</p><h2 id="two-workspaces" tabindex="-1">Two workspaces <a class="header-anchor" href="#two-workspaces" aria-label="Permalink to &quot;Two workspaces&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Area</th><th>Current responsibility</th><th>Does not own</th></tr></thead><tbody><tr><td>HIA-uView-UI</td><td>Components, composables, platform adapters, themes, and locale boundaries</td><td>Business data, backends, industry fields, and Biz runtime rules</td></tr><tr><td>HIA-uView-Tool</td><td>Development-time CLI for validating, checking, and inspecting declared UI metadata</td><td>Application runtime, source scanning, and business helpers</td></tr></tbody></table><p>Implemented Tool commands are read-only: <code>doctor</code>, <code>check contract</code>, <code>check adoption</code>, <code>inspect components</code>, and <code>inspect compatibility</code>. They do not execute project scripts, network requests, builds, or DevTools.</p><h2 id="relationship-to-biz" tabindex="-1">Relationship to Biz <a class="header-anchor" href="#relationship-to-biz" aria-label="Permalink to &quot;Relationship to Biz&quot;">​</a></h2><p>HIA-uView-Biz is a separate repository. A future Biz integration must use a released UI version, documented local link, or dedicated integration fixture; it must not import UI source files or share the UI/Tool parent lockfile. Business modules, adapters, identity, pages, and business tooling belong in Biz <code>main-repo</code>.</p><p>Continue with the <a href="/en/components/overview.html">component overview</a> or <a href="/en/tool/overview.html">Tool overview</a>.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/getting-started/introduction.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const introduction = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  introduction as default
};
