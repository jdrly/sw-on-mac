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
    tagline: 'Speeds up the official Star Wars: The Old Republic Mac app on Apple Silicon.',
    description:
      'The official SWTOR Mac app draws the game through OpenGL on an older Wine. SWTOR on Mac swaps that for d9mt, which sends the game\'s Direct3D 9 straight to Metal, on CrossOver 26.3 with Wine 11, the same engine SWGL on Mac uses.',
    kicker: 'Star Wars: The Old Republic · official Mac app, accelerated',
    screenshot: {
      light: swtorShot,
      dark: swtorShotDark,
      alt: 'The SWTOR on Mac window after an install, with the Play SWTOR button',
      caption: 'SWTOR on Mac · status: installed',
    },
    chips: ['Signed .dmg', 'macOS 26+', 'Apple Silicon', 'Self-updating'],
    requirements: [
      { label: 'Chip', value: 'Apple Silicon, M1 or later' },
      { label: 'macOS', value: '26 or later' },
      { label: 'Rosetta', value: 'macOS offers it when you first start the official app' },
      { label: 'Game', value: 'Official SWTOR Mac app, started once' },
      { label: 'Disk', value: 'About 2 GB free' },
    ],
    features: [
      { title: 'Direct3D 9 → Metal', text: "d9mt replaces the official app's OpenGL path and draws the game through Metal." },
      { title: 'macOS Game Mode', text: 'In full screen, macOS puts the game first on the CPU and GPU and cuts Bluetooth latency.' },
      { title: 'Retina rendering', text: "The game renders at your display's full resolution instead of being upscaled." },
      { title: 'Updates itself', text: 'New versions install with one click. After a launcher update, a small background job hooks SWTOR on Mac back in.' },
      { title: 'Collect Logs', text: 'One click saves a zip for a bug report, without your account name or password.' },
      { title: 'Fully reversible', text: 'Uninstall puts the official app back exactly as Broadsword ships it.' },
    ],
    steps: [
      { title: 'Download the .dmg', text: 'Drag SWTOR on Mac to Applications.' },
      { title: 'Quit the SWTOR launcher', text: 'And the game, if it is running.' },
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
    tagline: 'Runs the official SWG Legends launcher and game on Apple Silicon Macs.',
    description:
      'SWG Legends has no Mac version. SWGL on Mac downloads the official launcher and runs it natively, then runs the game in Wine, with d9mt drawing it through Metal.',
    kicker: 'Star Wars Galaxies · SWG Legends on Apple Silicon',
    screenshot: {
      light: swglShot,
      dark: swglShotDark,
      alt: 'The SWGL on Mac Settings window, on the Game page',
      caption: 'SWGL on Mac · settings › game',
    },
    chips: ['Signed .dmg', 'macOS 26+', 'Apple Silicon', '~10 GB'],
    requirements: [
      { label: 'Chip', value: 'Apple Silicon, M1 or later' },
      { label: 'macOS', value: '26 or later' },
      { label: 'Rosetta', value: 'Installed for you if missing' },
      { label: 'Disk', value: 'About 10 GB free for the game' },
    ],
    features: [
      { title: 'Direct3D 9 → Metal', text: "d9mt sends the game's Direct3D 9 straight to Metal." },
      { title: 'macOS Game Mode', text: 'In full screen, macOS puts the game first on the CPU and GPU and cuts Bluetooth latency.' },
      { title: 'Retina rendering', text: "The game renders at your display's full resolution instead of being upscaled." },
      { title: 'Updates itself', text: 'It checks once a day and installs a new version when you click Install, never in the middle of a game.' },
      { title: 'Collect Logs', text: 'One click saves a zip for a bug report, without your account name or password.' },
      { title: 'Official launcher', text: 'You log in to the official SWG Legends launcher, and it installs and updates the game as on Windows.' },
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
