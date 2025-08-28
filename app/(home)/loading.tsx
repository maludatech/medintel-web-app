"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main>
      {/* Hero Section Skeleton */}
      <section className="w-full">
        <div className="container mx-auto pt-16 flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-12">
          {/* Left Side */}
          <div className="max-w-xl flex flex-col gap-6">
            <Skeleton className="w-32 h-8 rounded-full" />
            <Skeleton className="w-3/4 h-12 md:h-16" />
            <Skeleton className="w-full h-20" />
            <div className="flex gap-2">
              <Skeleton className="w-28 h-10 rounded-2xl" />
              <Skeleton className="w-28 h-10 rounded-2xl" />
            </div>
          </div>
          {/* Right Side */}
          <Skeleton className="w-full max-w-2xl h-[300px] md:h-[400px] rounded-lg" />
        </div>
      </section>

      {/* About Section Skeleton */}
      <section className="w-full pt-16">
        <div className="container mx-auto flex flex-col gap-12 px-6 md:px-12">
          {/* First Container */}
          <div className="flex flex-col gap-4">
            <Skeleton className="w-64 h-1" />
            <Skeleton className="w-1/2 h-8" />
            <Skeleton className="w-full max-w-4xl h-16" />
          </div>
          {/* Second Container */}
          <div className="flex flex-col gap-4">
            <Skeleton className="w-1/2 h-8" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="flex flex-col gap-2 p-4 rounded-lg">
                  <Skeleton className="w-3/4 h-6" />
                  <Skeleton className="w-full h-4" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HowItWorks Section Skeleton */}
      <section className="w-full pt-16">
        <div className="container mx-auto flex flex-col gap-8 px-6 md:px-12">
          {/* Section Header */}
          <div className="flex flex-col gap-2 justify-center items-center text-center">
            <Skeleton className="w-1/2 h-8" />
            <Skeleton className="w-3/4 h-6" />
          </div>
          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="flex flex-col gap-2">
                <Skeleton className="w-full h-[200px] rounded-t-lg" />
                <div className="flex items-start gap-2 p-4">
                  <Skeleton className="w-6 h-6 rounded-full" />
                  <div className="flex flex-col gap-2">
                    <Skeleton className="w-1/2 h-6" />
                    <Skeleton className="w-full h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonies Section Skeleton */}
      <section className="w-full pt-16">
        <div className="container mx-auto flex flex-col w-full gap-10 px-6 md:px-12">
          {/* Header */}
          <div className="flex flex-col gap-4">
            <Skeleton className="w-32 h-8 rounded-full" />
            <Skeleton className="w-1/2 h-8" />
          </div>
          {/* Carousel */}
          <div className="w-full">
            <div className="flex gap-4 overflow-hidden">
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="flex-1 min-w-[250px] max-w-[33%]">
                  <div className="rounded-2xl p-6 flex flex-col gap-4 h-full">
                    <Skeleton className="w-8 h-8" />
                    <Skeleton className="w-full h-20" />
                    <div className="flex flex-col items-end gap-2">
                      <Skeleton className="w-1/3 h-6" />
                      <Skeleton className="w-1/4 h-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-4 gap-2">
              <Skeleton className="w-10 h-10 rounded-full" />
              <Skeleton className="w-10 h-10 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* NewsLetter Section Skeleton */}
      <section className="w-full py-16">
        <div className="container mx-auto flex flex-col justify-center items-center w-full gap-6 px-6 md:px-12">
          <div className="flex flex-col gap-2 items-center justify-center">
            <Skeleton className="w-3/4 h-8" />
            <Skeleton className="w-full max-w-xl h-12" />
          </div>
          <div className="flex gap-2 items-center justify-center w-full max-w-md">
            <Skeleton className="w-full h-10" />
            <Skeleton className="w-28 h-10" />
          </div>
        </div>
      </section>

      {/* Footer Section Skeleton */}
      <footer className="border-t border-border pt-16">
        <div className="container mx-auto flex flex-col justify-between gap-10 px-6 md:px-12 py-16 min-h-screen">
          <div className="flex flex-col gap-7 items-center justify-center">
            <Skeleton className="w-3/4 max-w-2xl h-10" />
            <Skeleton className="w-full max-w-lg h-12" />
            <Skeleton className="w-28 h-10 rounded-xl" />
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex md:hidden gap-4 items-center justify-center">
              {Array.from({ length: 4 }).map((_, index) => (
                <Skeleton key={index} className="w-16 h-4" />
              ))}
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-2">
                <Skeleton className="w-32 h-4" />
                <Skeleton className="w-40 h-4" />
              </div>
              <div className="hidden md:flex gap-4 items-center">
                {Array.from({ length: 4 }).map((_, index) => (
                  <Skeleton key={index} className="w-16 h-4" />
                ))}
              </div>
              <div className="flex gap-4 items-center">
                {Array.from({ length: 3 }).map((_, index) => (
                  <Skeleton key={index} className="w-6 h-6" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
