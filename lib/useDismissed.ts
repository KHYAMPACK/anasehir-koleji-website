import { useSyncExternalStore } from "react";

/**
 * "Closed it once, stay closed" flag backed by localStorage. Uses
 * useSyncExternalStore (not useState+useEffect) to stay hydration-safe —
 * the server always renders the not-dismissed state.
 */
const EVENT = "anasehir:dismiss";
const memory = new Set<string>(); // fallback when storage is blocked

function read(key: string) {
  if (memory.has(key)) return true;
  try {
    return window.localStorage.getItem(key) === "1";
  } catch {
    return false;
  }
}

function subscribe(cb: () => void) {
  window.addEventListener("storage", cb);
  window.addEventListener(EVENT, cb);
  return () => {
    window.removeEventListener("storage", cb);
    window.removeEventListener(EVENT, cb);
  };
}

export function useDismissed(key: string) {
  const dismissed = useSyncExternalStore(
    subscribe,
    () => read(key),
    () => false,
  );
  function dismiss() {
    memory.add(key);
    try {
      window.localStorage.setItem(key, "1");
    } catch {
      /* storage blocked — the in-memory flag covers this page view */
    }
    window.dispatchEvent(new Event(EVENT));
  }
  return [dismissed, dismiss] as const;
}
