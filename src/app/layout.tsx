import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { ThemeProvider } from "@/components/ui/theme-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wavey Media | Creator-Led Campaigns, Perception & Impact Storytelling",
  icons: {
    icon: "/logo.png",
  },
  description:
    "Wavey Media builds creator-led campaigns that make brands, founders and impact initiatives visible in the right way — through the right creators, pages, journalists and communities.",
  metadataBase: new URL("https://www.waveymedia.in"),
  openGraph: {
    title: "Wavey Media",
    description:
      "Good work means nothing if the right people don't notice it. Creator-led campaigns across India.",
    url: "https://www.waveymedia.in",
    siteName: "Wavey Media",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wavey Media",
    description:
      "Creator-led campaigns, narrative & perception management, and impact storytelling.",
  },
  keywords: [
    "Wavey Media",
    "creator-led campaigns India",
    "influencer marketing",
    "perception management",
    "impact storytelling",
    "reputation management",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} min-h-screen font-sans antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
