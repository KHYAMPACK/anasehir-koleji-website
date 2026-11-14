/**
 * İş Birliklerimiz data. Three separate groups, kept separate on purpose
 * (client instruction): çözüm ortakları, kurumsal iş birlikleri, üyelikler.
 *
 * Logos: the client will supply official SVG / high-res PNG files. Drop them
 * in /public/partners/ and set `logo: "/partners/xyz.svg"` — until then each
 * tile shows the name and a "logo bekleniyor" marker.
 */
export type Partner = {
  name: string;
  /** Path under /public, e.g. "/partners/aselsan.svg". */
  logo?: string;
  /** Bare domain (optionally with a path), e.g. "aselsan.com". */
  domain?: string;
  /** Logo is white-only → render the tile on a dark background. */
  dark?: boolean;
  /** Tile background matching a logo that ships on its own colour (implies light text). */
  tileBg?: string;
};

export type PartnerGroup = {
  title: string;
  icon: "laptop" | "book" | "globe" | "bot" | "blocks";
  partners: Partner[];
};

export function partnerHref(p: Partner) {
  return p.domain ? `https://${p.domain}` : undefined;
}

/**
 * Çözüm ortakları — names and categories from the client's reference visual
 * (AI-made, so names still need the client's confirmation). Web addresses
 * and logos were looked up on each brand's own official site (Nov 2026).
 * LEGO Education and WeDo Robotics logos came from the client (WhatsApp, Nov 2026);
 * WeDo has no confirmed web address yet.
 */
export const solutionPartnerGroups: PartnerGroup[] = [
  {
    title: "Eğitim Teknolojileri ve Dijital Çözümler",
    icon: "laptop",
    partners: [{ name: "SEBIT", logo: "/partners/sebit.png", domain: "sebit.com.tr" }, { name: "SEBIT VCLOUD", logo: "/partners/sebit-vcloud.png", domain: "sebitvcloud.com" }, { name: "K12net", logo: "/partners/k12net.png", domain: "k12net.com" }],
  },
  {
    title: "Akademik Yayınlar ve Dil Eğitimi",
    icon: "book",
    partners: [{ name: "Oxford University Press", logo: "/partners/oup-white.png", domain: "turkiye.oup.com", dark: true }, { name: "Royal House London", logo: "/partners/royal-house-london.png", domain: "royalhouselondon.co.uk" }],
  },
  {
    title: "Uluslararası Eğitim ve Programlar",
    icon: "globe",
    partners: [{ name: "Compass Abroad", logo: "/partners/compass-abroad.png", domain: "compassabroad.com.tr" }, { name: "Eradil", logo: "/partners/eradil.png", domain: "eradil.com" }],
  },
  {
    title: "STEM ve Robotik Eğitim",
    icon: "bot",
    partners: [{ name: "WeDo Robotics", logo: "/partners/wedo-robotics.png", dark: true, tileBg: "#0741ad" }],
  },
  {
    title: "Tasarım ve Yaratıcılık",
    icon: "blocks",
    partners: [{ name: "LEGO Education", logo: "/partners/lego-education.png", domain: "education.lego.com/tr-tr" }],
  },
];

/**
 * Kurumsal iş birlikleri — client's list, in the client's order (keep it;
 * ministries are alphabetical). Links go to each institution's official site.
 * Discount rates / campaign dates must NOT be shown.
 */
export const institutionalPartners: Partner[] = [
  { name: "Türkiye Büyük Millet Meclisi (TBMM)", domain: "tbmm.gov.tr", logo: "/partners/tbmm.png" },
  { name: "T.C. Aile ve Sosyal Hizmetler Bakanlığı", domain: "aile.gov.tr", logo: "/partners/aile-bakanligi.jpg" },
  { name: "T.C. İçişleri Bakanlığı", domain: "icisleri.gov.tr", logo: "/partners/icisleri-bakanligi.jpg" },
  { name: "T.C. Millî Savunma Bakanlığı", domain: "msb.gov.tr", logo: "/partners/msb.jpg" },
  { name: "Hâkimler ve Savcılar Kurulu (HSK)", domain: "hsk.gov.tr", logo: "/partners/hsk.png" },
  { name: "Millî İstihbarat Teşkilatı (MİT)", domain: "mit.gov.tr", logo: "/partners/mit.png" },
  { name: "Jandarma Genel Komutanlığı", domain: "jandarma.gov.tr", logo: "/partners/jandarma.jpg" },
  { name: "T.C. Etimesgut Kaymakamlığı", domain: "etimesgut.gov.tr", logo: "/partners/etimesgut-kaymakamligi.png" },
  { name: "Sincan Belediyesi", domain: "sincan.bel.tr", logo: "/partners/sincan-belediyesi.svg" },
  { name: "Ankara İl Emniyet Müdürlüğü", domain: "ankara.pol.tr", logo: "/partners/ankara-emniyet.png" },
  { name: "Etimesgut İlçe Emniyet Müdürlüğü", domain: "ankara.pol.tr", logo: "/partners/ankara-emniyet.png" },
  { name: "Sincan İlçe Emniyet Müdürlüğü", domain: "ankara.pol.tr", logo: "/partners/ankara-emniyet.png" },
  { name: "ASELSAN", domain: "aselsan.com", logo: "/partners/aselsan.gif" },
  { name: "Karel Elektronik", domain: "karel.com.tr", logo: "/partners/karel.svg" },
  { name: "Ankara Sanayi Odası 1. Organize Sanayi Bölgesi", domain: "aosb.org.tr", logo: "/partners/aosb.svg" },
  { name: "Türk Kızılay", domain: "kizilay.org.tr", logo: "/partners/kizilay.jpg" },
  { name: "Ankara Aile Hekimliği Derneği (ANKAHED)", domain: "ankahed.org.tr", logo: "/partners/ankahed.png" },
  { name: "A Life Hastanesi", domain: "alifehospital.com.tr", logo: "/partners/alife.svg" },
];

/** Üyesi olduğumuz kuruluşlar — its own section, separate from the above. */
export const memberships: Partner[] = [
  { name: "Türkiye Özel Okullar Derneği (TÖZOK)", domain: "tozok.org.tr", logo: "/partners/tozok.jpg" },
];
