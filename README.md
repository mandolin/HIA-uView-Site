# HIA-uView Site

The official documentation site for HIA-uView. This repository is separate from the UI/Tool npm monorepo so that the site has its own review, deployment, and rollback lifecycle. It is **not** an npm package and does not contain HIA-uView runtime source code.

HIA-uView 的官方文档站点。本仓与 UI/Tool npm monorepo 分离，使站点具有独立的审阅、部署和回退生命周期。它**不是** npm 包，也不包含 HIA-uView 运行时源码。

## Current status / 当前状态

The repository currently establishes public content and source boundaries only. The static-site generator, site implementation, preview, and GitHub Pages deployment have not yet been selected or configured.

本仓当前只建立公开内容与来源边界。静态站点生成器、站点实现、预览和 GitHub Pages 部署尚未选择或配置。

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

添加页面或资产前，请阅读[内容与来源政策](docs/content-and-source-policy.md)。

## License / 许可证

This repository is licensed under the [MIT License](LICENSE).

本仓采用 [MIT 许可证](LICENSE)。
