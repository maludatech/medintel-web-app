"use client";
import { Hero } from "@/components/shared/home/Hero";
import { About } from "@/components/shared/home/About";
import { HowItWorks } from "@/components/shared/home/HowItWorks";
import { Testimonies } from "@/components/shared/home/Testimonies";
import { NewsLetter } from "@/components/shared/home/Newsletter";
import { Footer } from "@/components/shared/Footer";
import { Navbar } from "@/components/shared/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <section id="about">
        <About />
      </section>
      <section id="howItWorks">
        <HowItWorks />
      </section>
      <section id="testimonies">
        <Testimonies />
      </section>
      <section id="newsletter">
        <NewsLetter />
      </section>
      <Footer />
    </main>
  );
}
