# Contributing to swonmac.com

This repository is [swonmac.com](https://swonmac.com), the one-page site of the two apps
[SWTOR on Mac](https://github.com/jdrly/swtor-on-mac) and
[SWGL on Mac](https://github.com/jdrly/swgl-on-mac): an Astro site on GitHub Pages whose
versions, downloads and release notes come from the apps' GitHub releases at build time. A
problem with one of the apps belongs in that app's repository, not here.

## Before you start

```bash
gh auth status   # GitHub authentication; the build reads the apps' releases with this token
npm ci           # Node 22.22 or later (package.json)
```

Read [CONTEXT.md](CONTEXT.md). Without it you are likely to introduce synonyms that come back
in review.

## Sources of truth and reading order

1. **[CONTEXT.md](CONTEXT.md)**: the terms to use.
2. **[docs/adr/](docs/adr/index.md)**: accepted decisions. An ADR with status `accepted` is the
   target contract even when the code differs. Record the difference as a gap; **don't weaken
   an ADR to match the current code**.
3. **[docs/DESIGN-BRIEF.md](docs/DESIGN-BRIEF.md)**: the page's layout and content per block.
   **[docs/RELEASE-NOTES-TEMPLATE.md](docs/RELEASE-NOTES-TEMPLATE.md)**: the release notes format
   the site parses.
4. **The code**: `src/data/` holds what the site says about each app and its links,
   `src/content.config.ts` loads the releases.

If two sources conflict, report the conflict instead of silently choosing one. (`README.md` is
still Astro's starter text and is not a source.)

## Issues

- Every change that isn't trivial starts from an issue: a **bug report** (something on the site
  is wrong) or a **task** (planned work, written as a precise specification).
- Titles use `Context: Actionable result`, for example
  `FAQ: Answer whether the apps run on Intel Macs`. The commit that does the work carries the
  same title as its subject.
- The area is a label, never a title prefix (see
  [docs/agents/triage-labels.md](docs/agents/triage-labels.md)).
- *Affected areas* lists only paths you have verified in the repository.
- *Verification (UAT)* is a scenario a non-technical visitor can click through: each step is an
  action and, after the arrow, the expected result.

## Branches and pushes

- Work goes **straight to `main`**; there is no pull request obligation on this site. Every push
  to `main` deploys the site, so **the Definition of Done holds before every push** (at least
  `npx astro check` and the build).
- A longer piece of work can live on a branch until it is done, named
  `<type>/<issue>-<short-description>` in English `lower-case-kebab-case` (types: `feat`, `fix`,
  `content`, `design`, `chore`, `docs`), and lands on `main` as one commit or a few focused ones.

## Commits

- Write commit messages in **English**, in the imperative (`add`, `fix`, `remove`; not `added`
  or `adding`).
- The subject follows the title form, `Context: what the commit does`, for example
  `Release cards: link Discord next to the GitHub issues in Support`. No emoji, no scope tags.
- Add a body when the why isn't obvious, and `Closes #<issue>` when the commit finishes an issue.

## Pull requests from contributors

Contributors without write access open a pull request: its title is the issue's title, it
follows the [template](.github/PULL_REQUEST_TEMPLATE.md) with `Closes #<issue>`, stays a draft
until it meets the Definition of Done, and is squash-merged with the PR title as the commit
subject.

## Code review

- A review is optional for the maintainer's own pushes. When one happens (a contributor's PR, or a
  larger change on a branch), read the issue and its UAT before the diff.
- Classify every finding by severity. `Blocker` and `High` prevent the merge; `Medium` and
  `Low` may merge with a follow-up issue.

  | Severity | Meaning |
  |---|---|
  | `Blocker` | The pull request must not merge until it is resolved. |
  | `High` | Materially wrong behaviour, or a hard project-rule violation. |
  | `Medium` | Significant duplication, overengineering or maintainability risk. |
  | `Low` | Local cleanup that can go with related work. |

- On this site a finding is a `Blocker` by default when it can **send a visitor to the wrong
  download**, **show the wrong version, requirements or support wording**, or **stop the site
  from rebuilding on a release**.
- A finding describes **one problem with one fix boundary**, not one affected file.
- Findings stay in the pull request or the issue; never commit a review ledger.

## Definition of Done

A change is done, and may be pushed to `main`, only when all of these hold:

- [ ] `npx astro check` and `npm run build` pass locally, with `GITHUB_TOKEN` set
      (`GITHUB_TOKEN=$(gh auth token) npm run build`), so the build loads both apps' real
      releases.
- [ ] Every changed section is checked in the dev server at desktop and phone width, in the
      dark and the light theme (`node scripts/shot.mjs <selector> <out.png> --width=…
      --theme=…`, headless).
- [ ] Every link the change adds or changes opens the right page or file.
- [ ] A change to the release loader (`src/content.config.ts`, `src/lib/releases.ts`,
      `src/components/releases/`) still renders both apps' current releases: title left out,
      the summary, one block per `###`, Support last. `docs/RELEASE-NOTES-TEMPLATE.md` still
      agrees with both apps' `release-notes/README.md`.
- [ ] A change to `.github/workflows/deploy.yml` keeps the `release` repository_dispatch that
      the apps' `site.yml` workflows send.
- [ ] Copy follows the site's copy rules: plain, concrete wording, in the first person where
      Jan answers; no em dashes, mid-sentence colons or parentheses in prose (commit
      `0c7897d`). The disclaimer and the Support wording change only when that is the task.
- [ ] Terms follow `CONTEXT.md`; a new term is added in the same PR.
- [ ] A changed decision has an ADR in the same PR, or links an existing `accepted` ADR.
- [ ] The issue's UAT scenario has been clicked through and ticked off in the issue.

## Never do these things

- Push to `main` before the Definition of Done holds: every push deploys the site.
- Commit a token, `.env`, or anything from a player's logs or account.
- Show development builds (pre-releases) on the site, or link a download anywhere else than
  the apps' GitHub releases.
- Tell visitors to contact Broadsword, EA, SWTOR customer support or the SWG Legends team about
  the apps.
- Add a dependency without the maintainer's approval.
- Change `CONTEXT.md` or an ADR incidentally during unrelated work.
