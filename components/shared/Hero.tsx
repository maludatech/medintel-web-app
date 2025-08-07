"use client";

import React from "react";
import Image from "next/image";
import { CircleSmall } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section
      className="w-full"
      style={{
        backgroundImage: "linear-gradient(to right, #CAEFC7, #E9EDE8, #55CC4B)",
      }}
    >
      <div className="container mx-auto pt-16 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Side */}
        <div className="max-w-xl px-6 md:px-12">
          <div className="w-fit flex items-center mb-6 text-muted-foreground border border-muted-foreground rounded-full p-2.5">
            <CircleSmall
              className="text-[#1E471A] fill-[#1E471A] mr-2"
              size={14}
            />
            <h2 className="text-[#1E471A] text-xs font-semibold">
              AI Powered Diagnosis
            </h2>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-black mb-2">
            AI Insights For Early Disease Detection
          </h1>
          <p className="text-[#122B10] text-lg mb-8 font-[450]">
            Medintel is a research-backed that helps analyze symptoms and
            predict potential diseases with AI accuracy in seconds. Built for
            anyone who values their health.
          </p>
          <div className="flex gap-2">
            <button className="text-base bg-[#0B1909] text-[#EEFAED] font-semibold rounded-2xl p-2.5 cursor-pointer hover:opacity-90 transition">
              Get Started
            </button>
            <button className="text-base text-[#0B1909] font-semibold bg-transparent border border-[#0B1909] rounded-2xl p-2.5 cursor-pointer">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative w-full h-full max-w-2xl">
          <Image
            src="/assets/images/hero-image.png"
            alt="AI Diagnosis Hero Image"
            width={600}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
