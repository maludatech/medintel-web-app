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
      <About />
      <HowItWorks />
      <Testimonies />
      <NewsLetter />
      <Footer />
    </main>
  );
}
