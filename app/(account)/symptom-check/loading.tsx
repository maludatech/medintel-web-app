"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Loading() {
  return (
    <section className="container mx-auto flex flex-col gap-10 md:gap-12 px-6 py-4 md:py-2 w-full">
      {/* Navbar Placeholder */}
      <Skeleton className="h-12 w-full" />

      <div className="flex items-center justify-center w-full">
        <Card className="max-w-lg w-full px-2 py-4 flex flex-col gap-8">
          <CardHeader className="flex flex-col gap-4 items-center justify-center text-center">
            <Skeleton className="h-8 w-2/3" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2 italic" />
          </CardHeader>

          <CardContent className="flex flex-col gap-4">
            {/* Search Input Placeholder */}
            <div className="relative flex flex-col w-full">
              <Skeleton className="h-10 w-full" />
            </div>

            {/* Selected Symptoms Placeholder */}
            <div>
              <Skeleton className="h-4 w-1/3 mb-1" />
              <div className="flex flex-wrap gap-2">
                {Array.from({ length: 3 }).map((_, index) => (
                  <Skeleton key={index} className="h-6 w-24" />
                ))}
              </div>
            </div>

            {/* Duration Placeholder */}
            <div>
              <Skeleton className="h-4 w-1/3 mb-1" />
              <Skeleton className="h-10 w-full" />
            </div>

            {/* Severity Placeholder */}
            <div>
              <Skeleton className="h-4 w-1/3 mb-1" />
              <div className="flex gap-4">
                {Array.from({ length: 3 }).map((_, index) => (
                  <Skeleton key={index} className="h-4 w-16" />
                ))}
              </div>
            </div>

            {/* Analyze Button Placeholder */}
            <Skeleton className="h-10 w-full" />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
