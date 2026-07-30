import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"HIA-uView-Tool","description":"","frontmatter":{"id":"tool/overview","locale":"en","status":"pre-release","source":"https://github.com/mandolin/HIA-uView/blob/main/docs/tool.md"},"headers":[],"relativePath":"en/tool/overview.md","filePath":"en/tool/overview.md"}');
const _sfc_main = { name: "en/tool/overview.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="hia-uview-tool" tabindex="-1">HIA-uView-Tool <a class="header-anchor" href="#hia-uview-tool" aria-label="Permalink to &quot;HIA-uView-Tool&quot;">​</a></h1><p>HIA-uView-Tool is a development-time companion around declared HIA-uView-UI metadata. It is not application, UI-component, or business-framework runtime, and it is not a business helper for HIA-uView-Biz.</p><h2 id="current-command-surface" tabindex="-1">Current command surface <a class="header-anchor" href="#current-command-surface" aria-label="Permalink to &quot;Current command surface&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Command</th><th>Bounded role</th></tr></thead><tbody><tr><td><code>doctor</code></td><td>Reports Node 22+ and declared-configuration problems</td></tr><tr><td><code>check</code> / <code>check contract</code></td><td>Validates component-manifest version, profile, paths, locales, and ordering</td></tr><tr><td><code>check adoption</code></td><td>Validates a bounded application adoption manifest against its UI manifest</td></tr><tr><td><code>inspect components</code></td><td>Reports declared component metadata and diagnostics</td></tr><tr><td><code>inspect compatibility</code></td><td>Reports declared compatibility evidence without upgrading it into device or release evidence</td></tr></tbody></table><p>Every implemented command is read-only and consumes only local JSON configuration and explicitly declared relative JSON manifests. It does not read application source, component implementation, Markdown contracts, or test output; it does not execute scripts, network operations, subprocesses, builds, Git, or DevTools.</p><h2 id="what-does-not-belong-in-tool" tabindex="-1">What does not belong in Tool <a class="header-anchor" href="#what-does-not-belong-in-tool" aria-label="Permalink to &quot;What does not belong in Tool&quot;">​</a></h2><p>Modules, APIs/adapters, Directus, identity, pages, domain configuration, and related CLI work belong in HIA-uView-Biz <code>main-repo</code>. A future write-oriented scaffold requires separate authority, dry-run by default, and safe target and overwrite policy.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/tool/overview.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const overview = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  overview as default
};
