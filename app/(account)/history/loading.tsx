"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function Loading() {
  return (
    <section className="container mx-auto flex flex-col gap-8 md:gap-10 px-6 py-4 md:py-2 w-full">
      {/* Navbar Placeholder */}
      <Skeleton className="h-12 w-full" />

      <div className="flex flex-col gap-4">
        {/* Search Bar Placeholder */}
        <div className="relative w-full flex items-center">
          <Skeleton className="h-10 w-full pl-8" />
        </div>

        {/* Description Placeholder */}
        <Skeleton className="h-4 w-3/4" />

        {/* History Cards Placeholder */}
        <Card className="flex flex-col gap-0 bg-white dark:bg-[#0D0D0D] divide-y divide-muted rounded-md py-0 overflow-hidden">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="p-6">
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-2">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-6 w-48" />
                  <div className="flex items-center gap-2">
                    <Skeleton className="h-6 w-16" />
                    <Skeleton className="h-4 w-32" />
                  </div>
                </div>
                <Skeleton className="h-6 w-6" />
              </div>
            </div>
          ))}
        </Card>

        {/* Detail Panel Placeholder */}
        <Card className="p-6 bg-white dark:bg-[#0D0D0D]">
          <div className="flex flex-col gap-3">
            <Skeleton className="h-8 w-1/3" />
            <Skeleton className="h-4 w-1/4" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-1/2" />
              <div className="flex flex-col ml-2 gap-1">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div key={index} className="flex items-center gap-1.5">
                    <Skeleton className="h-4 w-4" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <Skeleton className="h-4 w-1/3" />
                {Array.from({ length: 4 }).map((_, index) => (
                  <Skeleton key={index} className="h-4 w-2/3" />
                ))}
                <Skeleton className="h-10 w-1/3 mt-4" />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
