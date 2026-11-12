"use client";

import { useEffect } from "react";
import { Printer } from "lucide-react";

/**
 * "Yazdır / PDF" — the browser's print dialog (Save as PDF). Opening a document
 * with #pdf (the hub's PDF column) triggers it automatically.
 */
export function PrintButton() {
  useEffect(() => {
    if (window.location.hash === "#pdf") {
      const t = setTimeout(() => window.print(), 400);
      return () => clearTimeout(t);
    }
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="tone-paper print:hidden inline-flex min-h-[46px] items-center gap-2 rounded-full border border-line bg-panel px-5 text-sm font-semibold text-ink hover:border-blue hover:text-blue"
    >
      <Printer className="h-4 w-4" aria-hidden />
      Yazdır / PDF
    </button>
  );
}
