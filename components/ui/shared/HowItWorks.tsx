"use client";

import React from "react";
import { Stethoscope, Search, Bot } from "lucide-react";

const steps = [
  {
    icon: <Search className="w-8 h-8 text-primary" />,
    title: "Input Symptoms",
    desc: "Tell us how you're feeling. Describe your symptoms in a few words.",
  },
  {
    icon: <Bot className="w-8 h-8 text-primary" />,
    title: "AI Analysis",
    desc: "Our AI engine compares your symptoms against a vast dataset.",
  },
  {
    icon: <Stethoscope className="w-8 h-8 text-primary" />,
    title: "Diagnosis Suggestion",
    desc: "Get a list of likely conditions and recommendations in seconds.",
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <section className="w-full py-20 bg-background">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-foreground mb-12">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-muted flex flex-col items-center text-center"
            >
              {step.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2 text-foreground">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
