"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { jwtDecode } from "jwt-decode";
import { toast } from "sonner";
import { Spinner } from "@/components/shared/Spinner";
import { Separator } from "@/components/ui/separator";
import {
  APP_NAME,
  bloodGroupOptions,
  genderOptions,
  genotypeOptions,
} from "@/lib/constants";
import { FormField } from "@/components/shared/FormField";
import { useAuthStore } from "@/stores/useAuthStore";

// Validation schema
const schema = yup.object().shape({
  fullName: yup.string().required("Full name is required"),
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  username: yup
    .string()
    .required("Username is required")
    .min(6, "Username must be at least 6 characters")
    .max(10, "Username cannot exceed 10 characters"),
  phoneNumber: yup
    .number()
    .typeError("Phone number must be a number")
    .required("Phone number is required"),
  bloodGroup: yup.string().required("Blood group is required"),
  genotype: yup.string().required("Genotype is required"),
  DOB: yup.string().required("Date of birth is required"),
  gender: yup
    .string()
    .oneOf(["Male", "Female", "Other"], "Please select a valid gender")
    .required("Gender is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(15, "Password cannot exceed 15 characters")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords do not match")
    .required("Please confirm your password"),
});

type FormValues = yup.InferType<typeof schema>;

// Error handling utility
const handleApiError = (message?: string) => {
  return message || "Failed to sign up. Please try again.";
};

export const SignInForm: React.FC<{ callbackUrl: string }> = ({
  callbackUrl,
}) => {
  const router = useRouter();
  const { user } = useAuthStore();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState<string | undefined>(undefined);

  // Form setup
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver<FormValues, any, FormValues>(schema as any),
  });

  // Authentication check
  useEffect(() => {
    if (user) {
      router.push(callbackUrl);
    }
  }, [user, router, callbackUrl]);

  const onSubmit = async (data: FormValues) => {
    setIsLoading(true);
    setServerError(undefined);

    const processedData = {
      ...data,
      username: data.username.trim().toLowerCase(),
      email: data.email.trim().toLowerCase(),
    };

    try {
      const response = await fetch("/api/sign-up", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(processedData),
      });

      if (response.ok) {
        toast.success("Account created successfully! Please sign in.");
        router.replace("/sign-in");
      } else {
        const { message } = await response.json();
        const errorMessage = handleApiError(message);
        setServerError(errorMessage);
        toast.error(errorMessage);
      }
    } catch {
      const errorMessage = "An unexpected error occurred.";
      setServerError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="flex my-auto mx-auto items-center justify-center p-4 pt-24 text-foreground">
      <div className="w-full flex flex-col gap-2 max-w-md rounded-lg bg-[#FFFFFF] dark:bg-[#000000] p-6 shadow-sm backdrop-blur-sm shadow-[#00000040] dark:shadow-[#FFFFFF40]">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-2xl font-semibold">Welcome back to {APP_NAME}</h2>
          <p className="text-sm dark:text-[#E9EDE8] text-[#0B1909]">
            Login in to view your dashboard, check symptoms and see past
            predictions.
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
          role="form"
          aria-label="Sign up form"
        >
          <FormField
            id="email"
            label="Email Address"
            type="email"
            register={register("email")}
            error={errors.email?.message}
            placeholder="Email"
          />
          <FormField
            id="password"
            label="Password"
            type="password"
            register={register("password")}
            error={errors.password?.message}
            placeholder="Enter your password"
            showPassword={showPassword}
            onToggle={() => setShowPassword(!showPassword)}
          />
          <button
            type="submit"
            disabled={isLoading}
            className="mt-4 w-full rounded-lg bg-primary px-4 py-2 font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
          >
            {isLoading ? <Spinner otherStyles="h-5 w-5 mx-auto" /> : "Sign Up"}
          </button>
        </form>
        <Separator className="my-4 bg-gray-200 dark:bg-gray-700" />
        <div className="flex flex-col gap-2 text-center text-sm text-muted-foreground">
          <p>By creating an account, you accept our</p>
          <p>
            <Link
              href="/terms-of-service"
              className="underline hover:underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy-policy"
              className="underline hover:underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p>
          <p>
            Already have an account?{" "}
            <Link
              href="/sign-in"
              className="underline hover:underline-offset-4 hover:text-primary"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};
