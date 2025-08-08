"use client";
import images from "@/public/assets/images";

export const Footer = () => {
  return (
    <footer className="bg-[#E6F7E4] border-t border-border pt-16">
      <div
        className="container mx-auto flex flex-col w-full gap-10 px-6 md:px-12 pt-16"
        style={{
          backgroundImage: `url(${images.footerBackgroundImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col gap-4 items-center justify-center">
          <h2 className="text-4xl font-semibold text-center max-w-2xl">
            Predict Health Issues Smarter with MedIntel
          </h2>
          <p className="text-sm font-semibold max-w-md">
            Leverage AI to identify potential diseases early, track your health
            over time, and make informed decisions all from one intelligent
            platform.
          </p>
        </div>
      </div>
    </footer>
  );
};
