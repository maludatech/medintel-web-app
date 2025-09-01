"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BrainCircuit } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { APP_NAME } from "@/lib/constants";
import { MobileSidebar } from "./MobileSidebar";
import { Button } from "../ui/button";
import { AuthModal } from "./Auth/AuthModal";
import { useAuthStore } from "@/stores/useAuthStore";

const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/symptom-check", label: "Predict" },
  { href: "/#howItWorks", label: "How It Works" },
  { href: "/contact", label: "Contact" },
];

const authenticatedNavLinks = [
  { href: "/", label: "Home" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/symptom-check", label: "Predict" },
  { href: "/profile", label: "Profile" },
  { href: "/history", label: "History" },
];

export const Navbar: React.FC = () => {
  const [authOpen, setAuthOpen] = useState(false);
  const { user } = useAuthStore();

  return (
    <>
      <header className="w-full bg-[linear-gradient(to_right,_#D1F0D0,_#E6ECE6,_#7AD878)] dark:bg-[linear-gradient(to_right,_#0A1A10,_#1A2E24,_#2A4B3A)]">
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
            {user
              ? authenticatedNavLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative text-lg font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))
              : navLinks.map((link) => (
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
            <Button
              onClick={() => setAuthOpen(true)}
              className="bg-foreground text-background px-4 py-2 rounded-md hover:opacity-90 hover:bg-foreground transition-colors cursor-pointer"
            >
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
      {/* Modal Component */}
      <AuthModal open={authOpen} onOpenChange={setAuthOpen} />
    </>
  );
};
