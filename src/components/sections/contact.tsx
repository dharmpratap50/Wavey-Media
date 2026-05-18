"use client";

import { Mail, MapPin, Phone, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { AnimatedCard, FadeIn, SlideIn } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";
import { siteConfig } from "@/lib/content";
import { cn } from "@/lib/utils";

type Audience = "brand" | "influencer";

interface FormState {
  name: string;
  email: string;
  phone: string;
  audience: Audience;
  companyName?: string;
  socialMediaLinks?: string;
  message: string;
}

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  audience: "brand",
  companyName: "",
  socialMediaLinks: "",
  message: "",
};

export function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Name is required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Valid email is required";
    }
    if (!form.phone.trim()) next.phone = "Phone is required";
    if (form.audience === "brand" && !form.companyName?.trim()) {
      next.companyName = "Company name is required";
    }
    if (form.audience === "influencer" && !form.socialMediaLinks?.trim()) {
      next.socialMediaLinks = "Social media links are required";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

    if (endpoint) {
      try {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            phone: form.phone,
            audience: form.audience,
            companyName: form.companyName,
            socialMediaLinks: form.socialMediaLinks,
            message: form.message,
          }),
        });
        if (res.ok) {
          setStatus("success");
          setForm(initialForm);
          return;
        }
      } catch {
        /* fall through to mailto */
      }
    }

    const subject = encodeURIComponent(
      `Wavey Media inquiry — ${form.audience === "brand" ? "Brand" : "Influencer"}`,
    );
    const bodyContent = `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nType: ${form.audience}${form.audience === "brand" ? `\nCompany: ${form.companyName}` : `\nSocial Links: ${form.socialMediaLinks}`}\n\nMessage:\n${form.message}`;
    const body = encodeURIComponent(bodyContent);
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setStatus("success");
    setForm(initialForm);
  };

  const inputClass = (field: keyof FormState) =>
    cn(
      "w-full rounded-xl border bg-card px-4 py-3 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20",
      errors[field] ? "border-red-500" : "border-card-border",
    );

  return (
    <section id="contact" className="section-padding mx-auto max-w-7xl">
      <FadeIn direction="up">
        <SectionHeader
          eyebrow="Get in Touch"
          title="Let's make something awesome together"
          description="Whether you're a brand or an influencer, we'd love to hear from you."
        />
      </FadeIn>

      <div className="grid gap-10 lg:grid-cols-5">
        <SlideIn direction="left" className="lg:col-span-3">
          <form onSubmit={handleSubmit} className="card-surface card-interactive space-y-5 p-6 sm:p-8">
            <div className="flex gap-2 rounded-xl border border-card-border p-1">
              {(["brand", "influencer"] as Audience[]).map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setForm((f) => ({ ...f, audience: type }))}
                  className={cn(
                    "flex-1 rounded-lg py-2.5 text-sm font-medium capitalize transition",
                    form.audience === type
                      ? "gradient-bg text-white"
                      : "text-muted hover:text-foreground",
                  )}
                >
                  I am {type === "brand" ? "a Brand" : "an Influencer"}
                </button>
              ))}
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                  Full Name *
                </label>
                <input
                  id="name"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className={inputClass("name")}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className={inputClass("email")}
                  placeholder="you@company.com"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                )}
              </div>
            </div>

            {form.audience === "brand" && (
              <div>
                <label htmlFor="companyName" className="mb-1.5 block text-sm font-medium">
                  Company Name *
                </label>
                <input
                  id="companyName"
                  value={form.companyName || ""}
                  onChange={(e) => setForm((f) => ({ ...f, companyName: e.target.value }))}
                  className={inputClass("companyName")}
                  placeholder="Your company name"
                />
                {errors.companyName && (
                  <p className="mt-1 text-xs text-red-500">{errors.companyName}</p>
                )}
              </div>
            )}

            {form.audience === "influencer" && (
              <div>
                <label htmlFor="socialMediaLinks" className="mb-1.5 block text-sm font-medium">
                  Social Media Links / Profiles *
                </label>
                <input
                  id="socialMediaLinks"
                  value={form.socialMediaLinks || ""}
                  onChange={(e) => setForm((f) => ({ ...f, socialMediaLinks: e.target.value }))}
                  className={inputClass("socialMediaLinks")}
                  placeholder="e.g., Instagram: @yourhandle, YouTube: channel link"
                />
                {errors.socialMediaLinks && (
                  <p className="mt-1 text-xs text-red-500">{errors.socialMediaLinks}</p>
                )}
              </div>
            )}

            <div>
              <label htmlFor="phone" className="mb-1.5 block text-sm font-medium">
                Mobile Number *
              </label>
              <input
                id="phone"
                type="tel"
                value={form.phone}
                onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                className={inputClass("phone")}
                placeholder="+91 ..."
              />
              {errors.phone && (
                <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                className={inputClass("message")}
                placeholder="Tell us about your goals..."
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              className="w-full sm:w-auto"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? "Sending..." : "Send message"}
              <Send className="h-4 w-4" />
            </Button>

            {status === "success" && (
              <p className="text-sm text-accent">
                Thank you! Your message has been prepared — check your email client or
                we&apos;ll be in touch soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-500">
                Something went wrong. Please email us directly at {siteConfig.email}.
              </p>
            )}
          </form>
        </SlideIn>

        <SlideIn direction="right" delay={0.1} className="lg:col-span-2">
          <AnimatedCard className="h-full space-y-6 p-6 sm:p-8">
            <h3 className="font-display text-lg font-bold">Contact details</h3>
            <ul className="space-y-4 text-sm text-muted">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                {siteConfig.location}
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-accent" />
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="hover:text-accent"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-accent" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-accent"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </AnimatedCard>
        </SlideIn>
      </div>
    </section>
  );
}
