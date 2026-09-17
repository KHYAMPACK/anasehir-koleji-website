export type Campus = {
  id: string;
  name: string;
  levels: string;
  address: string;
  phones: { display: string; tel: string }[];
  mapsQuery: string;
  featured: boolean;
};

export const campuses: Campus[] = [
  {
    id: "baglica-koleji",
    name: "Anaşehir Koleji Bağlıca Kampüsü",
    levels: "Anaokulu · İlkokul · Ortaokul",
    address: "Bağlıca Mah. Etimesgut Bul. No:89, 06790 Etimesgut/Ankara",
    phones: [
      { display: "444 69 61", tel: "4446961" },
      { display: "0312 234 22 34", tel: "03122342234" },
    ],
    mapsQuery: "Bağlıca Mahallesi Etimesgut Bulvarı No:89 Etimesgut Ankara",
    featured: true,
  },
  {
    id: "baglica-anaokulu",
    name: "Bağlıca Anaşehir Anaokulu",
    levels: "Kreş · Anaokulu",
    address: "Bağlıca Mahallesi Mert Caddesi No:16, Etimesgut/Ankara",
    phones: [{ display: "0312 234 20 20", tel: "03122342020" }],
    mapsQuery: "Bağlıca Mahallesi Mert Caddesi No:16 Etimesgut Ankara",
    featured: false,
  },
  {
    id: "ankana-kids",
    name: "Ankana Kids",
    levels: "Kreş · Anaokulu · Etüt Merkezi",
    address: "İstasyon Mahallesi Türk Kızılayı Caddesi No:17, Etimesgut/Ankara",
    phones: [{ display: "0312 243 03 03", tel: "03122430303" }],
    mapsQuery: "İstasyon Mahallesi Türk Kızılayı Caddesi No:17 Etimesgut Ankara",
    featured: false,
  },
];

export function mapsSearchUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function mapsEmbedUrl(query: string) {
  return `https://maps.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
}
