"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { BtnPrimary } from "./Buttons";
import { SocialLinks } from "./SocialLinks";
import { sections } from "@/lib/nav";
import { site, telHref } from "@/lib/site";
import { bursluluk } from "@/lib/campaign";
import { useCampaignPhase } from "@/lib/useCampaignPhase";

const burslulukCta = { href: bursluluk.href, label: "Bursluluk Başvurusu" };
const defaultCta = { href: "/kayit-iletisim#kampus-turu", label: "Kampüs Turu Planla" };

export function Header() {
  const cta = useCampaignPhase() === "open" ? burslulukCta : defaultCta;
  const [open, setOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [openMobile, setOpenMobile] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-panel/90 backdrop-blur-md">
      {/* One row everywhere (client request, Nov 2026): logo · nav · phone + CTA.
          Below xl the nav collapses into the Menü button. */}
      <div className="mx-auto flex h-[var(--header)] max-w-[1560px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-10 xl:gap-4 xl:px-6 2xl:gap-6 2xl:px-10">
        <div className="shrink-0">
          <Logo />
        </div>

        <nav
          className="hidden min-w-0 flex-1 items-center justify-center gap-x-0.5 text-[0.82rem] whitespace-nowrap text-ink xl:flex 2xl:gap-x-3 2xl:text-[0.88rem]"
          aria-label="Ana"
          onMouseLeave={() => setOpenSection(null)}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setOpenSection(null);
          }}
        >
          {sections.map((s) => (
            <div
              key={s.name}
              className="relative flex items-center py-2"
              onMouseEnter={() => setOpenSection(s.name)}
              onFocus={() => setOpenSection(s.name)}
            >
              <Link
                href={s.href}
                className="rounded-md px-1 py-1 hover:text-blue 2xl:px-1.5"
                onClick={() => setOpenSection(null)}
              >
                {s.name}
              </Link>
              {s.items.length > 0 && (
                <button
                  type="button"
                  className="-ml-1 hidden rounded px-1 py-1 text-muted hover:text-blue 2xl:inline-flex"
                  aria-expanded={openSection === s.name}
                  aria-label={`${s.name} alt menüsünü aç`}
                  onClick={() => setOpenSection((v) => (v === s.name ? null : s.name))}
                >
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform ${openSection === s.name ? "rotate-180" : ""}`}
                    strokeWidth={2}
                    aria-hidden
                  />
                </button>
              )}
              {openSection === s.name && s.items.length > 0 && (
                <div className="absolute top-full left-0 z-50 min-w-64 rounded-xl border border-line bg-panel p-2 shadow-[0_12px_32px_rgba(20,35,58,0.1)]">
                  {s.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-lg px-3 py-2 text-sm whitespace-normal hover:bg-blue-soft"
                      onClick={() => setOpenSection(null)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 xl:flex 2xl:gap-4">
          <a
            href={telHref(site.phoneTel)}
            className="flex items-center gap-1.5 text-sm font-semibold whitespace-nowrap text-ink no-underline hover:text-blue"
            aria-label={`Ara ${site.phoneDisplay}`}
          >
            <Phone className="h-4 w-4 text-red" strokeWidth={2} aria-hidden />
            {site.phoneDisplay}
          </a>
          <BtnPrimary href={cta.href}>{cta.label}</BtnPrimary>
        </div>

        <div className="flex items-center gap-3 xl:hidden">
          <a
            href={telHref(site.phoneTel)}
            className="text-sm font-semibold text-blue no-underline"
          >
            Ara {site.phoneDisplay}
          </a>
          <button
            type="button"
            className="rounded-full border border-line px-3 py-2 text-sm"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Kapat" : "Menü"}
          </button>
        </div>
      </div>

      {open && (
        <div className="max-h-[calc(100svh-var(--header))] overflow-y-auto border-t border-line bg-panel px-4 py-4 xl:hidden">
          <nav className="flex flex-col text-ink" aria-label="Mobil">
            {sections.map((s) => (
              <div key={s.name} className="border-b border-line/70 py-1">
                <div className="flex items-center justify-between">
                  <Link
                    href={s.href}
                    className="flex-1 py-2.5 font-semibold"
                    onClick={() => setOpen(false)}
                  >
                    {s.name}
                  </Link>
                  <button
                    type="button"
                    className="px-2 py-2.5 text-xs text-muted"
                    aria-expanded={openMobile === s.name}
                    aria-label={`${s.name} alt menüsünü aç`}
                    onClick={() => setOpenMobile((v) => (v === s.name ? null : s.name))}
                  >
                    {openMobile === s.name ? "▴" : "▾"}
                  </button>
                </div>
                {openMobile === s.name && (
                  <div className="flex flex-col gap-1 pb-3 pl-2">
                    {s.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="py-1.5 text-sm text-muted"
                        onClick={() => setOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex flex-col gap-3 pt-4">
              {site.radioActive && (
                <Link href="/radyo" onClick={() => setOpen(false)}>
                  Anaşehir Radyo
                </Link>
              )}
              <Link href="/sss" onClick={() => setOpen(false)}>
                Sık sorulanlar
              </Link>
              <a href={telHref(site.phoneTel)} className="font-semibold text-blue">
                Ara {site.phoneDisplay}
              </a>
              <SocialLinks />
              <BtnPrimary href={cta.href}>{cta.label}</BtnPrimary>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
