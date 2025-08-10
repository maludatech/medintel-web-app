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
  genoTypeOptions,
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
});

type FormValues = yup.InferType<typeof schema>;

// Error handling utility
const handleApiError = (message?: string) => {
  return message || "Failed to sign up. Please try again.";
};

export const SignUpForm: React.FC<{ callbackUrl: string }> = ({
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
    <section className="flex min-h-[80vh] items-center justify-center dark:bg-[#0D200C] bg-[#F8F8F8] p-4 pt-24 text-foreground">
      <div className="w-full flex flex-col gap-8 max-w-md rounded-lg bg-[#FFFFFF] dark:bg-[#000000] p-6 shadow-sm backdrop-blur-sm shadow-[#00000040] dark:shadow-[#FFFFFF40]">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-2xl font-semibold">
            Create Your MedIntel Account
          </h2>
          <p className="text-sm dark:text-[#E9EDE8] text-[#0B1909]">
            Get instant AI-powered health insights, It only takes a minute to
            join.
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
          role="form"
          aria-label="Sign up form"
        >
          <FormField
            id="username"
            label="Username"
            type="text"
            register={register("username")}
            error={errors.username?.message}
            placeholder="Enter your username"
          />
          <FormField
            id="fullName"
            label="Full Name"
            type="text"
            register={register("fullName")}
            error={errors.fullName?.message}
            placeholder="Your full name"
          />
          <FormField
            id="email"
            label="Email Address"
            type="email"
            register={register("email")}
            error={errors.email?.message}
            placeholder="Email"
          />
          <FormField
            id="phoneNumber"
            label="Phone Number"
            type="phone"
            register={register("phoneNumber")}
            error={errors.phoneNumber?.message}
            placeholder="phone number"
          />
          <div className="flex items-center gap-2 w-full">
            <FormField
              id="bloodGroup"
              label="Blood Group"
              type="select"
              control={control}
              register={register("bloodGroup")}
              error={errors.bloodGroup?.message}
              options={bloodGroupOptions}
            />
            <FormField
              id="genotype"
              label="Genotype"
              type="select"
              control={control}
              register={register("genotype")}
              error={errors.genotype?.message}
              options={genoTypeOptions}
            />
          </div>
          <div className="flex items-center gap-2 w-full">
            <FormField
              id="DOB"
              label="Date of Birth"
              type="date"
              control={control}
              register={register("DOB")}
              error={errors.DOB?.message}
            />
            <FormField
              id="gender"
              label="Gender"
              type="select"
              control={control}
              register={register("gender")}
              error={errors.gender?.message}
              options={genderOptions}
            />
          </div>
        </form>
      </div>
    </section>
  );
};
