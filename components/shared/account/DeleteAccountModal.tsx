"use client";

import React, { useState } from "react";
import * as yup from "yup";
import { OctagonAlert } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
} from "@/components/ui/dialog";
import { FormField } from "../FormField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@/components/ui/button";

interface DeleteAccountModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const schema = yup.object().shape({
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords do not match")
    .required("Please confirm your password"),
});

type FormValues = yup.InferType<typeof schema>;

export const DeleteAccountModal: React.FC<DeleteAccountModalProps> = ({
  open,
  onOpenChange,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Form setup
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver<FormValues, any, FormValues>(schema as any),
  });

  const onSubmit = () => {};

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogOverlay className="fixed inset-0 bg-black/90" />
      <DialogContent className="sm:max-w-md flex flex-col gap-8 rounded-2xl bg-white dark:bg-[#0D0D0D]">
        <DialogHeader className="flex flex-col gap-4 text-center">
          <DialogTitle className="flex items-center justify-center gap-1 text-lg font-semibold">
            <OctagonAlert color="#D48702" />
            Delete Account
          </DialogTitle>
          <DialogDescription className="text-[#122B10] dark:text-[#D6EFD4]">
            Are you sure you want to delete your account?  All your medical
            history, symptom checks and saved data will be permanently erased.
            This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 justify-center">
          <h2 className="text-lg font-semibold text-[#081207] dark:text-white text-center">
            Re-enter your password for confirmation
          </h2>
          <FormField
            id="password"
            label="Password"
            type="password"
            register={register("password")}
            error={errors.password?.message}
            placeholder="Enter your password"
            showPassword={showPassword}
            onToggle={() => setShowPassword(!showPassword)}
          />
          <FormField
            id="confirmPassword"
            label="Confirm Password"
            type="password"
            register={register("confirmPassword")}
            error={errors.confirmPassword?.message}
            placeholder="Confirm your password"
            showPassword={showConfirmPassword}
            onToggle={() => setShowConfirmPassword(!showConfirmPassword)}
          />
          <div className="flex gap-4 w-full">
            <Button
              variant={"secondary"}
              className="w-1/2 cursor-pointer hover:bg-gray-200/70 dark:hover:bg-gray-700/70 duration-200 transition"
              onClick={() => onOpenChange(false)} // Add this to close the dialog
            >
              Cancel
            </Button>
            <Button
              className="w-1/2 cursor-pointer hover:bg-primary/90 duration-200 transition"
              onClick={handleSubmit(onSubmit)}
            >
              Delete
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
