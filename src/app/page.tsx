import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { TrustedBy } from "@/components/sections/trusted-by";
import { WhyChoose } from "@/components/sections/why-choose";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Services />
        <WhyChoose />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
