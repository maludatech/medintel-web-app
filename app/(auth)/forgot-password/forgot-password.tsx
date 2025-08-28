"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "sonner";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/useAuthStore";
import { FormField } from "@/components/shared/FormField";
import { Button } from "@/components/ui/button";

// ✅ Yup schema
const formSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
});

interface ForgotPasswordProps {
  callbackUrl: string;
}

export const ForgotPassword: React.FC<ForgotPasswordProps> = ({
  callbackUrl,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
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
    defaultValues: { email: "" },
  });

  const onSubmit = async (values: yup.InferType<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to send reset email");
      }

      toast.success("Password reset email sent! Check your inbox.");
      reset();
    } catch (error: any) {
      toast.error(
        error.message || "Failed to send reset email. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="flex my-auto mx-auto items-center justify-center p-4 pt-24 text-foreground">
      <div className="w-full flex flex-col gap-2 max-w-md rounded-lg bg-white dark:bg-black p-6 shadow-sm backdrop-blur-sm shadow-black/40 dark:shadow-white/40">
        <div className="flex flex-col items-center justify-center gap-4 text-center pb-4">
          <h2 className="text-2xl font-semibold">Forgot your password?</h2>
          <p className="text-sm dark:text-[#E9EDE8] text-[#0B1909]">
            Enter your email address to receive instructions for resetting your
            password
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
          role="form"
          aria-label="Forgot password form"
        >
          <FormField
            id="email"
            label="Email Address"
            type="email"
            register={register("email")}
            error={errors.email?.message}
            placeholder="Email"
          />

          <Button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 w-full cursor-pointer"
          >
            {isSubmitting ? "Sending..." : "Send Reset Email"}
          </Button>
        </form>
      </div>
    </section>
  );
};
