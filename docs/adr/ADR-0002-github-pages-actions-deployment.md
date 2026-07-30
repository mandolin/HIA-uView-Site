# ADR-0002：GitHub Pages Actions 部署 / GitHub Pages Actions deployment

状态：已采纳（P23）

日期：2026-07-30

## 背景 / Context

本公开 Site 仓已通过本地内容、双语 Documentation Sys、VitePress build 与静态输出隐私门禁。维护者已选择 GitHub Pages 作为 production host。GitHub Pages 目前未启用；本 ADR 决定以 custom GitHub Actions workflow 构建并部署静态 artifact，而不是提交编译产物或建立 `gh-pages` branch。

This public Site repository has passed local content, bilingual Documentation Sys, VitePress-build, and static-output privacy gates. The maintainer selected GitHub Pages as the production host. GitHub Pages is not yet enabled; this ADR chooses a custom GitHub Actions workflow to build and deploy a static artifact instead of committing compiled output or creating a `gh-pages` branch.

## 决定 / Decision

1. 启用 GitHub Pages 的 `workflow` build type，使用 `main` push 与手动 dispatch 触发。PR、fork、schedule 和外部 webhook 均不触发部署。
2. 使用默认 project-site URL `https://mandolin.github.io/HIA-uView-Site/`；VitePress base 固定为 `/HIA-uView-Site/`。不创建 `CNAME`、自定义域名、DNS、analytics、form、remote font/image/CDN、server 或 preview。
3. build job 仅有 `contents: read`，使用 Node `22`、`npm ci --ignore-scripts` 与 `npm run check`，只上传 `site/.vitepress/dist`。该目录的顶层必须有小写 `index.html`。
4. deploy job 必须依赖 build，绑定 `github-pages` environment，并只获 `pages: write`、`id-token: write` 以及读取内容所需的权限。该 job 不读取 secret、不运行额外脚本，也不接受用户输入。
5. 发布前所有 P22 门禁继续是必要条件；artifact 不能含 source map、工作站路径、WorkZone、源码正文、凭据、AppID、未发布声明或上游站点素材。
6. 回退是将 `main` 恢复到已知良好的 Site commit 后重新运行同一 workflow；不手工修改 artifact、不提交编译产物，也不建立替代发布分支。

1. Enable the GitHub Pages `workflow` build type, triggered by pushes to `main` and manual dispatch. Pull requests, forks, schedules, and external webhooks do not trigger deployment.
2. Use the default project-site URL `https://mandolin.github.io/HIA-uView-Site/`; VitePress base is fixed to `/HIA-uView-Site/`. No `CNAME`, custom domain, DNS, analytics, form, remote font/image/CDN, server, or preview is created.
3. The build job has `contents: read` only, uses Node `22`, `npm ci --ignore-scripts`, and `npm run check`, and uploads only `site/.vitepress/dist`. That directory must have lower-case `index.html` at its top level.
4. The deploy job must depend on build, bind the `github-pages` environment, and receive only `pages: write`, `id-token: write`, and content-read permissions. It reads no secret, runs no extra script, and accepts no user input.
5. Every P22 gate remains required before publication; the artifact cannot include a source map, workstation path, WorkZone material, source body, credential, AppID, unpublished claim, or upstream-site material.
6. Rollback restores `main` to a known-good Site commit and reruns the same workflow; it never hand-edits an artifact, commits compiled output, or creates an alternate publishing branch.

## 固定 GitHub Actions 来源 / Pinned GitHub Actions sources

| Action | 固定提交 / Pinned commit | 许可证 / License | 用途 / Purpose |
| --- | --- | --- | --- |
| `actions/checkout` v6 | `d23441a48e516b6c34aea4fa41551a30e30af803` | MIT | 读取受信任 `main` 内容 / read trusted `main` content |
| `actions/setup-node` v6 | `249970729cb0ef3589644e2896645e5dc5ba9c38` | MIT | 固定 Node 22 build runtime / pin Node 22 build runtime |
| `actions/configure-pages` v5 | `983d7736d9b0ae728b81ab479565c72886d7745b` | MIT | 配置 Pages build metadata / configure Pages build metadata |
| `actions/upload-pages-artifact` v4 | `7b1f4a764d45c48632c6b24a0339c27f5614fb0b` | MIT | 上传经门禁验证的静态 artifact / upload gate-validated static artifact |
| `actions/deploy-pages` v4 | `d6db90164ac5ed86f2b6aed7e0febac5b3c0c03e` | MIT | 部署 artifact 到 GitHub Pages / deploy artifact to GitHub Pages |

