"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "../ThemeToggle";
import { useAuthStore } from "@/stores/useAuthStore";
import { SidebarTrigger } from "@/components/ui/sidebar";
import images from "@/public/assets/images";

const pathNames = [
  { label: "Dashboard", url: "/dashboard" },
  { label: "Symptom Check", url: "/symptom-check" },
  { label: "My Profile", url: "/profile" },
  { label: "Edit Profile", url: "/profile/edit" },
  { label: "History", url: "/history" },
];

export const AccountNavbar = () => {
  const { user } = useAuthStore();
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
        lastDigit <= 3 && !["11", "12", "13"].includes(match)
          ? suffixes[lastDigit]
          : suffixes[0];
      return match + suffix;
    });

  const pathName = usePathname();

  // Match current path to label
  const currentPath =
    pathNames.find((p) => p.url === pathName)?.label || "Overview";

  return (
    <nav className="w-full">
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col gap-0.5 md:gap-1">
          <h1 className="text-lg md:text-xl">{currentPath}</h1>
          <p className="text-xs md:text-sm text-muted-foreground">
            {currentDate}
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <SidebarTrigger
            size="icon"
            className="cursor-pointer flex md:hidden"
          />
          <ThemeToggle />
          <Image
            src={
              user?.gender == "male" ? images.profileMale : images.profileFemale
            }
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
