"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface AuthModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogOverlay className="fixed inset-0 bg-black/90" />
      <DialogContent className="sm:max-w-md rounded-2xl bg-[#E6F7E4] dark:bg-[#0D200C]">
        <DialogHeader className="flex flex-col gap-2 text-center">
          <DialogTitle className="text-lg font-semibold text-[#0B1909] dark:text-[#E9EDE8]">
            Join MedIntel To Start Your Health Journey
          </DialogTitle>
          <DialogDescription className="text-sm text-[#0B1909] dark:text-[#E9EDE8]">
            Create a free account to check symptoms, get AI-powered predictions,
            and track your health history all in one secure place.
          </DialogDescription>
          <p className="text-xs pt-2 text-[#0B1909] dark:text-[#E9EDE8] text-center">
            “Your health data is private, encrypted, and never shared without
            your consent”
          </p>
        </DialogHeader>

        <div className="flex flex-col gap-3 mt-2">
          <Link href={"/sign-up"}>
            <Button className="bg-[#0B1909] text-[#EEFAED] dark:bg-[#E9EDE8] dark:text-[#0D200C] hover:opacity-90 hover:bg-[#0B1909] dark:hover:bg-[#E9EDE8] cursor-pointer w-full">
              Sign Up
            </Button>
          </Link>
          <Link href={"/sign-in"}>
            <Button
              variant="outline"
              className="border-[#0D200C] text-[#0D200C] dark:border-[#E9EDE8] dark:text-[#E9EDE8] bg-transparent hover:opacity-80 cursor-pointer w-full"
            >
              Login
            </Button>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
};
