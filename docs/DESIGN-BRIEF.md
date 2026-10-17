# swonmac.com: design brief

Landing page for two free, open-source macOS apps by Jan Drlý (Pharaphobia):

- **SWTOR on Mac**: makes the official Star Wars: The Old Republic Mac app run faster on
  Apple Silicon. Repo: [jdrly/swtor-on-mac](https://github.com/jdrly/swtor-on-mac)
- **SWGL on Mac**: plays SWG Legends on Apple Silicon. Repo:
  [jdrly/swgl-on-mac](https://github.com/jdrly/swgl-on-mac)

Static site (Astro on GitHub Pages). **One page** with both apps and their release notes.

## Layout, top to bottom

1. **Header**: the "SW on Mac" wordmark, written so it doesn't read as "swon mac" (e.g.
   **SW**on**MAC** with different weights). Anchor links to `#swtor`, `#swgl`, `#releases`,
   plus GitHub and Discord.
2. **Hero**: the tagline ("Star Wars games on Apple Silicon Macs") and **two download cards
   side by side** (SWTOR | SWGL). Each card: a one-line description, version + date, a
   Download button, and a "Requirements & install ↓" link. The cards stack on mobile.
3. **`#swtor` section**: screenshot, features, requirements, install steps.
4. **`#swgl` section**: the same structure, plus the macOS 28 warning. Both sections share
   one layout with a different accent colour per app.
5. **"Is it safe?"** block, covering both apps.
6. **`#releases`**: release notes for **both apps on one timeline, newest first**.
   - Each entry: an app label (SWTOR or SWGL, in that app's accent), version, date, and the
     GitHub-rendered notes.
   - The newest release of each app is expanded; older ones are collapsed with `<details>`.
   - Optional filter: All / SWTOR / SWGL (the only place a little JavaScript is allowed).
   - Pre-releases (`-dev` builds) are left out.
7. **Support**: Discord or GitHub issues; never contact Broadsword or the SWG Legends team.
8. **Footer**: disclaimer, plus links to the repos, d9mt and the licence.

## Content per block

### Download card (hero)

- App name and a one-sentence description.
- **Download button** with version and date, e.g. "Download 0.0.6 · Oct 17, 2026". It links
  to the `.dmg` on GitHub Releases; the values are filled in at build time.
- The design must still work if an app has no stable release yet.

### App section (`#swtor`, `#swgl`)

- **Requirements**:
  - Both: Apple Silicon, macOS 26 or later, Rosetta.
  - SWTOR: the official SWTOR Mac app installed first and started once; about 2 GB free.
  - SWGL: about 10 GB free for the game.
- **Install steps** (3–4 steps):
  - SWTOR: download the `.dmg` and drag to Applications → quit the SWTOR launcher → open
    SWTOR on Mac, review the notice, click Install → click Play SWTOR.
  - SWGL: download the `.dmg` and drag to Applications → open it; it downloads the official
    SWG Legends launcher → log in; the launcher installs the game.
- **Features** (4–6): Direct3D 9 → Metal with d9mt, macOS Game Mode, Retina rendering,
  self-updating (Sparkle), Collect Logs for bug reports; SWTOR: fully reversible with
  Uninstall.
- **Screenshot** of the app window (SWTOR's are in `swtor-on-mac/docs/screenshots`).
- **SWGL only**, a warning slot: "Don't upgrade a Mac you play on to macOS 28 yet" (because of
  Rosetta).

### Release notes

The content is **GitHub-rendered HTML that the design can't control**. Style: `h2`, `h3`,
`p`, `ul/li`, `strong`, `em`, `code`, `a`. Some releases are long (see SWTOR 0.0.6), so
plan for long paragraphs and lists.

### "Is it safe?"

- Not a game mod: doesn't change game files, memory or network traffic.
- Signed and notarized by Apple.
- Open source, zlib licence.
- SWTOR: Uninstall restores the official setup exactly as shipped.

### Support

"Help comes from Pharaphobia on Discord or GitHub issues. Never contact Broadsword, SWTOR
support or the SWG Legends team about these apps."

### Footer disclaimer (verbatim)

> SW on Mac is an unofficial fan project and is not affiliated with or endorsed by
> Lucasfilm, Disney, Electronic Arts, Broadsword Online Games or the SWG Legends team.
> STAR WARS is a registered trademark of Lucasfilm Ltd. Mac is a trademark of Apple Inc.

## Hard constraints

- **No Star Wars visual identity**: no Star Wars logo, no "Star Jedi" or similar fonts, no
  yellow opening crawl, no official key art or imagery, no lightsabers as the main motif.
  The site needs its own look; [xivmac.com](https://www.xivmac.com) is the reference for tone.
- Screenshots of the apps and of gameplay are fine.
- **Static only**: no logins, no backend. Collapsible parts use native `<details>`.
- Responsive from mobile to wide desktop; **dark and light** modes.

## Nice to have

- Short FAQ: "Is this allowed?", "Will I get banned?", "Does it work on Intel Macs?" (no),
  "What about macOS 28?"
- Before/after performance numbers for SWTOR, if available.
- A small "Built with d9mt" credit.
