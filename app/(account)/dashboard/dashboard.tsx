"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/stores/useAuthStore";
import AppSidebar from "@/components/shared/account/Sidebar";
import { ca } from "date-fns/locale";
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

  return (
    <section className="flex">
      <AppSidebar />
      <div className="container mx-auto flex flex-col gap-2 px-6 py-4 md:py-2 w-full">
        <AccountNavbar />
      </div>
    </section>
  );
};
