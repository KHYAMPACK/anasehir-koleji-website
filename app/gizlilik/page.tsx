import type { Metadata } from "next";
import { CookiePreferencesLink } from "@/components/legal/CookieBanner";
import { LegalPage } from "@/components/legal/LegalPage";
import { CONSENT_KEY } from "@/lib/consentConfig";

export const metadata: Metadata = { title: "Gizlilik ve Çerez Politikası" };

/**
 * Çerez Envanteri — required by the policy (§7) and the client's technical
 * rule 10. This is a technical inventory of what the site ACTUALLY stores
 * today; keep it in sync when services change (rule 14). Not legal wording:
 * have the school's lawyer review it.
 */
const inventory = [
  {
    name: CONSENT_KEY,
    provider: "anasehirkoleji.com (birinci taraf)",
    category: "Zorunlu",
    purpose: "Çerez tercihlerinizin, tercih tarihinin ve politika sürümünün saklanması",
    duration: "12 ay veya politika güncellenene kadar",
    type: "Tarayıcı yerel depolaması",
  },
  {
    name: "bursluluk-bar, bursluluk-popup",
    provider: "anasehirkoleji.com (birinci taraf)",
    category: "Zorunlu",
    purpose: "Kapattığınız duyurunun tekrar gösterilmemesi",
    duration: "Siz silene kadar",
    type: "Tarayıcı yerel depolaması",
  },
  {
    name: "Google Haritalar çerezleri",
    provider: "Google (üçüncü taraf, yurt dışı)",
    category: "İşlevsel",
    purpose: "İletişim sayfalarındaki gömülü haritanın gösterilmesi",
    duration: "Google tarafından belirlenir",
    type: "Üçüncü taraf çerez",
  },
];

export default function GizlilikPage() {
  return (
    <LegalPage file="cerez-politikasi.md">
      <div id="cerez-envanteri" className="mt-12 scroll-mt-[calc(var(--header)+1rem)] border-t border-line pt-10">
        <h2 className="display text-xl font-bold text-ink">Çerez Envanteri</h2>
        <div className="mt-5 overflow-x-auto rounded-[14px] border border-line">
          <table className="w-full min-w-[46rem] text-left text-sm">
            <thead className="bg-ink text-white">
              <tr>
                {["Ad", "Sağlayıcı", "Kategori", "Amaç", "Saklama süresi", "Tür"].map((h) => (
                  <th key={h} className="px-4 py-3 font-semibold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {inventory.map((r) => (
                <tr key={r.name} className="border-t border-line align-top">
                  <td className="px-4 py-3 font-mono text-xs text-ink">{r.name}</td>
                  <td className="px-4 py-3 text-muted">{r.provider}</td>
                  <td className="px-4 py-3 font-semibold text-ink">{r.category}</td>
                  <td className="px-4 py-3 text-muted">{r.purpose}</td>
                  <td className="px-4 py-3 text-muted">{r.duration}</td>
                  <td className="px-4 py-3 text-muted">{r.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-muted">Sitede şu anda analitik veya pazarlama çerezi kullanılmamaktadır.</p>
        <CookiePreferencesLink className="print:hidden mt-6 inline-flex min-h-[46px] items-center rounded-full bg-ink px-6 text-sm font-semibold text-white hover:no-underline" />
      </div>
    </LegalPage>
  );
}
