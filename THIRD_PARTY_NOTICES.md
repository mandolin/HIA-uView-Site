# Third-party notices / 第三方声明

No third-party source code, assets, fonts, icons, screenshots, themes, or generated content are included in this repository at initialization.

初始化时，本仓不包含任何第三方源码、资产、字体、图标、截图、主题或生成内容。

## Development-only dependencies / 仅开发期依赖

| Dependency | Immutable source | License | Boundary |
| --- | --- | --- | --- |
| `vitepress@1.6.4` | npm registry package, locked by `package-lock.json` | MIT | Local static build only; no runtime package. |
| `jsdoc@4.0.5` | npm registry package, locked by `package-lock.json` | Apache-2.0 | Local source-documentation validation only. |
| `@mandolin/jsdoc-plugin-hia-sys@0.1.3` | Public GitHub commit `f98b34ae5220e4b1aae4d333b4222eb9ef0577d0` | MIT | Local bilingual JSDoc integration gate only. |
| `@mandolin/jsdoc-theme-hia@0.1.2` | Public GitHub commit `379e433df46d9d7a713c58b577c002dbec3cd4c8` | MIT | Local JSDoc-theme validation only. |

The two `@mandolin` packages are temporarily pinned to public Git commits because their stated versions were not available from an npm registry on 2026-07-30. See [ADR-0001](docs/adr/ADR-0001-local-static-site-and-documentation-gate.md); no local path, private artifact, or generated JSDoc output is distributed.

两个 `@mandolin` 包在 2026-07-30 尚无对应 npm registry 版本，因此暂时固定到公开 Git 提交。详见 [ADR-0001](docs/adr/ADR-0001-local-static-site-and-documentation-gate.md)；不会分发本机路径、私有制品或生成的 JSDoc 输出。

Any future inclusion must be reviewed for provenance, version, immutable reference, license, attribution, asset boundary, privacy implications, and distribution scope before it is added.

未来任何纳入都必须在添加前审阅来源、版本、不可变引用、许可证、署名、资产边界、隐私影响和分发范围。
