---
status: accepted
date: 2026-10-21
deciders: Jan Drlý
---

# Both apps write release notes in one format, which the site parses

## Context

Each release's notes go unchanged to three places: the GitHub release, the app's update window
(Sparkle) and swonmac.com (`docs/RELEASE-NOTES-TEMPLATE.md`). The site shows a one-line summary
for a folded release and one block per change, so it needs to find those parts in the HTML
GitHub renders.

## Decision

- Both apps use one format (`docs/RELEASE-NOTES-TEMPLATE.md`, and `release-notes/README.md` in
  each app repository): the title `## <App> on Mac <version>` as the first line, a one-sentence
  summary, at least one `###` change, an optional `### After updating`, and `### Support` last,
  with fixed wording per app that links the Discord invite and the app's GitHub issues.
- No other `##` headings and nothing below `###`.
- `parseNotes` in `src/content.config.ts` removes the title, takes the first paragraph as the
  summary and keeps the rest as the body.
- The apps' Release workflows refuse notes without the title, the summary or the Discord invite.

## Consequences

- A change to the format is a change in three repositories (this one and both apps), and the
  documents must stay in agreement.
- Notes that break the format still publish on GitHub if they pass the workflow's checks, but
  may render wrongly on the site (for example a deeper heading).

## Alternatives considered

- **A format per app**: rejected; the format was unified so that both apps look the same on the
  site (`release-notes/README.md` in SWTOR on Mac; SWGL on Mac PR #30).
- **Separate notes for the site**: not recorded as considered; it would contradict “unchanged
  in three places”.
