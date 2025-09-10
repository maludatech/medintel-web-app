"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { AccountNavbar } from "@/components/shared/account/AccountNavbar";
import { Card, CardContent } from "@/components/ui/card";

export default function Loading() {
  return (
    <section className="container mx-auto px-6 py-6 md:py-8 flex flex-col gap-10">
      <AccountNavbar />
      <header className="mb-6">
        <Skeleton className="h-9 w-3/4 md:h-11 md:w-1/2 bg-gray-200 dark:bg-gray-700" />
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column: Personal Info Skeleton */}
        <Card className="bg-white dark:bg-[#0D0D0D] rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardContent className="flex flex-col gap-8 p-6">
            <div className="flex items-center gap-6">
              <Skeleton className="w-24 h-24 rounded-full bg-gray-200 dark:bg-gray-700" />
              <div className="space-y-2">
                <Skeleton className="h-6 w-32 bg-gray-200 dark:bg-gray-700" />
                <Skeleton className="h-4 w-24 bg-gray-200 dark:bg-gray-700" />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {[...Array(4)].map((_, idx) => (
                <div key={idx} className="flex justify-between items-center">
                  <Skeleton className="h-4 w-20 bg-gray-200 dark:bg-gray-700" />
                  <Skeleton
                    className={`h-6 w-24 ${
                      idx === 2 || idx === 3
                        ? "px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700"
                        : "bg-gray-200 dark:bg-gray-700"
                    }`}
                  />
                </div>
              ))}
            </div>

            <div className="flex gap-4 mt-6">
              <Skeleton className="h-10 flex-1 bg-gray-200 dark:bg-gray-700" />
              <Skeleton className="h-10 flex-1 bg-gray-200 dark:bg-gray-700" />
            </div>
          </CardContent>
        </Card>

        {/* Right Column: Lifestyle Skeleton */}
        <Card className="bg-white dark:bg-[#0D0D0D] rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardContent className="p-6 flex flex-col gap-6">
            <Skeleton className="h-8 w-1/3 bg-gray-200 dark:bg-gray-700" />
            <div className="flex flex-col gap-4">
              {[...Array(4)].map((_, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center bg-gray-50 dark:bg-[#121212] rounded-lg p-4"
                >
                  <div className="flex items-center gap-4">
                    <Skeleton className="w-3 h-3 rounded-full bg-gray-200 dark:bg-gray-700" />
                    <Skeleton className="h-5 w-40 bg-gray-200 dark:bg-gray-700" />
                  </div>
                  <Skeleton className="h-8 w-12 bg-gray-200 dark:bg-gray-700" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
