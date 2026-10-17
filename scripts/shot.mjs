// Screenshot the dev site: node scripts/shot.mjs <css-selector> <out.png> [--width=1440] [--theme=dark|light]
// Needs the dev server (npm run dev) on http://localhost:4321.
import { chromium } from 'playwright';

const [selector = 'body', out = 'shot.png', ...flags] = process.argv.slice(2);
const opt = Object.fromEntries(flags.map((f) => f.replace(/^--/, '').split('=')));
const width = Number(opt.width ?? 1440);
const theme = opt.theme ?? 'dark';
const url = opt.url ?? 'http://localhost:4321/';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width, height: 900 }, deviceScaleFactor: 1 });
await page.addInitScript((t) => localStorage.setItem('theme', t), theme);
await page.goto(url, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
const el = page.locator(selector).first();
await el.screenshot({ path: out });
console.log(`${out}: ${selector} at ${width}px, ${theme}`);
await browser.close();
