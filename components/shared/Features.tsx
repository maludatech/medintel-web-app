"use client";

import React from "react";
import { ShieldCheck, Smartphone, Sparkles } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-primary" />,
    title: "Privacy-First",
    desc: "Your health data stays on your device. No third-party sharing.",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-primary" />,
    title: "Smart Learning",
    desc: "Our AI improves with use, refining predictions for every user.",
  },
  {
    icon: <Smartphone className="w-6 h-6 text-primary" />,
    title: "Cross-Platform",
    desc: "Access MedIntel on any device—web, Android, or iOS.",
  },
];

export const Features: React.FC = () => {
  return (
    <section className="w-full py-20 bg-muted">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-foreground mb-10 text-center">
          Key Features
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="rounded-xl p-6 bg-background text-center shadow-md"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
