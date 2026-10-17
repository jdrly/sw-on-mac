# Release notes template

One format for both apps. Each release's notes live in the app repo at
`release-notes/<version>.md` and go to three places unchanged: the GitHub release, the
in-app update window (Sparkle) and swonmac.com. The site reads the GitHub release as HTML and
relies on the structure below.

```markdown
## SWTOR on Mac 0.0.7

One sentence that says what this release is about.

### First change, as a short headline
What changed and what it means for the player, in a short paragraph. Technical references
go in inline code, e.g. d9mt `68c7190`.

### Second change
- Bullets are fine when a change has several parts.
- Keep each bullet to one or two sentences.

### After updating
Open SWTOR on Mac and click *Update to 0.0.7* in the window (with the game closed).

### Support
SWTOR on Mac is an unofficial project, not made, endorsed or supported by Broadsword Games, EA,
Lucasfilm or Disney, and you use it at your own risk. Please send questions and bug reports to
Pharaphobia on [Discord](https://discord.gg/AnV3fZWz2b) or as a [GitHub issue](https://github.com/jdrly/swtor-on-mac/issues),
never to Broadsword or SWTOR customer support.
```

## Rules

| Part | Required | How the site uses it |
|---|---|---|
| `## <App> on Mac <version>` | yes, first line | Removed; the site shows its own title, version and date |
| Summary paragraph | yes, right after the title, one sentence | The one-liner on a collapsed release and in the "current stable builds" panel |
| `### <change>` sections | at least one | One block per change in the expanded release |
| `### After updating` | only when the player has to do something | Shown last before Support, styled as a note |
| `### Support` | yes, last | Shown as is; the wording is fixed per app (below) |

- No other `##` headings, and no `####`: the site styles `h3` as a change and nothing deeper.
- Inline code (`` `68c7190` ``) shows as a chip. Code blocks are fine for commands but keep
  them rare; they're for development builds.
- Development builds (`-dev.N`) use the same structure; the title ends in
  `(development build)`. The site leaves them out.

## Support wording per app

**SWTOR on Mac**

> SWTOR on Mac is an unofficial project, not made, endorsed or supported by Broadsword Games, EA,
> Lucasfilm or Disney, and you use it at your own risk. Please send questions and bug reports to
> Pharaphobia on [Discord](https://discord.gg/AnV3fZWz2b) or as a [GitHub issue](https://github.com/jdrly/swtor-on-mac/issues),
> never to Broadsword or SWTOR customer support.

**SWGL on Mac**

> SWGL on Mac is an unofficial project, not made, endorsed or supported by the SWG Legends team.
> Please send questions and bug reports to Pharaphobia on [Discord](https://discord.gg/AnV3fZWz2b) or as a
> [GitHub issue](https://github.com/jdrly/swgl-on-mac/issues), never to the SWG Legends team.
