---
id: migration-and-source/migration-from-uview
locale: en
status: pre-release
source: https://github.com/mandolin/HIA-uView/blob/main/docs/migration-from-uview.md
---

# Migrating from uView

HIA-uView deliberately keeps `u-*` template names and `U*` exports for implemented components to lower reading and incremental-migration cost for uView, uView2, uView-Pro, and uview-plus users. It is not a fork with a complete upstream API surface and does not promise compatibility with any upstream release, plugin, theme, or application behavior.

## Migrate manually, one boundary at a time

| Step | Do | Do not infer |
| --- | --- | --- |
| Choose components | Use an explicit `U*` import or explicit `UView` plugin registration one documented component at a time | Do not globally replace all `u-*` tags or assume an unlisted component exists |
| Import styles | Explicitly import `style.css` in application-owned global style setup | Do not expect module import or plugin registration to inject styles automatically |
| Keep state ownership | Bind props and handle emits in the application; keep selection components controlled | Do not expect components to fetch data, navigate, persist, or infer business rules |
| Verify evidence | Run applicable repository-local checks and review declared compatibility evidence | Do not call jsdom or compiler results device, cross-platform, or release proof |

## Source policy

HIA-uView may selectively reuse MIT source from reviewed uView baselines after a per-file audit. Every adopted item must record source repository, version, fixed commit, upstream path, license/NOTICE, target path, change summary, asset and platform audit, and verification evidence.

Example apps, root-project tooling, generated output, fonts, icons, images, certificates, keys, trademarks, and brand assets are never automatically eligible because of a repository-level license. This public site includes no upstream-site material.
