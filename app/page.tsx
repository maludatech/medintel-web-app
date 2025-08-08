"use client";
import { Hero } from "@/components/shared/Hero";
import { About } from "@/components/shared/About";
import { HowItWorks } from "@/components/shared/HowItWorks";
import { Testimonies } from "@/components/shared/Testimonies";
import { NewsLetter } from "@/components/shared/Newsletter";
import { Footer } from "@/components/shared/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <HowItWorks />
      <Testimonies />
      <NewsLetter />
      <Footer />
    </main>
  );
}
