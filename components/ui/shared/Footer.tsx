"use client";

import Link from "next/link";
import { Github, Twitter } from "lucide-react";

export const Footer = () => {
  const links = [
    { name: "Home", href: "/" },
    { name: "Predict", href: "/predict" },
    { name: "About", href: "/about" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo or name */}
        <div className="text-xl font-semibold text-foreground">
          Med<span className="text-primary">Intel</span>
        </div>

        {/* Nav links */}
        <nav className="flex flex-wrap gap-4 text-muted-foreground text-sm">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-foreground"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Socials */}
        <div className="flex gap-4">
          <a
            href="https://github.com/maludatech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://x.com/maludatech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition"
          >
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="text-center text-xs text-muted-foreground py-4 border-t border-border">
        &copy; {new Date().getFullYear()} MedIntel. Built with 💡 by Maluda.
      </div>
    </footer>
  );
};
