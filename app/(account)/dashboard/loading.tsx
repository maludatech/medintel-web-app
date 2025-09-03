import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

export default function Loading() {
  return (
    <section className="container mx-auto flex flex-col gap-8 md:gap-10 px-6 py-4 md:py-2 w-full">
      {/* AccountNavbar Skeleton */}
      <div className="flex items-center gap-4">
        <Skeleton className="h-10 w-10 rounded-full" />
        <Skeleton className="h-6 w-48" />
      </div>

      <div className="flex flex-col gap-4 w-full">
        {/* Greeting Skeleton */}
        <div className="flex flex-col gap-1">
          <Skeleton className="h-8 w-64" />
          <Skeleton className="h-4 w-96" />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 md:gap-6 justify-between">
          <div className="flex flex-col gap-8 w-full lg:w-2/3">
            {/* Snapshot Cards Skeleton */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4">
              {[...Array(4)].map((_, index) => (
                <Card
                  key={index}
                  className="rounded-xl border p-4 flex flex-col gap-2 shadow-sm"
                >
                  <div className="flex justify-between items-center">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-6 w-6" />
                  </div>
                  <Skeleton className="h-6 w-32" />
                  <Skeleton className="h-4 w-40" />
                </Card>
              ))}
            </div>

            {/* Quick Access and AI Recommendations Skeleton */}
            <div className="flex flex-col lg:flex-row gap-8 w-full">
              <div className="flex flex-col gap-2 w-full">
                <Skeleton className="h-6 w-32" />
                {[...Array(3)].map((_, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between gap-1 p-2 rounded-md"
                  >
                    <div className="flex items-center gap-2">
                      <Skeleton className="h-5 w-5" />
                      <Skeleton className="h-4 w-40" />
                    </div>
                    <Skeleton className="h-5 w-5" />
                  </div>
                ))}
              </div>
              <Card className="p-4 w-full flex flex-col gap-2">
                <Skeleton className="h-5 w-36" />
                {[...Array(3)].map((_, index) => (
                  <div key={index} className="flex items-center gap-1 p-2">
                    <Skeleton className="h-4 w-4" />
                    <Skeleton className="h-4 w-48" />
                  </div>
                ))}
              </Card>
            </div>

            {/* Recent Predictions Table Skeleton */}
            <Card className="p-4 w-full flex flex-col gap-2">
              <Skeleton className="h-6 w-48" />
              {[...Array(5)].map((_, index) => (
                <div key={index} className="flex justify-between p-2">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-4 w-24" />
                </div>
              ))}
            </Card>
          </div>

          <div className="flex flex-col gap-4 w-full lg:w-1/3">
            {/* Health Tip Skeleton */}
            <Card className="rounded-xl border p-4 shadow-sm">
              <div className="flex gap-1 items-center">
                <Skeleton className="h-6 w-6" />
                <Skeleton className="h-5 w-24" />
              </div>
              <div className="flex gap-0.5 mt-2">
                <Skeleton className="h-4 w-4" />
                <Skeleton className="h-4 w-64" />
              </div>
            </Card>

            {/* Health Summary Skeleton */}
            <Card className="rounded-xl border p-4 shadow-sm flex flex-col gap-4">
              <Skeleton className="h-5 w-36" />
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                <div className="flex flex-col gap-2 flex-1">
                  {[...Array(3)].map((_, index) => (
                    <div
                      key={index}
                      className="flex justify-between py-2 px-4 rounded-2xl border"
                    >
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-4 w-16" />
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center">
                  <Skeleton className="h-24 w-24 rounded-full" />
                </div>
              </div>
            </Card>

            {/* Symptom Trend Chart Skeleton */}
            <Card className="rounded-xl border p-4 shadow-sm">
              <Skeleton className="h-6 w-36" />
              <Skeleton className="h-48 w-full mt-2" />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
