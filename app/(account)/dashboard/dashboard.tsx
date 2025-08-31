"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/useAuthStore";
import { AccountNavbar } from "@/components/shared/account/AccountNavbar";

export const Dashboard: React.FC<{ callbackUrl: string }> = ({
  callbackUrl,
}) => {
  const router = useRouter();
  const { user } = useAuthStore();

  useEffect(() => {
    if (!user) {
      router.push(callbackUrl);
    }
  }, [user]);

  // Determine greeting based on current time (WAT)
  const now = new Date();
  const hour = now.getUTCHours() + 1; // Adjust for WAT (UTC+1)
  let greeting;
  if (hour >= 5 && hour < 12) {
    greeting = "Good Morning";
  } else if (hour >= 12 && hour < 17) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  const firstName = user?.name?.split(" ")[0] || "User";

  return (
    <section className="container mx-auto flex flex-col gap-8 md:gap-10 px-6 py-4 md:py-2 w-full">
      <AccountNavbar />
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-semibold">{`${greeting}, ${firstName}`}</h1>
          <p className="text-[#081207] dark:text-white">
            Here’s your Health snapshot for today.
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-4"></div>
      </div>
    </section>
  );
};
