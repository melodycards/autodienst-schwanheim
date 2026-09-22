const storageKey = "autodienst:intro-seen";
const duration = 5300;
const listeners = new Set<() => void>();
let initialized = false;
let visible = false;
let deadline = 0;
let timer: ReturnType<typeof setTimeout> | undefined;

function rememberVisit() {
  try { sessionStorage.setItem(storageKey, "1"); } catch { /* Private storage can be unavailable. */ }
}

export function finishIntro() {
  clearTimeout(timer);
  rememberVisit();
  if (!visible) return;
  visible = false;
  listeners.forEach(notify => notify());
}

export function subscribeToIntro(notify: () => void) {
  listeners.add(notify);
  if (!initialized) {
    initialized = true;
    let seen = false;
    try { seen = sessionStorage.getItem(storageKey) === "1"; } catch { /* The document-level guard still works. */ }
    const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
    // Consume the reload decision once per document, never again on a client-side route change.
    visible = location.pathname === "/" && (!seen || navigation?.type === "reload");
    deadline = performance.now() + duration;
    if (!visible) rememberVisit();
  }
  if (visible) timer = setTimeout(finishIntro, Math.max(0, deadline - performance.now()));
  return () => {
    listeners.delete(notify);
    if (!listeners.size) clearTimeout(timer);
  };
}

export const getIntroSnapshot = () => visible;
export const getServerIntroSnapshot = () => false;
