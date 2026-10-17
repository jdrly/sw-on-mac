// The FAQ under "Is it safe?". Answers are trusted HTML (rendered with set:html): paragraphs and links only.
// Facts come from the two apps' READMEs; update them together.

export interface Faq {
  q: string;
  /** HTML; each string is one paragraph */
  a: string[];
  /** Mono tag beside the question */
  tag?: { text: string; tone: 'neutral' | 'warning' };
  /** Mono line under the answer: a cross-reference and a short status */
  ref?: { text: string; href?: string; status?: string };
}

export const faq: Faq[] = [
  {
    q: 'Is this allowed?',
    a: [
      'Both apps run the official games: SWTOR on Mac uses the official SWTOR Mac app, and SWGL on Mac installs the official SWG Legends launcher. Game files, memory and network traffic are left alone; only the way your Mac runs and draws the game changes. They are still unofficial fan projects, not endorsed by Broadsword or the SWG Legends team, and you use them at your own risk.',
    ],
    ref: { text: 'See fact 01 — not a game mod', href: '#fact-01', status: 'Unofficial' },
  },
  {
    q: 'Will I get banned?',
    a: [
      "Nobody can promise you won't. Here's what's true: neither app is a game mod. They don't change the game's files, memory or network traffic, and they run the official clients: the official SWTOR Mac app, and the official SWG Legends launcher and game.",
      "But they're unofficial. Broadsword doesn't support third-party tools or compatibility layers, and SWG Legends doesn't officially support clients that don't come from them. So there's no guarantee, and whether you use them is your call.",
    ],
    ref: { text: 'See fact 01', href: '#fact-01', status: 'No guarantee' },
  },
  {
    q: 'Does it work on Intel Macs?',
    a: ['No. Both apps need a Mac with Apple Silicon (M1 or later) and macOS 26 or later.'],
    tag: { text: 'No · Apple Silicon only', tone: 'neutral' },
  },
  {
    q: 'What about macOS 28?',
    a: [
      'SWGL on Mac runs the game in an Intel (x86_64) Wine, so it needs Rosetta, which Apple keeps only for certain older games from macOS 28 on. A version for macOS 28 is planned (<a href="https://github.com/jdrly/swgl-on-mac/issues/20">issue #20</a>). Until it is announced, don\'t upgrade a Mac you play on to macOS 28.',
      'SWTOR on Mac runs under Rosetta too, just like the official SWTOR Mac app it builds on.',
    ],
    tag: { text: "Hold · don't upgrade yet", tone: 'warning' },
    ref: { text: 'Tracked in swgl-on-mac #20', href: 'https://github.com/jdrly/swgl-on-mac/issues/20', status: 'Planned' },
  },
];
