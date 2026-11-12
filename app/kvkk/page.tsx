import type { Metadata } from "next";
import Link from "next/link";
import { FileText } from "lucide-react";
import { CookiePreferencesLink } from "@/components/legal/CookieBanner";
import { Section } from "@/components/PageHero";
import { dataController, legalDocs } from "@/lib/legal";
import { showDataFlags } from "@/lib/needsData";
import { site, telHref } from "@/lib/site";

export const metadata: Metadata = { title: "Kişisel Verilerin Korunması" };

/* Copy below is the client's KVKK page text, verbatim. */
export default function KvkkPage() {
  const docs = legalDocs.filter((d) => d.file || showDataFlags);

  return (
    <>
      <section className="tone-navy relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-25 grid-paper" />
        <div className="relative mx-auto max-w-[1180px] px-4 py-14 sm:px-6 sm:py-16 lg:px-10">
          <p className="text-sm font-bold tracking-[0.14em] text-blue uppercase">Anaşehir Koleji | KVKK</p>
          <h1 className="display mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">Kişisel Verilerin Korunması</h1>
          <div className="mt-6 max-w-[64ch] space-y-3 text-white/80 sm:text-lg">
            <p>
              Anaşehir Koleji olarak öğrencilerimizin, velilerimizin, çalışanlarımızın ve web sitesi ziyaretçilerimizin
              kişisel verilerinin korunmasına önem veriyoruz.
            </p>
            <p>
              6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında hazırlanan aydınlatma metinlerimize, çerez
              politikamıza ve ilgili kişi başvuru belgelerimize aşağıdan ulaşabilirsiniz.
            </p>
          </div>
        </div>
      </section>

      <Section tone="ice" title="KVKK Belgelerimiz">
        <ul className="divide-y divide-line overflow-hidden rounded-[18px] bg-panel shadow-sm">
          {docs.map((d) => (
            <li key={d.slug} className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <span className="flex items-center gap-3">
                <FileText className="h-5 w-5 shrink-0 text-red" strokeWidth={1.8} aria-hidden />
                <span className="display font-semibold text-ink">{d.label}</span>
              </span>
              {d.file ? (
                <span className="flex shrink-0 gap-2">
                  <Link href={d.href} className="inline-flex min-h-[46px] items-center rounded-full bg-ink px-5 text-sm font-semibold text-white no-underline hover:bg-ink/90">
                    Sayfayı Aç
                  </Link>
                  <Link href={`${d.href}#pdf`} className="inline-flex min-h-[46px] items-center rounded-full border border-line px-5 text-sm font-semibold text-ink no-underline hover:border-blue">
                    PDF
                  </Link>
                </span>
              ) : (
                <span className="text-sm text-muted">Hazırlanıyor</span>
              )}
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="paper" title="Çerez Tercihleri">
        <p className="max-w-[64ch] text-muted">
          İnternet sitemizde kullanılan zorunlu olmayan çerezlere ilişkin tercihlerinizi dilediğiniz zaman
          değiştirebilir veya daha önce verdiğiniz izni geri alabilirsiniz.
        </p>
        <CookiePreferencesLink className="mt-5 inline-flex min-h-[46px] items-center rounded-full bg-ink px-6 text-sm font-semibold text-white hover:no-underline" />
      </Section>

      <Section tone="ice" title="KVKK Başvuru ve İletişim">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="space-y-3 text-muted">
            <p>
              Kişisel verilerinizin işlenmesine ilişkin taleplerinizi 6698 sayılı Kanun&apos;un 11. maddesi kapsamında
              tarafımıza iletebilirsiniz.
            </p>
            <p>
              Başvurularınızı yazılı olarak veya ilgili mevzuatta belirtilen geçerli elektronik başvuru yöntemleriyle
              iletebilirsiniz.
            </p>
            <p>
              Usulüne uygun başvurularınız, talebin niteliğine göre en kısa sürede ve en geç 30 gün içerisinde
              sonuçlandırılır.
            </p>
          </div>
          <dl className="grid gap-3 rounded-[18px] bg-panel p-6 text-sm shadow-sm">
            {[
              ["Veri Sorumlusu", dataController.name],
              ["Adres", dataController.address],
              ["E-posta", site.email],
              ["Telefon", site.phoneDisplay],
            ].map(([k, v]) => (
              <div key={k} className="grid gap-0.5 border-b border-line pb-3 last:border-0 last:pb-0 sm:grid-cols-[9rem_1fr] sm:gap-4">
                <dt className="font-semibold text-ink">{k}</dt>
                <dd className="text-muted">
                  {k === "E-posta" ? (
                    <a href={`mailto:${v}`} className="text-blue underline">{v}</a>
                  ) : k === "Telefon" ? (
                    <a href={telHref(site.phoneTel)} className="text-blue underline">{v}</a>
                  ) : (
                    v
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <section className="tone-navy relative overflow-hidden py-12 text-center">
        <p className="display relative text-2xl font-bold text-white">ANAŞEHİR KOLEJİ</p>
        <p className="display relative mt-2 text-xl text-blue italic">{site.slogan}</p>
      </section>
    </>
  );
}
