---
id: getting-started/introduction
locale: zh-Hans
status: pre-release
source: https://github.com/mandolin/HIA-uView/blob/main/docs/architecture.md
---

# 项目介绍

HIA-uView 是一个 npm monorepo，目前将边界拆分为 UI 和 Tool。初始兼容性目标是 UniApp Vue 3 的 `mp-weixin`；App、H5 与其他小程序不会因编译通过而自动获得支持。

## 两个 workspace

| 区域 | 当前职责 | 不负责 |
| --- | --- | --- |
| HIA-uView-UI | 组件、composable、平台适配、主题与 locale 边界 | 业务数据、后端、行业字段和 Biz 运行时规则 |
| HIA-uView-Tool | 校验、检查和查看 UI 声明元数据的开发期 CLI | 应用运行时、源码扫描和业务辅助 |

Tool 已实现的命令是只读的：`doctor`、`check contract`、`check adoption`、`inspect components` 与 `inspect compatibility`。它们不执行项目脚本、网络请求、构建或 DevTools。

## 与 Biz 的关系

HIA-uView-Biz 是独立仓。未来 Biz 应通过已发布 UI 版本、文档化本地链接或专用集成 fixture 使用 UI；它不能导入 UI 源文件，也不与 UI/Tool 共用父级 lockfile。业务模块、adapter、身份、页面和业务工具属于 Biz 的 `main-repo`。

继续查看[组件概览](/components/overview)或[Tool 概览](/tool/overview)。
