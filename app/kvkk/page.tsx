import type { Metadata } from "next";
import { PageHero, Section } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "KVKK Aydınlatma" };

export default function KvkkPage() {
  return (
    <>
      <PageHero
        eyebrow="Yasal"
        title="KVKK aydınlatma (taslak)"
        lead="Avukat / kurum metni gelince değiştirilecek yer tutucu."
      />
      <Section tone="ice">
        <div className="max-w-[70ch] space-y-4 rounded-[16px] bg-panel p-8 leading-relaxed text-muted shadow-sm">
          <p>
            {site.name} olarak iletişim formları, telefon ve e-posta yoluyla
            ilettiğiniz kimlik ve iletişim verileriniz; ön kayıt, randevu ve
            bilgilendirme amacıyla işlenir.
          </p>
          <p>
            Veriler, yasal zorunluluklar dışında pazarlama amacıyla üçüncü
            taraflarla paylaşılmaz. Talepleriniz için {site.email} ve{" "}
            {site.phoneDisplay} üzerinden bize ulaşabilirsiniz.
          </p>
          <p>
            Bu metin demo içindir; 6698 sayılı Kanun kapsamında nihai aydınlatma
            ve açık rıza metinleri kurum tarafından onaylanacaktır.
          </p>
        </div>
      </Section>
    </>
  );
}
