import Link from "next/link";
import { HeroJourney } from "@/components/HeroJourney";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";
import { BtnLine, BtnPrimary } from "@/components/Buttons";
import { Section } from "@/components/PageHero";
import { campuses, mapsSearchUrl } from "@/lib/campuses";
import { mockQuotes } from "@/lib/copy";
import { site } from "@/lib/site";
import { sksBranches } from "@/lib/sks";

const kademeler = [
  { name: "Anaokulu", hint: "Oyunla başlayan öğrenme", href: null, edge: "border-l-blue" },
  { name: "İlkokul", hint: "Temel alışkanlıklar", href: null, edge: "border-l-ink" },
  { name: "Ortaokul", hint: "Akademik gün + SKS", href: "/ortaokul", edge: "border-l-red" },
  { name: "Anadolu Lisesi", hint: "Canadian College İngilizce", href: "/yabanci-dil", edge: "border-l-blue" },
];

export default function HomePage() {
  return (
    <>
      <HeroJourney />

      <Section
        tone="navy"
        eyebrow="Neden Anaşehir"
        title="Etimesgut’ta 2005’ten beri."
        lead="Çayyolu, Çankaya ve Etimesgut’ta yedi şubeden sonra 2013’te Bağlıca’da ilk kolej. 2014’ten beri tüm kurum Etimesgut’ta."
      >
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            { n: String(site.founded), l: "Kuruluş" },
            { n: site.students, l: "Öğrenci" },
            { n: site.staff, l: "Personel" },
          ].map((s) => (
            <div key={s.l} className="rounded-[14px] bg-white/10 px-5 py-6 ring-1 ring-white/15">
              <p className="display text-4xl font-semibold text-white">{s.n}</p>
              <p className="mt-1 text-sm text-white/60">{s.l}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-[62ch] text-white/75">
          Amaç: Atatürk ilke ve inkılaplarına bağlı, cumhuriyete inanan, nitelikli bireyler.
          En az bir SKS dalı, güçlü İngilizce, araştırmacı bir duruş.
        </p>
        <div className="mt-6">
          <BtnLine href="/kurumsal">Kurumsalı okuyun</BtnLine>
        </div>
      </Section>

      <Section
        tone="ice"
        eyebrow="Kademeler"
        title="Anaokulundan liseye, aynı çizgi."
        lead="Bu demoda ortaokul sayfası açık. Diğer kademeler Bağlıca’da var; sayfaları sonra."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {kademeler.map((k) => (
            <article
              key={k.name}
              className={`card-lift rounded-[14px] border border-line border-l-4 bg-panel p-6 ${k.edge}`}
            >
              <h3 className="display text-xl font-semibold">{k.name}</h3>
              <p className="mt-2 text-sm text-muted">{k.hint}</p>
              {k.href ? (
                <Link href={k.href} className="mt-4 inline-block text-sm font-semibold text-blue">
                  İncele →
                </Link>
              ) : (
                <p className="mt-4 text-xs uppercase tracking-wider text-muted">Yakında</p>
              )}
            </article>
          ))}
        </div>
      </Section>

      <Section
        tone="blush"
        eyebrow="Üç kampüs"
        title="Hepsini Etimesgut’ta tutuyoruz."
        lead="İçerik ve ortaokul Bağlıca Koleji’nde. Diğer iki bina iletişim kartı olarak duruyor."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {campuses.map((c) => (
            <article
              key={c.id}
              className={`rounded-[14px] border-l-4 bg-panel p-6 shadow-sm ${c.featured ? "border-l-red" : "border-l-blue"}`}
            >
              {c.featured && (
                <p className="eyebrow mb-2 text-red">Bu demoda açık</p>
              )}
              <h3 className="display text-lg font-semibold">{c.name}</h3>
              <p className="mt-2 text-sm text-blue">{c.levels}</p>
              <p className="mt-3 text-sm text-muted">{c.address}</p>
              <p className="mt-2 text-sm font-semibold">{c.phones.map((p) => p.display).join(" · ")}</p>
              <a
                href={mapsSearchUrl(c.mapsQuery)}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block text-sm text-blue"
              >
                Yol tarifi
              </a>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <MediaPlaceholder label="Bağlıca kampüs — hava fotoğrafı" />
        </div>
      </Section>

      <Section tone="navy" eyebrow="SKS" title="25 dal, okulun hediyesi.">
        <ul className="flex flex-wrap gap-2">
          {sksBranches.slice(0, 12).map((b) => (
            <li
              key={b}
              className="rounded-full bg-white/10 px-3 py-1.5 text-sm text-white ring-1 ring-white/20"
            >
              {b}
            </li>
          ))}
          <li className="rounded-full bg-red px-3 py-1.5 text-sm text-white">
            +{sksBranches.length - 12} dal
          </li>
        </ul>
        <div className="mt-6">
          <BtnLine href="/sks">Tüm SKS listesi</BtnLine>
        </div>
      </Section>

      <Section
        tone="ice"
        eyebrow="Anaşehir Radyo"
        title="2016’dan beri okulun sesi."
        lead="Öğrenci ve öğretmen programları; diksiyon dersliği; diğer saatlerde müzik. Uygulama mağazalarında “Anaşehir Radyo”."
      >
        <BtnLine href="/radyo">Radyoyu dinleyin</BtnLine>
      </Section>

      <Section tone="paper" eyebrow="Veliler" title="Ne duyuyoruz — demo alıntılar.">
        <div className="grid gap-4 md:grid-cols-3">
          {mockQuotes.map((q) => (
            <blockquote
              key={q.name}
              className="rounded-[14px] bg-blush p-6"
            >
              <p className="text-ink">“{q.quote}”</p>
              <footer className="mt-4 text-sm text-muted">
                {q.name} · {q.role}
              </footer>
            </blockquote>
          ))}
        </div>
      </Section>

      <section className="tone-navy py-[clamp(2.5rem,4.5vw,3.75rem)]">
        <div className="mx-auto flex max-w-[1180px] flex-col items-start justify-between gap-6 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-10">
          <div>
            <p className="eyebrow">Ön kayıt</p>
            <h2 className="display mt-2 text-2xl font-semibold text-white sm:text-3xl">
              Formu bırakın, biz arayalım.
            </h2>
          </div>
          <BtnPrimary href="/iletisim#on-kayit">Ön Kayıt</BtnPrimary>
        </div>
      </section>
    </>
  );
}
