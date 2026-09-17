export const etutPoints = [
  { title: "İsteğe Bağlı", text: "Zorunlu değil, ücrete tabidir." },
  { title: "16:30–18:15", text: "Dersler bitince başlar." },
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
