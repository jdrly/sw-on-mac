// Animated <details> in the page content (FAQ, older releases). The browser still does the
// opening and closing (so it works without JS, with find-in-page and with the `open` attribute);
// this only animates the height. Safari has no `::details-content` transition yet, so it's done
// with the Web Animations API. A click during an animation reverses it from where it is.

const DURATION = 420;
const EASING = 'cubic-bezier(0.22, 1, 0.36, 1)';
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const running = new WeakMap<HTMLDetailsElement, { animation: Animation; open: boolean }>();

function animate(details: HTMLDetailsElement, summary: Element, open: boolean) {
  const from = details.getBoundingClientRect().height;
  running.get(details)?.animation.cancel();
  // Rendered open for the whole animation; closed only at the end of a closing one.
  details.open = true;
  const to = open ? details.scrollHeight : summary.getBoundingClientRect().height;

  details.style.overflow = 'clip';
  const animation = details.animate({ height: [`${from}px`, `${to}px`] }, { duration: DURATION, easing: EASING });
  running.set(details, { animation, open });
  animation.addEventListener('finish', () => {
    if (running.get(details)?.animation !== animation) return;
    running.delete(details);
    details.style.overflow = '';
    if (!open) details.open = false;
  });
}

document.addEventListener('click', (e) => {
  if (reduced.matches) return;
  const summary = (e.target as Element).closest('summary');
  const details = summary?.parentElement;
  if (!summary || !(details instanceof HTMLDetailsElement) || !details.closest('main')) return;
  if (summary !== details.querySelector(':scope > summary')) return;
  e.preventDefault();
  const current = running.get(details);
  animate(details, summary, current ? !current.open : !details.open);
});
