import Image from "next/image";
import { NeedsData } from "./NeedsData";
import type { Partner } from "@/lib/partners";
import type { NeedsDataId } from "@/lib/needsData";

/** Logo grid; each logo links to the partner's site. Empty list → placeholder slots. */
export function PartnerLogos({
  partners,
  needs,
  slots = 6,
}: {
  partners: Partner[];
  needs: NeedsDataId;
  slots?: number;
}) {
  if (partners.length === 0) {
    return (
      <div className="grid gap-3">
        <NeedsData id={needs} />
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {Array.from({ length: slots }, (_, i) => (
            <li key={i}>
              <NeedsData id={needs} label={`Logo ${i + 1}`} ratio="aspect-[3/2]" compact />
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
      {partners.map((p) => {
        const logo = (
          <div className="relative aspect-[3/2] w-full">
            <Image src={p.logo} alt={p.name} fill sizes="200px" className="object-contain p-3" />
          </div>
        );
        return (
          <li key={p.name} className="rounded-[14px] bg-panel shadow-sm">
            {p.url ? (
              <a href={p.url} target="_blank" rel="noreferrer" title={p.name} className="block">
                {logo}
              </a>
            ) : (
              logo
            )}
          </li>
        );
      })}
    </ul>
  );
}
