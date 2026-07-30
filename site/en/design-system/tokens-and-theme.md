---
id: design-system/tokens-and-theme
locale: en
status: pre-release
source: https://github.com/mandolin/HIA-uView/blob/main/docs/design-system.md
---

# Tokens and theme

HIA-uView defines design-system boundaries before publishing component APIs. The first profile covers the HIA light theme only; dark mode, high contrast, fonts, icons, shadows, and a radius system need independent evidence and documentation.

## Three token layers

| Layer | Responsibility | Consumer rule |
| --- | --- | --- |
| `ref` | Raw design values such as color, spacing, and duration | Used only by theme definitions and token mappings |
| `sys` | Semantic intent such as surface, text, action, state, focus, and layer | Components and application layouts should consume this layer |
| `comp` | Semantic token for one component | Used only by the owning component and documented theme extensions |

Variable prefixes are `--u-ref-*`, `--u-sys-*`, and `--u-comp-<component>-*`.

## Color roles

| Token | Value | Role |
| --- | --- | --- |
| `--u-ref-color-brand-cobalt` | `#0047AB` | Brand, structure, primary action, selected state, and focus |
| `--u-ref-color-brand-cyan` | `#00A8D3` | Local emphasis, data highlighting, progress, and secondary attention |
| `--u-ref-color-neutral-0` | `#FFFFFF` | Default light surface and primary-action foreground |
| `--u-ref-color-neutral-950` | `#001B2E` | Primary text and accent foreground |

Cobalt with white is checked against the normal-text 4.5:1 threshold; clear cyan uses a dark foreground and does not default to white. Color never communicates state on its own. This rule is verification input for themes and component fixtures, not platform accessibility certification.
