/**
 * AGM 360° — Anaşehir Gelişim Modeli. Name, tagline and the 8 areas are
 * client-confirmed (Nov 2026). The model description and each area's one-line
 * text were supplied by the client later (verbatim; /eksikler item 4).
 *
 * Order = clockwise from the top-left, as in the client's reference wheel.
 */
export const agm360 = {
  name: "AGM 360°",
  fullName: "Anaşehir Gelişim Modeli",
  tagline: ["Bütüncül Gelişimle", "Güçlü Bir Gelecek."],
  /** Client-supplied (Nov 2026, /eksikler item 4), verbatim. */
  description:
    "AGM 360°, Anaşehir Koleji'nin akademik başarıyı bireysel gelişim, yaşam becerileri ve küresel yetkinliklerle bütünleştiren özgün eğitim modelidir. Her öğrencinin potansiyelini keşfetmesini, güçlü yönlerini geliştirmesini ve geleceğe donanımlı bireyler olarak hazırlanmasını hedefleyen modelimiz, sekiz temel gelişim alanını kapsayan bütüncül bir yaklaşım sunar.",
} as const;

export type AgmIcon =
  | "graduation"
  | "sprout"
  | "globe"
  | "palette"
  | "leaf"
  | "activity"
  | "heart"
  | "cpu";

export type AgmArea = {
  slug: string;
  title: string;
  /** Line breaks used inside the wheel segment. */
  lines: string[];
  icon: AgmIcon;
  /** Gradient light → dark. */
  from: string;
  to: string;
  /** Client's one-line description (verbatim). */
  text: string;
};

export const agmAreas: AgmArea[] = [
  { slug: "akademik-derinlik", title: "Akademik Derinlik", lines: ["Akademik", "Derinlik"], icon: "graduation", from: "#e5232d", to: "#a10f17", text: "Planlı öğretim, kazanım odaklı değerlendirme ve bireysel takip ile kalıcı öğrenmeyi destekleriz." },
  { slug: "karakter-ve-degerler", title: "Karakter ve Değerler", lines: ["Karakter", "ve Değerler"], icon: "sprout", from: "#f4b623", to: "#c9840b", text: "Etik düşünme, sorumluluk, saygı ve toplumsal duyarlılık bilincini güçlendiririz." },
  { slug: "kuresel-yetkinlik", title: "Küresel Yetkinlik", lines: ["Küresel", "Yetkinlik"], icon: "globe", from: "#1fb0c4", to: "#0d6e83", text: "Yabancı dil, kültürlerarası iletişim ve küresel farkındalıkla öğrencilerimizi dünyaya hazırlarız." },
  { slug: "yaraticilik-ve-sanat", title: "Yaratıcılık ve Sanat", lines: ["Yaratıcılık", "ve Sanat"], icon: "palette", from: "#f7892a", to: "#cf540d", text: "Sanatsal ifade, estetik duyarlılık ve üretken düşünme becerilerine alan açarız." },
  { slug: "surdurulebilir-yasam-bilinci", title: "Sürdürülebilir Yaşam Bilinci", lines: ["Sürdürülebilir", "Yaşam Bilinci"], icon: "leaf", from: "#76bb43", to: "#3d8a21", text: "Çevresel farkındalık, bilinçli kaynak kullanımı ve toplumsal sorumluluk anlayışını geliştiririz." },
  { slug: "saglikli-ve-aktif-yasam", title: "Sağlıklı ve Aktif Yaşam", lines: ["Sağlıklı ve", "Aktif Yaşam"], icon: "activity", from: "#2196e6", to: "#0b5aab", text: "Spor, hareket ve sağlıklı yaşam alışkanlıklarıyla fiziksel gelişimi ve iyi oluşu destekleriz." },
  { slug: "sosyal-duygusal-gelisim", title: "Sosyal Duygusal Gelişim", lines: ["Sosyal", "Duygusal", "Gelişim"], icon: "heart", from: "#8f55d6", to: "#55279a", text: "Öz farkındalık, empati, öz güven ve sağlıklı iletişim becerilerini destekleriz." },
  { slug: "gelecek-yetkinlikleri", title: "Gelecek Yetkinlikleri (Future Skills)", lines: ["Gelecek", "Yetkinlikleri", "(Future Skills)"], icon: "cpu", from: "#2453ad", to: "#0b2b6b", text: "Eleştirel düşünme, problem çözme, yaratıcılık ve teknoloji becerilerini geliştiririz." },
];
