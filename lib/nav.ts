export type NavItem = { name: string; href: string };
export type NavSection = { name: string; href: string; items: NavItem[] };

/**
 * The real information architecture (client-provided sitemap): 7 pages
 * total, one per section. `items` are in-page chapters, not separate
 * routes — their hrefs are anchors (`/hakkimizda#hikayemiz`) that the header
 * mega menu, each page's own chapter nav, and the footer all share.
 */
export const sections: NavSection[] = [
  {
    name: "Hakkımızda",
    href: "/hakkimizda",
    items: [
      { name: "Hikâyemiz", href: "/hakkimizda#hikayemiz" },
      { name: "2005'ten Bugüne", href: "/hakkimizda#2005ten-bugune" },
      { name: "Kurucularımız", href: "/hakkimizda#kurucularimiz" },
      { name: "Yönetim", href: "/hakkimizda#yonetim" },
    ],
  },
  {
    name: "Eğitim Modeli",
    href: "/egitim-modeli",
    items: [
      { name: "Akademik Takip", href: "/egitim-modeli#akademik-takip" },
      { name: "Yabancı Diller", href: "/egitim-modeli#yabanci-diller" },
      { name: "Future Skills", href: "/egitim-modeli#future-skills" },
      { name: "PDR & Öğrenci Gelişimi", href: "/egitim-modeli#pdr-ogrenci-gelisimi" },
      { name: "Ölçme-Değerlendirme", href: "/egitim-modeli#olcme-degerlendirme" },
    ],
  },
  {
    name: "Okullarımız",
    href: "/okullarimiz",
    items: [
      { name: "Anaokulu", href: "/okullarimiz#anaokulu" },
      { name: "İlkokul", href: "/okullarimiz#ilkokul" },
      { name: "Ortaokul", href: "/okullarimiz#ortaokul" },
      { name: "Etüt Merkezi", href: "/okullarimiz#etut-merkezi" },
    ],
  },
  {
    name: "Akademik Başarı",
    href: "/akademik-basari",
    items: [
      { name: "LGS Sistemi", href: "/akademik-basari#lgs-sistemi" },
      { name: "Sonuçlarımız", href: "/akademik-basari#sonuclarimiz" },
      { name: "Öğrenci Başarıları", href: "/akademik-basari#ogrenci-basarilari" },
      { name: "Mezunlarımız", href: "/akademik-basari#mezunlarimiz" },
    ],
  },
  {
    name: "Kampüs Yaşamı",
    href: "/kampus-yasami",
    items: [
      { name: "Spor", href: "/kampus-yasami#spor" },
      { name: "Sanat", href: "/kampus-yasami#sanat" },
      { name: "Kulüpler", href: "/kampus-yasami#kulupler" },
      { name: "Sosyal Sorumluluk", href: "/kampus-yasami#sosyal-sorumluluk" },
      { name: "Güvenlik & Sağlık", href: "/kampus-yasami#guvenlik-saglik" },
    ],
  },
  {
    name: "Anaşehir'de Yaşam",
    href: "/yasam",
    items: [
      { name: "Haberler", href: "/yasam#haberler" },
      { name: "Etkinlikler", href: "/yasam#etkinlikler" },
      { name: "Akademik Takvim", href: "/yasam#akademik-takvim" },
      { name: "Fotoğraf/Video", href: "/yasam#galeri" },
    ],
  },
  {
    name: "Kayıt & İletişim",
    href: "/kayit-iletisim",
    items: [
      { name: "Kayıt Süreci", href: "/kayit-iletisim#kayit-sureci" },
      { name: "Ücret Bilgilendirme Talebi", href: "/kayit-iletisim#ucret-bilgilendirme" },
      { name: "Kampüs Turu", href: "/kayit-iletisim#kampus-turu" },
      { name: "Bize Ulaşın", href: "/kayit-iletisim#bize-ulasin" },
    ],
  },
];

/** Kept outside the mega menu — linked from the footer instead. */
export const utilityLinks: NavItem[] = [
  { name: "Anaşehir Radyo", href: "/radyo" },
  { name: "Sık sorulanlar", href: "/sss" },
  { name: "KVKK", href: "/kvkk" },
  { name: "Gizlilik", href: "/gizlilik" },
];
