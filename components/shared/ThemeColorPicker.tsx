"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useThemeColor } from "@/stores/useThemeColor";

const themeColors: Record<string, string> = {
  "theme-blue": "oklch(0.705 0.212 242)",
  "theme-red": "oklch(0.65 0.22 27)",
  "theme-green": "oklch(0.75 0.2 142)",
  "theme-purple": "oklch(0.65 0.2 300)",
  "theme-yellow": "oklch(0.95 0.2 100)",
  "theme-orange": "oklch(0.78 0.22 65)",
  "theme-aqua": "oklch(0.8 0.23 185)",
  "theme-rose": "oklch(0.72 0.23 20)",
};

export const ThemeColorSwitcher: React.FC = () => {
  const { themeColor, setThemeColor } = useThemeColor();

  return (
    <div className="relative bg-background">
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-1 px-4 py-2 rounded-md bg-accent hover:bg-foreground/10 xl:bg-transparent xl:hover:bg-accent cursor-pointer">
          <span className="text-[16px] xl:text-lg text-primary">Theme</span>
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 ">
          <DropdownMenuLabel>Theme</DropdownMenuLabel>
          <DropdownMenuRadioGroup
            value={themeColor}
            onValueChange={setThemeColor}
          >
            {Object.entries(themeColors).map(([colorName, colorCode]) => (
              <DropdownMenuRadioItem
                key={colorName}
                value={colorName}
                className="cursor-pointer"
              >
                <div
                  className={`h-4 w-4 rounded-full transition-transform hover:scale-110 mr-2 ring-2 ${
                    themeColor === colorName ? "ring-ring" : "ring-transparent"
                  }`}
                  style={{ backgroundColor: colorCode }}
                />

                {colorName.replace("theme-", "")}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
