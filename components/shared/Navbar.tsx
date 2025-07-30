"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "../ui/button";
import { APP_NAME } from "@/lib/constants";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

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
          className="text-2xl font-bold tracking-tight hover:opacity-90 transition-opacity"
        >
          {APP_NAME}
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            className="p-2 rounded-md hover:bg-muted"
            aria-label="Toggle Menu"
            onClick={toggleMenu}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </Button>
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
            className="block py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
