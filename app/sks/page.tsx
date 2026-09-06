import type { Metadata } from "next";
import { VideoPlaceholder } from "@/components/MediaPlaceholder";
import { PageHero, Section } from "@/components/PageHero";
import { ProseCards } from "@/components/ProseCards";
import { sksRules } from "@/lib/copy";
import { sksAlsoListed, sksBranches } from "@/lib/sks";

export const metadata: Metadata = { title: "SKS" };

export default function SksPage() {
  return (
    <>
      <PageHero
        eyebrow="Spor · Kültür · Sanat"
        title="25 dal. Ücretsiz etkinlik dersi."
        lead="Yüzme kaynak metinde iki kez geçiyordu; listede bir kez."
      />

      <Section tone="blush" eyebrow="Kurallar" title="Nasıl seçilir?">
        <ProseCards paragraphs={sksRules} tone="blush" />
      </Section>

      <Section tone="ice" eyebrow="25 dal" title="Açılan branşlar kontenjana bağlı.">
        <ol className="flex flex-wrap gap-2">
          {sksBranches.map((b, i) => (
            <li
              key={b}
              className="rounded-full bg-panel px-4 py-2 text-sm text-ink"
            >
              <span className="mr-2 font-semibold text-red">
                {String(i + 1).padStart(2, "0")}
              </span>
              {b}
            </li>
          ))}
        </ol>
        <p className="mt-6 text-sm text-muted">
          Hakkımızda metninde ayrıca geçenler: {sksAlsoListed.join(", ")}.
        </p>
      </Section>

      <Section tone="navy" eyebrow="Etkinlikler" title="Video yer tutucu.">
        <VideoPlaceholder title="SKS etkinlikleri" />
      </Section>
    </>
  );
}
