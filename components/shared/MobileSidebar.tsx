"use client";

import React from "react";
import Link from "next/link";
import { Gem, Search } from "lucide-react";
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
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "./ThemeToggle";
import { ThemeColorSwitcher } from "./ThemeColorPicker";
import { Button } from "../ui/button";

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
        <CgMenuRight className="text-muted-foreground text-3xl cursor-pointer" />
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
            <Gem
              size={36}
              strokeWidth={1.75}
              className="text-primary transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
            />
            <span className="text-xl font-semibold tracking-wide text-foreground">
              Ciscryp
            </span>
          </Link>
          <div className="text-muted-foreground text-sm pt-2 px-6">
            Explore the best NFT stories and content - then create and share
            your own.
          </div>

          <div className="flex flex-col gap-4 px-6">
            <div className="flex items-center justify-between gap-2">
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
              <ThemeToggle />
            </div>
            <ThemeColorSwitcher />
          </div>
          <div className="w-full items-center p-2 relative px-6">
            <Input
              type="text"
              placeholder="Search NFT"
              className="w-full rounded-md border border-gray-300 text-sm transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200 p-4"
            />
            <Search className="cursor-pointer text-lg absolute top-3 right-8 text-muted-foreground z-10" />
          </div>
          <Separator className="w-full" />
          <div className="px-6">
            <Button>Register</Button>
            <Button>Login</Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
