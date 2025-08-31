"use client";

import Image from "next/image";
import { ThemeToggle } from "../ThemeToggle";
import { SidebarTrigger } from "@/components/ui/sidebar";
import images from "@/public/assets/images";

export const AccountNavbar = () => {
  const currentDate = new Date()
    .toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
    .replace(/\b(\d{1,2})(?=\b)/, (match) => {
      const suffixes = ["th", "st", "nd", "rd"];
      const lastDigit = parseInt(match) % 10;
      const suffix =
        lastDigit <= 3 && match !== "11" && match !== "12" && match !== "13"
          ? suffixes[lastDigit]
          : suffixes[0];
      return match + suffix;
    });

  return (
    <nav className="w-full">
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col gap-0.5 md:gap-1">
          <h1 className="text-lg md:text-xl">Dashboard</h1>
          <p className="text-xs md:text-sm text-muted-foreground">
            {currentDate}
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <SidebarTrigger size={"icon"} className="cursor-pointer" />
          <ThemeToggle />
          <Image
            src={images.profile}
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
        </div>
      </div>
    </nav>
  );
};
