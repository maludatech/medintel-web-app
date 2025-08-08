"use client";

export const Footer = () => {
  const links = [
    { name: "Home", href: "/" },
    { name: "Predict", href: "/predict" },
    { name: "About", href: "/about" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-[#E6F7E4] border-t border-border pt-16">
      <div className="container mx-auto flex flex-col w-full gap-10 px-6 md:px-12"></div>
    </footer>
  );
};
