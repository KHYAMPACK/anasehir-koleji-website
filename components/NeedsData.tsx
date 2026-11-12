import { needsData, showDataFlags, type NeedsDataId } from "@/lib/needsData";

/**
 * Loud, client-facing "we need this from you" markers. Deliberately
 * off-brand (yellow/black) so they can't be mistaken for finished content.
 * Every one points at an entry in lib/needsData.ts.
 */

function Tag({ small = false }: { small?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full bg-[#ffd400] font-bold tracking-[0.08em] text-[#14233a] uppercase ${
        small ? "px-2 py-0.5 text-[0.58rem]" : "px-2.5 py-1 text-[0.65rem]"
      }`}
    >
      <span aria-hidden>●</span> Veri bekleniyor
    </span>
  );
}

/** Block placeholder: a text section, a photo slot or a logo slot. */
export function NeedsData({
  id,
  label,
  ratio,
  compact = false,
  className = "",
}: {
  id: NeedsDataId;
  /** Overrides the registry label, e.g. one facility name in a photo grid. */
  label?: string;
  /** Pass an aspect class (aspect-[4/3]) to render as an image slot. */
  ratio?: string;
  /** Hide the "what we need" line (for small tiles in a grid). */
  compact?: boolean;
  className?: string;
}) {
  if (!showDataFlags) return null;
  const entry = needsData[id];
  return (
    <div
      data-needs-data={id}
      className={`flex flex-col items-start justify-center gap-2 rounded-[14px] border-2 border-dashed border-[#e0b800] bg-[repeating-linear-gradient(135deg,#fff8d6_0_12px,#fff3bf_12px_24px)] p-4 text-[#14233a] sm:p-5 ${ratio ?? ""} ${className}`}
    >
      <Tag small={compact} />
      <p className={`display font-semibold leading-snug ${compact ? "text-sm" : "text-base"}`}>
        {label ?? entry.label}
      </p>
      {!compact && <p className="text-sm text-[#4a4a3a]">{entry.ask}</p>}
    </div>
  );
}

/** Inline badge next to a value we are not sure about (a time, a count). */
export function NeedsDataTag({ id }: { id: NeedsDataId }) {
  if (!showDataFlags) return null;
  return (
    <span data-needs-data={id} title={needsData[id].ask} className="inline-block align-middle">
      <Tag small />
    </span>
  );
}
