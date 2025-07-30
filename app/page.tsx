import { About } from "@/components/ui/shared/About";
import { CTA } from "@/components/ui/shared/CTA";
import { Features } from "@/components/ui/shared/Features";
import { Footer } from "@/components/ui/shared/Footer";
import { Hero } from "@/components/ui/shared/Hero";
import { HowItWorks } from "@/components/ui/shared/HowItWorks";

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
