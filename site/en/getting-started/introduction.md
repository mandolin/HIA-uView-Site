---
id: getting-started/introduction
locale: en
status: pre-release
source: https://github.com/mandolin/HIA-uView/blob/main/docs/architecture.md
---

# Introduction

HIA-uView is an npm monorepo that currently separates UI and Tool boundaries. Its initial compatibility target is UniApp Vue 3 for `mp-weixin`; App, H5, and other mini-program support cannot be inferred merely because code compiles.

## Two workspaces

| Area | Current responsibility | Does not own |
| --- | --- | --- |
| HIA-uView-UI | Components, composables, platform adapters, themes, and locale boundaries | Business data, backends, industry fields, and Biz runtime rules |
| HIA-uView-Tool | Development-time CLI for validating, checking, and inspecting declared UI metadata | Application runtime, source scanning, and business helpers |

Implemented Tool commands are read-only: `doctor`, `check contract`, `check adoption`, `inspect components`, and `inspect compatibility`. They do not execute project scripts, network requests, builds, or DevTools.

## Relationship to Biz

HIA-uView-Biz is a separate repository. A future Biz integration must use a released UI version, documented local link, or dedicated integration fixture; it must not import UI source files or share the UI/Tool parent lockfile. Business modules, adapters, identity, pages, and business tooling belong in Biz `main-repo`.

Continue with the [component overview](/en/components/overview) or [Tool overview](/en/tool/overview).
