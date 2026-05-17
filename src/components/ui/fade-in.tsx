"use client";

import { cn } from "@/lib/utils";
import { motion, type Transition, type Variants } from "framer-motion";
import { type ReactNode } from "react";

const viewportDefaults = { once: true, margin: "-80px" as const };

const baseTransition: Transition = {
  duration: 0.55,
  ease: [0.22, 1, 0.36, 1],
};

export type SlideDirection = "left" | "right" | "up";

function slideVariants(direction: SlideDirection, distance = 36): Variants {
  switch (direction) {
    case "left":
      return {
        hidden: { opacity: 0, x: -distance },
        visible: { opacity: 1, x: 0 },
      };
    case "right":
      return {
        hidden: { opacity: 0, x: distance },
        visible: { opacity: 1, x: 0 },
      };
    default:
      return {
        hidden: { opacity: 0, y: distance },
        visible: { opacity: 1, y: 0 },
      };
  }
}

export function FadeIn({
  children,
  className,
  delay = 0,
  id,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
  direction?: SlideDirection;
}) {
  return (
    <motion.div
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportDefaults}
      transition={{ ...baseTransition, delay }}
      variants={slideVariants(direction)}
    >
      {children}
    </motion.div>
  );
}

export function SlideIn({
  children,
  className,
  direction = "left",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  direction?: SlideDirection;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportDefaults}
      transition={{ ...baseTransition, duration: 0.6, delay }}
      variants={slideVariants(direction)}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  className,
  stagger = 0.12,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: 0.05 } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  direction?: SlideDirection;
}) {
  return (
    <motion.div
      className={className}
      variants={slideVariants(direction)}
      transition={baseTransition}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={cn("card-surface card-interactive h-full", className)}
      whileHover={{ y: -6, scale: 1.015 }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
    >
      {children}
    </motion.div>
  );
}
