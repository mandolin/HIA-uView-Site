---
id: components/overview
locale: zh-Hans
status: pre-release
source: https://github.com/mandolin/HIA-uView/blob/main/docs/components.md
---

# 组件概览

当前组件契约为 `mp-weixin` profile 的私有预发布 UniApp Vue 3 契约。它们是导航与审阅入口，不是已发布 npm API，也不承诺自动注册、真机、无障碍树、App/H5 或完整上游兼容。

## 当前范围

| 类别 | 组件 |
| --- | --- |
| 操作与布局 | `UButton`、`UStack`、`UNavBar`、`UCell` |
| 输入与校验呈现 | `UInput`、`UField`、`UValidationMessage` |
| 反馈与状态 | `UModal`、`UNotice`、`UEmpty` |
| 受控选择 | `URadio`、`URadioGroup`、`UCheckbox`、`UCheckboxGroup` |

组件保留熟悉的 `u-*` 模板命名和 `U*` 导出，以降低阅读和逐项迁移成本；这不等于拥有完整上游 API 面。应用显式导入样式，并拥有路由、数据、请求、身份、权限和领域规则。

## 组件使用原则

1. 先阅读单个契约，再逐个替换或采用组件。
2. 保持选择和状态为调用方受控；组件只发出明确意图。
3. 不假定未列组件、global service、request、storage、router、form engine 或业务模块已经存在。

首个公开参考页为 [UButton](/components/u-button)。
