/**
 * İK (İnsan Kaynakları) — /insan-kaynaklari.
 * Client revision (Nov 2026): a corporate career page instead of a bare form.
 * Only the client's own copy is used (banner line, value-card titles, form
 * intro). "Anaşehir'de Çalışmak", "Kariyer Alanlarımız", "Başvuru Süreci" and
 * the closing have no copy yet → not rendered; requested on /eksikler.
 */
export const ikHero = {
  eyebrow: "İnsan Kaynakları",
  title: "Geleceği Birlikte Şekillendiriyoruz.",
} as const;

export type IkValueIcon = "award" | "growth" | "handshake" | "student";

export const ikValues: { icon: IkValueIcon; title: string }[] = [
  { icon: "award", title: "Mesleki Yetkinlik" },
  { icon: "growth", title: "Sürekli Gelişim" },
  { icon: "handshake", title: "İş Birliği ve İletişim" },
  { icon: "student", title: "Öğrenci Odaklı Yaklaşım" },
];

export const ikForm = {
  title: "İş Başvuru Formu",
  intro:
    "Anaşehir Koleji ailesine katılmak isteyen adaylar, aşağıdaki form aracılığıyla özgeçmişlerini bizimle paylaşabilir. Başvurular, kurumumuzun mevcut ve gelecekteki insan kaynağı ihtiyaçları doğrultusunda değerlendirilmektedir. Uygun pozisyonların oluşması hâlinde ilgili adaylarla iletişime geçilmektedir.",
  /** Client: "Başvuru, adaya iş görüşmesi veya istihdam garantisi vermeyecek." */
  note: "Başvuru, iş görüşmesi veya istihdam garantisi vermez.",
} as const;

/**
 * KVKK text linked on the form. The client wants a "Çalışan Adayı Aydınlatma
 * Metni" here; until it arrives (/eksikler) the existing text stays linked.
 */
export const isBasvuruNotice = {
  file: "iletisim-ve-kayit-gorusmesi.md",
  title: "Web Sitesi İletişim ve Kayıt Görüşmesi Aydınlatma Metni",
  href: "/kvkk/iletisim-ve-kayit-gorusmesi",
} as const;