所有 action 均来自 `actions` 组织的公开 MIT 仓，并在 2026-07-30 以 Git tag 对应提交复核。升级 action 必须更新本 ADR、NOTICE、workflow、来源审计和部署验证。

All actions come from public MIT repositories in the `actions` organization and were verified against their tag commits on 2026-07-30. An action upgrade must update this ADR, NOTICE, workflow, source audit, and deployment validation.

## 风险、隐私与验证 / Risk, privacy, and validation

P22 已披露 VitePress 传递开发链的未修复 audit 项。workflow 不运行 dev/preview server、不暴露端口、不处理不可信请求，且仅在可信 `main` 上以锁文件执行静态 build；任何 CI/Pages 运行前重新 audit。部署成功不等于 UI package、组件 API、设备、无障碍认证、跨端、审核、性能或线上业务功能已经发布或验证。

P22 disclosed unresolved audit findings in the VitePress transitive development chain. The workflow runs no dev/preview server, exposes no port, processes no untrusted request, and runs a lockfile-based static build only on trusted `main`; re-audit before every CI/Pages run. A successful deployment does not mean a UI package, component API, device behavior, accessibility certification, cross-platform support, review, performance, or online business capability has been released or validated.

首次部署必须记录实际 workflow URL、Pages URL、commit、zh-Hans/en 首页与首发路由的 HTTP smoke。GitHub Pages 官方要求 custom workflow 部署 artifact 顶层含 `index.html`，deploy job 具备 `pages: write`/`id-token: write`、`needs` 和 environment；本 ADR 以这些要求作为最小契约。[GitHub Pages custom workflow documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages) 与 [publishing-source documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) 是当前一手来源。

The first deployment must record the actual workflow URL, Pages URL, commit, and HTTP smoke of zh-Hans/en home pages and launch routes. GitHub Pages requires a custom-workflow artifact to contain top-level `index.html`, and the deploy job to have `pages: write`/`id-token: write`, `needs`, and an environment; this ADR treats those requirements as the minimum contract. The [GitHub Pages custom workflow documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages) and [publishing-source documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) are the current primary sources.

## 首次部署证据 / First-deployment evidence

GitHub Pages 已于 2026-07-30 以 `workflow` build type 启用，HTTPS 默认 URL 为 `https://mandolin.github.io/HIA-uView-Site/`，无 CNAME。首次 Actions run [30514300595](https://github.com/mandolin/HIA-uView-Site/actions/runs/30514300595) 在 commit `786fcd529ec0d41bce2369131fd71d259d3e3e75` 成功：build job 完成 locked install、完整 `npm run check` 和 Pages artifact upload，deploy job 成功部署。

首轮 HTTP smoke 对根、`/en/` 及其余 14 个首发路由全部取得 `200`、HTML title，且未检出 `WorkZone`、AppID、`file://` 或 `sourcesContent` 标记。这是公开静态路由和 artifact 边界证据，不是视觉审阅、设备、无障碍、性能、UI package 或业务功能证据。

GitHub runner 对 `configure-pages` 与该 action 传递使用的 `upload-artifact` 报告其 Node 20 implementation 已被强制运行在 Node 24 的弃用警告；本次运行成功。该警告不阻断当前已固定、官方 action refs 的静态部署，但 action/runner 兼容性须在每次 action 升级、workflow 失败或 GitHub 政策变化时复审。

GitHub Pages was enabled with the `workflow` build type on 2026-07-30 at the HTTPS default URL `https://mandolin.github.io/HIA-uView-Site/`, with no CNAME. Initial Actions run [30514300595](https://github.com/mandolin/HIA-uView-Site/actions/runs/30514300595) succeeded at commit `786fcd529ec0d41bce2369131fd71d259d3e3e75`: the build job completed locked install, full `npm run check`, and Pages artifact upload, then the deploy job succeeded.

Initial HTTP smoke received `200` and an HTML title for root, `/en/`, and the other 14 launch routes, and detected no `WorkZone`, AppID, `file://`, or `sourcesContent` marker. This is public static-route and artifact-boundary evidence, not visual review, device, accessibility, performance, UI-package, or business-function evidence.

The GitHub runner warned that `configure-pages` and the transitive `upload-artifact` used by that action have Node 20 implementations being forced to run on Node 24; this run succeeded. The warning does not block the current static deployment with fixed official action refs, but action/runner compatibility must be reviewed upon every action upgrade, workflow failure, or GitHub policy change.
