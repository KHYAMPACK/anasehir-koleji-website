import { Fragment } from "react";
import type { Block } from "@/lib/legal";

/** Inline: **bold**, *italic*, [text](url). */
function Inline({ text }: { text: string }) {
  const parts: React.ReactNode[] = [];
  const re = /\*\*(.+?)\*\*|\*(.+?)\*|\[(.+?)\]\((.+?)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    if (m[1]) parts.push(<strong key={i++} className="font-semibold text-ink">{m[1]}</strong>);
    else if (m[2]) parts.push(<em key={i++}>{m[2]}</em>);
    else
      parts.push(
        <a key={i++} href={m[4]} className="text-blue underline" target={m[4].startsWith("http") ? "_blank" : undefined} rel="noreferrer">
          {m[3]}
        </a>,
      );
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}

/**
 * Renders a client legal text. The leading "# ANAŞEHİR KOLEJİ" / "## TITLE"
 * pair is shown by the page hero, so it's skipped here (`skipTitle`).
 */
export function LegalDocument({ blocks, skipTitle = true }: { blocks: Block[]; skipTitle?: boolean }) {
  let body = blocks;
  if (skipTitle) {
    let n = 0;
    while (n < body.length && (body[n].type === "h1" || body[n].type === "h2")) n++;
    body = body.slice(n);
  }
  return (
    <div className="legal-doc max-w-[72ch] text-[0.98rem] leading-[1.7] text-muted">
      {body.map((b, i) => {
        switch (b.type) {
          case "h1":
          case "h2":
          case "h3":
            return (
              <h2 key={i} className="display mt-10 mb-3 text-xl font-bold text-ink first:mt-0">
                {b.text}
              </h2>
            );
          case "hr":
            return <hr key={i} className="my-10 border-line" />;
          case "ul":
            return (
              <ul key={i} className="my-3 list-disc space-y-1 pl-6 marker:text-red">
                {b.items.map((t, j) => (
                  <li key={j}><Inline text={t} /></li>
                ))}
              </ul>
            );
          case "checks":
            return (
              <ul key={i} className="my-3 space-y-1.5">
                {b.items.map((t, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <span className="mt-[0.35em] inline-block h-3.5 w-3.5 shrink-0 rounded-[3px] border-2 border-ink/60" aria-hidden />
                    <Inline text={t} />
                  </li>
                ))}
              </ul>
            );
          case "p":
            return (
              <p key={i} className="my-3">
                {b.lines.map((l, j) => (
                  <Fragment key={j}>
                    {j > 0 && <br />}
                    <Inline text={l} />
                  </Fragment>
                ))}
              </p>
            );
        }
      })}
    </div>
  );
}
