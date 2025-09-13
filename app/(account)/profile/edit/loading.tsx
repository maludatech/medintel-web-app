"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <section className="container mx-auto px-6 py-6 md:py-8 flex flex-col gap-10">
      {/* Navbar Skeleton */}
      <Skeleton className="h-12 w-full mb-6" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Card Skeleton */}
        <div className="bg-white dark:bg-[#0D0D0D] rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex flex-col gap-4 p-6">
            {/* Profile Image Skeleton */}
            <Skeleton className="h-24 w-24 rounded-full mx-auto border-2 border-[#122B10]" />

            {/* Username Field Skeleton */}
            <Skeleton className="h-10 w-full" />

            {/* Blood Group and Genotype Skeleton */}
            <div className="flex items-center gap-2 w-full">
              <Skeleton className="h-10 w-1/2" />
              <Skeleton className="h-10 w-1/2" />
            </div>

            {/* Gender Skeleton */}
            <Skeleton className="h-10 w-full" />
          </div>
        </div>

        {/* Right Card Skeleton */}
        <div className="flex flex-col gap-16 justify-between bg-white dark:bg-[#0D0D0D] rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex flex-col gap-4 p-6">
            {/* Smoking and Alcohol Skeleton */}
            <div className="flex items-center gap-4 w-full">
              <Skeleton className="h-10 w-1/2" />
              <Skeleton className="h-10 w-1/2" />
            </div>

            {/* Exercise Level and Diet Type Skeleton */}
            <div className="flex flex-col md:flex-row items-center gap-4 w-full">
              <Skeleton className="h-10 w-full md:w-1/2" />
              <Skeleton className="h-10 w-full md:w-1/2" />
            </div>

            {/* Password and Confirm Password Skeleton */}
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
          </div>

          {/* Buttons Skeleton */}
          <div className="flex items-center self-end gap-4 p-6 pt-0">
            <Skeleton className="h-10 w-20" />
            <Skeleton className="h-10 w-32" />
          </div>
        </div>
      </div>
    </section>
  );
}
