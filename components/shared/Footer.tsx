"use client";

import React from "react";
import Link from "next/link";
import { Twitter, Github, Facebook } from "lucide-react";
import { APP_NAME } from "@/lib/constants";
import images from "@/public/assets/images";

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
    { icon: <Twitter />, url: "https://twitter.com" },
    { icon: <Github />, url: "https://github.com" },
    { icon: <Facebook />, url: "https://facebook.com" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#E6F7E4] border-t border-border pt-16">
      <div
        className="container mx-auto flex flex-col justify-between gap-10 px-6 md:px-12 py-16 min-h-screen"
        style={{
          backgroundImage: `url(${images.footerBackgroundImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col gap-7 items-center justify-center ">
          <h2 className="text-4xl font-semibold text-center max-w-2xl">
            Predict Health Issues Smarter with MedIntel
          </h2>
          <p className="text-sm text-center font-semibold max-w-lg">
            Leverage AI to identify potential diseases early, track your health
            over time, and make informed decisions all from one intelligent
            platform.
          </p>
        </div>
        <div className="flex items-center justify-between ">
          <div className="flex flex-col gap-0.5">
            <h1 className="text-sm font-semibold text-[#0B1909]">
              Built By Maluda
            </h1>
            <h1 className="text-sm font-semibold text-[#0B1909]">
              © Copyright {currentYear} {APP_NAME}
            </h1>
          </div>
          <div className="flex gap-4 items-center">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.url}
                className="text-sm font-semibold text-[#0B1909] hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex gap-4 items-center">
            {socialLinks.map((link) => (
              <Link
                key={link.url}
                href={link.url}
                className="text-sm font-semibold text-[#0B1909] hover:text-primary"
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
