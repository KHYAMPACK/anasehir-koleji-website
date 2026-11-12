import Image from "next/image";
import { site } from "@/lib/site";
import { socialIcons } from "./SocialLinks";

/**
 * Instagram feed for the "Anaşehir'de Yaşam" chapter.
 *
 * Not connected yet: the client still has to pick a route (a feed service such
 * as Behold/Elfsight, or Instagram's own API with a Business/Creator account).
 * Until then `posts` is empty and the grid shows neutral placeholder tiles that
 * read as "posts appear here" — no fake captions, likes or dates.
 *
 * Once connected, pass real posts: { id, image, href, alt }.
 */
export type InstagramPost = { id: string; image: string; href: string; alt: string };

const SLOTS = 8;

function IgGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`fill-current ${className ?? ""}`} aria-hidden>
      {socialIcons.instagram}
    </svg>
  );
}

export function InstagramFeed({ posts = [] }: { posts?: InstagramPost[] }) {
  return (
    <div>
      {/* Profile bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-[20px] bg-panel p-4 shadow-sm sm:p-5">
        <div className="flex items-center gap-4">
          <span className="rounded-full bg-[linear-gradient(45deg,#f9ce34,#ee2a7b,#6228d7)] p-[3px]">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-panel">
              <Image src="/brand/anasehir-mark.png" alt="" width={40} height={36} className="h-8 w-auto" />
            </span>
          </span>
          <span>
            <span className="display block text-lg font-bold text-ink">{site.social.instagramHandle}</span>
            <span className="block text-sm text-muted">{site.name}</span>
          </span>
        </div>
        <a
          href={site.social.instagram}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-[46px] items-center gap-2 rounded-full bg-[linear-gradient(45deg,#f9ce34,#ee2a7b,#6228d7)] px-6 text-sm font-bold text-white no-underline shadow-sm transition-transform hover:-translate-y-0.5"
        >
          <IgGlyph className="h-4 w-4" />
          Takip Et
        </a>
      </div>

      {/* Post grid */}
      <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {posts.length > 0
          ? posts.slice(0, SLOTS).map((p) => (
              <li key={p.id}>
                <a href={p.href} target="_blank" rel="noreferrer" className="group relative block aspect-square overflow-hidden rounded-[16px]">
                  <Image src={p.image} alt={p.alt} fill sizes="(max-width: 640px) 50vw, 25vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </a>
              </li>
            ))
          : Array.from({ length: SLOTS }, (_, i) => (
              <li key={i}>
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${site.social.instagramHandle} Instagram hesabı`}
                  className="group relative flex aspect-square items-center justify-center overflow-hidden rounded-[16px] bg-panel-2/70 ring-1 ring-line/60"
                >
                  {/* soft shimmer so the slot reads as "loading a post" */}
                  <span
                    className="absolute inset-0 bg-[linear-gradient(110deg,transparent_30%,rgba(255,255,255,0.55)_50%,transparent_70%)] bg-[length:250%_100%] motion-safe:animate-[ig-shimmer_2.4s_ease-in-out_infinite]"
                    style={{ animationDelay: `${i * 0.15}s` }}
                    aria-hidden
                  />
                  <IgGlyph className="relative h-9 w-9 text-ink/20 transition-colors duration-300 group-hover:text-[#ee2a7b]" />
                </a>
              </li>
            ))}
      </ul>
    </div>
  );
}
