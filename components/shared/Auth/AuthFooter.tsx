"use client";

import React from "react";
import Link from "next/link";
import { Twitter, Github, Facebook } from "lucide-react";
import { APP_NAME } from "@/lib/constants";

interface Links {
  label: string;
  url: string;
}

interface SocialLink {
  icon: React.ReactNode;
  url: string;
}

export const AuthFooter: React.FC = () => {
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
    <footer className="dark:bg-[#0D200C] bg-[#F8F8F8]">
      <div className="container mx-auto flex flex-col justify-between gap-10 px-6 md:px-12 py-16">
        <div className="flex flex-col gap-6">
          <div className="flex md:hidden gap-4 items-center justify-center">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.url}
                className="text-sm font-semibold text-[#0B1909] dark:text-[#E9EDE8] hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center justify-between ">
            <div className="flex flex-col gap-0.5">
              <h1 className="text-sm font-semibold text-[#0B1909] dark:text-[#E9EDE8]">
                Built By Maluda
              </h1>
              <h1 className="text-sm font-semibold text-[#0B1909] dark:text-[#E9EDE8]">
                © Copyright {currentYear} {APP_NAME}
              </h1>
            </div>
            <div className="hidden md:flex gap-4 items-center">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.url}
                  className="text-sm font-semibold text-[#0B1909] dark:text-[#E9EDE8] hover:text-primary"
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
                  className="text-sm font-semibold text-[#0B1909] dark:text-[#E9EDE8] hover:text-primary"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
