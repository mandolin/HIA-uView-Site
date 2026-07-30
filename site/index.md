---
id: home
locale: zh-Hans
status: pre-release
source: https://github.com/mandolin/HIA-uView/blob/main/README.md
layout: home
hero:
  name: HIA-uView
  text: 面向 UniApp 小程序的受边界约束 UI 框架
  tagline: 从明确的组件契约、主题 token 与验证证据开始。
  actions:
    - theme: brand
      text: 开始使用
      link: /getting-started/introduction
    - theme: alt
      text: 查看兼容性边界
      link: /compatibility-and-releases/compatibility-evidence
features:
  - title: 组件先行
    details: 当前组件以显式契约、受控状态和本地验证为基础，不把业务规则带入 UI 层。
  - title: 清晰主题边界
    details: 钴蓝承担主结构，清透青用于局部强调；组件消费语义 token，而非散布原始色值。
  - title: 证据分级
    details: 编译、受限本地 DevTools fixture 与 jsdom 证据分别记录，未验证环境不作推断。
---

# HIA-uView

HIA-uView 是一个面向 UniApp 的 UI 框架项目，当前优先服务于微信小程序的 Vue 3 开发。它包含 UI 与开发期 Tool 两个 workspace；本站与它们独立，以便内容、部署和回退拥有自己的审阅边界。

首发站点只描述已有公开事实。所有组件与 Tool 仍处于预发布阶段，不能据此推断已发布 npm API、真机、跨端、审核或线上服务支持。

## 从这里开始

- [项目介绍](/getting-started/introduction)：了解 UI、Tool 与 Biz 的职责分界。
- [组件概览](/components/overview)：查看当前 14 个私有预发布组件的范围。
- [Token 与主题](/design-system/tokens-and-theme)：了解色彩、语义 token 和无障碍目标。
- [兼容性证据](/compatibility-and-releases/compatibility-evidence)：区分已经观察的证据和明确未验证的环境。

## 公开来源与限制

本站内容由 HIA-uView 公开仓的 README 与契约文档人工审阅后归纳，不复制 uView 系列站点的代码、文案、图片、统计或视觉识别。请在采用前阅读[迁移说明](/migration-and-source/migration-from-uview)和[兼容性边界](/compatibility-and-releases/compatibility-evidence)。
