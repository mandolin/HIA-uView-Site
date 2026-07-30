import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Compatibility evidence","description":"","frontmatter":{"id":"compatibility-and-releases/compatibility-evidence","locale":"en","status":"pre-release","source":"https://github.com/mandolin/HIA-uView/blob/main/docs/compatibility.md"},"headers":[],"relativePath":"en/compatibility-and-releases/compatibility-evidence.md","filePath":"en/compatibility-and-releases/compatibility-evidence.md"}');
const _sfc_main = { name: "en/compatibility-and-releases/compatibility-evidence.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="compatibility-evidence" tabindex="-1">Compatibility evidence <a class="header-anchor" href="#compatibility-evidence" aria-label="Permalink to &quot;Compatibility evidence&quot;">​</a></h1><p>The only HIA-uView compatibility profile currently under validation is UniApp Vue 3 for <code>mp-weixin</code>. Evidence is recorded by scope; a successful compilation does not become device, accessibility, cross-platform, review, or release evidence.</p><h2 id="current-evidence-scope" tabindex="-1">Current evidence scope <a class="header-anchor" href="#current-evidence-scope" aria-label="Permalink to &quot;Current evidence scope&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Area</th><th>Current status</th><th>What can be concluded</th></tr></thead><tbody><tr><td>UniApp runtime</td><td>Compiler-verified only</td><td>Vue 3 APIs and UniApp semantics are the initial target; runtime behavior remains separately bounded</td></tr><tr><td>WeChat Mini Program</td><td>Compiler fixture and local DevTools fixture observation</td><td>A generated fixture was imported and observed locally; this is not device, focus, screen-reader, review, or release evidence</td></tr><tr><td>jsdom</td><td>Runtime evidence</td><td>Covers runtime behavior only within jsdom scope</td></tr><tr><td>App, H5, other mini-programs</td><td>Unverified</td><td>No compatibility or fallback is promised</td></tr><tr><td>UI component API</td><td>Unpublished</td><td>A later public contract must state its platform profile explicitly</td></tr></tbody></table><h2 id="using-this-evidence" tabindex="-1">Using this evidence <a class="header-anchor" href="#using-this-evidence" aria-label="Permalink to &quot;Using this evidence&quot;">​</a></h2><p>The compatibility manifest records bounded declarations. <code>inspect compatibility</code> only reports its metadata; it does not execute a target or promote a local fixture into device or release evidence.</p><p>Every new platform needs its own profile, fixture, and validation evidence. Components must not silently access device or platform APIs; such access needs an explicit adapter, feature detection, and a documented fallback or unsupported result.</p><p>This site is also pre-release: it generates static output locally only and has no configured live deployment, server, analytics, or user-data processing.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/compatibility-and-releases/compatibility-evidence.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const compatibilityEvidence = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  compatibilityEvidence as default
};
