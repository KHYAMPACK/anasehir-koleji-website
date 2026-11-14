import fs from "node:fs";
import path from "node:path";
import { parseLegal, type Block } from "./legal";

/**
 * Sıkça Sorulan Sorular — client text in content/sss.md (verbatim, Nov 2026).
 * Server-only (reads the file at build time); the parsed result is plain data
 * that client components can search.
 */
export type SssItem = {
  id: string;
  n: number;
  question: string;
  blocks: Block[];
  /** Answer as plain text, for search. */
  text: string;
};

export type SssCategory = {
  slug: string;
  num: string;
  title: string;
  items: SssItem[];
};

const slugify = (s: string) =>
  s
    .toLocaleLowerCase("tr")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/ı/g, "i")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export function readSss(): SssCategory[] {
  const md = fs
    .readFileSync(path.join(process.cwd(), "content", "sss.md"), "utf8")
    .replace(/\r\n/g, "\n")
    .replace(/<!--[\s\S]*?-->/g, "");

  const categories: SssCategory[] = [];
  let cat: SssCategory | null = null;
  let q: { n: number; question: string; lines: string[] } | null = null;

  const flushQ = () => {
    if (!q || !cat) return;
    const body = q.lines.join("\n").trim();
    cat.items.push({
      id: `soru-${q.n}`,
      n: q.n,
      question: q.question,
      blocks: parseLegal(body),
      text: body.replace(/\*\*|\[|\]\([^)]*\)|^- /gm, ""),
    });
    q = null;
  };

  for (const line of md.split("\n")) {
    const c = /^## (\d+) \| (.+)$/.exec(line);
    if (c) {
      flushQ();
      cat = { slug: slugify(c[2]), num: c[1], title: c[2].trim(), items: [] };
      categories.push(cat);
      continue;
    }
    const h = /^### (\d+)\. (.+)$/.exec(line);
    if (h) {
      flushQ();
      q = { n: Number(h[1]), question: h[2].trim(), lines: [] };
      continue;
    }
    if (q) q.lines.push(line);
  }
  flushQ();
  return categories;
}
