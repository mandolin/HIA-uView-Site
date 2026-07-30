---
id: components/u-button
locale: zh-Hans
status: pre-release
source: https://github.com/mandolin/HIA-uView/blob/main/docs/button.md
---

# UButton

`UButton` 是首个通用本地操作组件契约，面向 UniApp Vue 3 的 `mp-weixin` profile。它表示用户意图，不是导航、身份、支付、表单提交或业务能力封装。

## 受控 API

| 属性或事件 | 作用 |
| --- | --- |
| `variant` | 选择 `primary`、`secondary` 或 `text` 的语义操作样式，不采用上游 `type` API。 |
| `size` | 选择 `sm`、`md` 或 `lg` 的密度与触控目标配置。 |
| `block` | 使根节点占用可用行内宽度，不改变操作含义。 |
| `disabled` / `loading` | 抑制激活，并保留可辨识的状态呈现。 |
| `label` 或默认插槽 | 提供可见文字标签；首轮不支持纯图标和任意布局内容。 |
| `click(event)` | 仅在启用且非加载时发出一次；组件不添加防抖、导航、后端或业务幂等。 |

## 主题与可访问性边界

根命名空间为 `u-button`。组件使用 `--u-comp-button-*` token，而非硬编码原始色值。主操作映射到钴蓝；实底清透青必须使用深色前景，默认不使用白色。

WCAG 2.2 AA 是可控组件行为的验收目标，而非小程序或产品符合性认证。当前契约要求可见文字、非颜色状态信号、已文档化对比度和触控目标；键盘焦点、读屏语义和无障碍树尚未独立验证。

查看[Token 与主题](/design-system/tokens-and-theme)与[兼容性证据](/compatibility-and-releases/compatibility-evidence)。
