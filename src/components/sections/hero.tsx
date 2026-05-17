"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  AnimatedCard,
  FadeIn,
  StaggerContainer,
  StaggerItem,
  type SlideDirection,
} from "@/components/ui/fade-in";
import { hero, heroCards } from "@/lib/content";
import { getIcon } from "@/lib/icons";

const heroCardDirections: SlideDirection[] = ["left", "up", "right"];

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-28 pb-16 sm:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="glow-orb absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full blur-3xl" />
        <div className="brand-gradient-subtle absolute inset-0" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/25 to-transparent" />
      </div>

      <div className="section-padding relative mx-auto max-w-7xl pb-0 pt-0">
        <div className="mx-auto max-w-4xl text-center">
          <FadeIn direction="up">
            <h1 className="font-display text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
              {hero.headline}
            </h1>
          </FadeIn>

          <FadeIn delay={0.08} direction="up">
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              {hero.subtext}
            </p>
          </FadeIn>

          <FadeIn delay={0.16} direction="up" className="mt-10">
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="#contact" variant="primary">
                {hero.ctaPrimary}
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="#services" variant="secondary">
                {hero.ctaSecondary}
              </Button>
            </div>
          </FadeIn>
        </div>

        <StaggerContainer className="mt-16 grid gap-4 sm:grid-cols-3" stagger={0.12}>
          {heroCards.map(({ icon: iconKey, title, description }, index) => {
            const Icon = getIcon(iconKey);
            return (
            <StaggerItem
              key={title}
              direction={heroCardDirections[index] ?? "up"}
            >
              <AnimatedCard className="flex flex-col gap-3 p-5 sm:p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold leading-snug">
                    {title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {description}
                  </p>
                </div>
              </AnimatedCard>
            </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
