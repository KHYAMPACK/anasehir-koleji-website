import type { Metadata } from "next";
import { BtnLine } from "@/components/Buttons";
import { PageHero, Section } from "@/components/PageHero";
import { ComingSoon, ProgramCards } from "@/components/ProgramCards";
import {
  activityRulesShort,
  kulupBranches,
  safetyHealth,
  sanatBranches,
  socialResponsibility,
  sporBranches,
} from "@/lib/kampusYasami";
import { programs } from "@/lib/programs";
import { sections } from "@/lib/nav";

export const metadata: Metadata = { title: "Kampüs Yaşamı" };

const chapters = sections.find((s) => s.name === "Kampüs Yaşamı")!.items;

function BranchList({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((b) => (
        <li key={b} className="rounded-full bg-panel px-4 py-2 text-sm text-ink shadow-sm">
          {b}
        </li>
      ))}
    </ul>
  );
}

export default function KampusYasamiPage() {
  return (
    <>
      <PageHero
        eyebrow="Kampüs Yaşamı"
        title="25 dal, okulun hediyesi."
        lead="Spor, sanat ve kulüp etkinlikleri — hepsi ücretsiz."
      />

      <nav className="bg-ink/95" aria-label="Kampüs Yaşamı bölümleri">
        <div className="mx-auto flex max-w-[1180px] flex-wrap gap-x-5 gap-y-2 px-4 py-3 text-sm text-white/70 sm:px-6 lg:px-10">
          {chapters.map((c) => (
            <a key={c.href} href={`#${c.href.split("#")[1]}`} className="hover:text-white">
              {c.name}
            </a>
          ))}
        </div>
      </nav>

      <Section tone="ice">
        <ProgramCards points={activityRulesShort} />
      </Section>

      <Section id="spor" tone="paper" eyebrow="Spor" title={programs.swimming.title} lead={programs.swimming.lead}>
        <ProgramCards points={programs.swimming.points} />
        <div className="mt-6">
          <BranchList items={sporBranches} />
        </div>
      </Section>

      <Section id="sanat" tone="ice" eyebrow="Sanat" title={programs.radio.title} lead={programs.radio.lead}>
        <ProgramCards points={programs.radio.points} />
        <div className="mt-6">
          <BranchList items={sanatBranches} />
        </div>
        <div className="mt-6">
          <BtnLine href="/radyo">Anaşehir Radyo’yu dinleyin</BtnLine>
        </div>
      </Section>

      <Section id="kulupler" tone="paper" eyebrow="Kulüpler" title="Zihni geliştiren dallar." lead="Satrançtan bilim atölyesine, meraklı öğrenciler için kulüpler.">
        <BranchList items={kulupBranches} />
      </Section>

      <Section id="sosyal-sorumluluk" tone="ice" eyebrow="Sosyal Sorumluluk" title="Kendini keşfeden, sorumluluk alan bireyler." lead="Kulüp çalışmaları ve topluma hizmet etkinlikleri, öğretmen rehberliğinde.">
        <ProgramCards points={socialResponsibility} />
      </Section>

      <Section id="guvenlik-saglik" tone="paper" eyebrow="Güvenlik & Sağlık" title="Güvenli servis, kontrollü kampüs." lead="Kurum araçları, servis öğretmeni ve kontrollü giriş-çıkış.">
        <ProgramCards points={safetyHealth} />
        <div className="mt-6">
          <ComingSoon note="Revir ve sağlık personeli bilgileri okuldan gelen bilgilerle eklenecek." />
        </div>
      </Section>
    </>
  );
}
