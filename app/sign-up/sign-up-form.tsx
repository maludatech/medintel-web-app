"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useAuthStore } from "@/stores/useAuthStore";

export const SignUpForm: React.FC<{ callbackUrl: string }> = ({
  callbackUrl,
}) => {
  const router = useRouter();
  const { user } = useAuthStore();

  useEffect(() => {
    if (user) {
      router.push(callbackUrl);
    }
  }, [user, router, callbackUrl]);

  return <section></section>;
};
