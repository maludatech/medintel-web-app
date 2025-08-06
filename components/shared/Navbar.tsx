"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";
import { BrainCircuit } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { APP_NAME } from "@/lib/constants";
import { MobileSidebar } from "./MobileSidebar";
import { ThemeColorSwitcher } from "./ThemeColorPicker";

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="w-full border-b bg-background/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Brand */}
        <Link
          href="/"
            className="group flex items-center gap-2 rounded-xl px-2 py-1"
        >
         <BrainCircuit
            size={36}
            strokeWidth={1.75}
            className="text-primary transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
          />
          <span className="text-xl font-bold tracking-wide text-foreground">
            {APP_NAME}
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-lg font-medium text-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <ThemeColorSwitcher />
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <MobileSidebar />
        </div>
      </nav>

      {/* Mobile Links */}
      <div
        className={`md:hidden flex flex-col px-4 pb-4 space-y-3 transition-all duration-300 ${
          open ? "max-h-60 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block py-2 text-lg font-medium text-foreground hover:text-primary transition-colors"
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </header>
  );
};
