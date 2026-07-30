---
id: components/overview
locale: en
status: pre-release
source: https://github.com/mandolin/HIA-uView/blob/main/docs/components.md
---

# Component overview

Current component contracts are private pre-release UniApp Vue 3 contracts for the `mp-weixin` profile. They are navigation and review entry points, not published npm APIs; automatic registration, device behavior, accessibility-tree behavior, App/H5, and complete upstream compatibility are not claimed.

## Current scope

| Category | Components |
| --- | --- |
| Actions and layout | `UButton`, `UStack`, `UNavBar`, `UCell` |
| Input and validation presentation | `UInput`, `UField`, `UValidationMessage` |
| Feedback and state | `UModal`, `UNotice`, `UEmpty` |
| Controlled selection | `URadio`, `URadioGroup`, `UCheckbox`, `UCheckboxGroup` |

Components keep familiar `u-*` template names and `U*` exports to lower reading and incremental-migration cost; that does not create a complete upstream API surface. Applications explicitly import styles and own routes, data, requests, identity, permissions, and domain rules.

## Component-use principles

1. Read an individual contract before replacing or adopting a component.
2. Keep selection and state caller-controlled; components emit explicit intent only.
3. Do not assume an unlisted component, global service, request, storage, router, form engine, or business module exists.

The first public reference page is [UButton](/en/components/u-button).
