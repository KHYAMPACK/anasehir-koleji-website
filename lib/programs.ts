/**
 * Real program content sourced from the school's own promotional deck
 * ("Anaşehir Koleji – Gelecek Burada Başlar!"). Kept short by design —
 * every point is a 2–4 word title plus a one-line description, never a
 * paragraph.
 */

export type ProgramPoint = { title: string; text: string };

export type Program = {
  slug: string;
  kicker?: string;
  title: string;
  lead: string;
  points: ProgramPoint[];
  closing: string;
};

export const programs = {
  boutique: {
    slug: "boutique",
    title: "Butik yapı, yakın ilgi",
    lead: "Her öğrenciyi tanıyan, takip eden ve gelişimini önemseyen bir eğitim anlayışı.",
    points: [
      { title: "Yakın Takip", text: "Her öğrenciye birebir ilgi." },
      { title: "Güvenli Ortam", text: "Kontrollü, huzurlu bir kampüs." },
      { title: "Öğrenci Odaklı Yaklaşım", text: "Program öğrenciye göre şekillenir." },
    ],
    closing: "Gelecek burada başlar.",
  },
  holistic: {
    slug: "holistic",
    title: "Bütünsel öğrenci gelişimi",
    lead: "Öğrencilerimiz akademik başarının yanında güçlü yönlerini de geliştirir.",
    points: [
      { title: "Psikososyal Gelişim", text: "Özgüvenli, empatik, mutlu bireyler." },
      { title: "Spor", text: "Disiplin, takım ruhu, sağlıklı yaşam." },
      { title: "Sanat", text: "Yaratıcılık, estetik duygu, ifade gücü." },
      { title: "Bilim", text: "Merak eden, sorgulayan, üreten bireyler." },
    ],
    closing: "Anaşehir'de öğrenci çok yönlü gelişir.",
  },
  language: {
    slug: "language",
    title: "Yoğunlaştırılmış yabancı dil eğitimi",
    lead: "CEFR entegreli program; konuşma, dinleme, okuma ve yazmada kalıcı gelişim.",
    points: [
      { title: "CEFR Uyumlu Program", text: "Uluslararası kazanımlarla planlı ilerleme." },
      { title: "İletişim Odaklı Eğitim", text: "Aktif konuşma ve etkili ifade." },
      { title: "Yoğunlaştırılmış Dil Pratiği", text: "Düzenli tekrar, uygulama temelli." },
      { title: "Güçlü Akademik Takip", text: "Süreç odaklı ölçme ve geri bildirim." },
    ],
    closing: "Dünya ile iletişim kuran bireyler yetiştiriyoruz.",
  },
  futureSkills: {
    slug: "future-skills",
    title: "Lego Education",
    lead: "Üreterek öğrenen, problem çözen ve tasarlayan öğrenciler.",
    points: [
      { title: "STEM Yaklaşımı", text: "Bilim, teknoloji, mühendislik, matematik." },
      { title: "Problem Çözme", text: "Analitik düşünme, çözüm üretme." },
      { title: "Takım Çalışması", text: "İş birliği, ortak üretim kültürü." },
      { title: "Yaratıcı Tasarım", text: "Hayal eden, kurgulayan, inşa eden." },
    ],
    closing: "Keşfeden ve üreten bireyler.",
  },
  swimming: {
    slug: "swimming",
    title: "Yüzme havuzu",
    lead: "Güvenli, hijyenik ve gelişim odaklı yüzme eğitimi.",
    points: [
      { title: "Profesyonel Eğitim", text: "Yaşa uygun temel ve ileri seviye." },
      { title: "Güvenli Ortam", text: "Kontrollü, hijyenik havuz kullanımı." },
      { title: "Fiziksel Gelişim", text: "Koordinasyon, dayanıklılık, özgüven." },
    ],
    closing: "Sporla gelişen güçlü bireyler.",
  },
  firstGrade: {
    slug: "first-grade",
    title: "1. sınıfa güçlü başlangıç",
    lead: "Okula uyum, okuma-yazma süreci ve birebir yakın ilgiyle sağlam temel.",
    points: [
      { title: "Okula Uyum", text: "Güvenli ve mutlu bir başlangıç." },
      { title: "Okuma-Yazma Temeli", text: "Sağlam akademik altyapı." },
      { title: "Birebir Takip", text: "Her öğrencinin gelişimi izlenir." },
      { title: "Mutlu Öğrenme Ortamı", text: "Sevgi dolu, destekleyici sınıf iklimi." },
    ],
    closing: "İlk adımda güven, eğitimde sağlam temel.",
  },
  fifthGrade: {
    slug: "fifth-grade",
    title: "5. sınıf, ortaokula etkili başlangıç",
    lead: "Branş sistemi, akademik disiplin ve yeni döneme güçlü uyum.",
    points: [
      { title: "Branşlaşmaya Uyum", text: "Ortaokul yapısına bilinçli geçiş." },
      { title: "Akademik Takip", text: "Düzenli ölçme ve yönlendirme." },
      { title: "Etkili Çalışma Alışkanlığı", text: "Planlı, hedef odaklı öğrenme." },
      { title: "Rehberlik Desteği", text: "Akademik ve duygusal destek." },
    ],
    closing: "Ortaokula sağlam ve bilinçli geçiş.",
  },
  lgs: {
    slug: "lgs",
    title: "LGS'de fark yarat",
    lead: "Hedef odaklı takip, disiplinli çalışma ve birebir destekle başarıya hazırlıyoruz.",
    points: [
      { title: "Akademik Takip", text: "Sürekli ölçme ve değerlendirme." },
      { title: "Birebir Destek", text: "İhtiyaca göre bireysel çalışma." },
      { title: "Hedef Odaklı Çalışma", text: "Planlı, disiplinli sınav hazırlığı." },
    ],
    closing: "Hedefe sistemli ve güçlü hazırlık.",
  },
  radio: {
    slug: "radio",
    title: "Sahne Sanatları / İletişim Akademisi",
    lead: "Öğrencilerin ifade gücünü, özgüvenini ve iletişim becerilerini geliştiren özel alanlar.",
    points: [
      { title: "Okul Radyosu", text: "Canlı yayın deneyimi." },
      { title: "Tiyatro", text: "Doğaçlama ve sahneleme." },
      { title: "Diksiyon & Konuşma", text: "Etkili iletişim becerisi." },
      { title: "Sunum & Medya", text: "Dijital içerik ve sunum." },
    ],
    closing: "İfade eden, güçlenen bireyler geleceği yönlendirir.",
  },
} as const satisfies Record<string, Program>;

export type ProgramKey = keyof typeof programs;
