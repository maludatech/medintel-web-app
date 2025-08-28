"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/stores/useAuthStore";

export const Dashboard: React.FC<{ callbackUrl: string }> = ({
  callbackUrl,
}) => {
  const router = useRouter();
  const { user, logout } = useAuthStore();

  useEffect(() => {
    if (!user) {
      router.push("/sign-in");
    }
  }, [user]);

  return (
    <div className="flex flex-col gap-2 px-2 py-4">
      <h1>Dashboard</h1>
      <p>Callback URL: {callbackUrl}</p>
      <Button
        variant={"destructive"}
        onClick={logout}
        className="cursor-pointer"
      >
        Log Out
      </Button>
    </div>
  );
};
