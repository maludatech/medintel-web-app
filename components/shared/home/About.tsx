"use client";

import React from "react";
import { Card } from "../../ui/card";
import { SquareCheck } from "lucide-react";

interface WhyChooseMedIntel {
  heading: string;
  body: string;
}

export const About: React.FC = () => {
  const whyChooseMedIntel: WhyChooseMedIntel[] = [
    {
      heading: "AI-Powered Symptom Checker",
      body: "Get treated with more accurate health prediction.",
    },
    {
      heading: "Secure & Private",
      body: "Your health data stays with you",
    },
    {
      heading: "Dark & Light Mode",
      body: "Designed for comfort day or night",
    },
    {
      heading: "Personalized Insights",
      body: "Bull nursing your profile and earth data.",
    },
    {
      heading: "Prediction History",
      body: "Keep track of your past health checks.",
    },
  ];

  return (
    <section className="w-full pt-16">
      <div className="container mx-auto flex flex-col gap-12 px-6 md:px-12">
        {/* First container */}
        <div className="flex flex-col gap-2">
          <hr className="w-64 border-t border-[#55CC4B]" />
          <h1 className="text-3xl font-semibold text-[#0B1909] dark:text-[#E9EDE8]">
            What is MedIntel?
          </h1>
          <p className="text-[17px] text-[#0B1909] dark:text-[#E9EDE8] max-w-4xl mt-2">
            MedIntel is a cutting-edge AI-driven web and mobile platform
            designed to help users predict diseases based on symptoms.
            Leveraging machine learning and a vast medical database, it delivers
            fast, accurate, and personalized insights
          </p>
        </div>
        {/* Second container */}
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-semibold text-[#0B1909] dark:text-[#E9EDE8]">
            Why choose MedIntel?
          </h1>
          <div className="mt-4 grid grid-cols-1 gap-8 md:grid-cols-3">
            {whyChooseMedIntel.map((item, index) => (
              <Card
                key={index}
                className="flex flex-col gap-2 rounded-lg bg-[#E9EDE8] dark:bg-[#0D200C] p-4"
              >
                <h2 className=" flex items-center gap-1 text-lg font-semibold text-[#0B1909] dark:text-[#EEFAED]">
                  <SquareCheck className="text-[#55CC4B]" />
                  {item.heading}
                </h2>
                <p className="text-sm text-[#0B1909] dark:text-[#EEFAED]">
                  {item.body}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
