"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "sonner";
import { Lock, Eye, EyeOff } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuthStore } from "@/stores/useAuthStore";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/shared/FormField";
import { cn } from "@/lib/utils";

// ✅ Yup schema
const formSchema = yup
  .object({
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords don't match")
      .required("Confirm Password is required"),
  })
  .required();

export const ResetPassword = ({ callbackUrl }: { callbackUrl: string }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const token = searchParams.get("token");
  const { user } = useAuthStore();

  useEffect(() => {
    if (user) {
      router.push(callbackUrl);
    }
  }, [user, router, callbackUrl]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<yup.InferType<typeof formSchema>>({
    resolver: yupResolver(formSchema),
    defaultValues: { password: "", confirmPassword: "" },
  });

  const onSubmit = async (values: yup.InferType<typeof formSchema>) => {
    if (!email || !token) {
      toast.error("Invalid reset link");
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, token, password: values.password }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to reset password");
      }

      toast.success("Password reset successfully! Please sign in.");
      router.push("/sign-in");
    } catch (error: any) {
      toast.error(
        error.message || "Failed to reset password. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // ❌ Invalid token/email UI
  if (!email || !token) {
    return (
      <div className="flex justify-center items-center pt-16 px-4">
        <div
          className={cn(
            "w-full max-w-xl p-8 bg-card rounded-lg shadow-lg border border-border animate-in fade-in duration-500 text-center"
          )}
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Invalid Link
          </h2>
          <p className="text-muted-foreground mb-6">
            The reset link is invalid or expired.
          </p>
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Link href="/forgot-password">Request Another Link</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <section className="flex my-auto items-center justify-center p-4 pt-24 text-foreground">
      <div className="w-full flex flex-col gap-2 max-w-md rounded-lg bg-white dark:bg-black p-6 shadow-sm backdrop-blur-sm shadow-black/40 dark:shadow-white/40">
        <div className="flex flex-col gap-4 text-center pb-4">
          <h2 className="text-2xl font-semibold">Reset Password</h2>
          <p className="text-sm dark:text-[#E9EDE8] text-[#0B1909]">
            Enter and confirm your new password
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
          role="form"
          aria-label="Reset password form"
        >
          <FormField
            id="password"
            label="New Password"
            type="password"
            register={register("password")}
            error={errors.password?.message}
            placeholder="Enter new password"
            showPassword={showPassword}
            onToggle={() => setShowPassword(!showPassword)}
          />

          <FormField
            id="confirmPassword"
            label="Confirm Password"
            type="password"
            register={register("confirmPassword")}
            error={errors.confirmPassword?.message}
            placeholder="Confirm new password"
            showPassword={showConfirmPassword}
            onToggle={() => setShowConfirmPassword(!showConfirmPassword)}
          />

          <Button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 w-full cursor-pointer"
          >
            {isSubmitting ? "Resetting..." : "Reset Password"}
          </Button>
        </form>
      </div>
    </section>
  );
};
