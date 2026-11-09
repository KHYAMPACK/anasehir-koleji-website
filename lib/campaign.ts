/**
 * Bursluluk Sınavı campaign — ONE switch for everything campaign-related:
 * the top announcement bar, header button, homepage hero CTA, mobile sticky
 * bar, first-visit popup and /bursluluk page links.
 *
 * After the exam: set `active: false` and the site goes back to normal.
 */
export const bursluluk = {
  active: true,
  /** First-visit popup (shown once per visitor, a few seconds after load). */
  showPopup: true,
  href: "/bursluluk",
  title: "Bursluluk Sınavı",
  /**
   * Exam start as ISO with Turkey offset, e.g. "2026-12-13T10:00:00+03:00".
   * null → the countdown shows a "veri bekleniyor" tag.
   */
  examDate: null as string | null,
  /** Exam facts — null values render as "veri bekleniyor" tags. */
  details: [
    { label: "Sınav tarihi", value: null },
    { label: "Sınav saati", value: null },
    { label: "Sınav yeri", value: null },
    { label: "Katılabilecek sınıflar", value: null },
    { label: "Burs oranları", value: null },
    { label: "Son başvuru tarihi", value: null },
  ] as { label: string; value: string | null }[],
};

/** "13 Aralık 2026" style date for badges, or null when not set. */
export function examDateLabel() {
  if (!bursluluk.examDate) return null;
  return new Intl.DateTimeFormat("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Istanbul",
  }).format(new Date(bursluluk.examDate));
}
