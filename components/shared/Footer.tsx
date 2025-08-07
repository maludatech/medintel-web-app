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

  return <footer className="bg-background border-t border-border"></footer>;
};
