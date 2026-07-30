---
id: tool/overview
locale: en
status: pre-release
source: https://github.com/mandolin/HIA-uView/blob/main/docs/tool.md
---

# HIA-uView-Tool

HIA-uView-Tool is a development-time companion around declared HIA-uView-UI metadata. It is not application, UI-component, or business-framework runtime, and it is not a business helper for HIA-uView-Biz.

## Current command surface

| Command | Bounded role |
| --- | --- |
| `doctor` | Reports Node 22+ and declared-configuration problems |
| `check` / `check contract` | Validates component-manifest version, profile, paths, locales, and ordering |
| `check adoption` | Validates a bounded application adoption manifest against its UI manifest |
| `inspect components` | Reports declared component metadata and diagnostics |
| `inspect compatibility` | Reports declared compatibility evidence without upgrading it into device or release evidence |

Every implemented command is read-only and consumes only local JSON configuration and explicitly declared relative JSON manifests. It does not read application source, component implementation, Markdown contracts, or test output; it does not execute scripts, network operations, subprocesses, builds, Git, or DevTools.

## What does not belong in Tool

Modules, APIs/adapters, Directus, identity, pages, domain configuration, and related CLI work belong in HIA-uView-Biz `main-repo`. A future write-oriented scaffold requires separate authority, dry-run by default, and safe target and overwrite policy.
