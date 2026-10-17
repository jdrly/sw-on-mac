// Lenis smooth scrolling, with the values of jandrly.cz. It smooths wheel input only and scrolls the
// window itself (no transformed wrapper), so `position: sticky` keeps working; keyboard, touch and
// find-in-page stay native. Off under prefers-reduced-motion.
import Lenis from 'lenis';

const reduced = matchMedia('(prefers-reduced-motion: reduce)');

if (!reduced.matches) {
  const lenis = new Lenis({
    autoRaf: true,
    lerp: 0.11,
    // Anchor links scroll through Lenis, honouring each target's scroll-margin-top.
    anchors: { duration: 1.3, easing: (t) => 1 - Math.pow(1 - t, 4) },
    // Stops while <html> has overflow: hidden (the open mobile menu) and starts again after.
    autoToggle: true,
    respectReducedMotion: true,
  });
  reduced.addEventListener('change', (e) => {
    if (e.matches) lenis.destroy();
  });
}
