# ADR-0001：本地静态站与源码文档门禁 / Local static site and source-documentation gate

状态：已采纳（P22 本地实施）

日期：2026-07-30

## 背景 / Context

HIA-uView 需要一个独立、可审阅且可回退的官方站点仓。维护者已决定采用 VitePress，并将 GitHub Pages 作为未来 production host；P22 的授权严格限于本地静态构建，不包括开发服务器、预览、Actions、Pages、域名、分析、表单或任何外部服务。

HIA-uView needs an independent official-site repository with its own review and rollback boundary. The maintainer selected VitePress and GitHub Pages as the future production host; P22 authorization is strictly limited to local static builds and excludes development servers, previews, Actions, Pages, domains, analytics, forms, and all external services.

## 决定 / Decision

1. 站点使用 `vitepress@1.6.4`（MIT）和 `jsdoc@4.0.5`（Apache-2.0），均为仅开发期依赖，并由 `package-lock.json` 锁定。
2. 站点源码从首行遵守 HIA Documentation Sys 的双语 ROP。`@mandolin/jsdoc-plugin-hia-sys@0.1.3` 与 `@mandolin/jsdoc-theme-hia@0.1.2` 均为 MIT 且源码公开；截至本 ADR 日期，它们尚未在 npm registry 发布相应版本。因此依赖固定到各自公开 GitHub 仓的精确提交，而非本机路径、浮动分支或私有制品。
3. JSDoc 只校验 Site 的配置与门禁脚本；输出写入 Git 忽略的本地 `temp/documentation/`，不作为 VitePress 输入，也不进入静态站输出。
4. 首发页面须以成对 `zh-Hans`/`en` Markdown 维护。仅人工审阅的公开事实可进入页面；不得导入 UI/Tool 源码正文、WorkZone 内容、开发机路径、临时制品、AppID、凭据、统计或未发布声明。
5. P22 只运行静态检查和 `vitepress build`。GitHub Pages workflow、实际部署、线上 smoke、默认域名与回退在 P23 经独立授权后再决定。

1. The site uses `vitepress@1.6.4` (MIT) and `jsdoc@4.0.5` (Apache-2.0) as development-only dependencies locked by `package-lock.json`.
2. Site source follows the HIA Documentation Sys bilingual ROP from its first line. `@mandolin/jsdoc-plugin-hia-sys@0.1.3` and `@mandolin/jsdoc-theme-hia@0.1.2` are MIT and publicly sourced; their matching versions were not published to an npm registry on this ADR date. They are therefore pinned to exact commits in their public GitHub repositories, never a local path, floating branch, or private artifact.
3. JSDoc checks only Site configuration and gate scripts. Its output is written to Git-ignored local `temp/documentation/`; it is neither a VitePress input nor static-site output.
4. Launch pages are maintained as paired `zh-Hans`/`en` Markdown. Only manually reviewed public facts may enter pages; UI/Tool source bodies, WorkZone material, workstation paths, temporary artifacts, AppIDs, credentials, analytics, and unpublished claims are excluded.
5. P22 runs only static checks and `vitepress build`. A GitHub Pages workflow, live deployment, production smoke, default domain, and rollback require separate P23 authorization.

## 固定来源 / Immutable sources

| 依赖 / Dependency | 不可变引用 / Immutable reference | 许可证 / License | 范围 / Scope |
| --- | --- | --- | --- |
| `vitepress` | npm `1.6.4` | MIT | 本地静态构建 / local static build |
| `jsdoc` | npm `4.0.5` | Apache-2.0 | 本地源码文档验证 / local source-documentation validation |
| `@mandolin/jsdoc-plugin-hia-sys` | [`f98b34ae5220e4b1aae4d333b4222eb9ef0577d0`](https://github.com/mandolin/jsdoc-plugin-hia-sys/tree/f98b34ae5220e4b1aae4d333b4222eb9ef0577d0) | MIT | 本地 JSDoc i18n/integration gate / local JSDoc i18n and integration gate |
| `@mandolin/jsdoc-theme-hia` | [`379e433df46d9d7a713c58b577c002dbec3cd4c8`](https://github.com/mandolin/jsdoc-theme-hia/tree/379e433df46d9d7a713c58b577c002dbec3cd4c8) | MIT | 本地 JSDoc 主题验证 / local JSDoc-theme validation |

## 后果与限制 / Consequences and limits

- Git 依赖是有意的临时发布通道，而不是“已在 npm 发布”的暗示。若将来相同版本发布到 npm，须重新审计来源、完整性和 lockfile 后才可迁移。
- This Git dependency is an intentional temporary distribution channel, not an implication that the package has been published to npm. A future migration to npm requires a fresh provenance, integrity, and lockfile audit.
- VitePress 的 peer 依赖不等于启用数学排版或其他扩展功能；本 W 不安装或配置未使用的 optional feature。
- VitePress peer dependencies do not enable math typesetting or other extension features; this W does not install or configure unused optional features.
- 本 ADR 不构成对运行时、设备、无障碍认证、性能、发布或线上可用性的声明。
- This ADR makes no runtime, device, accessibility-certification, performance, release, or live-availability claim.

## 复核触发条件 / Review triggers

任一依赖升级、npm 发布可用、JSDoc 输出范围改变、公开 source-link/preview、站点内容自动生成、外部资源、CI 或 Pages 部署，均须先更新或新增 ADR 并获得维护者授权。

Any dependency upgrade, npm publication availability, JSDoc-output scope change, public source links/previews, automated content generation, external resource, CI, or Pages deployment requires an updated or new ADR and maintainer authorization first.
