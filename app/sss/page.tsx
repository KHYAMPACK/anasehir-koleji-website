import type { Metadata } from "next";
import { PageHero, Section } from "@/components/PageHero";
import { faqs } from "@/lib/copy";

export const metadata: Metadata = { title: "Sık sorulanlar" };

export default function SssPage() {
  return (
    <>
      <PageHero
        eyebrow="SSS"
        title="Sormadan gitmeyin."
        lead="Saat, etüt, etkinlik, yemek, servis, K12, kampüs — sizin verdiğiniz bilgilerden."
      />
      <Section tone="ice">
        <div className="grid gap-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="rounded-[14px] bg-panel px-5 py-4"
            >
              <summary className="display cursor-pointer list-none font-semibold">
                {f.q}
              </summary>
              <p className="mt-3 max-w-[70ch] text-sm text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>
    </>
  );
}
