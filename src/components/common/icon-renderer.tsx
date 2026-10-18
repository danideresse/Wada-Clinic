import React from "react";
import {
  Stethoscope,
  HeartPulse,
  Baby,
  ActivitySquare,
  Bone,
  ShieldAlert,
  CalendarCheck,
  Clock,
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  CheckCircle2,
  Award,
  Users,
  Sparkles,
  ArrowRight,
  HelpCircle,
  LucideIcon,
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  Stethoscope,
  HeartPulse,
  Baby,
  ActivitySquare,
  Bone,
  ShieldAlert,
  CalendarCheck,
  Clock,
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  CheckCircle2,
  Award,
  Users,
  Sparkles,
  ArrowRight,
  HelpCircle,
};

interface IconRendererProps {
  name: string;
  className?: string;
}

export function IconRenderer({ name, className }: IconRendererProps) {
  const IconComponent = ICON_MAP[name] || Stethoscope;
  return <IconComponent className={className} />;
}
