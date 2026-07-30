import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"兼容性证据","description":"","frontmatter":{"id":"compatibility-and-releases/compatibility-evidence","locale":"zh-Hans","status":"pre-release","source":"https://github.com/mandolin/HIA-uView/blob/main/docs/compatibility.md"},"headers":[],"relativePath":"compatibility-and-releases/compatibility-evidence.md","filePath":"compatibility-and-releases/compatibility-evidence.md"}');
const _sfc_main = { name: "compatibility-and-releases/compatibility-evidence.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="兼容性证据" tabindex="-1">兼容性证据 <a class="header-anchor" href="#兼容性证据" aria-label="Permalink to &quot;兼容性证据&quot;">​</a></h1><p>HIA-uView 当前正在验证的唯一兼容性 profile 是面向 <code>mp-weixin</code> 的 UniApp Vue 3。证据按范围记录；编译成功不自动成为真机、无障碍、跨端、审核或发布证据。</p><h2 id="当前证据范围" tabindex="-1">当前证据范围 <a class="header-anchor" href="#当前证据范围" aria-label="Permalink to &quot;当前证据范围&quot;">​</a></h2><table tabindex="0"><thead><tr><th>区域</th><th>当前状态</th><th>可得出的结论</th></tr></thead><tbody><tr><td>UniApp runtime</td><td>compiler-verified only</td><td>Vue 3 API 与 UniApp 语义是初始目标，运行时行为仍需单独界定</td></tr><tr><td>WeChat Mini Program</td><td>compiler fixture 与本地 DevTools fixture 观察</td><td>生成 fixture 已被本机导入与观察；这不是设备、焦点、读屏、审核或发布证据</td></tr><tr><td>jsdom</td><td>runtime evidence</td><td>仅覆盖 jsdom 范围内的运行时行为</td></tr><tr><td>App、H5、其他小程序</td><td>未验证</td><td>尚不承诺兼容或 fallback</td></tr><tr><td>UI component API</td><td>未发布</td><td>后续公共契约必须明确平台 profile</td></tr></tbody></table><h2 id="使用这份证据" tabindex="-1">使用这份证据 <a class="header-anchor" href="#使用这份证据" aria-label="Permalink to &quot;使用这份证据&quot;">​</a></h2><p>兼容性 manifest 记录的是受限声明。<code>inspect compatibility</code> 只报告其元数据，不执行目标，也不把本地 fixture 提升为真机或发布结论。</p><p>每个新平台都需要单独的 profile、fixture 与验证证据。组件不得静默访问设备或平台 API；这类访问需要明确 adapter、特性检测和已文档化的 fallback 或不支持结果。</p><p>本站同样处于预发布阶段：它只在本地生成静态输出，尚未配置线上部署、服务端、统计或用户数据处理。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("compatibility-and-releases/compatibility-evidence.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const compatibilityEvidence = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  compatibilityEvidence as default
};
