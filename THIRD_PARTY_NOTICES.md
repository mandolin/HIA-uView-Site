# Third-party notices / 第三方声明

No third-party source code, assets, fonts, icons, screenshots, themes, or generated content are included in this repository at initialization.

初始化时，本仓不包含任何第三方源码、资产、字体、图标、截图、主题或生成内容。

## Development-only dependencies / 仅开发期依赖

| Dependency | Immutable source | License | Boundary |
| --- | --- | --- | --- |
| `vitepress@1.6.4` | npm registry package, locked by `package-lock.json` | MIT | Local static build only; no runtime package. |
| `jsdoc@4.0.5` | npm registry package, locked by `package-lock.json` | Apache-2.0 | Local source-documentation validation only. |
| `@mandolin/jsdoc-plugin-hia-sys@0.1.2` | Scoped public registry package, lockfile integrity `sha512-FO8…8J2w==` | MIT | Local bilingual JSDoc integration gate only. |
| `@mandolin/jsdoc-theme-hia@0.1.1` | Scoped public registry package, lockfile integrity `sha512-6wGu…WGQ==` | MIT | Local JSDoc-theme validation only. |

The P63 `@mandolin` versions (`0.1.3`/`0.1.2`) were not available from an npm registry on 2026-07-30, so this repository uses the previously published and audited `0.1.2`/`0.1.1` versions through a scope-only public registry and lockfile integrity. See [ADR-0001](docs/adr/ADR-0001-local-static-site-and-documentation-gate.md); no local path, private artifact, or generated JSDoc output is distributed.

P63 所述两个 `@mandolin` 版本（`0.1.3`/`0.1.2`）在 2026-07-30 尚无 npm registry 发布版本，因此本仓通过 scope 专用公开 registry 与 lockfile integrity 使用此前已发布并已审计的 `0.1.2`/`0.1.1`。详见 [ADR-0001](docs/adr/ADR-0001-local-static-site-and-documentation-gate.md)；不会分发本机路径、私有制品或生成的 JSDoc 输出。

## GitHub Actions deployment references / GitHub Actions 部署引用

| Action | Immutable reference | License | Boundary |
| --- | --- | --- | --- |
| `actions/checkout` | `d23441a48e516b6c34aea4fa41551a30e30af803` | MIT | Reads trusted `main` content in the build job only. |
| `actions/setup-node` | `249970729cb0ef3589644e2896645e5dc5ba9c38` | MIT | Selects Node 22 in the build job only. |
| `actions/configure-pages` | `983d7736d9b0ae728b81ab479565c72886d7745b` | MIT | Configures GitHub Pages metadata only. |
| `actions/upload-pages-artifact` | `7b1f4a764d45c48632c6b24a0339c27f5614fb0b` | MIT | Uploads the checked static artifact only. |
| `actions/deploy-pages` | `d6db90164ac5ed86f2b6aed7e0febac5b3c0c03e` | MIT | Deploys to GitHub Pages only. |

These are GitHub `actions`-organization workflow references, not distributed source or Site runtime dependencies. Their exact role, permissions, and upgrade/review conditions are recorded in [ADR-0002](docs/adr/ADR-0002-github-pages-actions-deployment.md).

这些是 GitHub `actions` 组织的 workflow 引用，并非随站点分发的源码或运行时依赖。它们的精确职责、权限和升级/审阅条件记录在 [ADR-0002](docs/adr/ADR-0002-github-pages-actions-deployment.md)。

Any future inclusion must be reviewed for provenance, version, immutable reference, license, attribution, asset boundary, privacy implications, and distribution scope before it is added.

未来任何纳入都必须在添加前审阅来源、版本、不可变引用、许可证、署名、资产边界、隐私影响和分发范围。
