import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"从 uView 迁移","description":"","frontmatter":{"id":"migration-and-source/migration-from-uview","locale":"zh-Hans","status":"pre-release","source":"https://github.com/mandolin/HIA-uView/blob/main/docs/migration-from-uview.md"},"headers":[],"relativePath":"migration-and-source/migration-from-uview.md","filePath":"migration-and-source/migration-from-uview.md"}');
const _sfc_main = { name: "migration-and-source/migration-from-uview.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="从-uview-迁移" tabindex="-1">从 uView 迁移 <a class="header-anchor" href="#从-uview-迁移" aria-label="Permalink to &quot;从 uView 迁移&quot;">​</a></h1><p>HIA-uView 有意为已实现组件保留 <code>u-*</code> 模板名与 <code>U*</code> 导出，降低 uView、uView2、uView-Pro 和 uview-plus 用户的阅读与逐项迁移成本。它不是拥有完整上游 API 面的 fork，也不承诺兼容任何上游 release、plugin、theme 或应用行为。</p><h2 id="人工、逐项地迁移" tabindex="-1">人工、逐项地迁移 <a class="header-anchor" href="#人工、逐项地迁移" aria-label="Permalink to &quot;人工、逐项地迁移&quot;">​</a></h2><table tabindex="0"><thead><tr><th>步骤</th><th>应做</th><th>不可推断</th></tr></thead><tbody><tr><td>选择组件</td><td>根据组件契约逐个使用显式 <code>U*</code> import 或显式 <code>UView</code> plugin 注册</td><td>不要全局替换所有 <code>u-*</code> tag，也不要假定未列组件存在</td></tr><tr><td>导入样式</td><td>在应用拥有的全局样式设置中显式导入 <code>style.css</code></td><td>不要期待 module import 或 plugin 注册自动注入样式</td></tr><tr><td>保持状态所有权</td><td>在应用中绑定 props、处理 emit，并保持选择组件受控</td><td>不要期待组件获取数据、导航、持久化或推断业务规则</td></tr><tr><td>核验证据</td><td>运行适用的仓内检查，并审阅声明的兼容性证据</td><td>不要把 jsdom 或 compiler 结果称为真机、跨端或发布证明</td></tr></tbody></table><h2 id="来源政策" tabindex="-1">来源政策 <a class="header-anchor" href="#来源政策" aria-label="Permalink to &quot;来源政策&quot;">​</a></h2><p>HIA-uView 可在逐文件审计后选择性复用已审阅 uView 基线中的 MIT 源码。每一项纳入都必须记录来源仓、版本、固定提交、上游路径、许可证/NOTICE、目标路径、改动摘要、资产与平台审计以及验证证据。</p><p>示例应用、根项目工具、生成物、字体、图标、图片、证书、密钥、商标或品牌资产均不因仓级许可证而自动可用。当前公开站点不包含任何上游站点素材。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("migration-and-source/migration-from-uview.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const migrationFromUview = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  migrationFromUview as default
};
