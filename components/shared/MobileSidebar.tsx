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

const socialIcons = [
  {
    platform: "facebook",
    icon: <FaFacebookF className="text-primary text-[18px]" />,
    link: "https://facebook.com/maludatech",
  },
  {
    platform: "twitter",
    icon: <FaTwitter className="text-primary text-[18px]" />,
    link: "https://x.com/maludatechdev",
  },
  {
    platform: "telegram",
    icon: <FaTelegramPlane className="text-primary text-[18px]" />,
    link: "https://t.me/maludatechdev",
  },
  {
    platform: "linkedin",
    icon: <FaLinkedinIn className="text-primary text-[18px]" />,
    link: "https://linkedin.com/maludatech",
  },
  {
    platform: "instagram",
    icon: <FaInstagram className="text-primary text-[18px]" />,
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
            className="group flex items-center gap-2 rounded-xl px-2 py-1"
          >
            <BrainCircuit
              size={36}
              strokeWidth={1.75}
              className="text-primary transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
            />
            <span className="text-xl font-semibold tracking-wide text-foreground">
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
          <div className="px-6 flex flex-col gap-3">
            <Button className="w-full cursor-pointer">Register</Button>
            <Button className="w-full cursor-pointer">Login</Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
