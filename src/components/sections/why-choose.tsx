"use client";

import {
  AnimatedCard,
  FadeIn,
  StaggerContainer,
  StaggerItem,
  type SlideDirection,
} from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";
import { whyChoose, whySection } from "@/lib/content";
import { getIcon } from "@/lib/icons";

const directions: SlideDirection[] = ["left", "right", "left", "right"];

export function WhyChoose() {
  return (
    <section id="why-us" className="section-padding mx-auto max-w-7xl">
      <FadeIn direction="right">
        <SectionHeader
          eyebrow={whySection.eyebrow}
          title={whySection.title}
          description={whySection.subtext}
        />
      </FadeIn>

      <StaggerContainer className="grid gap-6 sm:grid-cols-2" stagger={0.1}>
        {whyChoose.map((item, index) => {
          const Icon = getIcon(item.icon);
          return (
            <StaggerItem
              key={item.title}
              direction={directions[index] ?? "up"}
            >
              <AnimatedCard className="flex gap-5 p-6 sm:p-8">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </AnimatedCard>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </section>
  );
}
