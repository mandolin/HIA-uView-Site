---
id: compatibility-and-releases/compatibility-evidence
locale: en
status: pre-release
source: https://github.com/mandolin/HIA-uView/blob/main/docs/compatibility.md
---

# Compatibility evidence

The only HIA-uView compatibility profile currently under validation is UniApp Vue 3 for `mp-weixin`. Evidence is recorded by scope; a successful compilation does not become device, accessibility, cross-platform, review, or release evidence.

## Current evidence scope

| Area | Current status | What can be concluded |
| --- | --- | --- |
| UniApp runtime | Compiler-verified only | Vue 3 APIs and UniApp semantics are the initial target; runtime behavior remains separately bounded |
| WeChat Mini Program | Compiler fixture and local DevTools fixture observation | A generated fixture was imported and observed locally; this is not device, focus, screen-reader, review, or release evidence |
| jsdom | Runtime evidence | Covers runtime behavior only within jsdom scope |
| App, H5, other mini-programs | Unverified | No compatibility or fallback is promised |
| UI component API | Unpublished | A later public contract must state its platform profile explicitly |

## Using this evidence

The compatibility manifest records bounded declarations. `inspect compatibility` only reports its metadata; it does not execute a target or promote a local fixture into device or release evidence.

Every new platform needs its own profile, fixture, and validation evidence. Components must not silently access device or platform APIs; such access needs an explicit adapter, feature detection, and a documented fallback or unsupported result.

This site is also pre-release: it generates static output locally only and has no configured live deployment, server, analytics, or user-data processing.
