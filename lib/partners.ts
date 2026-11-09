/**
 * Partner / institutional-agreement logos. Both lists are empty until the
 * school sends the real list — while empty, <PartnerLogos> renders loud
 * "veri bekleniyor" slots instead. Add entries like:
 *   { name: "Kurum Adı", logo: "/partners/kurum.png", url: "https://..." }
 */
export type Partner = { name: string; logo: string; url?: string };

/** Çözüm ortakları — the school is reviewing which old partners continue. */
export const solutionPartners: Partner[] = [];

/** Resmi ve özel kurumlarla kurumsal iş birliği sözleşmeleri. */
export const institutionalPartners: Partner[] = [];
