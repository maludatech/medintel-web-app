"use client";

import React from "react";
import { useTheme } from "next-themes";

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      type="button"
      className="cursor-pointer bg-transparent text-foreground rounded-md p-1.5 transition-all duration-150 hover:scale-105 active:scale-95"
      title="Toggle theme"
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {/* Sun */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-[22px] h-[22px] dark:hidden"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2m0 16v2m10-10h-2M4 12H2m16.95 4.95-1.414-1.414M6.464 6.464 5.05 5.05m14.142 0-1.414 1.414M6.464 17.536 5.05 18.95" />
      </svg>

      {/* Moon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="hidden w-[22px] h-[22px] dark:block"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
      </svg>
    </button>
  );
};
