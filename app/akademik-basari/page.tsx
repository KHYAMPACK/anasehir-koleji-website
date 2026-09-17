import type { Metadata } from "next";
import { PageHero, Section } from "@/components/PageHero";
import { ComingSoon, ProgramCards } from "@/components/ProgramCards";
import { akademikBasariPages } from "@/lib/akademikBasari";
import { programs } from "@/lib/programs";
import { sections } from "@/lib/nav";

export const metadata: Metadata = { title: "Akademik Başarı" };

const chapters = sections.find((s) => s.name === "Akademik Başarı")!.items;

export default function AkademikBasariPage() {
  return (
    <>
      <PageHero eyebrow="Akademik Başarı" title={programs.lgs.title} lead={programs.lgs.lead} />

      <nav className="bg-ink/95" aria-label="Akademik Başarı bölümleri">
        <div className="mx-auto flex max-w-[1180px] flex-wrap gap-x-5 gap-y-2 px-4 py-3 text-sm text-white/70 sm:px-6 lg:px-10">
          {chapters.map((c) => (
            <a key={c.href} href={`#${c.href.split("#")[1]}`} className="hover:text-white">
              {c.name}
            </a>
          ))}
        </div>
      </nav>

      <Section id="lgs-sistemi" tone="ice">
        <ProgramCards points={programs.lgs.points} />
        <p className="display mt-6 text-lg font-semibold">{programs.lgs.closing}</p>
      </Section>

      <Section id="sonuclarimiz" tone="paper" eyebrow="Sonuçlarımız" title="Yıllara göre başarılarımız." lead={akademikBasariPages.sonuclarimiz.lead}>
        <ComingSoon note="LGS ve akademik sonuçlar okuldan gelen verilerle eklenecek." />
      </Section>

      <Section id="ogrenci-basarilari" tone="ice" eyebrow="Öğrenci Başarıları" title="Akademik, sanatsal, sportif." lead={akademikBasariPages.ogrenciBasarilari.lead}>
        <ComingSoon />
      </Section>

      <Section id="mezunlarimiz" tone="paper" eyebrow="Mezunlarımız" title="Anaşehir'den ayrılan öğrencilerimiz." lead={akademikBasariPages.mezunlarimiz.lead}>
        <ComingSoon />
      </Section>
    </>
  );
}
