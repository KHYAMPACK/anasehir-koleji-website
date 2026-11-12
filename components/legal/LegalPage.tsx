import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { parseLegal, readLegal } from "@/lib/legal";
import { LegalDocument } from "./LegalDocument";
import { PrintButton } from "./PrintButton";

/** Shared layout for one KVKK document: title from the text, print button, body. */
export function LegalPage({ file, children }: { file: string; children?: React.ReactNode }) {
  const blocks = parseLegal(readLegal(file));
  const title = blocks.find((b) => b.type === "h2");

  return (
    <>
      <section className="tone-navy relative overflow-hidden print:bg-white">
        <div className="relative mx-auto max-w-[1180px] px-4 py-12 sm:px-6 sm:py-14 lg:px-10">
          <Link href="/kvkk" className="print:hidden inline-flex items-center gap-1.5 text-sm font-semibold text-blue no-underline">
            <ArrowLeft className="h-4 w-4" aria-hidden /> KVKK Belgelerimiz
          </Link>
          <p className="mt-5 text-sm font-bold tracking-[0.14em] text-blue uppercase">Anaşehir Koleji</p>
          <h1 className="display mt-3 max-w-[32ch] text-2xl leading-tight font-extrabold tracking-tight text-white sm:text-4xl">
            {title && title.type === "h2" ? title.text : ""}
          </h1>
          <div className="mt-6">
            <PrintButton />
          </div>
        </div>
      </section>
      <section className="tone-paper py-[clamp(2.5rem,5vw,4rem)]">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-10">
          <LegalDocument blocks={blocks} />
          {children}
        </div>
      </section>
    </>
  );
}
