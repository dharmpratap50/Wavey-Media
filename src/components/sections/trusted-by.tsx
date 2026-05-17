"use client";

import {
  AnimatedCard,
  FadeIn,
  SlideIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";
import { trustedBy } from "@/lib/content";

export function TrustedBy() {
  return (
    <section className="section-padding mx-auto max-w-7xl">
      <FadeIn direction="up">
        <SectionHeader
          eyebrow={trustedBy.eyebrow}
          title={trustedBy.headline}
          description={trustedBy.subtext}
        />
      </FadeIn>

      <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2" stagger={0.14}>
        {trustedBy.stats.map((stat, index) => (
          <StaggerItem
            key={stat.label}
            direction={index === 0 ? "left" : "right"}
          >
            <AnimatedCard className="p-6 sm:p-8">
              <p className="font-display text-3xl font-bold gradient-text sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                {stat.label}
              </p>
            </AnimatedCard>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <SlideIn direction="up" delay={0.1} className="mt-12">
        <p className="mx-auto max-w-3xl text-center text-base leading-relaxed text-muted sm:text-lg">
          {trustedBy.closing}
        </p>
      </SlideIn>
    </section>
  );
}
