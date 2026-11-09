import type { Metadata } from "next";
import { NeedsData } from "@/components/NeedsData";
import { PageHero, Section } from "@/components/PageHero";
import { sections } from "@/lib/nav";

export const metadata: Metadata = { title: "Anaşehir'de Yaşam" };

const chapters = sections.find((s) => s.name === "Anaşehir'de Yaşam")!.items;

function PlaceholderCards({ id, fields }: { id: "haberler" | "etkinlikler"; fields: string }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {Array.from({ length: 3 }, (_, i) => (
        <article key={i} className="overflow-hidden rounded-[14px] bg-panel shadow-sm">
          <NeedsData id={id} label={`${i + 1}. kart`} ratio="aspect-[16/10] !rounded-none !border-x-0 !border-t-0" compact />
          <p className="px-4 py-3 text-xs text-muted">{fields}</p>
        </article>
      ))}
    </div>
  );
}

export default function YasamPage() {
  return (
    <>
      <PageHero eyebrow="Anaşehir'de Yaşam" title="Haberler, etkinlikler, kampüsten kareler." />

      <nav className="bg-ink/95" aria-label="Anaşehir'de Yaşam bölümleri">
        <div className="mx-auto flex max-w-[1180px] flex-wrap gap-x-5 gap-y-2 px-4 py-3 text-sm text-white/70 sm:px-6 lg:px-10">
          {chapters.map((c) => (
            <a key={c.href} href={`#${c.href.split("#")[1]}`} className="hover:text-white">
              {c.name}
            </a>
          ))}
        </div>
      </nav>

      <Section id="haberler" tone="ice" eyebrow="Haberler" title="Anaşehir'den güncel gelişmeler.">
        <PlaceholderCards id="haberler" fields="Fotoğraf · Başlık · Tarih · Kısa metin" />
      </Section>

      <Section id="etkinlikler" tone="paper" eyebrow="Etkinlikler" title="Yaklaşan kampüs etkinlikleri.">
        <PlaceholderCards id="etkinlikler" fields="Görsel · Etkinlik adı · Tarih · Yer" />
      </Section>

      <Section id="akademik-takvim" tone="ice" eyebrow="Akademik Takvim" title="Dönem tarihleri ve tatiller.">
        <NeedsData id="akademik-takvim" />
      </Section>

      <Section id="galeri" tone="paper" eyebrow="Galeri" title="Kampüsten kareler.">
        <h3 className="display mb-4 text-xl font-semibold">Törenler & Geziler</h3>
        <NeedsData id="toren-gezi-fotograflari" />
        <div className="mt-3 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {Array.from({ length: 4 }, (_, i) => (
            <NeedsData key={i} id="toren-gezi-fotograflari" label={`Tören / gezi ${i + 1}`} ratio="aspect-[4/3]" compact />
          ))}
        </div>

        <h3 className="display mt-10 mb-4 text-xl font-semibold">Kampüs Yaşamından</h3>
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {Array.from({ length: 4 }, (_, i) => (
            <NeedsData key={i} id="galeri-fotograflari" label={`Fotoğraf / video ${i + 1}`} ratio="aspect-[4/3]" compact />
          ))}
        </div>
      </Section>
    </>
  );
}
