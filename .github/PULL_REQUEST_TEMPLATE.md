<!-- Pull requests here are for contributors without write access; the maintainer pushes to main directly (CONTRIBUTING.md). -->

## What changes

<!-- Two to five sentences: what this PR does and why, not a list of files. -->

Closes #

- **ADR:** none <!-- or docs/adr/NNNN-… -->

## How to verify

<!-- Steps for the reviewer: the section, the width, the theme, the release that shows it. -->

## Definition of Done

- [ ] `npx astro check` and `npm run build` pass locally (`GITHUB_TOKEN` set, so the build loads both apps' real releases).
- [ ] Every changed section is checked in the dev server at desktop and phone width, in the dark and the light theme (`node scripts/shot.mjs <selector> <out.png> --width=… --theme=…`).
- [ ] Every link this PR adds or changes opens the right page or file.
- [ ] A change to the release loader still renders both apps' current releases (title left out, summary, one block per `###`, Support last), and `docs/RELEASE-NOTES-TEMPLATE.md` agrees with both apps' `release-notes/README.md`.
- [ ] A change to `deploy.yml` keeps the `release` repository_dispatch the apps' `site.yml` send.
- [ ] Copy follows the site's copy rules (CONTRIBUTING.md); the disclaimer and the Support wording change only when that is the task.
- [ ] Terms follow `CONTEXT.md`; a new term is added in this PR.
- [ ] A changed decision has an ADR in this PR, or links an existing `accepted` ADR.
- [ ] The issue's UAT scenario has been clicked through and ticked off in the issue.

## Risks and what I didn't do

<!-- Known limits, deferred work, effects on the apps' repos. An empty field is an answer too: write "none". -->
