import { Skeleton } from "@/components/ui/skeleton";

export default function SignUpLoading() {
  return (
    <section className="flex items-center justify-center dark:bg-[#0D200C] bg-[#F8F8F8] p-4 pt-24">
      <div className="w-full max-w-md rounded-lg bg-[#FFFFFF] dark:bg-[#000000] p-6 shadow-sm backdrop-blur-sm">
        {/* Header */}
        <div className="flex flex-col items-center gap-4">
          <Skeleton className="h-6 w-3/4" /> {/* Title */}
          <Skeleton className="h-4 w-2/3" /> {/* Subtitle */}
        </div>

        {/* Form fields */}
        <div className="mt-6 flex flex-col gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex flex-col gap-2">
              <Skeleton className="h-4 w-24" /> {/* Label */}
              <Skeleton className="h-10 w-full rounded-md" /> {/* Input */}
            </div>
          ))}

          {/* Blood Group & Genotype */}
          <div className="flex gap-2">
            <div className="flex flex-col gap-2 w-1/2">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-10 w-full rounded-md" />
            </div>
            <div className="flex flex-col gap-2 w-1/2">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-10 w-full rounded-md" />
            </div>
          </div>

          {/* DOB & Gender */}
          <div className="flex gap-2">
            <div className="flex flex-col gap-2 w-1/2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-10 w-full rounded-md" />
            </div>
            <div className="flex flex-col gap-2 w-1/2">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-10 w-full rounded-md" />
            </div>
          </div>

          {/* Passwords */}
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex flex-col gap-2">
              <Skeleton className="h-4 w-28" />
              <Skeleton className="h-10 w-full rounded-md" />
            </div>
          ))}

          {/* Submit Button */}
          <Skeleton className="h-10 w-full rounded-md" />
        </div>

        {/* Footer Links */}
        <div className="mt-6 flex flex-col gap-2">
          <Skeleton className="h-4 w-1/2 mx-auto" />
          <Skeleton className="h-4 w-2/3 mx-auto" />
          <Skeleton className="h-4 w-1/3 mx-auto" />
        </div>
      </div>
    </section>
  );
}
