import type { Metadata } from "next";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";
import { PageHero, Section } from "@/components/PageHero";
import { ProgramCards } from "@/components/ProgramCards";
import { historyShort, purposePoints } from "@/lib/anasehir";
import { values, vision, whenYouEnter } from "@/lib/copy";
import { administration, founders, generalManager } from "@/lib/people";
import { sections } from "@/lib/nav";

export const metadata: Metadata = { title: "Anaşehir" };

const chapters = sections.find((s) => s.name === "Anaşehir")!.items;

export default function AnasehirPage() {
  return (
    <>
      <PageHero
        eyebrow="Anaşehir"
        title="Bağlıca'nın ilk özel okulu."
        lead="2005'ten bugüne, kurucularımızdan yönetimimize — Anaşehir'i tanıyın."
      />

      <nav className="bg-ink/95" aria-label="Anaşehir bölümleri">
        <div className="mx-auto flex max-w-[1180px] flex-wrap gap-x-5 gap-y-2 px-4 py-3 text-sm text-white/70 sm:px-6 lg:px-10">
          {chapters.map((c) => (
            <a key={c.href} href={`#${c.href.split("#")[1]}`} className="hover:text-white">
              {c.name}
            </a>
          ))}
        </div>
      </nav>

      <Section id="hikayemiz" tone="ice" eyebrow="Hikâyemiz" title="Neden varız, ne için çalışırız.">
        <ProgramCards points={purposePoints} />
      </Section>

      <Section id="2005ten-bugune" tone="paper" eyebrow="2005'ten Bugüne" title="Bir anaokulundan koleje.">
        <div className="relative grid gap-4 lg:grid-cols-4">
          <span className="absolute top-8 right-4 left-4 hidden h-0.5 bg-red/40 lg:block" />
          {historyShort.map((item) => (
            <article key={item.year} className="relative rounded-[14px] bg-panel p-5 pt-8 shadow-sm">
              <span className="display absolute -top-1 left-5 bg-red px-2 py-0.5 text-sm font-semibold text-white">
                {item.year}
              </span>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="kurucularimiz" tone="blush" eyebrow="Kurucularımız" title="Çekinmez ailesi.">
        <div className="grid gap-6 lg:grid-cols-2">
          {founders.map((p) => (
            <article key={p.name} className="overflow-hidden rounded-[14px] bg-canvas shadow-sm">
              <div className="bg-ink px-5 py-3 text-white">
                <p className="eyebrow text-white/50">{p.title}</p>
                <h3 className="display mt-1 text-2xl font-semibold">{p.name}</h3>
              </div>
              <div className="grid gap-4 p-5 sm:grid-cols-[7rem_1fr]">
                <MediaPlaceholder label="Portre" ratio="aspect-square" />
                <p className="text-sm leading-relaxed text-muted">{p.shortBio}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="yonetim" tone="ice" eyebrow="Yönetim" title={generalManager.name}>
        <div className="grid gap-6 lg:grid-cols-[14rem_1fr]">
          <MediaPlaceholder label="Portre" ratio="aspect-[3/4]" />
          <div>
            <p className="eyebrow">{generalManager.title}</p>
            <p className="mt-4 leading-relaxed text-muted">{generalManager.shortBio}</p>
          </div>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {administration.map((p) => (
            <article key={p.name} className="rounded-[14px] bg-panel p-5 shadow-sm">
              <p className="eyebrow">{p.title}</p>
              <h3 className="display mt-2 text-lg font-semibold">{p.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{p.shortBio}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="vizyon-degerler" tone="blush" eyebrow="Vizyon" title="Cumhuriyete bağlı, kültür-sanatla ilgili, örnek.">
        <p className="display max-w-[28ch] text-3xl font-semibold leading-snug">{vision}</p>
      </Section>

      <Section tone="navy" eyebrow="Değerlerimiz" title="Yedi tutum.">
        <ul className="flex flex-wrap gap-3">
          {values.map((v) => (
            <li key={v} className="rounded-full bg-white/10 px-4 py-2 text-sm text-white ring-1 ring-white/20">
              {v}
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="ice" eyebrow="Bu okula girdiğin zaman sen" title="On dört kelime.">
        <ul className="grid gap-2 sm:grid-cols-2">
          {whenYouEnter.map((w) => (
            <li
              key={w}
              className="display rounded-[12px] border-l-4 border-red bg-ink px-5 py-6 text-xl font-semibold tracking-wide text-white sm:text-2xl"
            >
              {w}
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
