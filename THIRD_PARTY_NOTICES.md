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

Any future inclusion must be reviewed for provenance, version, immutable reference, license, attribution, asset boundary, privacy implications, and distribution scope before it is added.

未来任何纳入都必须在添加前审阅来源、版本、不可变引用、许可证、署名、资产边界、隐私影响和分发范围。
