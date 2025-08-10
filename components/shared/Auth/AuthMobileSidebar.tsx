"use client";

import React, { useState } from "react";
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
import { APP_DESCRIPTION, APP_NAME } from "@/lib/constants";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#about", label: "About" },
  { href: "/predict", label: "Predict" },
  { href: "#contact", label: "Contact" },
];

const socialIcons = [
  { icon: <FaFacebookF />, link: "https://facebook.com/maludatech" },
  { icon: <FaTwitter />, link: "https://x.com/maludatechdev" },
  { icon: <FaTelegramPlane />, link: "https://t.me/maludatechdev" },
  { icon: <FaLinkedinIn />, link: "https://linkedin.com/maludatech" },
  { icon: <FaInstagram />, link: "https://instagram.com/ugotech.eth" },
];

export const AuthMobileSidebar: React.FC = () => {
  const [sheetOpen, setSheetOpen] = useState(false);

  const handleCloseSheet = () => setSheetOpen(false);

  return (
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
      <SheetTrigger asChild>
        <CgMenuRight className="text-black dark:text-white text-3xl cursor-pointer" />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-[90vw] max-w-xs h-screen overflow-y-auto pb-8 dark:bg-[#0D200C] bg-[#E9EDE8]"
      >
        <SheetTitle className="sr-only" />
        <div className="flex flex-col h-full">
          {/* Brand */}
          <div className="flex items-center gap-2 p-4">
            <BrainCircuit
              size={36}
              strokeWidth={1.75}
              className="text-foreground"
            />
            <span className="text-xl font-bold tracking-wide text-primary">
              {APP_NAME}
            </span>
          </div>

          {/* Description */}
          <p className="px-4 text-sm text-[#0B1909] dark:text-[#E9EDE8] opacity-80">
            {APP_DESCRIPTION}
          </p>

          <Separator className="my-4" />

          {/* Navigation */}
          <nav className="flex flex-col gap-4 px-4">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                onClick={handleCloseSheet} // ✅ Close on link click
                className="text-lg font-semibold text-[#0B1909] dark:text-[#E9EDE8] hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="mt-auto px-4 pt-6">
            <Separator className="mb-4" />
            <div className="flex gap-4">
              {socialIcons.map((s, i) => (
                <Link
                  key={i}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleCloseSheet} // ✅ Close on social click
                  className="p-2 rounded-full bg-white dark:bg-[#1E471A] text-[#0B1909] dark:text-white hover:bg-primary hover:text-white transition-colors"
                >
                  {React.cloneElement(s.icon, { size: 16 })}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
