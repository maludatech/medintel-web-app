"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import images from "@/public/assets/images";
import { Card } from "../ui/card";

interface Steps {
  title: string;
  description: string;
  image: StaticImageData;
}

export const HowItWorks: React.FC = () => {
  const steps: Steps[] = [
    {
      title: "Enter Symptoms",
      description:
        "Tell us how you are feeling. Describe how you feel in simple words.",
      image: images.howItWorks1,
    },
    {
      title: "AI Analysis",
      description: "Our algorithm matches your symptoms with medical data.",
      image: images.howItWorks2,
    },
    {
      title: "Instant Results",
      description: "See possible health conditions and next steps instantly.",
      image: images.howItWorks3,
    },
  ];

  return (
    <section className="w-full pt-16">
      <div className="container mx-auto flex flex-col gap-8 px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col gap-1 justify-center items-center text-center">
          <h2 className="text-3xl font-bold text-[#0B1909]">How It Works</h2>
          <p className="text-muted-foreground text-lg">
            Stay ahead of your health in just 3 steps
          </p>
        </div>
        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="flex flex-col gap-2 overflow-hidden py-0"
            >
              {/* Image at top */}
              <div className="w-full">
                <Image
                  src={step.image}
                  alt={step.title}
                  width={500}
                  height={500}
                  className="object-contain w-full h-auto"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>

              {/* Text content */}
              <div className="flex items-start gap-1 p-4">
                <span className="bg-[#55CC4B] text-sm text-white rounded-full w-6 h-6 flex items-center justify-center mt-1">
                  {index + 1}
                </span>
                <div className="flex flex-col">
                  <h3 className="text-lg font-semibold text-[#0B1909]">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#0B1909]">{step.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
