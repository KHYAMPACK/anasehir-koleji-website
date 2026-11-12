import { useSyncExternalStore } from "react";

/**
 * Cookie consent (client's "Çerez Yönetimi Teknik Uygulama Talimatı").
 * - Optional categories default to OFF; nothing optional loads before consent.
 * - The choice is stored with date, categories and policy version (rule 6).
 *   NOTE: this record lives in the visitor's browser only. If the school's
 *   lawyer requires server-side proof of consent, a small logging endpoint is
 *   needed — the site has no backend yet.
 * - A new POLICY_VERSION (policy text changed) or MAX_AGE_DAYS re-asks.
 */
import { CONSENT_KEY, POLICY_VERSION } from "./consentConfig";

export { CONSENT_KEY, POLICY_VERSION };
const MAX_AGE_DAYS = 365;
const CHANGE = "anasehir:cerez-degisti";
const OPEN = "anasehir:cerez-ac";

export type ConsentCategory = "islevsel" | "analitik" | "pazarlama";
export type Consent = { version: string; date: string } & Record<ConsentCategory, boolean>;

export const consentCategories: { key: ConsentCategory | "zorunlu"; label: string }[] = [
  { key: "zorunlu", label: "Zorunlu Çerezler" },
  { key: "islevsel", label: "İşlevsel Çerezler" },
  { key: "analitik", label: "Analitik Çerezler" },
  { key: "pazarlama", label: "Pazarlama Çerezleri" },
];

let cachedRaw: string | null | undefined;
let cached: Consent | null = null;

function read(): Consent | null {
  let raw: string | null = null;
  try {
    raw = window.localStorage.getItem(CONSENT_KEY);
  } catch {
    raw = null;
  }
  if (raw === cachedRaw) return cached; // stable reference for useSyncExternalStore
  cachedRaw = raw;
  cached = null;
  if (raw) {
    try {
      const c = JSON.parse(raw) as Consent;
      const fresh = Date.now() - Date.parse(c.date) < MAX_AGE_DAYS * 86_400_000;
      if (c.version === POLICY_VERSION && fresh) cached = c;
    } catch {
      /* corrupt → ask again */
    }
  }
  return cached;
}

export function saveConsent(choice: Record<ConsentCategory, boolean>) {
  const record: Consent = { version: POLICY_VERSION, date: new Date().toISOString(), ...choice };
  try {
    window.localStorage.setItem(CONSENT_KEY, JSON.stringify(record));
  } catch {
    /* storage blocked: choice applies to this page view only */
    cachedRaw = JSON.stringify(record);
    cached = record;
  }
  window.dispatchEvent(new Event(CHANGE));
}

export function openCookiePreferences() {
  window.dispatchEvent(new Event(OPEN));
}

export function onOpenCookiePreferences(cb: () => void) {
  window.addEventListener(OPEN, cb);
  return () => window.removeEventListener(OPEN, cb);
}

function subscribe(cb: () => void) {
  window.addEventListener(CHANGE, cb);
  window.addEventListener("storage", cb);
  return () => {
    window.removeEventListener(CHANGE, cb);
    window.removeEventListener("storage", cb);
  };
}

/** undefined = not known yet (server render), null = no valid choice, else the choice. */
export function useConsent(): Consent | null | undefined {
  return useSyncExternalStore(subscribe, read, () => undefined);
}
