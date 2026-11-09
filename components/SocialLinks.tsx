import { site } from "@/lib/site";
import { NeedsDataTag } from "./NeedsData";

/** Brand glyphs inline — lucide-react v1 no longer ships brand icons. */
const icons = {
  instagram: (
    <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2Zm0 4.6a5.2 5.2 0 1 0 0 10.4 5.2 5.2 0 0 0 0-10.4Zm0 8.6a3.4 3.4 0 1 1 0-6.8 3.4 3.4 0 0 1 0 6.8Zm5.4-9.9a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z" />
  ),
  facebook: (
    <path d="M13.5 21.9v-8.1h2.7l.4-3.2h-3.1V8.6c0-.9.3-1.5 1.6-1.5h1.7V4.2c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.2v2.3H7.6v3.2h2.7v8.1h3.2Z" />
  ),
  youtube: (
    <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8ZM10 15V9l5.2 3L10 15Z" />
  ),
} as const;

const links = [
  { key: "instagram", label: "Instagram", href: site.social.instagram },
  { key: "facebook", label: "Facebook", href: site.social.facebook },
  { key: "youtube", label: "YouTube", href: site.social.youtube },
] as const;

export function SocialLinks({
  tone = "light",
  showPending = true,
}: {
  /** light = on white/ice backgrounds, dark = on navy. */
  tone?: "light" | "dark";
  /** Show the "other accounts — data needed" slot. */
  showPending?: boolean;
}) {
  const btn =
    tone === "dark"
      ? "bg-white/10 text-white hover:bg-white/20"
      : "bg-blue-soft text-ink hover:bg-blue hover:text-white";
  return (
    <ul className="flex flex-wrap items-center gap-2">
      {links.map((l) => (
        <li key={l.key}>
          <a
            href={l.href}
            target="_blank"
            rel="noreferrer"
            aria-label={l.label}
            className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors ${btn}`}
          >
            <svg viewBox="0 0 24 24" className="h-[1.05rem] w-[1.05rem] fill-current" aria-hidden>
              {icons[l.key]}
            </svg>
          </a>
        </li>
      ))}
      {showPending && (
        <li className="flex items-center gap-1.5">
          <span
            className={`flex h-9 w-9 items-center justify-center rounded-full border-2 border-dashed border-[#e0b800] text-sm font-bold ${tone === "dark" ? "text-white" : "text-ink"}`}
            aria-hidden
          >
            +
          </span>
          <NeedsDataTag id="sosyal-medya" />
        </li>
      )}
    </ul>
  );
}
