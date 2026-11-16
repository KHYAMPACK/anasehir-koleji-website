/**
 * Törenlerimiz — ceremony photo albums on /kampus-yasami (#torenlerimiz).
 * Photos from the client (Nov 2026), 12 picked per event, resized to
 * 1600px and stripped of metadata. Add a new album by dropping photos in
 * /public/etkinlikler/<slug>/ and adding an entry here (newest first).
 */
export type AlbumPhoto = { src: string; w: number; h: number };
export type Album = { slug: string; title: string; date: string; photos: AlbumPhoto[] };

const photos = (slug: string, sizes: [number, number][]): AlbumPhoto[] =>
  sizes.map(([w, h], i) => ({ src: `/etkinlikler/${slug}/${String(i + 1).padStart(2, "0")}.jpg`, w, h }));

const L: [number, number] = [1600, 1200];
const P: [number, number] = [1200, 1600];

export const albums: Album[] = [
  {
    slug: "10-kasim-2026",
    title: "10 Kasım Atatürk'ü Anma Töreni",
    date: "10 Kasım 2026",
    photos: photos("10-kasim", [L, L, L, P, L, P, P, L, P, L, L, L]),
  },
  {
    slug: "29-ekim-2026",
    title: "29 Ekim Cumhuriyet Bayramı",
    date: "29 Ekim 2026",
    photos: photos("29-ekim", [L, L, L, P, P, P, P, P, P, P, L, P]),
  },
];
