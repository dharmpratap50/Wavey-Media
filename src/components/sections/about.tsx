"use client";

import { FadeIn, SlideIn } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";
import { aboutSection } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="section-padding mx-auto max-w-3xl">
      <FadeIn direction="left">
        <SectionHeader
          align="left"
          eyebrow={aboutSection.eyebrow}
          title={aboutSection.title}
          className="mb-8 max-w-none"
        />
      </FadeIn>

      <SlideIn direction="right" delay={0.08}>
        <div className="space-y-6 text-base leading-relaxed text-muted sm:text-lg">
          {aboutSection.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 32)}
              className={
                paragraph === "So we built the bridge."
                  ? "font-display text-xl font-semibold text-foreground sm:text-2xl"
                  : undefined
              }
            >
              {paragraph}
            </p>
          ))}
        </div>
      </SlideIn>
    </section>
  );
}
