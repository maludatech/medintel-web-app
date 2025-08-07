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
  return <section className="w-full py-20 bg-background"></section>;
};
