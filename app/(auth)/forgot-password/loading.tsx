import { Skeleton } from "@/components/ui/skeleton";

export default function ForgotPasswordLoading() {
  return (
    <section className="flex items-center justify-center dark:bg-[#0D200C] bg-[#F8F8F8] p-4 pt-24">
      <div className="w-full max-w-md rounded-lg bg-[#FFFFFF] dark:bg-[#000000] p-6 shadow-sm backdrop-blur-sm shadow-[#00000040] dark:shadow-[#FFFFFF40]">
        {/* Header */}
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <Skeleton className="h-6 w-3/4" /> {/* Title */}
          <Skeleton className="h-4 w-2/3" /> {/* Subtitle */}
        </div>

        {/* Form Fields */}
        <div className="mt-6 flex flex-col gap-4">
          {/* Email */}
          <div className="flex flex-col gap-2">
            <Skeleton className="h-4 w-28" /> {/* Email Label */}
            <Skeleton className="h-10 w-full rounded-md" /> {/* Email Input */}
          </div>
          {/* Submit Button */}
          <Skeleton className="h-10 w-full rounded-md" />{" "}
          {/* Send Reset Email Button */}
        </div>
      </div>
    </section>
  );
}
