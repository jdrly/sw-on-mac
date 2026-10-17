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
      'Both apps run the official games. SWTOR on Mac starts the official SWTOR Mac app, and SWGL on Mac installs the official SWG Legends launcher. Game files, memory and network traffic stay as they are. What changes is how your Mac runs and draws the game.',
      'They are still unofficial fan projects. Neither Broadsword nor the SWG Legends team endorses them, and you use them at your own risk.',
    ],
    ref: { text: 'See fact 01 · not a game mod', href: '#fact-01', status: 'Unofficial' },
  },
  {
    q: 'Will I get banned?',
    a: [
      "I can't promise you won't, and nobody else honestly can either. What I can tell you is that neither app is a game mod. They don't touch the game's files, memory or network traffic, and they run the official clients.",
      "They're still unofficial. Broadsword doesn't support third-party tools or compatibility layers, and SWG Legends doesn't support clients that don't come from them. There's no guarantee, so it's your call.",
    ],
    ref: { text: 'See fact 01', href: '#fact-01', status: 'No guarantee' },
  },
  {
    q: 'Does it work on Intel Macs?',
    a: ['No. Both apps need an Apple Silicon Mac, M1 or later, on macOS 26 or later.'],
    tag: { text: 'No · Apple Silicon only', tone: 'neutral' },
  },
  {
    q: 'What about macOS 28?',
    a: [
      'SWGL on Mac runs the game in an Intel Wine, so it needs Rosetta, and from macOS 28 Apple keeps Rosetta only for certain older games. A macOS 28 version is planned in <a href="https://github.com/jdrly/swgl-on-mac/issues/20">issue #20</a>. Until I announce it, don\'t upgrade a Mac you play on.',
      "SWTOR on Mac needs Rosetta too, like the official SWTOR Mac app it runs on. I don't know yet how either of them will do on macOS 28.",
    ],
    tag: { text: "Hold · don't upgrade yet", tone: 'warning' },
    ref: { text: 'Tracked in swgl-on-mac #20', href: 'https://github.com/jdrly/swgl-on-mac/issues/20', status: 'Planned' },
  },
];
