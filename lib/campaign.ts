/**
 * Bursluluk Sınavı campaign — everything campaign-related reads from here:
 * the top announcement bar, header button, homepage hero CTA, mobile sticky
 * bar, first-visit popup, /bursluluk page and the Kayıt & İletişim cards.
 *
 * Exam facts are client-supplied (designer handoff 07, "yayına hazır").
 *
 * Dates drive the UI automatically in the visitor's browser (no redeploy):
 *   before `deadline`  → "open": everything on, form accepts applications
 *   until `examEnd`    → "closed": form shows "başvurular sona erdi", the
 *                        bar / popup / sticky button / header CTA switch off
 *   after `examEnd`    → "over": countdown and remaining campaign UI hidden
 * `active: false` turns the whole campaign off regardless of dates.
 */
export const bursluluk = {
  active: true,
  /** First-visit popup (shown once per visitor, a few seconds after load). */
  showPopup: true,
  href: "/bursluluk",
  title: "Bursluluk Sınavı",
  /** Heading on the /bursluluk page and the Kayıt card. */
  pageTitle: "2027 Bursluluk Sınavı",
  /** First session start (Turkey time) — the countdown counts to this. */
  examDate: "2027-01-16T10:00:00+03:00" as string | null,
  /** Last moment applications are accepted. */
  deadline: "2027-01-15T23:59:59+03:00",
  /** After this the campaign is over everywhere. */
  examEnd: "2027-01-16T23:59:59+03:00",
  /** Grades that can sit the exam (client banner, Nov 2026). */
  grades: [4, 5, 6, 7],
  /** Both sessions are open to every grade 4–7 (client, Nov 2026); pick either. */
  sessions: [
    { label: "1. Seans", time: "10.00", grades: "4, 5, 6 ve 7. sınıflar" },
    { label: "2. Seans", time: "14.00", grades: "4, 5, 6 ve 7. sınıflar" },
  ],
  /** Exam facts — null = not supplied yet (hidden while data flags are off). */
  details: [
    // Client bursluluk SSS (Nov 2026).
    { label: "Sınav tarihi", value: "16 Ocak 2027 Cumartesi" },
    { label: "1. Seans", value: "10.00 · 4, 5, 6 ve 7. sınıflar" },
    { label: "2. Seans", value: "14.00 · 4, 5, 6 ve 7. sınıflar" },
    { label: "Son başvuru", value: "15 Ocak 2027" },
    { label: "Sınav yeri", value: "Bağlıca Kampüsü" },
    { label: "Başvuru ve katılım", value: "Ücretsiz" },
    { label: "Sonuç açıklama", value: "25 Ocak 2027 Pazartesi" },
    { label: "Sonuç görüşmeleri", value: "Yalnızca randevulu, yüz yüze" },
    { label: "İtiraz süresi", value: "Sonuçların ilanından itibaren 3 iş günü" },
    { label: "Burs oranları", value: null },
  ] as { label: string; value: string | null }[],
};

export type CampaignPhase = "open" | "closed" | "over";

/** Phase at a given moment (ms since epoch). */
export function campaignPhase(now: number): CampaignPhase {
  if (!bursluluk.active) return "over";
  if (now > Date.parse(bursluluk.examEnd)) return "over";
  if (now > Date.parse(bursluluk.deadline)) return "closed";
  return "open";
}

const fmt = (iso: string) =>
  new Intl.DateTimeFormat("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Istanbul",
  }).format(new Date(iso));

/** "16 Ocak 2027" style exam date for badges, or null when not set. */
export function examDateLabel() {
  return bursluluk.examDate ? fmt(bursluluk.examDate) : null;
}

/** "15 Ocak 2027" style application deadline. */
export function deadlineLabel() {
  return fmt(bursluluk.deadline);
}
