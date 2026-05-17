import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="#home" className={cn("flex items-center gap-3", className)}>
      <Image
        src="/logo.png"
        alt={siteConfig.name}
        width={40}
        height={40}
        className="h-10 w-10 rounded-xl object-cover"
        priority
      />
      <span className="font-display text-lg font-bold tracking-tight">
        Wavey<span className="gradient-text"> Media</span>
      </span>
    </Link>
  );
}
