import {
  Activity,
  Cpu,
  Globe,
  GraduationCap,
  HeartHandshake,
  Leaf,
  Palette,
  Sprout,
  type LucideIcon,
} from "lucide-react";
import type { AgmIcon } from "@/lib/agm360";

/**
 * Icon per AGM 360° area. Lives in a plain (non-"use client") module so both
 * server pages and the client wheel/cards can import the real components —
 * an object exported from a "use client" file reaches server code as a
 * client reference, not as the icons.
 */
export const agmIcons: Record<AgmIcon, LucideIcon> = {
  graduation: GraduationCap,
  sprout: Sprout,
  globe: Globe,
  palette: Palette,
  leaf: Leaf,
  activity: Activity,
  heart: HeartHandshake,
  cpu: Cpu,
};
