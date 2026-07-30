---
id: migration-and-source/migration-from-uview
locale: zh-Hans
status: pre-release
source: https://github.com/mandolin/HIA-uView/blob/main/docs/migration-from-uview.md
---

# 从 uView 迁移

HIA-uView 有意为已实现组件保留 `u-*` 模板名与 `U*` 导出，降低 uView、uView2、uView-Pro 和 uview-plus 用户的阅读与逐项迁移成本。它不是拥有完整上游 API 面的 fork，也不承诺兼容任何上游 release、plugin、theme 或应用行为。

## 人工、逐项地迁移

| 步骤 | 应做 | 不可推断 |
| --- | --- | --- |
| 选择组件 | 根据组件契约逐个使用显式 `U*` import 或显式 `UView` plugin 注册 | 不要全局替换所有 `u-*` tag，也不要假定未列组件存在 |
| 导入样式 | 在应用拥有的全局样式设置中显式导入 `style.css` | 不要期待 module import 或 plugin 注册自动注入样式 |
| 保持状态所有权 | 在应用中绑定 props、处理 emit，并保持选择组件受控 | 不要期待组件获取数据、导航、持久化或推断业务规则 |
| 核验证据 | 运行适用的仓内检查，并审阅声明的兼容性证据 | 不要把 jsdom 或 compiler 结果称为真机、跨端或发布证明 |

## 来源政策

HIA-uView 可在逐文件审计后选择性复用已审阅 uView 基线中的 MIT 源码。每一项纳入都必须记录来源仓、版本、固定提交、上游路径、许可证/NOTICE、目标路径、改动摘要、资产与平台审计以及验证证据。

示例应用、根项目工具、生成物、字体、图标、图片、证书、密钥、商标或品牌资产均不因仓级许可证而自动可用。当前公开站点不包含任何上游站点素材。
