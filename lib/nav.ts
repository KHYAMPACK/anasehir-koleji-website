import { showDataFlags } from "./needsData";
import { site } from "./site";

/** pending: the chapter has no real content yet → hidden while showDataFlags is off. */
export type NavItem = { name: string; href: string; pending?: true };
export type NavSection = { name: string; href: string; items: NavItem[] };

/**
 * The real information architecture (client-provided sitemap): 7 pages
 * total, one per section. `items` are in-page chapters, not separate
 * routes — their hrefs are anchors (`/hakkimizda#2005ten-bugune`) that the header
 * mega menu, each page's own chapter nav, and the footer all share.
 */
const allSections: NavSection[] = [
  {
    name: "Anaşehir'i Keşfedin",
    href: "/hakkimizda",
    items: [
      { name: "2005'ten Bugüne", href: "/hakkimizda#2005ten-bugune" },
      { name: "İş Birliklerimiz", href: "/hakkimizda#is-birliklerimiz" },
    ],
  },
  {
    name: "Eğitim Modeli",
    href: "/egitim-modeli",
    items: [
      { name: "AGM 360°", href: "/egitim-modeli#agm-360" },
      { name: "Akademik Güç ve Takip", href: "/egitim-modeli#akademik-takip" },
      { name: "Ölçme ve Değerlendirme", href: "/egitim-modeli#olcme-degerlendirme" },
      { name: "Future Skills & Küresel Yetkinlik", href: "/egitim-modeli#future-skills" },
      { name: "Sosyal-Duygusal Gelişim ve PDR", href: "/egitim-modeli#pdr-ogrenci-gelisimi" },
      { name: "Sürdürülebilir Yaşam Bilinci", href: "/egitim-modeli#surdurulebilir-yasam" },
      { name: "AGM Uygulamada", href: "/egitim-modeli#agm-uygulamada" },
      { name: "SSS", href: "/egitim-modeli#sss", pending: true },
    ],
  },
  {
    name: "Okullarımız",
    href: "/okullarimiz",
    items: [
      { name: "Anaokulu", href: "/okullarimiz#anaokulu" },
      { name: "İlkokul", href: "/okullarimiz#ilkokul" },
      { name: "Ortaokul", href: "/okullarimiz#ortaokul" },
      { name: "Günlük Akış ve Servis", href: "/okullarimiz#gunluk-akis" },
      { name: "Akşam Etütleri", href: "/okullarimiz#etut-merkezi" },
    ],
  },
  {
    name: "Akademik Başarı",
    href: "/akademik-basari",
    items: [
      { name: "Akademik Gelişim Döngüsü", href: "/akademik-basari#gelisim-dongusu" },
      { name: "Akademik Sistem", href: "/akademik-basari#akademik-sistem" },
      { name: "LGS Yolculuğu", href: "/akademik-basari#lgs-sistemi" },
      { name: "Sonuçlarımız", href: "/akademik-basari#sonuclarimiz", pending: true },
      { name: "Öğrenci Başarıları", href: "/akademik-basari#ogrenci-basarilari", pending: true },
      { name: "Mezunlarımız", href: "/akademik-basari#mezunlarimiz", pending: true },
    ],
  },
  {
    name: "Kampüs Yaşamı",
    href: "/kampus-yasami",
    items: [
      { name: "Anaşehir'de Yaşam", href: "/kampus-yasami#anasehirde-yasam" },
      { name: "Kampüsümüz", href: "/kampus-yasami#kampus" },
      { name: "Branş Dersleri", href: "/kampus-yasami#brans-dersleri" },
      { name: "Spor", href: "/kampus-yasami#spor" },
      { name: "Sanat", href: "/kampus-yasami#sanat" },
      { name: "Kulüpler", href: "/kampus-yasami#kulupler" },
    ],
  },
  {
    name: "Kayıt & İletişim",
    href: "/kayit-iletisim",
    items: [
      { name: "Kayıt Süreci", href: "/kayit-iletisim#kayit-sureci" },
      { name: "Bursluluk Sınavı", href: "/kayit-iletisim#bursluluk-sinavi" },
      { name: "Bize Ulaşın", href: "/kayit-iletisim#bize-ulasin" },
    ],
  },
];

/**
 * What the site actually shows: pending chapters dropped while the data
 * flags are off; a section left with no chapters (Anaşehir'de Yaşam today)
 * drops out of the header/footer too. The page itself still exists.
 */
export const sections: NavSection[] = allSections
  .map((s) => ({ ...s, items: s.items.filter((i) => showDataFlags || !i.pending) }))
  .filter((s) => s.items.length > 0);

/** Kept outside the mega menu — linked from the footer instead. */
/** Footer "Hızlı Erişim" — client's list and order (Nov 2026). News, events and
 * photos are one link to the Instagram feed chapter; Akademik Takvim stays hidden
 * until its content arrives; the radio link follows site.radioActive. */
const allUtilityLinks: NavItem[] = [
  { name: "Haberler, Etkinlikler & Fotoğraflar", href: "/kampus-yasami#anasehirde-yasam" },
  { name: "Akademik Takvim", href: "/kampus-yasami#anasehirde-yasam", pending: true },
  { name: "Anaşehir Radyo", href: "/radyo" },
  { name: "Sık sorulan sorular", href: "/sss" },
  { name: "KVKK", href: "/kvkk" },
  { name: "Gizlilik", href: "/gizlilik" },
];

export const utilityLinks: NavItem[] = allUtilityLinks.filter(
  (l) => (showDataFlags || !l.pending) && (site.radioActive || l.href !== "/radyo"),
);
