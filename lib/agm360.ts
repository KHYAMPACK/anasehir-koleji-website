/**
 * AGM 360° — Anaşehir Gelişim Modeli. Name, tagline and the 8 areas are
 * client-confirmed (Nov 2026). Area descriptions and the model's explanatory
 * paragraph are NOT supplied yet (the reference mockup's copy was AI-made),
 * so they render as "veri bekleniyor" placeholders.
 *
 * Order = clockwise from the top-left, as in the client's reference wheel.
 */
export const agm360 = {
  name: "AGM 360°",
  fullName: "Anaşehir Gelişim Modeli",
  tagline: ["Bütüncül Gelişimle", "Güçlü Bir Gelecek."],
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
};

export const agmAreas: AgmArea[] = [
  { slug: "akademik-derinlik", title: "Akademik Derinlik", lines: ["Akademik", "Derinlik"], icon: "graduation", from: "#e5232d", to: "#a10f17" },
  { slug: "karakter-ve-degerler", title: "Karakter ve Değerler", lines: ["Karakter", "ve Değerler"], icon: "sprout", from: "#f4b623", to: "#c9840b" },
  { slug: "kuresel-yetkinlik", title: "Küresel Yetkinlik", lines: ["Küresel", "Yetkinlik"], icon: "globe", from: "#1fb0c4", to: "#0d6e83" },
  { slug: "yaraticilik-ve-sanat", title: "Yaratıcılık ve Sanat", lines: ["Yaratıcılık", "ve Sanat"], icon: "palette", from: "#f7892a", to: "#cf540d" },
  { slug: "surdurulebilir-yasam-bilinci", title: "Sürdürülebilir Yaşam Bilinci", lines: ["Sürdürülebilir", "Yaşam Bilinci"], icon: "leaf", from: "#76bb43", to: "#3d8a21" },
  { slug: "saglikli-ve-aktif-yasam", title: "Sağlıklı ve Aktif Yaşam", lines: ["Sağlıklı ve", "Aktif Yaşam"], icon: "activity", from: "#2196e6", to: "#0b5aab" },
  { slug: "sosyal-duygusal-gelisim", title: "Sosyal Duygusal Gelişim", lines: ["Sosyal", "Duygusal", "Gelişim"], icon: "heart", from: "#8f55d6", to: "#55279a" },
  { slug: "gelecek-yetkinlikleri", title: "Gelecek Yetkinlikleri (Future Skills)", lines: ["Gelecek", "Yetkinlikleri", "(Future Skills)"], icon: "cpu", from: "#2453ad", to: "#0b2b6b" },
];
