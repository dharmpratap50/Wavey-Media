"use client";

import { ArrowRight, Check } from "lucide-react";
import {
  AnimatedCard,
  FadeIn,
  StaggerContainer,
  StaggerItem,
  type SlideDirection,
} from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";
import { services, servicesSection } from "@/lib/content";
import { getIcon } from "@/lib/icons";

const cardDirections: SlideDirection[] = ["left", "up", "right"];

export function Services() {
  return (
    <section id="services" className="section-padding mx-auto max-w-7xl">
      <FadeIn direction="up">
        <SectionHeader
          eyebrow={servicesSection.eyebrow}
          title={servicesSection.title}
          description={servicesSection.intro}
        />
      </FadeIn>

      <StaggerContainer className="mt-4 grid gap-6 lg:grid-cols-3" stagger={0.14}>
        {services.map((service, index) => {
          const Icon = getIcon(service.icon);
          return (
            <StaggerItem
              key={service.number}
              direction={cardDirections[index] ?? "up"}
            >
              <AnimatedCard className="group flex h-full flex-col p-6 sm:p-8">
                <div className="mb-5 flex items-start justify-between">
                  <span className="font-display text-4xl font-bold text-accent/30">
                    {service.number}
                  </span>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                <h3 className="font-display text-xl font-bold leading-snug">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {service.intro}
                </p>

                <ul className="mt-5 flex-1 space-y-2.5">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2 text-sm">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                      <span className="leading-snug">{bullet}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent transition hover:gap-2"
                >
                  Get in touch
                  <ArrowRight className="h-4 w-4" />
                </a>
              </AnimatedCard>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </section>
  );
}
