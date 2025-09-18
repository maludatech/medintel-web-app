"use client";

import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { useRouter } from "next/navigation";
import Image from "next/image";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "sonner";
import { useAuthStore } from "@/stores/useAuthStore";
import { AccountNavbar } from "@/components/shared/account/AccountNavbar";
import { Card, CardContent } from "@/components/ui/card";
import { FormField } from "@/components/shared/FormField";
import images from "@/public/assets/images";
import {
  bloodGroupOptions,
  booleanOptions,
  DietTypeOptions,
  exerciseLevelOptions,
  genderOptions,
  genotypeOptions,
} from "@/lib/constants";
import { Button } from "@/components/ui/button";

// Validation schema
const schema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required")
    .min(3, "Username must be at least 3 characters")
    .max(30, "Username cannot exceed 30 characters")
    .matches(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain letters, numbers, and underscores"
    ),
  bloodGroup: yup
    .string()
    .oneOf(
      ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
      "Please select a valid blood group"
    )
    .required("Blood group is required"),
  genotype: yup
    .string()
    .oneOf(["AA", "AS", "SS", "AC", "SC"], "Please select a valid genotype")
    .required("Genotype is required"),
  gender: yup
    .string()
    .oneOf(["male", "female", "other"], "Please select a valid gender")
    .required("Gender is required"),
  smoking: yup
    .string()
    .oneOf(["yes", "no"], "Please select a valid value")
    .required("Smoking is required"),
  alcohol: yup
    .string()
    .oneOf(["yes", "no"], "Please select a valid value")
    .required("Alcohol is required"),
  exerciseLevel: yup
    .string()
    .oneOf(
      ["none", "light", "moderate", "heavy"],
      "Please select a valid exercise level"
    )
    .required("Exercise level is required"),
  dietType: yup
    .string()
    .oneOf(
      ["balanced", "high-protein", "low-carb", "vegetarian", "vegan", "keto"],
      "Please select a valid diet type"
    )
    .required("Diet type is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords do not match")
    .required("Please confirm your password"),
});

type FormValues = yup.InferType<typeof schema>;

// Error handling utility
const handleApiError = (message?: string) => {
  return message || "Failed to update profile. Please try again.";
};

export const EditProfile: React.FC<{ callbackUrl: string }> = ({
  callbackUrl,
}) => {
  const router = useRouter();
  const { user } = useAuthStore();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Form setup
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver<FormValues, any, FormValues>(schema as any),
    defaultValues: {
      username: user?.username || "",
      bloodGroup:
        (user?.bloodGroup as
          | "A+"
          | "A-"
          | "B+"
          | "B-"
          | "AB+"
          | "AB-"
          | "O+"
          | "O-"
          | undefined) || undefined,
      genotype:
        (user?.genotype as "AA" | "AS" | "SS" | "AC" | "SC" | undefined) ||
        undefined,
      gender:
        (user?.gender as "male" | "female" | "other" | undefined) || undefined,
      smoking: user?.smoking || "no",
      alcohol: user?.alcohol || "no",
      exerciseLevel:
        (user?.exerciseLevel as
          | "none"
          | "light"
          | "moderate"
          | "heavy"
          | undefined) || undefined,
      dietType:
        (user?.dietType as
          | "balanced"
          | "high-protein"
          | "low-carb"
          | "vegetarian"
          | "vegan"
          | "keto"
          | undefined) || undefined,
      password: "",
      confirmPassword: "",
    },
  });

  useEffect(() => {
    if (!user) router.push(callbackUrl);
  }, [user]);

  const onSubmit = async (data: FormValues) => {
    setIsLoading(true);

    const processedData = {
      ...data,
      username: data.username.trim().toLowerCase(),
      userId: user?.userId,
    };

    try {
      const response = await fetch("/api/user/profile", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(processedData),
      });
      if (response.ok) {
        toast.success("Profile updated successfully!");
      } else {
        const { message } = await response.json();
        const errorMessage = handleApiError(message);
        toast.error(errorMessage);
      }
    } catch {
      const errorMessage = "An unexpected error occurred.";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="container mx-auto px-6 py-6 md:py-8 flex flex-col gap-10">
      <AccountNavbar />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-white dark:bg-[#0D0D0D] rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardContent className="flex flex-col gap-4 p-6">
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
            <div className="flex flex-col gap-4">
              <FormField
                id="username"
                label="Username"
                showLabel
                type="text"
                placeholder={user?.username}
                register={register("username")}
                error={errors.username?.message}
              />
            </div>
            <div className="flex items-center gap-2 w-full">
              <FormField
                id="bloodGroup"
                label="Blood Group"
                showLabel
                type="select"
                // placeholder={user?.bloodGroup}
                control={control}
                error={errors.bloodGroup?.message}
                options={bloodGroupOptions}
              />
              <FormField
                id="genotype"
                label="Genotype"
                showLabel
                type="select"
                control={control}
                error={errors.genotype?.message}
                options={genotypeOptions}
              />
            </div>
            <FormField
              id="gender"
              label="Gender"
              showLabel
              type="select"
              control={control}
              register={register("gender")}
              error={errors.gender?.message}
              options={genderOptions}
            />
          </CardContent>
        </Card>
        <Card className="flex flex-col gap-16 justify-between bg-white dark:bg-[#0D0D0D] rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardContent className="flex flex-col gap-4 p-6">
            <div className="flex items-center gap-4 w-full">
              <FormField
                id="smoking"
                label="Smoking"
                showLabel
                type="select"
                control={control}
                error={errors.smoking?.message}
                options={booleanOptions}
              />
              <FormField
                id="alcohol"
                label="Alcohol"
                showLabel
                type="select"
                control={control}
                error={errors.alcohol?.message}
                options={booleanOptions}
              />
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 w-full">
              <FormField
                id="exerciseLevel"
                label="Exercise Level"
                showLabel
                type="select"
                control={control}
                error={errors.exerciseLevel?.message}
                options={exerciseLevelOptions}
              />
              <FormField
                id="dietType"
                label="Diet Type"
                showLabel
                type="select"
                control={control}
                error={errors.dietType?.message}
                options={DietTypeOptions}
              />
            </div>
            <FormField
              id="password"
              label="Password"
              showLabel
              type="password"
              register={register("password")}
              error={errors.password?.message}
              placeholder="Enter your password"
              showPassword={showPassword}
              onToggle={() => setShowPassword(!showPassword)}
            />
            <FormField
              id="confirmPassword"
              label="Confirm Password"
              showLabel
              type="password"
              register={register("confirmPassword")}
              error={errors.confirmPassword?.message}
              placeholder="Confirm your password"
              showPassword={showConfirmPassword}
              onToggle={() => setShowConfirmPassword(!showConfirmPassword)}
            />
          </CardContent>
          <CardContent className="flex items-center self-end gap-4 p-6 pt-0">
            <Button
              variant={"secondary"}
              className="w-fit cursor-pointer hover:bg-gray-200/70 dark:hover:bg-gray-700/70 duration-200 transition"
              onClick={() => router.push("/profile")}
            >
              Cancel
            </Button>
            <Button
              className="w-fit cursor-pointer hover:bg-primary/90 duration-200 transition"
              disabled={isLoading}
              onClick={handleSubmit(onSubmit)}
            >
              Save Changes
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
