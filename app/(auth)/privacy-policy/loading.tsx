"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <section className="flex my-auto mx-auto items-center justify-center p-4 pt-24 text-foreground">
      <div className="w-full flex flex-col gap-6 max-w-md rounded-lg bg-[#FFFFFF] dark:bg-[#000000] p-6 shadow-sm backdrop-blur-sm shadow-[#00000040] dark:shadow-[#FFFFFF40]">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <Skeleton className="h-8 w-3/4 rounded" />
        </div>
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-5/6 mb-2" />
        <Skeleton className="h-4 w-2/3" />
        <div className="flex flex-col gap-4 mt-4">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-b-0"
            >
              <Skeleton className="h-6 w-1/3 mb-2" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6 mt-1" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
