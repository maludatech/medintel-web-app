"use client";

import { Eye, EyeOff, ChevronDownIcon } from "lucide-react";
import { Controller } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";

export const FormField: React.FC<{
  id: string;
  label: string;
  type: string;
  register?: any;
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
}) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      {showLabel && (
        <label
          htmlFor={id}
          className="text-sm font-semibold capitalize text-foreground"
        >
          {label}
        </label>
      )}

      {/* SELECT FIELD */}
      {type === "select" && options ? (
        <Controller
          control={control}
          name={id}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger
                id={id}
                className={`w-full p-2 rounded-lg border bg-[#FFFFFF] dark:bg-[#000000] text-foreground text-sm h-10 data-[placeholder]:text-[#B9C6B8] ${
                  error ? "border-red-500" : "border-[#B9C6B8]"
                }`}
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
      ) : type === "date" ? (
        /* DATE PICKER FIELD */
        <Controller
          control={control}
          name={id}
          render={({ field }) => {
            const [open, setOpen] = useState(false);
            const selectedDate =
              field.value && !isNaN(Date.parse(field.value))
                ? new Date(field.value)
                : undefined;

            return (
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="ghost"
                    id={id}
                    className={`w-full justify-between rounded-lg font-normal h-10 bg-[#FFFFFF] dark:bg-[#000000] text-foreground text-sm border border-[#B9C6B8] hover:bg-transparent hover:text-none ${
                      error ? "border-red-500" : "border-[#B9C6B8]"
                    } ${!selectedDate ? "text-[#B9C6B8]" : ""}`}
                    aria-describedby={error ? `${id}-error` : undefined}
                  >
                    <span>
                      {selectedDate
                        ? selectedDate.toLocaleDateString()
                        : placeholder || "Select date"}
                    </span>
                    <ChevronDownIcon className="h-4 w-4 text-[#B9C6B8]" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    captionLayout="dropdown"
                    onSelect={(date) => {
                      field.onChange(
                        date ? date.toISOString().split("T")[0] : null
                      );
                      setOpen(false);
                    }}
                    fromYear={1900}
                    toYear={new Date().getFullYear()}
                  />
                </PopoverContent>
              </Popover>
            );
          }}
        />
      ) : (
        /* DEFAULT INPUT FIELD */
        <div className="relative w-full">
          <input
            id={id}
            type={showPassword && type === "password" ? "text" : type}
            className={`w-full p-2 rounded-lg border bg-[#FFFFFF] dark:bg-[#000000] text-foreground text-sm placeholder-[#B9C6B8] focus:ring-2 focus:ring-primary focus:border-transparent transition-all h-10 ${
              error ? "border-red-500" : "border-[#B9C6B8]"
            }`}
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
        <p
          id={`${id}-error`}
          className="text-sm text-red-500 dark:text-red-400"
        >
          {error}
        </p>
      )}
    </div>
  );
};
