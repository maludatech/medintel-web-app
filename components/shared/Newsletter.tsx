"use client";

import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const NewsLetter: React.FC = () => {
  return (
    <section className="w-full py-16">
      <div className="container mx-auto flex flex-col justify-center items-center w-full gap-6 px-6 md:px-12">
        <div className="flex flex-col gap-2 items-center justify-center">
          <h1 className="text-3xl font-bold text-[#0B1909] dark:text-[#E9EDE8] text-center">
            Subscribe to our newsletter for the latest updates
          </h1>
          <p className="text-black dark:text-[#E9EDE8] max-w-xl text-center">
            We’re putting the final touches on something powerful. Join our
            early user list to get notified when MedIntel officially launches,
            no spam, just updates.
          </p>
        </div>
        <div className="flex gap-2 items-center justify-center w-full max-w-md">
          <Input
            placeholder="Email Address"
            className="w-full bg-[#F8F8F8] text-[#173514] dark:border-[#E9EDE8] dark:text-[#E9EDE8] dark:bg-black"
          />
          <Button className="text-black cursor-pointer">Notify Me</Button>
        </div>
      </div>
    </section>
  );
};
