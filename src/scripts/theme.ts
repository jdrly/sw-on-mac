// Theme controls anywhere on the page: the header toggle, the mobile menu's Dark / Light / Auto
// and the footer's Dark / Light. Dark is the default; Auto follows the system. localStorage.theme
// holds the choice ('dark', 'light' or 'auto'); Base.astro applies it before the first paint.

type Choice = 'dark' | 'light' | 'auto';

const root = document.documentElement;
const system = () => (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
const saved = (): Choice => {
  const value = localStorage.getItem('theme');
  return value === 'light' || value === 'auto' ? value : 'dark';
};

function sync() {
  const choice = saved();
  const theme = root.dataset.theme ?? 'dark';
  document.querySelectorAll<HTMLElement>('[data-theme-choice]').forEach((b) => {
    const groupHasAuto = b.closest('[data-theme-group]')?.querySelector('[data-theme-choice="auto"]');
    b.setAttribute('aria-pressed', String(b.dataset.themeChoice === (groupHasAuto ? choice : theme)));
  });
  document.querySelectorAll('[data-theme-toggle]').forEach((b) => {
    b.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
  });
  const bg = getComputedStyle(root).getPropertyValue('--c-bg').trim();
  if (bg) document.querySelector('meta[name="theme-color"]')?.setAttribute('content', bg);
}

function apply(choice: Choice) {
  localStorage.setItem('theme', choice);
  root.dataset.theme = choice === 'auto' ? system() : choice;
  sync();
}

document.addEventListener('click', (e) => {
  const el = (e.target as Element).closest<HTMLElement>('[data-theme-choice],[data-theme-toggle]');
  if (!el) return;
  apply((el.dataset.themeChoice as Choice | undefined) ?? (root.dataset.theme === 'dark' ? 'light' : 'dark'));
});
matchMedia('(prefers-color-scheme: light)').addEventListener('change', () => {
  if (saved() === 'auto') apply('auto');
});
sync();
