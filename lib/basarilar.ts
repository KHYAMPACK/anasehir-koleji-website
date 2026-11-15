/**
 * Öğrenci Başarıları (Akademik Başarı page) — the school's own Instagram
 * achievement posters (sent Nov 2026). Captions repeat only what each poster
 * says; nothing added. Posters are shown whole (they carry text), never cropped.
 */
export type Basari = {
  image: string;
  width: number;
  height: number;
  name: string;
  result: string;
};

export const basariOne: Basari & { event: string } = {
  image: "/basarilar/aylin-karakose-sdu.jpg",
  width: 1170,
  height: 1164,
  name: "Aylin Karaköse",
  event: "Türkiye geneli Süreç Değerlendirme Uygulaması (SDU)",
  result: "500 tam puanla Türkiye 1.'si",
};

export const basariSpor: Basari & { event: string } = {
  image: "/basarilar/ada-derin-kayali.jpg",
  width: 1170,
  height: 1445,
  name: "Ada Derin Kayalı",
  event: "Havalı Tabanca Türkiye Şampiyonası",
  result: "Bireysel kategoride Türkiye 3.'sü, grup kategorisinde Türkiye 2.'si",
};

export const atletizm = {
  title: "Etimesgut İlçe Atletizm Yarışmaları",
  items: [
    { image: "/basarilar/aras-yilmaz.jpg", width: 1170, height: 1451, name: "Aras Yılmaz", result: "Gülle atmada ilçe 1.'si, 80 metre koşuda ilçe 1.'si" },
    { image: "/basarilar/mihrimah-sultan-kurtagaoglu.jpg", width: 1170, height: 1453, name: "Mihrimah Sultan Kurtağaoğlu", result: "800 metre koşuda ilçe 1.'si, uzun atlamada ilçe 3.'sü" },
    { image: "/basarilar/gunes-eldenk.jpg", width: 1170, height: 1434, name: "Güneş Eldenk", result: "60 metre koşuda ilçe 1.'si, uzun atlamada ilçe 1.'si" },
    { image: "/basarilar/omer-karamahmut.jpg", width: 1170, height: 1431, name: "Ömer Karamahmut", result: "60 metre koşuda ilçe 1.'si, uzun atlamada ilçe 1.'si" },
    { image: "/basarilar/berat-efe-kurtagaoglu.jpg", width: 1170, height: 1443, name: "Berat Efe Kurtağaoğlu", result: "1000 metre koşuda ilçe 1.'si, uzun atlamada ilçe 2.'si" },
  ] as Basari[],
};
