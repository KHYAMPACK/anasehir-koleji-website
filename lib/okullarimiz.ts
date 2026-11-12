export const etutPoints = [
  { title: "İsteğe Bağlı", text: "Zorunlu değil, ücrete tabidir." },
  { title: "16:50–18:20", text: "Dersler bitince başlar." },
  { title: "Ödev Desteği", text: "Günlük ödev ve eksik konular çalışılır." },
  { title: "Servis İmkânı", text: "Etüde kalan öğrenciye servis var." },
] as const;

export const schoolLevels = [
  {
    slug: "anaokulu",
    name: "Anaokulu",
    tagline: "Oyunla başlayan öğrenme",
    lead: "Kreş ve anaokulu kademesi; güvenli, oyun temelli bir ilk adım.",
  },
  {
    slug: "ilkokul",
    name: "İlkokul",
    tagline: "Meraktan performansa",
    lead: "Okuma-yazma temeli ve birebir yakın ilgiyle sağlam bir başlangıç.",
  },
  {
    slug: "ortaokul",
    name: "Ortaokul",
    tagline: "Akademik gün + etkinlikler",
    lead: "Branş sistemine güçlü uyum, LGS'ye sistemli hazırlık.",
  },
  {
    slug: "etut-merkezi",
    name: "Anaşehir Etüt Merkezi",
    tagline: "Okul biter, gelişim devam eder",
    lead: "İsteğe bağlı, ücretli etüt programı — ödev ve konu desteği.",
  },
] as const;

/**
 * Okullarımız overview — client's "yayına hazır" copy (teslim dosyası 04),
 * used verbatim. Layout rule from the brief: three levels as equal photo
 * cards; LGS Yolculuğu is a programme, not a level → its own band.
 */
export const okullarIntro = {
  eyebrow: "Okullarımız",
  title: "Her Yaşa Uygun Gelişim Yolculuğu",
  lead: "Anaşehir Koleji’nde her eğitim kademesini, öğrencilerimizin yaş özelliklerine ve bireysel ihtiyaçlarına göre ele alıyoruz. Anaokulundan ortaokula uzanan gelişim yolculuğunu güçlü akademik temeller, güvenli bir öğrenme ortamı ve AGM 360° yaklaşımıyla destekliyoruz.",
} as const;

/**
 * Photos: the brief asks for a real, level-specific photo per card. Until the
 * school sends them these are the closest existing campus shots (alt text
 * stays generic so it doesn't claim a level it doesn't show).
 */
export const levelCards = [
  {
    slug: "anaokulu",
    name: "Anaokulu",
    motto: "Merak. Keşif. Oyun.",
    text: "Çocuklarımızın doğal merakını, oyun temelli öğrenme deneyimleriyle destekliyoruz. Güven duygusunu, sosyal becerileri ve keşfetme isteğini birlikte geliştiriyoruz.",
    cta: "Anaokulunu Keşfedin",
    href: "/okullarimiz#anaokulu",
    image: "/hero/hero-mobile-2.jpg",
    alt: "Anaşehir Koleji kampüsü ve oyun alanları",
    /** CSS object-position — frame the playground in the lower half. */
    position: "50% 72%",
  },
  {
    slug: "ilkokul",
    name: "İlkokul",
    motto: "Güçlü Temeller. Güvenli Gelişim.",
    text: "Okuma, anlama, düşünme ve problem çözme becerilerini sağlam temeller üzerinde geliştiriyoruz. Öğrenme alışkanlıklarını ve bireysel ilerlemeyi yakından takip ediyoruz.",
    cta: "İlkokulu Keşfedin",
    href: "/okullarimiz#ilkokul",
    image: "/hero/hero-3.jpg",
    alt: "Anaşehir Koleji öğrencileri",
  },
  {
    slug: "ortaokul",
    name: "Ortaokul",
    motto: "Akademik Derinlik. Geleceğe Hazırlık.",
    text: "Kazanım odaklı öğretimi, düzenli ölçme-değerlendirmeyi ve bireysel akademik desteği bir araya getiriyoruz. Öğrencilerimizi bilgi, beceri ve sorumlulukla bir üst eğitim basamağına hazırlıyoruz.",
    cta: "Ortaokulu Keşfedin",
    href: "/okullarimiz#ortaokul",
    image: "/hero/hero-2.jpg",
    alt: "Anaşehir Koleji öğrencileri",
  },
] as const;

export const lgsBand = {
  title: "LGS Yolculuğu",
  motto: "Hedefe Odaklı. Planlı. Güçlü.",
  text: "Ortaokul öğrencilerimizin sınava hazırlık sürecini akademik takip, deneme analizleri, eksik kazanım çalışmaları ve bireysel rehberlikle destekliyoruz.",
  cta: "LGS Yolculuğunu İnceleyin",
  href: "/akademik-basari#lgs-sistemi",
} as const;
