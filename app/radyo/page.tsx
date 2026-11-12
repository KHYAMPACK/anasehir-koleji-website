import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { PageHero, Section } from "@/components/PageHero";
import { ProgramCards } from "@/components/ProgramCards";
import { RadioPlayer } from "@/components/RadioPlayer";
import { programs } from "@/lib/programs";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Anaşehir Radyo" };

export default function RadyoPage() {
  if (!site.radioActive) redirect("/kampus-yasami#sanat");
  return (
    <>
      <PageHero
        eyebrow="Anaşehir Koleji"
        title="Anaşehir Radyo"
        lead={programs.radio.lead}
      />

      <Section tone="ice">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <ProgramCards points={programs.radio.points} />
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={site.radio.appStore}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-ink px-4 py-2 text-sm text-white"
              >
                App Store
              </a>
              <a
                href={site.radio.playStore}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-red px-4 py-2 text-sm text-white"
              >
                Play Store
              </a>
            </div>
          </div>
          <div className="rounded-[16px] bg-ink p-2">
            <RadioPlayer />
          </div>
        </div>
      </Section>
    </>
  );
}
