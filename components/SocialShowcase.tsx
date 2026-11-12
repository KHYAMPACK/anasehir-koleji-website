import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";
import { socialIcons } from "./SocialLinks";

/**
 * Homepage "Sosyal Medya" band: one big card per platform + a photo mosaic
 * that opens Instagram. The mosaic uses the school's own campus photos — it is
 * a visual invitation, not a fake feed (no captions, likes or dates).
 */
const platforms = [
  {
    key: "instagram" as const,
    name: "Instagram",
    handle: site.social.instagramHandle,
    cta: "Takip Et",
    href: site.social.instagram,
    iconBg: "linear-gradient(135deg, #f58529 0%, #dd2a7b 50%, #8134af 100%)",
  },
  {
    key: "facebook" as const,
    name: "Facebook",
    handle: "Anaşehir Koleji",
    cta: "Beğen",
    href: site.social.facebook,
    iconBg: "#1877f2",
  },
  {
    key: "youtube" as const,
    name: "YouTube",
    handle: "Anaşehir Koleji",
    cta: "Abone Ol",
    href: site.social.youtube,
    iconBg: "#ff0000",
  },
];

const mosaic = [
  { src: "/hero/hero-2.jpg", alt: "Anaşehir Koleji öğrencileri", cls: "col-span-2 row-span-2" },
  { src: "/hero/hero-3.jpg", alt: "Anaşehir Koleji kampüs yaşamı", cls: "" },
  { src: "/hero/hero-mobile-1.jpg", alt: "Anaşehir Koleji öğrencileri", cls: "" },
  { src: "/hero/hero-1.jpg", alt: "Anaşehir Koleji kampüsü", cls: "" },
  { src: "/hero/hero-mobile-2.jpg", alt: "Anaşehir Koleji okul binası", cls: "" },
];

export function SocialShowcase() {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
      <div>
        <p className="eyebrow flex items-center gap-3">
          <span className="h-5 w-1 rounded-full bg-red" aria-hidden />
          Sosyal Medya
        </p>
        <h2 className="display mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          Anaşehir&apos;i takip edin.
        </h2>

        <ul className="mt-8 grid gap-3">
          {platforms.map((p) => (
            <li key={p.key}>
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-[16px] bg-panel p-4 no-underline shadow-sm ring-1 ring-line/60 transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-md sm:p-5"
              >
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] text-white shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-3"
                  style={{ background: p.iconBg }}
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden>
                    {socialIcons[p.key]}
                  </svg>
                </span>
                <span className="min-w-0 flex-1">
                  <span className="display block text-base font-semibold text-ink">{p.name}</span>
                  <span className="block truncate text-sm text-muted">{p.handle}</span>
                </span>
                <span className="hidden items-center gap-1 rounded-full bg-blue-soft px-3.5 py-1.5 text-sm font-semibold text-ink transition-colors group-hover:bg-ink group-hover:text-white sm:inline-flex">
                  {p.cta}
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2} aria-hidden />
                </span>
                <ArrowUpRight className="h-5 w-5 text-muted sm:hidden" strokeWidth={2} aria-hidden />
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Photo mosaic → Instagram */}
      <a
        href={site.social.instagram}
        target="_blank"
        rel="noreferrer"
        aria-label={`Instagram'da ${site.social.instagramHandle}`}
        className="group relative block rounded-[26px] bg-[linear-gradient(135deg,#f58529,#dd2a7b,#8134af)] p-[3px] no-underline shadow-[0_24px_60px_-28px_rgba(129,52,175,0.55)]"
      >
        <div className="grid grid-cols-4 grid-rows-2 gap-1.5 overflow-hidden rounded-[23px] bg-panel p-1.5 [aspect-ratio:16/10]">
          {mosaic.map((m) => (
            <div key={m.src} className={`relative overflow-hidden rounded-[14px] bg-panel-2 ${m.cls}`}>
              <Image
                src={m.src}
                alt={m.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 30vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          ))}
        </div>
        <span className="absolute bottom-5 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold whitespace-nowrap text-ink shadow-lg backdrop-blur transition-transform duration-300 group-hover:-translate-y-0.5">
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-[#dd2a7b]" aria-hidden>
            {socialIcons.instagram}
          </svg>
          {site.social.instagramHandle}
          <ArrowUpRight className="h-4 w-4" strokeWidth={2} aria-hidden />
        </span>
      </a>
    </div>
  );
}
