import fs from "node:fs";
import path from "node:path";

/**
 * KVKK / legal documents. The texts live verbatim in content/legal/*.md
 * (client-supplied, Nov 2026, prepared by their side) — update those files,
 * not the code. Read at build time only (server components).
 */
/** Veri sorumlusu as written in the client's KVKK texts. */
export const dataController = {
  name: "Ankana Eğt.Yay.Turz.Dan.Taş.Gıda Hizm.ve Tic.Ltd.Şti",
  address: "Bağlıca Mahallesi, Etimesgut Bulvarı, No: 89, Etimesgut / Ankara",
};

export type LegalDoc = {
  slug: string;
  /** Label used on the KVKK hub table (client's wording). */
  label: string;
  href: string;
  /** Markdown file under content/legal; null = text not supplied yet. */
  file: string | null;
};

export const legalDocs: LegalDoc[] = [
  { slug: "web-sitesi-ziyaretcileri", label: "Web Sitesi Ziyaretçileri Aydınlatma Metni", href: "/kvkk/web-sitesi-ziyaretcileri", file: null },
  { slug: "iletisim-ve-kayit-gorusmesi", label: "Web Sitesi İletişim ve Kayıt Görüşmesi Aydınlatma Metni", href: "/kvkk/iletisim-ve-kayit-gorusmesi", file: "iletisim-ve-kayit-gorusmesi.md" },
  { slug: "cerez-politikasi", label: "Gizlilik ve Çerez Politikası", href: "/gizlilik", file: "cerez-politikasi.md" },
  { slug: "bursluluk-sinavi", label: "Bursluluk Sınavı Başvuru Aydınlatma Metni", href: "/kvkk/bursluluk-sinavi", file: "bursluluk-sinavi.md" },
  { slug: "basvuru-formu", label: "İlgili Kişi Başvuru Formu", href: "/kvkk/basvuru-formu", file: "basvuru-formu.md" },
];

/** Docs served under /kvkk/[slug] (the cookie policy lives at /gizlilik). */
export const kvkkSubpages = legalDocs.filter((d) => d.file && d.href.startsWith("/kvkk/"));

export function readLegal(file: string) {
  return fs.readFileSync(path.join(process.cwd(), "content", "legal", file), "utf8");
}

/* ── Tiny Markdown subset → blocks (headings, paragraphs, lists, checkboxes, hr) ── */
export type Block =
  | { type: "h1" | "h2" | "h3"; text: string }
  | { type: "p"; lines: string[] }
  | { type: "ul"; items: string[] }
  | { type: "checks"; items: string[] }
  | { type: "hr" };

export function parseLegal(md: string): Block[] {
  const blocks: Block[] = [];
  let para: string[] = [];
  const flush = () => {
    if (para.length) blocks.push({ type: "p", lines: para });
    para = [];
  };
  for (const raw of md.replace(/\r\n/g, "\n").split("\n")) {
    const line = raw.trimEnd();
    if (!line.trim()) {
      flush();
      continue;
    }
    if (line === "---") {
      flush();
      blocks.push({ type: "hr" });
      continue;
    }
    const h = /^(#{1,3}) (.*)$/.exec(line);
    if (h) {
      flush();
      blocks.push({ type: (["h1", "h2", "h3"] as const)[h[1].length - 1], text: h[2] });
      continue;
    }
    const check = /^- \[ \] (.*)$/.exec(line);
    const item = /^- (.*)$/.exec(line);
    if (check || item) {
      flush();
      const kind = check ? "checks" : "ul";
      const text = (check ?? item)![1];
      const last = blocks[blocks.length - 1];
      if (last && last.type === kind) last.items.push(text);
      else blocks.push(kind === "checks" ? { type: "checks", items: [text] } : { type: "ul", items: [text] });
      continue;
    }
    para.push(line);
  }
  flush();
  return blocks;
}
