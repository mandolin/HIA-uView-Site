# HIA-uView Site

The official documentation site for HIA-uView. This repository is separate from the UI/Tool npm monorepo so that the site has its own review, deployment, and rollback lifecycle. It is **not** an npm package and does not contain HIA-uView runtime source code.

HIA-uView 的官方文档站点。本仓与 UI/Tool npm monorepo 分离，使站点具有独立的审阅、部署和回退生命周期。它**不是** npm 包，也不包含 HIA-uView 运行时源码。

## Current status / 当前状态

The repository has a local VitePress static build with paired public content. Its first GitHub Pages deployment is live at [mandolin.github.io/HIA-uView-Site](https://mandolin.github.io/HIA-uView-Site/), governed by ADR-0002; previews and external services remain out of scope.

本仓已具备仅限本地构建的 VitePress 静态站与成对公开内容。首次 GitHub Pages 部署已上线至 [mandolin.github.io/HIA-uView-Site](https://mandolin.github.io/HIA-uView-Site/)，并受 ADR-0002 约束；预览和外部服务仍不在范围内。

## Content principles / 内容原则

- Publish matching `zh-Hans` and `en` content for every public page; neither locale is an afterthought or a placeholder.
- Describe only verifiable, public HIA-uView behavior, compatibility evidence, license information, and documented limits.
- Keep HIA-uView’s relationship to the uView family transparent while preserving all upstream license and notice obligations.
- Use the HIA visual foundation: cobalt blue `#0047AB` for primary structure and clear cyan `#00A8D3` for local emphasis, with accessibility checks before visual claims.
- Do not copy upstream site code, wording, screenshots, images, trademarks, statistics, or visual identity.

- 每个公开页面同时维护对应的 `zh-Hans` 与 `en` 内容；任一语言都不是事后补充或占位。
- 只描述可核验、公开的 HIA-uView 行为、兼容性证据、许可证信息和已记录限制。
- 透明说明 HIA-uView 与 uView 系列的关系，同时保留全部上游许可证和 NOTICE 义务。
- 使用 HIA 视觉基线：钴蓝 `#0047AB` 承担主结构，清透青 `#00A8D3` 用于局部强调；任何视觉承诺前先完成无障碍检查。
- 不复制上游站点代码、文案、截图、图片、商标、统计数据或视觉身份。

Read [content and source policy](docs/content-and-source-policy.md) before adding pages or assets.

Read [ADR-0001](docs/adr/ADR-0001-local-static-site-and-documentation-gate.md) before changing the generator, dependencies, source-documentation output, or deployment boundary.

Read [ADR-0002](docs/adr/ADR-0002-github-pages-actions-deployment.md) before changing the Pages workflow, action reference, project path, deployment, or rollback boundary.

添加页面或资产前，请阅读[内容与来源政策](docs/content-and-source-policy.md)。

修改生成器、依赖、源码文档输出或部署边界前，请阅读 [ADR-0001](docs/adr/ADR-0001-local-static-site-and-documentation-gate.md)。

修改 Pages workflow、action 引用、项目路径、部署或回退边界前，请阅读 [ADR-0002](docs/adr/ADR-0002-github-pages-actions-deployment.md)。

## License / 许可证

This repository is licensed under the [MIT License](LICENSE).

本仓采用 [MIT 许可证](LICENSE)。
