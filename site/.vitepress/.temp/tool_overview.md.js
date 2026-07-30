import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"HIA-uView-Tool","description":"","frontmatter":{"id":"tool/overview","locale":"zh-Hans","status":"pre-release","source":"https://github.com/mandolin/HIA-uView/blob/main/docs/tool.md"},"headers":[],"relativePath":"tool/overview.md","filePath":"tool/overview.md"}');
const _sfc_main = { name: "tool/overview.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="hia-uview-tool" tabindex="-1">HIA-uView-Tool <a class="header-anchor" href="#hia-uview-tool" aria-label="Permalink to &quot;HIA-uView-Tool&quot;">​</a></h1><p>HIA-uView-Tool 是围绕 HIA-uView-UI 声明元数据的开发期辅助工具。它不属于应用、UI 组件或业务框架运行时，也不是 HIA-uView-Biz 的业务辅助工具。</p><h2 id="当前命令面" tabindex="-1">当前命令面 <a class="header-anchor" href="#当前命令面" aria-label="Permalink to &quot;当前命令面&quot;">​</a></h2><table tabindex="0"><thead><tr><th>命令</th><th>受限作用</th></tr></thead><tbody><tr><td><code>doctor</code></td><td>报告 Node 22+ 与已声明配置问题</td></tr><tr><td><code>check</code> / <code>check contract</code></td><td>校验组件 manifest 的版本、profile、路径、locale 和排序</td></tr><tr><td><code>check adoption</code></td><td>校验受边界约束的应用 adoption manifest 与 UI manifest 的一致性</td></tr><tr><td><code>inspect components</code></td><td>输出已声明组件元数据与诊断</td></tr><tr><td><code>inspect compatibility</code></td><td>输出已声明的兼容性证据，不将其升级为设备或发布结论</td></tr></tbody></table><p>所有已实现命令均为只读，只消费本地 JSON 配置和显式声明的相对 JSON manifest。它们不读取应用源码、组件实现、Markdown 契约或测试输出；也不执行脚本、网络、子进程、构建、Git 或 DevTools。</p><h2 id="不属于-tool-的内容" tabindex="-1">不属于 Tool 的内容 <a class="header-anchor" href="#不属于-tool-的内容" aria-label="Permalink to &quot;不属于 Tool 的内容&quot;">​</a></h2><p>模块、API/adapter、Directus、身份、页面、领域配置及相关 CLI 均属于 HIA-uView-Biz <code>main-repo</code>。未来的写入型脚手架必须独立授权，默认 dry-run，并限定安全目标与覆盖策略。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("tool/overview.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const overview = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  overview as default
};
