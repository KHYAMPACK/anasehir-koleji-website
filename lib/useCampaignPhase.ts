import { useSyncExternalStore } from "react";
import { campaignPhase, type CampaignPhase } from "./campaign";

/**
 * Live campaign phase in the visitor's browser (rechecked every minute), so
 * the form closes and the campaign UI switches off on the right date without
 * rebuilding the static site. The server/static HTML assumes "open"; the
 * browser corrects it right after hydration.
 */
function subscribe(cb: () => void) {
  const t = setInterval(cb, 60_000);
  return () => clearInterval(t);
}

export function useCampaignPhase(): CampaignPhase {
  return useSyncExternalStore(
    subscribe,
    () => campaignPhase(Date.now()),
    () => "open",
  );
}
