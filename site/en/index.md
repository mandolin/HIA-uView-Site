---
id: home
locale: en
status: pre-release
source: https://github.com/mandolin/HIA-uView/blob/main/README.md
layout: home
hero:
  name: HIA-uView
  text: A bounded UI framework for UniApp mini-programs
  tagline: Start from explicit component contracts, theme tokens, and evidence.
  actions:
    - theme: brand
      text: Get started
      link: /en/getting-started/introduction
    - theme: alt
      text: View compatibility boundaries
      link: /en/compatibility-and-releases/compatibility-evidence
features:
  - title: Components first
    details: Current components use explicit contracts, controlled state, and local verification without bringing business rules into the UI layer.
  - title: Clear theme boundaries
    details: Cobalt carries primary structure and clear cyan provides local emphasis; components consume semantic tokens rather than scattered raw colors.
  - title: Graded evidence
    details: Compiler, limited local DevTools fixture, and jsdom evidence are recorded separately; unverified environments are never inferred.
---

# HIA-uView

HIA-uView is a UniApp UI-framework project that currently prioritizes Vue 3 development for WeChat Mini Programs. It contains UI and development-time Tool workspaces; this site is separate so content, deployment, and rollback have their own review boundary.

The launch site describes public facts only. Every component and Tool remains pre-release; this does not imply a published npm API, device, cross-platform, review, or live-service claim.

## Start here

- [Introduction](/en/getting-started/introduction): understand the responsibility boundary of UI, Tool, and Biz.
- [Component overview](/en/components/overview): see the current scope of 14 private pre-release components.
- [Tokens and theme](/en/design-system/tokens-and-theme): understand color, semantic tokens, and accessibility targets.
- [Compatibility evidence](/en/compatibility-and-releases/compatibility-evidence): distinguish observed evidence from explicitly unverified environments.

## Public sources and limits

This site is an original, manually reviewed summary of public README and contract material from the HIA-uView repository. It does not copy uView-family site code, wording, images, statistics, or visual identity. Read the [migration guide](/en/migration-and-source/migration-from-uview) and [compatibility boundary](/en/compatibility-and-releases/compatibility-evidence) before adoption.
