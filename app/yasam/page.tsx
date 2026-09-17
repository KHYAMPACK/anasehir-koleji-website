import type { Metadata } from "next";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";
import { PageHero, Section } from "@/components/PageHero";
import { ComingSoon } from "@/components/ProgramCards";
import { yasamEmptyState } from "@/lib/yasam";
import { sections } from "@/lib/nav";

export const metadata: Metadata = { title: "Anaşehir'de Yaşam" };

const chapters = sections.find((s) => s.name === "Anaşehir'de Yaşam")!.items;

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
        <ComingSoon note={yasamEmptyState.haberler} />
      </Section>

      <Section id="etkinlikler" tone="paper" eyebrow="Etkinlikler" title="Yaklaşan kampüs etkinlikleri.">
        <ComingSoon note={yasamEmptyState.etkinlikler} />
      </Section>

      <Section id="akademik-takvim" tone="ice" eyebrow="Akademik Takvim" title="Dönem tarihleri ve tatiller.">
        <ComingSoon note={yasamEmptyState.takvim} />
      </Section>

      <Section id="galeri" tone="paper" eyebrow="Galeri" title="Kampüsten kareler.">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }, (_, i) => (
            <MediaPlaceholder key={i} label={`Galeri ${i + 1}`} ratio="aspect-[4/3]" />
          ))}
        </div>
      </Section>
    </>
  );
}
