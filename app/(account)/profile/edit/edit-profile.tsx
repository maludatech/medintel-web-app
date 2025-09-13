"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useAuthStore } from "@/stores/useAuthStore";
import { AccountNavbar } from "@/components/shared/account/AccountNavbar";
import { Card, CardContent } from "@/components/ui/card";
import images from "@/public/assets/images";

export const EditProfile: React.FC<{ callbackUrl: string }> = ({
  callbackUrl,
}) => {
  const router = useRouter();
  const { user } = useAuthStore();

  useEffect(() => {
    if (!user) router.push(callbackUrl);
  }, [user]);

  return (
    <section className="container mx-auto px-6 py-6 md:py-8 flex flex-col gap-10">
      <AccountNavbar />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-white dark:bg-[#0D0D0D] rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardContent className="flex flex-col gap-8 p-6">
            <div className="flex items-center gap-6">
              <Image
                src={
                  user?.gender == "male"
                    ? images.profileMale
                    : images.profileFemale
                }
                alt="Profile"
                className="rounded-full object-cover border-2 border-[#122B10] transition-transform hover:scale-105 duration-300"
                width={100}
                height={100}
              />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white dark:bg-[#0D0D0D] rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardContent className="flex flex-col gap-8 p-6"></CardContent>
        </Card>
      </div>
    </section>
  );
};
