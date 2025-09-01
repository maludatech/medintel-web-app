"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Twitter, Github, Facebook } from "lucide-react";
import { APP_NAME } from "@/lib/constants";
import { useAuthStore } from "@/stores/useAuthStore";
import { AuthModal } from "./Auth/AuthModal";

interface Links {
  label: string;
  url: string;
}

interface SocialLink {
  icon: React.ReactNode;
  url: string;
}

export const Footer: React.FC = () => {
  const links: Links[] = [
    { label: "About", url: "/about" },
    { label: "Privacy Policy", url: "/privacy-policy" },
    { label: "Terms", url: "/terms-of-service" },
    { label: "FAQ", url: "/faq" },
  ];

  const socialLinks: SocialLink[] = [
    { icon: <Twitter size={20} />, url: "https://twitter.com" },
    { icon: <Github size={20} />, url: "https://github.com" },
    { icon: <Facebook size={20} />, url: "https://facebook.com" },
  ];

  const router = useRouter();

  const { user } = useAuthStore();

  const currentYear = new Date().getFullYear();

  const [authOpen, setAuthOpen] = useState(false);

  return (
    <>
      <footer className="bg-[linear-gradient(to_right,_#D1F0D0,_#E6ECE6,_#7AD878)] dark:bg-[linear-gradient(to_right,_#0A1A10,_#1A2E24,_#2A4B3A)] border-t border-[#B9C6B8] dark:border-[#2A4B3A] pt-12 pb-8">
        <div className="container mx-auto px-6 md:px-12">
          {/* CTA Section */}
          <div className="flex flex-col items-center justify-center gap-6 text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1909] dark:text-[#DDE3DD] max-w-2xl">
              Predict Health Issues Smarter with MedIntel
            </h2>
            <p className="text-base text-[#122B10] dark:text-[#DDE3DD] font-medium max-w-lg">
              Leverage AI to identify potential diseases early, track your
              health, and make informed decisions from one intelligent platform.
            </p>
            <button
              onClick={() =>
                user ? router.push("/symptom-check") : setAuthOpen(true)
              }
              className="bg-[#0B1909] text-[#EEFAED] dark:bg-[#E9EDE8] dark:text-[#0B1909] font-semibold rounded-2xl px-6 py-2.5 text-base hover:opacity-90 transition cursor-pointer"
            >
              Get Started
            </button>
          </div>

          {/* Links and Socials Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start gap-1">
              <h1 className="text-sm font-semibold text-[#0B1909] dark:text-[#DDE3DD]">
                Built By Maluda
              </h1>
              <h1 className="text-sm font-semibold text-[#0B1909] dark:text-[#DDE3DD]">
                © Copyright {currentYear} {APP_NAME}
              </h1>
            </div>
            <div className="flex gap-6">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.url}
                  className="text-sm font-medium text-[#0B1909] dark:text-[#DDE3DD] hover:text-[#55CC4B] dark:hover:text-[#7AD878] transition"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.url}
                  href={link.url}
                  className="text-[#0B1909] dark:text-[#DDE3DD] hover:text-[#55CC4B] dark:hover:text-[#7AD878] transition"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
      <AuthModal open={authOpen} onOpenChange={setAuthOpen} />
    </>
  );
};
