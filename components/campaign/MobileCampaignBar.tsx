"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { bursluluk } from "@/lib/campaign";

/** Phone-only CTA pinned to the bottom of the screen during the campaign. */
export function MobileCampaignBar() {
  const pathname = usePathname();
  if (!bursluluk.active || pathname === bursluluk.href) return null;

  return (
    <>
      {/* Spacer so the fixed bar never covers the end of the footer. */}
      <div className="h-16 sm:hidden" aria-hidden />
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-panel/95 px-4 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] backdrop-blur-md sm:hidden">
        <Link
          href={bursluluk.href}
          className="flex h-11 w-full items-center justify-center rounded-full bg-red text-sm font-semibold text-white no-underline"
        >
          {bursluluk.title} Başvurusu →
        </Link>
      </div>
    </>
  );
}
