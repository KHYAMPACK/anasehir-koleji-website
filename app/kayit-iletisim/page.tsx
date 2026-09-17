import type { Metadata } from "next";
import { BtnLine } from "@/components/Buttons";
import { LeadForm } from "@/components/LeadForm";
import { PageHero, Section } from "@/components/PageHero";
import { campuses, mapsEmbedUrl, mapsSearchUrl } from "@/lib/campuses";
import { kayitSteps } from "@/lib/kayitIletisim";
import { sections } from "@/lib/nav";
import { site, telHref } from "@/lib/site";

export const metadata: Metadata = { title: "Kayıt & İletişim" };

const chapters = sections.find((s) => s.name === "Kayıt & İletişim")!.items;
const featured = campuses.find((c) => c.featured)!;

export default function KayitIletisimPage() {
  return (
    <>
      <PageHero eyebrow="Kayıt & İletişim" title="Anaşehir ailesine katılın." />

      <nav className="bg-ink/95" aria-label="Kayıt & İletişim bölümleri">
        <div className="mx-auto flex max-w-[1180px] flex-wrap gap-x-5 gap-y-2 px-4 py-3 text-sm text-white/70 sm:px-6 lg:px-10">
          {chapters.map((c) => (
            <a key={c.href} href={`#${c.href.split("#")[1]}`} className="hover:text-white">
              {c.name}
            </a>
          ))}
        </div>
      </nav>

      <Section id="kayit-sureci" tone="ice" eyebrow="Kayıt Süreci" title="Dört adımda kayıt.">
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {kayitSteps.map((s, i) => (
            <li key={s.title} className="rounded-[14px] bg-panel p-5 shadow-sm">
              <span className="display text-xs font-semibold text-red">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="display mt-2 text-base font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm text-muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="ucret-bilgilendirme" tone="paper" eyebrow="Ücret Bilgilendirme Talebi" title="Ücret bilgisi için formu bırakın." lead="Kademeye göre güncel ücret bilgisini size iletelim.">
        <BtnLine href="#bize-ulasin">Formu doldurun</BtnLine>
      </Section>

      <Section id="kampus-turu" tone="ice" eyebrow="Kampüs Turu" title="Kampüsü yerinde görün." lead="Randevu alın, Bağlıca kampüsünü birlikte gezelim.">
        <BtnLine href="#bize-ulasin">Randevu isteyin</BtnLine>
      </Section>

      <section
        id="bize-ulasin"
        className="tone-navy relative overflow-hidden scroll-mt-[calc(var(--header)+0.75rem)]"
      >
        <div className="pointer-events-none absolute inset-0 opacity-25 grid-paper" />
        <div
          id="on-kayit"
          className="relative mx-auto grid max-w-[1180px] scroll-mt-[calc(var(--header)+0.75rem)] items-start gap-6 px-4 py-10 sm:px-6 sm:py-12 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,32rem)] lg:gap-x-12 lg:gap-y-6 lg:px-10 lg:py-14"
        >
          <div>
            <p className="eyebrow">Bize Ulaşın</p>
            <h1 className="display mt-3 max-w-[16ch] text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.6rem] lg:leading-[1.12]">
              Formu bırakın, biz arayalım.
            </h1>
            <p className="mt-3 max-w-[42ch] text-sm text-white/70 sm:text-base">
              Kampüsü, kademeyi ve programı yerinde sorun — ücret bilgilendirme ve kampüs turu talepleri de bu formdan gelir.
            </p>
          </div>
          <LeadForm className="min-w-0 lg:col-start-2 lg:row-span-2" />
          <div>
            <dl className="grid gap-3 text-sm sm:grid-cols-2">
              <div className="rounded-[14px] bg-white/8 p-4 ring-1 ring-white/12">
                <dt className="text-white/50">Telefon</dt>
                <dd className="mt-1">
                  <a href={telHref(site.phoneTel)} className="font-semibold text-white">
                    {site.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div className="rounded-[14px] bg-white/8 p-4 ring-1 ring-white/12">
                <dt className="text-white/50">Bilgi ve randevu</dt>
                <dd className="mt-1">
                  <a href={telHref(site.admissionsPhoneTel)} className="font-semibold text-white">
                    {site.admissionsPhoneDisplay}
                  </a>
                </dd>
              </div>
              <div className="rounded-[14px] bg-white/8 p-4 ring-1 ring-white/12 sm:col-span-2">
                <dt className="text-white/50">E-posta</dt>
                <dd className="mt-1">
                  <a href={`mailto:${site.email}`} className="font-semibold text-white">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div className="rounded-[14px] bg-white/8 p-4 ring-1 ring-white/12 sm:col-span-2">
                <dt className="text-white/50">Saatler</dt>
                <dd className="mt-1 text-white/85">
                  Hafta içi {site.hoursWeekday} · Cumartesi {site.hoursSaturday}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <Section tone="ice" eyebrow="Kampüsler" title="Üç bina, bir 444 hattı.">
        <div className="grid gap-4 lg:grid-cols-3">
          {campuses.map((c) => (
            <article key={c.id} className={`rounded-[14px] border-l-4 bg-panel p-6 shadow-sm ${c.featured ? "border-l-red" : "border-l-blue"}`}>
              <h3 className="display text-lg font-semibold">{c.name}</h3>
              <p className="mt-2 text-sm text-blue">{c.levels}</p>
              <p className="mt-3 text-sm text-muted">{c.address}</p>
              <ul className="mt-3 space-y-1">
                {c.phones.map((p) => (
                  <li key={p.tel}>
                    <a href={telHref(p.tel)} className="font-semibold text-ink">
                      {p.display}
                    </a>
                  </li>
                ))}
              </ul>
              <a href={mapsSearchUrl(c.mapsQuery)} target="_blank" rel="noreferrer" className="mt-4 inline-block text-sm text-blue">
                Yol tarifi alın
              </a>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="navy" eyebrow="Harita" title={`Bağlıca Koleji, ${featured.address}`}>
        <div className="overflow-hidden rounded-[14px] ring-1 ring-white/15">
          <iframe
            title="Anaşehir Koleji Bağlıca harita"
            src={mapsEmbedUrl(featured.mapsQuery)}
            className="h-80 w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Section>
    </>
  );
}
