# swonmac.com domain context

The glossary of swonmac.com, the one-page site of the two apps SWTOR on Mac and SWGL on Mac.
Use these terms in issues, pull requests, code, component names and copy.

This glossary defines **language, not implementation**. ADRs in [`docs/adr/`](docs/adr/index.md)
own the decisions. If a term you need is missing, add it here in the same pull request and say
so in the PR description. Every definition names its source; what is not decided is marked
_Open_.

## The site and the apps

**SW on Mac**
The site's name (`src/data/site.ts`); its address is `swonmac.com`. The wordmark is written so
it doesn't read as “swon mac” (`docs/DESIGN-BRIEF.md`).
_Avoid_: “Swon Mac”, “SWonMac” in prose.

**App**
One of the two apps the site presents, each with its own repository, releases and accent
colour (`src/data/apps.ts`, `AppId`):
- **SWTOR on Mac** (`swtor`, `jdrly/swtor-on-mac`): speeds up the official Star Wars: The Old
  Republic Mac app on Apple Silicon.
- **SWGL on Mac** (`swgl`, `jdrly/swgl-on-mac`): runs the official SWG Legends launcher and game
  on Apple Silicon Macs.

The short names **SWTOR** and **SWGL** are used in wordmarks and labels only.
_Avoid_: “the SWTOR app” (that is Broadsword's official app), “the launcher”.

**Pharaphobia**
Jan Drlý's name on Discord and the site's author (`src/data/site.ts`). All support for both apps
comes from Pharaphobia, on Discord or in the apps' GitHub issues.

**Discord invite**
`https://discord.gg/AnV3fZWz2b` (`src/data/site.ts`, `links.discord`). The apps' release
workflows refuse release notes without it.

**Disclaimer**
The fixed sentence in the footer that the site is an unofficial fan project, not affiliated with
or endorsed by Lucasfilm, Disney, EA, Broadsword or the SWG Legends team
(`src/data/site.ts`, `disclaimer`).

## Releases

**Release**
A published GitHub release of an app that is neither a draft nor a pre-release. The site reads
the releases of both apps from the GitHub API once per build (`src/content.config.ts`) and shows
nothing else.
_Avoid_: “version” for the release itself (the version is its number).

**Development build**
A release candidate `X.Y.Z-dev.N`, published as a GitHub **pre-release**. The site leaves it out
(`docs/DESIGN-BRIEF.md`; the `prerelease` filter in `src/content.config.ts`).
_Avoid_: “beta”, “nightly”.

**Release notes**
The notes of one release: `release-notes/<version>.md` in the app's repository, used unchanged
in the GitHub release, the app's update window and on the site
(`docs/RELEASE-NOTES-TEMPLATE.md`). Their parts:
- **Title**: `## <App> on Mac <version>`, the first line; the site leaves it out and shows its
  own.
- **Summary**: the one sentence right after the title; the site shows it on a folded release and
  in the current-builds panel.
- **Change**: a `###` section; one block per change on the site. Nothing deeper than `###`.
- **After updating**: an optional `###` section, only when the player has to do something.
- **Support**: the last `###` section, with fixed wording per app.

**Release log**
The `#releases` section: the releases of both apps on one timeline, newest first, the newest of
each app open, the rest folded, with an All / SWTOR / SWGL filter (`docs/DESIGN-BRIEF.md`,
`src/components/Releases.astro`).

**Download card**
An app's card in the hero: a one-line description, the newest release's version and date, and a
Download button that links the `.dmg` of that GitHub release (`docs/DESIGN-BRIEF.md`,
`dmgUrl` in `src/content.config.ts`). It has to work while an app has no release yet.

**Release dispatch**
The `release` `repository_dispatch` an app's `site.yml` workflow sends to this repository when a
release is published, edited or deleted (not for drafts or pre-releases). It needs the app
repository's `SITE_DISPATCH_TOKEN` secret and starts the Deploy workflow, so the site follows the
releases without polling (`.github/workflows/deploy.yml`).

**Deploy**
The workflow that builds the site with `withastro/action` and publishes it to GitHub Pages: on a
push to `main`, by hand, and on a release dispatch (`.github/workflows/deploy.yml`).

## Open

- No link checker runs in the build or in CI; links are checked by hand (CONTRIBUTING, Definition
  of Done).
- `README.md` is still Astro's starter text.
