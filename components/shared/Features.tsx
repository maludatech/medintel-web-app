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
  return <section className="w-full py-20 bg-muted"></section>;
};
