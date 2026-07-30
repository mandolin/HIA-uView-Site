---
id: tool/overview
locale: zh-Hans
status: pre-release
source: https://github.com/mandolin/HIA-uView/blob/main/docs/tool.md
---

# HIA-uView-Tool

HIA-uView-Tool 是围绕 HIA-uView-UI 声明元数据的开发期辅助工具。它不属于应用、UI 组件或业务框架运行时，也不是 HIA-uView-Biz 的业务辅助工具。

## 当前命令面

| 命令 | 受限作用 |
| --- | --- |
| `doctor` | 报告 Node 22+ 与已声明配置问题 |
| `check` / `check contract` | 校验组件 manifest 的版本、profile、路径、locale 和排序 |
| `check adoption` | 校验受边界约束的应用 adoption manifest 与 UI manifest 的一致性 |
| `inspect components` | 输出已声明组件元数据与诊断 |
| `inspect compatibility` | 输出已声明的兼容性证据，不将其升级为设备或发布结论 |

所有已实现命令均为只读，只消费本地 JSON 配置和显式声明的相对 JSON manifest。它们不读取应用源码、组件实现、Markdown 契约或测试输出；也不执行脚本、网络、子进程、构建、Git 或 DevTools。

## 不属于 Tool 的内容

模块、API/adapter、Directus、身份、页面、领域配置及相关 CLI 均属于 HIA-uView-Biz `main-repo`。未来的写入型脚手架必须独立授权，默认 dry-run，并限定安全目标与覆盖策略。
