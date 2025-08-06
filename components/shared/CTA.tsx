"use client";

import React from "react";
import { Button } from "@/components/ui/button";

export const CTA: React.FC = () => {
  return (
    <section className="w-full py-20 bg-background">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Ready to take control of your health?
        </h2>
        <p className="text-muted-foreground text-lg mb-6">
          Sign up now and start predicting diseases with AI.
        </p>
        <Button className="text-base px-6 py-3 cursor-pointer">Get Started</Button>
      </div>
    </section>
  );
};
