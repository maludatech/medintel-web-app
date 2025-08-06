"use client";

import React from "react";
import Image from "next/image";
import { BrainCircuit } from "lucide-react";
import { Button } from "@/components/ui/button";
import SvgIcon from "@/public/assets/icons/SvgIcon";
import { useThemeStore } from "@/stores/useThemeStore";

export const Hero: React.FC = () => {
  const { colorValue } = useThemeStore();
  return (
    <section className="w-full bg-background py-24">
      <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Left Side */}
        <div className="max-w-xl">
          <div className="flex items-center space-x-3 mb-6 text-primary">
            <BrainCircuit className="w-8 h-8" />
            <span className="font-medium text-lg">AI-Powered Diagnosis</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-foreground mb-6">
            Predict Diseases with <span className="text-primary">AI</span> —
            Fast, Accurate, and Personalized.
          </h1>

          <p className="text-muted-foreground text-lg mb-8">
            Analyze symptoms in seconds and get instant predictions with our
            intelligent health assistant.
          </p>

          <div className="flex gap-4">
            <Button className="text-base px-6 py-3 cursor-pointer">Get Started</Button>
            <Button variant="outline" className="text-base px-6 py-3 cursor-pointer">
              Learn More
            </Button>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative w-full max-w-md md:max-w-lg">
          <SvgIcon primary={colorValue} />
        </div>
      </div>
    </section>
  );
};
