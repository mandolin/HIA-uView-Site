# HIA-uView-Site — Agent Guide / 智能体指引

- This is the public official-site repository, separate from `HIA-uView` UI/Tool and `HIA-uView-Biz`. It is not an npm package or a runtime dependency.
- Windows shell commands use PowerShell 7. Check `git status`, README, applicable public documentation, and the private WorkZone plan before making a change.
- Site code, dependencies, generators, CI, previews, GitHub Pages configuration, domains, analytics, forms, third-party assets, and external services all require a reviewed public ADR and explicit maintainer authorization.
- Every public page must have matching `zh-Hans` and `en` content, clear version/compatibility scope, and no private paths, WorkZone material, local artifacts, credentials, AppIDs, telemetry data, source bodies, or unpublished-package claims.
- HIA-uView source, component contracts, source ledgers, LICENSE, and NOTICE remain the authoritative public facts. Do not copy code, wording, screenshots, images, trademarks, branding, or statistics from uView-family sites.
- When code is introduced, apply the HIA Documentation Sys bilingual ROP rules from the project initialization guide: JavaScript JSDoc uses canonical `@lang zh-CN` and `@lang en`; normal comments use legal inline `<lang><zh-CN>…</zh-CN><en>…</en></lang>` form; TypeScript, CSS, and templates use their corresponding legal bilingual documentation forms. JSON/YAML remain comment-free and use schemas or sidecar documents.
- Content, theme, and accessibility changes must preserve the HIA cobalt-blue `#0047AB` / clear-cyan `#00A8D3` role split and must not claim WCAG, device, review, performance, deployment, or release support without direct evidence.
- After material documentation changes, validate the affected files, make a focused local commit, and push after three to five independent documentation commits or a coherent checkpoint once remote, branch, and scope are verified.
