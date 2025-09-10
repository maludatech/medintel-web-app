"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import images from "@/public/assets/images";
import { useAuthStore } from "@/stores/useAuthStore";
import { AccountNavbar } from "@/components/shared/account/AccountNavbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

// Helpers
const getAge = (dob: string | Date) => {
  const birthDate = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
  return age;
};

const getFirstName = (fullName?: string) => {
  if (!fullName) return "N/A";
  const firstName = fullName.split(" ")[0];
  return firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
};

const capitalize = (str?: string) => {
  if (!str) return "N/A";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

// Placeholder lifestyle data
const lifestyleFactors = [
  { label: "Smoking", value: "No", color: "green" },
  { label: "Alcohol", value: "No", color: "green" },
  { label: "Exercise", value: "Regular", color: "blue" },
  { label: "Diet", value: "Balanced", color: "orange" },
];

export const Profile: React.FC<{ callbackUrl: string }> = ({ callbackUrl }) => {
  const router = useRouter();
  const { user } = useAuthStore();

  useEffect(() => {
    if (!user) router.push(callbackUrl);
  }, [user]);

  return (
    <section className="container mx-auto px-6 py-6 md:py-8 flex flex-col gap-10">
      <AccountNavbar />
      <header className="mb-6">
        <h1 className="font-bold text-2xl md:text-3xl text-[#081207] dark:text-white">
          Your Personal Health & Medical Info
        </h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column: Personal Info */}
        <Card className="bg-white dark:bg-[#0D0D0D] rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardContent className="flex flex-col gap-8 p-6">
            <div className="flex items-center gap-6">
              <Image
                src={images.profile}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border-2 border-[#122B10] transition-transform hover:scale-105 duration-300"
                width={96}
                height={96}
              />
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-[#081207] dark:text-white">
                  {getFirstName(user?.name)}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
                  {user?.dateOfBirth ? getAge(user.dateOfBirth) : "N/A"} yrs,{" "}
                  {capitalize(user?.gender)}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  Full Name
                </span>
                <span className="text-gray-900 dark:text-gray-100">
                  {user?.name || "N/A"}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  Email
                </span>
                <span className="text-gray-900 dark:text-gray-100">
                  {user?.email || "N/A"}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  Blood Group
                </span>
                <span className="bg-red-100 dark:bg-red-800 px-3 py-1 rounded-full text-sm text-red-800 dark:text-red-200">
                  {user?.bloodGroup || "N/A"}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  Genotype
                </span>
                <span className="bg-blue-100 dark:bg-blue-800 px-3 py-1 rounded-full text-sm text-blue-800 dark:text-blue-200">
                  {user?.genotype || "N/A"}
                </span>
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <Button
                variant="outline"
                className="flex-1 cursor-pointer  bg-[#E7EAE7] dark:bg-[#212621] hover:bg-gray-200 dark:hover:bg-[#2A2A2A] transition-colors duration-200"
                aria-label="Edit profile"
              >
                Edit Profile
              </Button>
              <Button
                className="flex-1 cursor-pointer  bg-red-500 text-white hover:bg-red-600 transition-colors duration-200"
                aria-label="Delete account"
              >
                Delete Account
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Right Column: Lifestyle */}
        <Card className="bg-white dark:bg-[#0D0D0D] rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardContent className="p-6 flex flex-col gap-6">
            <CardTitle className="text-[#081207] dark:text-white text-xl md:text-2xl">
              Lifestyle Factors
            </CardTitle>
            <div className="flex flex-col gap-4">
              {lifestyleFactors.map((factor, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center bg-gray-50 dark:bg-[#121212] rounded-lg p-4 hover:bg-gray-100 dark:hover:bg-[#1A1A1A] transition-colors duration-200"
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`w-3 h-3 rounded-full ${
                        factor.color === "green"
                          ? "bg-green-500"
                          : factor.color === "blue"
                            ? "bg-blue-500"
                            : "bg-orange-500"
                      }`}
                    ></span>
                    <p className="font-medium text-[#122B10] dark:text-[#D6EFD4] text-base">
                      {factor.label}:{" "}
                      <span className="font-normal">{factor.value}</span>
                    </p>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-[#122B10] dark:text-[#D6EFD4] hover:bg-gray-200 dark:hover:bg-[#2A2A2A] transition-colors duration-200"
                    onClick={() => alert(`Edit ${factor.label}`)}
                    aria-label={`Edit ${factor.label} lifestyle factor`}
                  >
                    Edit
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
