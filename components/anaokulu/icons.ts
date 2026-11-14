import {
  Blocks,
  Drama,
  FlaskConical,
  Footprints,
  HeartHandshake,
  Languages,
  Music,
  Palette,
  PersonStanding,
  Puzzle,
  Sparkles,
  Sprout,
  type LucideIcon,
} from "lucide-react";
import type { ProgramIcon } from "@/lib/anaokulu";

/** One line-icon set for the Anaokulu page (plain module: usable on server + client). */
export const anaokuluIcons: Record<ProgramIcon, LucideIcon> = {
  puzzle: Puzzle,
  languages: Languages,
  blocks: Blocks,
  dance: PersonStanding,
  drama: Drama,
  sport: Footprints,
  palette: Palette,
  music: Music,
  flask: FlaskConical,
  heart: HeartHandshake,
  sparkles: Sparkles,
  sprout: Sprout,
};
