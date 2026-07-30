---
id: compatibility-and-releases/compatibility-evidence
locale: zh-Hans
status: pre-release
source: https://github.com/mandolin/HIA-uView/blob/main/docs/compatibility.md
---

# 兼容性证据

HIA-uView 当前正在验证的唯一兼容性 profile 是面向 `mp-weixin` 的 UniApp Vue 3。证据按范围记录；编译成功不自动成为真机、无障碍、跨端、审核或发布证据。

## 当前证据范围

| 区域 | 当前状态 | 可得出的结论 |
| --- | --- | --- |
| UniApp runtime | compiler-verified only | Vue 3 API 与 UniApp 语义是初始目标，运行时行为仍需单独界定 |
| WeChat Mini Program | compiler fixture 与本地 DevTools fixture 观察 | 生成 fixture 已被本机导入与观察；这不是设备、焦点、读屏、审核或发布证据 |
| jsdom | runtime evidence | 仅覆盖 jsdom 范围内的运行时行为 |
| App、H5、其他小程序 | 未验证 | 尚不承诺兼容或 fallback |
| UI component API | 未发布 | 后续公共契约必须明确平台 profile |

## 使用这份证据

兼容性 manifest 记录的是受限声明。`inspect compatibility` 只报告其元数据，不执行目标，也不把本地 fixture 提升为真机或发布结论。

每个新平台都需要单独的 profile、fixture 与验证证据。组件不得静默访问设备或平台 API；这类访问需要明确 adapter、特性检测和已文档化的 fallback 或不支持结果。

本站同样处于预发布阶段：它只在本地生成静态输出，尚未配置线上部署、服务端、统计或用户数据处理。
