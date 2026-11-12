import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Section } from "@/components/PageHero";
import { needsData } from "@/lib/needsData";

/** Hidden client checklist — not linked from the nav, not indexed. */
export const metadata: Metadata = {
  title: "Eksik içerik listesi",
  robots: { index: false, follow: false },
};

export default function EksiklerPage() {
  const entries = Object.entries(needsData);
  return (
    <>
      <PageHero
        eyebrow="Okul için kontrol listesi"
        title="Sitede beklenen içerikler."
        lead={`Sitede henüz eksik olan ${entries.length} içerik. Bu bölümler içerik gelene kadar sitede gizli tutuluyor; bağlantılar ilgili sayfaya gider.`}
      />
      <Section tone="ice">
        <ol className="grid gap-3">
          {entries.map(([id, e], i) => (
            <li key={id} className="grid gap-1 rounded-[14px] bg-panel p-5 shadow-sm sm:grid-cols-[2.5rem_1fr_auto] sm:items-center sm:gap-4">
              <span className="display text-sm font-semibold text-red">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <p className="display font-semibold text-ink">{e.label}</p>
                <p className="mt-1 text-sm text-muted">{e.ask}</p>
              </div>
              <Link href={e.href} className="text-sm font-semibold text-blue">
                İlgili sayfa →
              </Link>
            </li>
          ))}
        </ol>
      </Section>
    </>
  );
}
