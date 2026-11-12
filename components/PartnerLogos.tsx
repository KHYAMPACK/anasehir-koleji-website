import Image from "next/image";
import { BookOpen, Blocks, Bot, Globe, Laptop, type LucideIcon } from "lucide-react";
import { partnerHref, type Partner, type PartnerGroup } from "@/lib/partners";

const groupIcons: Record<PartnerGroup["icon"], LucideIcon> = {
  laptop: Laptop,
  book: BookOpen,
  globe: Globe,
  bot: Bot,
  blocks: Blocks,
};

/**
 * One partner tile. Every tile has the same height so logos sit at equal
 * visual weight (client rule). No logo yet → the name, typeset, plus a small
 * yellow "logo bekleniyor" marker.
 */
export function PartnerTile({ partner, size = "md" }: { partner: Partner; size?: "md" | "lg" }) {
  const href = partnerHref(partner);
  // min-height + h-full: every tile in a row matches the tallest one.
  const h = size === "lg" ? "h-full min-h-36" : "h-full min-h-32";

  const body = (
    <>
      {partner.logo ? (
        <>
          {/* Fixed logo box height = equal visual weight across all tiles. */}
          <div className={`relative w-full ${size === "lg" ? "h-16" : "h-14"}`}>
            <Image src={partner.logo} alt="" fill sizes="240px" className="object-contain" />
          </div>
          <span
            className={`mt-2.5 text-center text-[0.72rem] leading-snug font-semibold ${partner.dark ? "text-white/85" : "text-ink"}`}
          >
            {partner.name}
          </span>
        </>
      ) : (
        <>
          <span
            title="Resmî logo bekleniyor"
            className="absolute top-2 right-2 rounded-full bg-[#ffd400] px-1.5 py-0.5 text-[0.55rem] font-bold tracking-[0.06em] text-[#14233a] uppercase"
          >
            Logo bekleniyor
          </span>
          <span
            className={`display text-center leading-snug font-semibold text-ink ${size === "lg" ? "text-lg" : "text-[0.92rem]"}`}
          >
            {partner.name}
          </span>
        </>
      )}
      {partner.domain && (
        <span
          className={`mt-1 text-[0.68rem] transition-colors ${partner.dark ? "text-white/55 group-hover:text-white" : "text-muted group-hover:text-blue"}`}
        >
          {partner.domain}
        </span>
      )}
    </>
  );

  const surface = partner.dark ? "border-ink bg-ink" : "border-line/70 bg-panel";
  const cls = `group relative flex ${h} flex-col items-center justify-center rounded-[14px] border ${surface} px-4 pt-5 pb-3 shadow-sm transition-[border-color,box-shadow,transform] duration-200`;

  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={`${partner.name} — ${partner.domain}`}
      className={`${cls} no-underline hover:-translate-y-0.5 hover:border-blue hover:shadow-md`}
    >
      {body}
    </a>
  ) : (
    <div className={cls}>{body}</div>
  );
}

/** Red pill category header with rules either side — the reference visual's pattern. */
export function GroupHeading({ title, icon }: { title: string; icon?: PartnerGroup["icon"] }) {
  const Icon = icon ? groupIcons[icon] : null;
  return (
    <div className="flex items-center gap-3">
      <span className="hidden h-px flex-1 bg-red/30 sm:block" aria-hidden />
      <h4 className="display inline-flex items-center gap-2 rounded-full bg-red px-4 py-1.5 text-sm font-semibold text-white">
        {Icon && <Icon className="h-4 w-4" strokeWidth={1.75} aria-hidden />}
        {title}
      </h4>
      <span className="h-px flex-1 bg-red/30" aria-hidden />
    </div>
  );
}

/** Çözüm ortakları by category. */
export function SolutionPartners({ groups }: { groups: PartnerGroup[] }) {
  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:gap-x-8">
      {groups.map((g, i) => (
        <section key={g.title} className={i === 0 ? "lg:col-span-2" : ""}>
          <GroupHeading title={g.title} icon={g.icon} />
          <ul className={`mt-4 grid gap-3 ${g.partners.length > 2 ? "sm:grid-cols-3" : g.partners.length === 2 ? "grid-cols-2" : ""}`}>
            {g.partners.map((p) => (
              <li key={p.name} className="h-full">
                <PartnerTile partner={p} />
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

/** Flat equal-weight grid (kurumsal iş birlikleri, üyelikler). Order is preserved. */
export function PartnerGrid({ partners, size = "md" }: { partners: Partner[]; size?: "md" | "lg" }) {
  return (
    <ul
      className={`grid gap-3 ${
        size === "lg" ? "sm:grid-cols-2" : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"
      }`}
    >
      {partners.map((p) => (
        <li key={p.name} className="h-full">
          <PartnerTile partner={p} size={size} />
        </li>
      ))}
    </ul>
  );
}
