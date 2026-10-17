// What the site says about each app. Versions, dates, downloads and release notes come from
// GitHub (src/content.config.ts); everything here changes only when the apps do.

import swtorShot from '../assets/screenshots/swtor-installed.png';
import swtorShotDark from '../assets/screenshots/swtor-installed-dark.png';
import swglShot from '../assets/screenshots/swgl-settings-game.png';
import swglShotDark from '../assets/screenshots/swgl-settings-game-dark.png';

export type AppId = 'swtor' | 'swgl';

export interface App {
  id: AppId;
  /** "SWTOR on Mac" */
  name: string;
  /** "SWTOR", as in the wordmarks and labels */
  short: string;
  repo: string;
  /** The game, in full */
  game: string;
  /** Hero card: one sentence */
  tagline: string;
  /** App section: a little longer */
  description: string;
  /** Mono kicker above the app section title */
  kicker: string;
  screenshot: { light: ImageMetadata; dark: ImageMetadata; alt: string; caption: string };
  /** Tags on the hero card */
  chips: string[];
  requirements: { label: string; value: string }[];
  features: { title: string; text: string }[];
  steps: { title: string; text: string }[];
}

export const apps: Record<AppId, App> = {
  swtor: {
    id: 'swtor',
    name: 'SWTOR on Mac',
    short: 'SWTOR',
    repo: 'jdrly/swtor-on-mac',
    game: 'Star Wars: The Old Republic',
    tagline: 'Makes the official Star Wars: The Old Republic Mac app run faster on Apple Silicon.',
    description:
      'Makes the official Star Wars: The Old Republic Mac app run faster on Apple Silicon. Direct3D 9 goes straight to Metal, on a newer Wine.',
    kicker: 'Star Wars: The Old Republic · official Mac app, accelerated',
    screenshot: {
      light: swtorShot,
      dark: swtorShotDark,
      alt: 'The SWTOR on Mac window after an install, with the Play SWTOR button',
      caption: 'SWTOR on Mac · status: installed',
    },
    chips: ['Signed .dmg', 'macOS 26+', 'Apple Silicon', 'Self-updating'],
    requirements: [
      { label: 'Chip', value: 'Apple Silicon (M1 or later)' },
      { label: 'macOS', value: '26 or later' },
      { label: 'Rosetta', value: 'macOS offers it when you first start the official app' },
      { label: 'Game', value: 'Official SWTOR Mac app, started once' },
      { label: 'Disk', value: 'About 2 GB free' },
    ],
    features: [
      { title: 'Direct3D 9 → Metal', text: "d9mt replaces the official app's graphics layer and draws straight through Metal." },
      { title: 'macOS Game Mode', text: 'macOS gives the game priority while it runs in full screen.' },
      { title: 'Retina rendering', text: "Renders at your display's native resolution, not a blurry upscale." },
      { title: 'Updates itself', text: 'Sparkle keeps it current, and it hooks back in after launcher updates.' },
      { title: 'Collect Logs', text: 'One click bundles the logs for a bug report. Your account stays out.' },
      { title: 'Fully reversible', text: 'Uninstall puts the official app back exactly as Broadsword ships it.' },
    ],
    steps: [
      { title: 'Download the .dmg', text: 'Drag SWTOR on Mac to Applications.' },
      { title: 'Quit the SWTOR launcher', text: "Close it completely if it's running." },
      { title: 'Open SWTOR on Mac', text: 'Review the notice, then click Install.' },
      { title: 'Click Play SWTOR', text: 'Or start the official app as usual.' },
    ],
  },
  swgl: {
    id: 'swgl',
    name: 'SWGL on Mac',
    short: 'SWGL',
    repo: 'jdrly/swgl-on-mac',
    game: 'Star Wars Galaxies · SWG Legends',
    tagline: 'Plays SWG Legends on Apple Silicon Macs, from the official launcher to the game.',
    description:
      'Plays SWG Legends on Apple Silicon. It fetches the official launcher and runs the game with Direct3D 9 going straight to Metal.',
    kicker: 'Star Wars Galaxies · SWG Legends on Apple Silicon',
    screenshot: {
      light: swglShot,
      dark: swglShotDark,
      alt: 'The SWGL on Mac Settings window, on the Game page',
      caption: 'SWGL on Mac · settings › game',
    },
    chips: ['Signed .dmg', 'macOS 26+', 'Apple Silicon', '~10 GB'],
    requirements: [
      { label: 'Chip', value: 'Apple Silicon (M1 or later)' },
      { label: 'macOS', value: '26 or later' },
      { label: 'Rosetta', value: 'Installed for you if missing' },
      { label: 'Disk', value: 'About 10 GB free for the game' },
    ],
    features: [
      { title: 'Direct3D 9 → Metal', text: "d9mt translates the game's Direct3D 9 straight to Metal." },
      { title: 'macOS Game Mode', text: 'macOS gives the game priority while it runs in full screen.' },
      { title: 'Retina rendering', text: "Renders at your display's native resolution, not a blurry upscale." },
      { title: 'Updates itself', text: 'Sparkle keeps SWGL on Mac current, no manual downloads.' },
      { title: 'Collect Logs', text: 'One click bundles the logs for a bug report. Your account stays out.' },
      { title: 'Official launcher', text: 'Fetches the official SWG Legends launcher. You log in there, as usual.' },
    ],
    steps: [
      { title: 'Download the .dmg', text: 'Drag SWGL on Mac to Applications.' },
      { title: 'Open SWGL on Mac', text: 'It downloads the official SWG Legends launcher.' },
      { title: 'Log in', text: 'The launcher installs the game, about 10 GB.' },
    ],
  },
};

/** SWGL's Rosetta advisory, per macOS version. Update when the macOS 28 version ships. */
export const swglMacosSupport = [
  { macos: 'macOS 26', status: 'play' },
  { macos: 'macOS 27', status: 'play' },
  { macos: 'macOS 28', status: 'hold' },
] as const;
