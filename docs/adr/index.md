# Architecture Decision Records

An ADR records a decision or a proposed direction. **Its existence does not prove that the
behaviour is implemented.** When the code and an ADR differ, the code and its checks describe
what runs; the ADR stays the target and the difference is recorded as a gap.

## Statuses

| Status | Meaning |
|---|---|
| `proposed` | Awaiting discussion; **not an implementation specification**. |
| `accepted` | The valid target contract. |
| `superseded by ADR-NNNN` | Historical context; follow its successor. |
| `deprecated` | Don't use this approach in new work. |

## When to write an ADR

Only when there were real alternatives with consequences that matter. Ask: “Will someone want
to know a year from now why this wasn't done differently?” Tool choices and style rules belong in
`CONTRIBUTING.md`, not in an ADR.

## Format

`NNNN-english-slug.md`, in English, started from [0000-template.md](0000-template.md). Never reuse
a number; keep superseded records and change their status. Write only what a source shows, and
put what isn't decided under *Open questions*.

## Records

This table is the status source of truth. Update both it and the ADR's frontmatter.

| # | Decision | Status |
|---|---|---|
| [0001](0001-build-time-release-data-and-dispatch.md) | The site is static and takes the apps' releases from GitHub at build time | `accepted` |
| [0002](0002-release-notes-format-is-the-site-contract.md) | Both apps write release notes in one format, which the site parses | `accepted` |
