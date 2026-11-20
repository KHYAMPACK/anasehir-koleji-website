import type { MetadataRoute } from "next";
import { kvkkSubpages } from "@/lib/legal";
import { site, siteUrl as SITE_URL } from "@/lib/site";

/**
 * Every public page. Left out: /eksikler (internal checklist, noindex),
 * /api/* (form endpoints) and /radyo while the radio is off (it redirects).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const page = (
    path: string,
    priority: number,
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "monthly",
  ) => ({ url: `${SITE_URL}${path}`, lastModified: now, changeFrequency, priority });

  return [
    page("", 1, "weekly"),
    page("/hakkimizda", 0.8),
    page("/egitim-modeli", 0.8),
    page("/okullarimiz", 0.9),
    page("/okullarimiz/anaokulu", 0.8),
    page("/akademik-basari", 0.8),
    page("/kampus-yasami", 0.8, "weekly"),
    page("/kayit-iletisim", 0.9),
    page("/bursluluk", 0.9, "weekly"),
    page("/akademik-takvim", 0.6),
    page("/insan-kaynaklari", 0.6),
    page("/sss", 0.6),
    ...(site.radioActive ? [page("/radyo", 0.4)] : []),
    page("/kvkk", 0.3, "yearly"),
    ...kvkkSubpages.map((d) => page(d.href, 0.2, "yearly")),
    page("/gizlilik", 0.2, "yearly"),
  ];
}
