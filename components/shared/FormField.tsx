import { Eye, EyeOff } from "lucide-react";
import { Controller } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const FormField: React.FC<{
  id: string;
  label: string;
  type: string;
  register: any;
  error?: string;
  placeholder?: string;
  showPassword?: boolean;
  showLabel?: boolean;
  onToggle?: () => void;
  options?: { value: string; label: string }[];
  control?: any;
}> = ({
  id,
  label,
  type,
  register,
  error,
  placeholder,
  showPassword,
  showLabel,
  onToggle,
  options,
  control,
}) => (
  <div className="flex flex-col gap-1 w-full">
    {" "}
    {/* Ensure parent div takes full width */}
    {showLabel && (
      <label
        htmlFor={id}
        className="text-sm font-semibold capitalize text-foreground"
      >
        {label}
      </label>
    )}
    {type === "select" && options ? (
      <Controller
        control={control}
        name={id}
        render={({ field }) => (
          <Select onValueChange={field.onChange} value={field.value}>
            <SelectTrigger
              id={id}
              className={`w-full p-2 rounded-lg border bg-[#FFFFFF] dark:bg-[#000000] text-foreground text-sm placeholder-[#B9C6B8] focus:ring-2 focus:ring-primary focus:border-transparent transition-all h-10 ${
                error ? "border-red-500" : "border-[#B9C6B8]"
              }`} // Added h-10 for consistent height
              aria-describedby={error ? `${id}-error` : undefined}
              aria-label={`Select ${label}`}
            >
              <SelectValue placeholder={`Select ${label}`} />
            </SelectTrigger>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />
    ) : (
      <div className="relative w-full">
        <input
          id={id}
          type={showPassword && type === "password" ? "text" : type}
          className={`w-full p-2 rounded-lg border bg-[#FFFFFF] dark:bg-[#000000] text-foreground text-sm placeholder-[#B9C6B8] focus:ring-2 focus:ring-primary focus:border-transparent transition-all h-10 ${
            error ? "border-red-500" : "border-[#B9C6B8]"
          }`} // Added h-10 for consistent height
          placeholder={placeholder}
          {...register}
          aria-describedby={error ? `${id}-error` : undefined}
        />
        {type === "password" && onToggle && (
          <button
            type="button"
            onClick={onToggle}
            onKeyDown={(e) =>
              (e.key === "Enter" || e.key === " ") && onToggle()
            }
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <Eye className="h-5 w-5" />
            )}
          </button>
        )}
      </div>
    )}
    {error && (
      <p id={`${id}-error`} className="text-sm text-red-500 dark:text-red-400">
        {error}
      </p>
    )}
  </div>
);
