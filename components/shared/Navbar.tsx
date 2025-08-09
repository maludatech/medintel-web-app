"use client";

import React from "react";
import Link from "next/link";
import { BrainCircuit } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { APP_NAME } from "@/lib/constants";
import { MobileSidebar } from "./MobileSidebar";
import { Button } from "../ui/button";

export const Navbar: React.FC = () => {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#about", label: "About" },
    { href: "/predict", label: "Predict" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="w-full bg-[linear-gradient(to_right,_#CAEFC7,_#E9EDE8,_#55CC4B)] dark:bg-[linear-gradient(to_right,_#0D200C,_#B9C6B8,_#1E471A)]">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Brand */}
        <Link
          href="/"
          className="group flex items-center gap-1 rounded-xl px-2 py-1"
        >
          <BrainCircuit
            size={32}
            strokeWidth={1.75}
            className="text-foreground transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
          />
          <span className="text-xl text-primary font-bold tracking-wide">
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
        </div>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Button className="bg-foreground text-background px-4 py-2 rounded-md hover:bg-primary transition-colors cursor-pointer">
            Get started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <MobileSidebar />
        </div>
      </nav>
    </header>
  );
};
