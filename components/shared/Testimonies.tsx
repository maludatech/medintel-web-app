"use client";

import { CircleSmall } from "lucide-react";
import React from "react";

export const Testimonies: React.FC = () => {
  return (
    <section className="w-full pt-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Side */}
        <div className="max-w-xl px-6 md:pb-2 md:px-12">
          <div className="w-fit flex items-center mb-6 text-muted-foreground border border-muted-foreground rounded-full p-2.5">
            <CircleSmall
              className="text-[#1E471A] fill-[#1E471A] mr-2"
              size={14}
            />
            <h2 className="text-[#1E471A] text-xs font-semibold">
              Testimonies
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};
