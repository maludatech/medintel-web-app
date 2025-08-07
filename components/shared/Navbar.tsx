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
    <header
      className="w-full"
      style={{
        backgroundImage: "linear-gradient(to right, #CAEFC7, #E9EDE8, #55CC4B)",
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Brand */}
        <Link
          href="/"
          className="group flex items-center gap-2 rounded-xl px-2 py-1"
        >
          <BrainCircuit
            size={36}
            strokeWidth={1.75}
            className="text-black transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
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
              className="relative text-lg font-medium text-black hover:text-primary transition-colors"
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
