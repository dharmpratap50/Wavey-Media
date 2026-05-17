"use client";

import {
  Brain,
  Languages,
  Layers,
  MapPin,
  Megaphone,
  Shield,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { IconKey } from "@/lib/content";

const iconMap: Record<IconKey, LucideIcon> = {
  users: Users,
  megaphone: Megaphone,
  shield: Shield,
  mapPin: MapPin,
  languages: Languages,
  brain: Brain,
  layers: Layers,
};

export function getIcon(key: IconKey): LucideIcon {
  return iconMap[key];
}
