import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline";
  href?: string;
  external?: boolean;
  download?: boolean;
  onClick?: () => void;
  className?: string;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

const variants = {
  primary: "bg-primary text-white hover:bg-primary-dark",
  outline: "border border-border text-white hover:border-primary",
};

export default function Button({
  children,
  variant = "primary",
  href,
  external,
  download,
  onClick,
  className,
}: ButtonProps) {
  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        download={download}
        {...(external && { target: "_blank", rel: "noreferrer" })}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
