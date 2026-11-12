import Image from "next/image";
import { Phone } from "lucide-react";
import { BtnPrimary } from "./Buttons";
import { site, telHref } from "@/lib/site";

/**
 * "Kayıt ve Bilgi" band for the bottom of section pages: call the main line,
 * the admissions number, or book a meeting via the pre-registration form.
 * Plain heading — no slogans (user rule).
 */
export function ContactCta({ image = "/hero/hero-2.jpg" }: { image?: string }) {
  return (
    <section className="tone-navy relative isolate overflow-hidden py-[clamp(3rem,6vw,5rem)]">
      <Image src={image} alt="" fill sizes="100vw" className="-z-10 object-cover" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/90 to-ink/60" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-15 grid-paper" />
      <div className="relative mx-auto grid max-w-[1180px] items-center gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-12 lg:px-10">
        <div className="flex gap-5">
          <span className="mt-1 hidden h-14 w-1.5 shrink-0 rounded-full bg-red sm:block" aria-hidden />
          <div>
            <h2 className="display text-3xl font-semibold tracking-tight text-white sm:text-4xl">Kayıt ve Bilgi</h2>
            <p className="mt-3 text-white/75">
              Bilgi ve randevu:{" "}
              <a
                href={telHref(site.admissionsPhoneTel)}
                className="font-semibold text-white underline-offset-4 hover:underline"
              >
                {site.admissionsPhoneDisplay}
              </a>
              <span className="text-white/40"> · </span>
              Hafta içi {site.hoursWeekday}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={telHref(site.phoneTel)}
            className="inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3.5 text-[0.95rem] font-semibold no-underline shadow-lg transition-transform duration-200 hover:-translate-y-0.5"
            style={{ color: "#14233a" }}
          >
            <Phone className="h-4 w-4 text-red" strokeWidth={2.2} aria-hidden />
            Ara {site.phoneDisplay}
          </a>
          <BtnPrimary href="/kayit-iletisim#on-kayit" size="lg">
            Kayıt Görüşmesi Planla
          </BtnPrimary>
        </div>
      </div>
    </section>
  );
}
