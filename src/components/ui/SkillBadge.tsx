import type { SkillIcon } from "@/lib/skillIcons";

interface SkillBadgeProps {
  children: string;
  icon?: SkillIcon;
}

export default function SkillBadge({ children, icon: Icon }: SkillBadgeProps) {
  return (
    <span className="inline-flex items-center gap-2 rounded-lg border border-border bg-bg px-3 py-1.5 text-sm text-white transition-colors hover:border-primary">
      {Icon && <Icon size={16} className="text-primary" />}
      {children}
    </span>
  );
}
