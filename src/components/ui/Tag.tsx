import { cn } from "@/lib/utils";

interface TagProps {
  children: string;
  className?: string;
}

export default function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "rounded-md border border-border bg-surface px-2.5 py-1 text-xs text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
