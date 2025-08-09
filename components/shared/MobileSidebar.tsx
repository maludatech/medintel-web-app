"use client";

import React from "react";
import Link from "next/link";
import { BrainCircuit } from "lucide-react";
import { CgMenuRight } from "react-icons/cg";
import {
  FaFacebookF,
  FaTwitter,
  FaTelegramPlane,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Button } from "../ui/button";
import { APP_DESCRIPTION, APP_NAME } from "@/lib/constants";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#about", label: "About" },
  { href: "/predict", label: "Predict" },
  { href: "#contact", label: "Contact" },
];

const socialIcons = [
  {
    platform: "facebook",
    icon: <FaFacebookF className="text-[#0B1909] text-[18px]" />,
    link: "https://facebook.com/maludatech",
  },
  {
    platform: "twitter",
    icon: <FaTwitter className="text-[#0B1909] text-[18px]" />,
    link: "https://x.com/maludatechdev",
  },
  {
    platform: "telegram",
    icon: <FaTelegramPlane className="text-[#0B1909] text-[18px]" />,
    link: "https://t.me/maludatechdev",
  },
  {
    platform: "linkedin",
    icon: <FaLinkedinIn className="text-[#0B1909] text-[18px]" />,
    link: "https://linkedin.com/maludatech",
  },
  {
    platform: "instagram",
    icon: <FaInstagram className="text-[#0B1909] text-[18px]" />,
    link: "https://instagram.com/ugotech.eth",
  },
];

export const MobileSidebar: React.FC = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <CgMenuRight className="text-black dark:text-white text-3xl cursor-pointer" />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-[90vw] max-w-xs h-screen overflow-y-auto pb-8"
      >
        <SheetTitle className="sr-only"></SheetTitle>
        <div className="flex flex-col gap-6 pt-8">
          <Link
            href="/"
            className="group flex items-center gap-1 rounded-xl px-2 py-1"
          >
            <BrainCircuit
              size={36}
              strokeWidth={1.75}
              className="text-foreground transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
            />
            <span className="text-xl font-semibold tracking-wide text-primary">
              {APP_NAME}
            </span>
          </Link>
          <div className="text-muted-foreground text-sm pt-2 px-6">
            {APP_DESCRIPTION}
          </div>

          <div className="flex flex-col gap-4 px-6">
            <div className="flex items-center gap-3">
              {socialIcons.map((icon, index) => (
                <Link
                  href={icon.link}
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  {icon.icon}
                </Link>
              ))}
            </div>
          </div>
          <Separator className="w-full" />
          <div className="flex flex-col gap-3 items-center justify-center">
            {navLinks.map((link, index) => (
              <Link
                href={link.href}
                key={index}
                className="text-lg font-semibold text-[#0B1909] dark:text-[#E9EDE8] hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="px-6 flex flex-col gap-3">
            <button className="w-full bg-[#0B1909] py-2 px-4 rounded-xl cursor-pointer text-[#EEFAED]">
              Get Started
            </button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
