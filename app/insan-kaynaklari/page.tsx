import type { Metadata } from "next";
import { IsBasvuruForm } from "@/components/IsBasvuruForm";
import { PageHero, Section } from "@/components/PageHero";
import { isBasvuruNotice } from "@/lib/ik";
import { parseLegal, readLegal } from "@/lib/legal";

export const metadata: Metadata = {
  title: "İnsan Kaynakları",
  description: "Anaşehir Koleji iş başvuru formu.",
};

export default function InsanKaynaklariPage() {
  return (
    <>
      <PageHero eyebrow="İK" title="İnsan Kaynakları" />
      <Section id="is-basvuru-formu" tone="ice" title="İş Başvuru Formu">
        <div className="max-w-3xl">
          <IsBasvuruForm noticeBlocks={parseLegal(readLegal(isBasvuruNotice.file))} />
        </div>
      </Section>
    </>
  );
}
