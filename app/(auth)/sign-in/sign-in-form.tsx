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
import { APP_NAME } from "@/lib/constants";
import { FormField } from "@/components/shared/FormField";
import { useAuthStore } from "@/stores/useAuthStore";

interface CustomJwtPayload {
  userId: string;
  name: string;
  email: string;
  username: string;
  dateOfBirth: string;
  gender: "male" | "female" | "other";
  bloodGroup: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  genotype: "AA" | "AS" | "SS" | "AC" | "SC";
  smoking: "yes" | "no";
  alcohol: "yes" | "no";
  exerciseLevel: "none" | "light" | "moderate" | "heavy";
  dietType:
    | "balanced"
    | "high-protein"
    | "low-carb"
    | "vegetarian"
    | "vegan"
    | "keto";
}

interface User {
  userId: string;
  name: string;
  email: string;
  username: string;
  dateOfBirth: string;
  gender: "male" | "female" | "other";
  bloodGroup: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  genotype: "AA" | "AS" | "SS" | "AC" | "SC";
  smoking: "yes" | "no";
  alcohol: "yes" | "no";
  exerciseLevel: "none" | "light" | "moderate" | "heavy";
  dietType:
    | "balanced"
    | "high-protein"
    | "low-carb"
    | "vegetarian"
    | "vegan"
    | "keto";
  registrationDate: string;
}

interface SignInResponse {
  token: string;
  registrationDate: string;
}

// Validation schema
const schema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

type FormValues = yup.InferType<typeof schema>;

// Error handling utility
const handleApiError = (status: number, message?: string) => {
  switch (status) {
    case 401:
      return "Invalid email or password.";
    case 404:
      return "Service not found.";
    default:
      return message || "Something went wrong.";
  }
};

export const SignInForm: React.FC<{ callbackUrl: string }> = ({
  callbackUrl,
}) => {
  const router = useRouter();
  const { user, login } = useAuthStore();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  //Authentication check
  useEffect(() => {
    if (user) {
      router.push(callbackUrl);
    }
  }, [user, router, callbackUrl]);

  const decodeJwtToken = (token: string): CustomJwtPayload | null => {
    try {
      return jwtDecode<CustomJwtPayload>(token);
    } catch (error) {
      toast.error("Error decoding token");
      return null;
    }
  };

  const onSubmit = async (data: FormValues) => {
    setIsLoading(true);

    try {
      const normalizedData = { ...data, email: data.email.toLowerCase() };
      const response = await fetch("/api/auth/sign-in", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(normalizedData),
      });

      if (!response.ok) {
        const { message } = await response.json();
        toast.error(handleApiError(response.status, message));
        return;
      }

      const { token, registrationDate }: SignInResponse = await response.json();

      const decodedToken = decodeJwtToken(token);
      if (decodedToken) {
        const user: User = {
          userId: decodedToken.userId,
          name: decodedToken.name,
          email: decodedToken.email,
          username: decodedToken.username,
          dateOfBirth: decodedToken.dateOfBirth,
          gender: decodedToken.gender,
          bloodGroup: decodedToken.bloodGroup,
          genotype: decodedToken.genotype,
          alcohol: decodedToken.alcohol,
          smoking: decodedToken.smoking,
          exerciseLevel: decodedToken.exerciseLevel,
          dietType: decodedToken.dietType,
          registrationDate,
        };
        login(user);
        router.push("/dashboard");
      } else {
        toast.error("Failed to decode authentication token.");
      }
    } catch {
      toast.error("An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="flex my-auto mx-auto items-center justify-center p-4 pt-24 text-foreground">
      <div className="w-full flex flex-col gap-2 max-w-md rounded-lg bg-[#FFFFFF] dark:bg-[#000000] p-6 shadow-sm backdrop-blur-sm shadow-[#00000040] dark:shadow-[#FFFFFF40]">
        <div className="flex flex-col items-center justify-center gap-4 text-center pb-4">
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
            {isLoading ? <Spinner otherStyles="h-5 w-5 mx-auto" /> : "Sign In"}
          </button>
        </form>
        <Separator className="my-4 bg-gray-200 dark:bg-gray-700" />

        <div className="flex flex-col gap-2 text-center text-sm text-muted-foreground">
          <Link
            href="/forgot-password"
            className="underline hover:underline-offset-4 hover:text-primary"
          >
            Forgot Password?
          </Link>
          <p>
            Don&apos;t have an account?{" "}
            <Link
              href="/sign-up"
              className="underline hover:underline-offset-4 hover:text-primary"
            >
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};
