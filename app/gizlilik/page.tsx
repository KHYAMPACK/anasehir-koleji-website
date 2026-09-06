import type { Metadata } from "next";
import { PageHero, Section } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Gizlilik" };

export default function GizlilikPage() {
  return (
    <>
      <PageHero
        eyebrow="Yasal"
        title="Gizlilik (taslak)"
        lead="Canlıya çıkmadan kurum metniyle değiştirilir."
      />
      <Section tone="ice">
        <div className="max-w-[70ch] space-y-4 rounded-[16px] bg-panel p-8 leading-relaxed text-muted shadow-sm">
          <p>
            Site, ön kayıt formundaki alanları tarayıcınızda tutar; demo
            ortamında sunucuya kayıt yazılmaz. Canlıda form verisi yalnızca
            kayıt ve iletişim süreci için kullanılacaktır.
          </p>
          <p>
            Çerez ve ölçüm (Analytics, Search Console) canlı geçişte eklenecek.
            Sorular: {site.email}
          </p>
        </div>
      </Section>
    </>
  );
}
