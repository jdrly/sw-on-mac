---
status: accepted
date: 2026-10-21
deciders: Jan Drlý
---

# The site is static and takes the apps' releases from GitHub at build time

## Context

swonmac.com shows, for both apps, the newest version and date, the download and the release
notes of every release (`docs/DESIGN-BRIEF.md`). That data already lives in the apps' GitHub
releases, which their release workflows create. The site must follow every release without
anyone editing the site by hand.

## Decision

- The site is one static Astro page on GitHub Pages (`docs/DESIGN-BRIEF.md`,
  `.github/workflows/deploy.yml`).
- At build time, `src/content.config.ts` reads both apps' releases from the GitHub API, keeps the
  published ones that are not pre-releases, and takes the version, date, `.dmg` link and notes
  from them. Nothing about a release is copied into this repository.
- An app's `site.yml` workflow sends a `release` `repository_dispatch` here when a release is
  published, edited or deleted; the Deploy workflow rebuilds the site on it, on a push to `main`
  and by hand.

## Consequences

- A release shows on the site within one Deploy run of being published, and an edited release
  note follows too.
- The build needs the GitHub API: without `GITHUB_TOKEN` it is limited to 60 unauthenticated
  requests an hour, and a failing request fails the build (`loadReleases` throws).
- The rebuild depends on a secret in each app repository (`SITE_DISPATCH_TOKEN`); without it the
  app's `site.yml` only logs a notice and the site stays on the previous release until the next
  push or a manual run.
- The site can only show what the release notes' structure allows, so that structure is a
  contract (ADR-0002).

## Alternatives considered

- **Polling GitHub on a schedule**: rejected; the Deploy workflow's header states that the site
  follows the releases “without polling”.
- **Copying versions and notes into this repository**: not recorded as considered at the time.
  It would need a commit here for every release.

## Open questions

- No other alternatives (for example fetching the releases in the visitor's browser) were
  recorded.
