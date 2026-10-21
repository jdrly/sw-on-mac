# swonmac.com agent guidance

Work one prepared issue at a time, within its scope and acceptance criteria, and take the next
one only after this one meets the Definition of Done in [`CONTRIBUTING.md`](CONTRIBUTING.md).

The documentation is the source of truth and should answer scope and design questions:
[`CONTEXT.md`](CONTEXT.md), the decisions in [`docs/adr/index.md`](docs/adr/index.md),
[`docs/DESIGN-BRIEF.md`](docs/DESIGN-BRIEF.md) and
[`docs/RELEASE-NOTES-TEMPLATE.md`](docs/RELEASE-NOTES-TEMPLATE.md). Look the answer up there before
asking or choosing an approach of your own.

- The site's data comes from the apps' GitHub releases at build time; set `GITHUB_TOKEN`
  (`GITHUB_TOKEN=$(gh auth token) npm run build`) so the build isn't rate-limited.
- Work goes straight to `main`, and every push deploys the site: run `npx astro check` and the
  build (and the rest of the Definition of Done) before every push. Never create issues, labels or
  releases without the maintainer's approval.
- `docs/*.pen` files are design files, readable only through the Pencil MCP tools.

## Agent skills

### Issue tracker

GitHub issues in `jdrly/sw-on-mac`. See [`docs/agents/issue-tracker.md`](docs/agents/issue-tracker.md).

### Triage labels

Vocabulary: `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`, plus
type and `area:` labels. See [`docs/agents/triage-labels.md`](docs/agents/triage-labels.md).

### Domain docs

Single context: root `CONTEXT.md` plus `docs/adr/`. See [`docs/agents/domain.md`](docs/agents/domain.md).

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
