"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CircleSmall } from "lucide-react";
import { AuthModal } from "../Auth/AuthModal";
import images from "@/public/assets/images";
import { useAuthStore } from "@/stores/useAuthStore";

export const Hero: React.FC = () => {
  const router = useRouter();

  const [authOpen, setAuthOpen] = useState(false);

  const { user } = useAuthStore();

  return (
    <>
      <section className="w-full bg-[linear-gradient(to_right,_#D1F0D0,_#E6ECE6,_#7AD878)] dark:bg-[linear-gradient(to_right,_#0A1A10,_#1A2E24,_#2A4B3A)]">
        <div className="container mx-auto pt-16 flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Side */}
          <div className="max-w-xl px-6 md:pb-4 md:px-12">
            <div className="w-fit flex items-center mb-6 text-muted-foreground border border-[#B9C6B8] dark:border-[#DDE3DD] rounded-full p-2.5">
              <CircleSmall
                className="text-[#1E471A] fill-[#1E471A] dark:text-[#DDE3DD]  dark:fill-[#DDE3DD] mr-2"
                size={14}
              />
              <h2 className="text-[#1E471A] dark:text-[#DDE3DD] text-xs font-semibold">
                AI Powered Diagnosis
              </h2>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-black dark:text-[#DDE3DD] mb-2">
              AI Insights For Early Disease Detection
            </h1>
            <p className="text-[#122B10] dark:text-[#DDE3DD] text-lg mb-8 font-[450]">
              Medintel is a research-backed that helps analyze symptoms and
              predict potential diseases with AI accuracy in seconds. Built for
              anyone who values their health.
            </p>
            <div className="flex gap-2">
              <button
                onClick={() =>
                  user ? router.push("/symptom-check") : setAuthOpen(true)
                }
                className="text-base bg-[#0B1909] text-[#EEFAED] dark:bg-[#E9EDE8] dark:text-[#0B1909] font-semibold rounded-2xl p-2.5 cursor-pointer hover:opacity-90 transition"
              >
                Get Started
              </button>
              <button
                onClick={() => router.push("/#about")}
                className="text-base text-[#0B1909] dark:text-[#E9EDE8] font-semibold bg-transparent border border-[#0B1909] dark:border-[#E9EDE8] rounded-2xl p-2.5 cursor-pointer"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative w-full h-full max-w-2xl">
            <Image
              src={images.hero}
              alt="AI Diagnosis Hero Image"
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      {/* Modal Component */}
      <AuthModal open={authOpen} onOpenChange={setAuthOpen} />
    </>
  );
};
