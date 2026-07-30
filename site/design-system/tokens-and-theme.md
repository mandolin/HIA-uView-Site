---
id: design-system/tokens-and-theme
locale: zh-Hans
status: pre-release
source: https://github.com/mandolin/HIA-uView/blob/main/docs/design-system.md
---

# Token 与主题

HIA-uView 先定义设计系统边界，再发布组件 API。首轮仅覆盖 HIA 浅色主题；暗色、高对比度、字体、图标、阴影和圆角体系需要独立证据与文档。

## 三层 token

| 层级 | 责任 | 使用规则 |
| --- | --- | --- |
| `ref` | 原始色彩、间距和时长等设计值 | 只供主题定义与 token 映射使用 |
| `sys` | 表面、文字、操作、状态、焦点与层级等语义意图 | 组件与应用布局应使用这一层 |
| `comp` | 单个组件的语义 token | 仅组件所有者和已文档化主题扩展使用 |

变量前缀分别为 `--u-ref-*`、`--u-sys-*` 与 `--u-comp-<component>-*`。

## 颜色角色

| Token | 值 | 角色 |
| --- | --- | --- |
| `--u-ref-color-brand-cobalt` | `#0047AB` | 品牌、结构、主操作、选中状态与焦点 |
| `--u-ref-color-brand-cyan` | `#00A8D3` | 局部强调、数据高亮、进度与次要注意力 |
| `--u-ref-color-neutral-0` | `#FFFFFF` | 默认浅色表面与主操作前景 |
| `--u-ref-color-neutral-950` | `#001B2E` | 主文字与强调色前景 |

钴蓝配白色按常规文字 4.5:1 阈值检查；清透青配深色前景，不默认白字。颜色不单独表达状态。该规则是主题与组件 fixture 的验证输入，不是平台无障碍认证。
