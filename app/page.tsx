import { About } from "@/components/shared/About";
import { CTA } from "@/components/shared/CTA";
import { Features } from "@/components/shared/Features";
import { Footer } from "@/components/shared/Footer";
import { Hero } from "@/components/shared/Hero";
import { HowItWorks } from "@/components/shared/HowItWorks";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <HowItWorks />
      <Features />
      <CTA />
      <Footer />
    </main>
  );
}
