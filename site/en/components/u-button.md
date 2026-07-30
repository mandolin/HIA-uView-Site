---
id: components/u-button
locale: en
status: pre-release
source: https://github.com/mandolin/HIA-uView/blob/main/docs/button.md
---

# UButton

`UButton` is the first generic local-action component contract for the UniApp Vue 3 `mp-weixin` profile. It represents user intent; it is not a wrapper for navigation, identity, payment, form submission, or business capability.

## Controlled API

| Property or event | Role |
| --- | --- |
| `variant` | Selects `primary`, `secondary`, or `text` semantic action treatment; it does not adopt an upstream `type` API. |
| `size` | Selects `sm`, `md`, or `lg` density and touch-target profile. |
| `block` | Makes the root occupy available inline width without changing action meaning. |
| `disabled` / `loading` | Suppress activation while retaining a distinguishable state presentation. |
| `label` or default slot | Supplies a visible text label; icon-only and arbitrary-layout content are not in the first contract. |
| `click(event)` | Emits once only when enabled and not loading; the component adds no debounce, navigation, backend, or business idempotency. |

## Theme and accessibility boundary

The root namespace is `u-button`. The component uses `--u-comp-button-*` tokens instead of hard-coded raw colors. Primary action maps to cobalt; solid clear cyan must use a dark foreground and does not default to white.

WCAG 2.2 AA is an acceptance target for controllable component behavior, not mini-program or product conformance certification. The current contract requires visible text, non-color state signals, documented contrast, and a touch target; keyboard focus, screen-reader semantics, and accessibility-tree behavior are not independently verified.

See [tokens and theme](/en/design-system/tokens-and-theme) and [compatibility evidence](/en/compatibility-and-releases/compatibility-evidence).
