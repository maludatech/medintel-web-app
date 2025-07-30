"use client";

import React from "react";
import { HeartPulse } from "lucide-react";

export const About: React.FC = () => {
  return (
    <section className="w-full py-20 bg-muted">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <HeartPulse className="mx-auto text-primary w-10 h-10 mb-4" />
        <h2 className="text-3xl font-bold text-foreground mb-4">
          What is MedIntel?
        </h2>
        <p className="text-muted-foreground text-lg">
          MedIntel is a cutting-edge AI-driven web and mobile platform designed
          to help users predict diseases based on symptoms. Leveraging machine
          learning and a vast medical database, it delivers fast, accurate, and
          personalized insights.
        </p>
      </div>
    </section>
  );
};
