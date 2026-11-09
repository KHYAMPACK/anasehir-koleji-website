"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { bursluluk, examDateLabel } from "@/lib/campaign";
import { useDismissed } from "@/lib/useDismissed";

/** Slim red strip above the header on every page. Closable; stays closed. */
export function CampaignBar() {
  const pathname = usePathname();
  const [dismissed, dismiss] = useDismissed("bursluluk-bar");
  if (!bursluluk.active || dismissed || pathname === bursluluk.href) return null;

  const date = examDateLabel();
  return (
    <div className="relative z-50 bg-red text-white">
      <div className="mx-auto flex max-w-[1560px] items-center justify-center gap-3 px-10 py-2 text-center text-sm sm:px-12">
        <p>
          <span className="font-semibold">{bursluluk.title} başvuruları açık</span>
          {date && <span className="text-white/85"> · {date}</span>}
          <Link href={bursluluk.href} className="ml-2 font-semibold underline underline-offset-2">
            Başvur →
          </Link>
        </p>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Duyuruyu kapat"
          className="absolute right-2 flex h-8 w-8 items-center justify-center rounded-full text-lg leading-none text-white/80 hover:bg-white/15 hover:text-white sm:right-4"
        >
          ×
        </button>
      </div>
    </div>
  );
}
