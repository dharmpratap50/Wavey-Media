import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("card-surface", className)}>{children}</div>;
}
