// Reveal each [data-reveal] once as it enters. Content is visible by default:
// the hidden start state only applies under html.js (see global.css).
const targets = document.querySelectorAll<HTMLElement>('[data-reveal]');

if ('IntersectionObserver' in window) {
  const pending = new Set(targets);
  const reveal = (el: Element) => {
    el.classList.add('is-in');
    pending.delete(el as HTMLElement);
    observer.unobserve(el);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) reveal(entry.target);
      }
    },
    { rootMargin: '0px 0px -12% 0px', threshold: 0.1 },
  );
  targets.forEach((el) => observer.observe(el));

  // A jump (anchor link, Page Down) can carry an element from below the
  // viewport to above it without ever intersecting; reveal anything passed.
  let queued = false;
  const sweep = () => {
    queued = false;
    for (const el of pending) {
      if (el.getBoundingClientRect().top < window.innerHeight) reveal(el);
    }
    if (pending.size === 0) window.removeEventListener('scroll', onScroll);
  };
  const onScroll = () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(sweep);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
} else {
  targets.forEach((el) => el.classList.add('is-in'));
}
