"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import images from "@/public/assets/images";
import { useAuthStore } from "@/stores/useAuthStore";
import { AccountNavbar } from "@/components/shared/account/AccountNavbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

export const Profile: React.FC<{ callbackUrl: string }> = ({ callbackUrl }) => {
  const router = useRouter();
  const { user } = useAuthStore();

  useEffect(() => {
    if (!user) {
      router.push(callbackUrl);
    }
  }, [user]);

  return (
    <section className="container mx-auto flex flex-col gap-8 md:gap-10 px-6 py-4 md:py-2 w-full">
      <AccountNavbar />
      <div className="flex flex-col gap-4 w-full">
        {/* Greeting */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h1 className="font-semibold text-[#081207] dark:text-white">
              Your personal health and medical information
            </h1>
            <Button
              variant={"outline"}
              className="hidden md:flex w-fit cursor-pointer text-[#081207] dark:text-white"
            >
              Edit Profile
            </Button>
          </div>
          <Card className="bg-white dark:bg-[#0D0D0D] rounded-md">
            <CardContent className="flex flex-col gap-4">
              <div className="flex flex-row justify-between md:justify-start items-center md:items-start gap-6">
                <CardTitle className="text-[#081207] dark:text-white">
                  Personal Info
                </CardTitle>
                <Button
                  variant={"outline"}
                  className="md:hidden flex w-fit cursor-pointer text-[#081207] dark:text-white"
                >
                  Edit Profile
                </Button>
              </div>
              <div className="flex items-center gap-1">
                <Image
                  src={images.profile}
                  alt="Profile Picture"
                  className="w-24 h-24 rounded-full object-contain"
                />
                <div>
                  <h4>{user?.name}</h4>
                  <p>{user?.dateOfBirth} years old</p>
                  <p>{user?.gender}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
