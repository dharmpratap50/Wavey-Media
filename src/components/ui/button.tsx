import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  type ButtonHTMLAttributes,
  type MouseEventHandler,
  type ReactNode,
} from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  href?: string;
  children: ReactNode;
  className?: string;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "gradient-bg font-semibold text-white shadow-lg shadow-[var(--accent-secondary)]/25 hover:opacity-90 disabled:opacity-60",
  secondary:
    "border border-card-border bg-card text-foreground hover:border-accent/50 hover:text-accent",
  ghost: "text-muted hover:text-accent",
};

export function Button({
  variant = "primary",
  href,
  children,
  className,
  type = "button",
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm transition-all duration-200",
    variants[variant],
    className,
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        onClick={
          props.onClick as unknown as MouseEventHandler<HTMLAnchorElement>
        }
      >
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
