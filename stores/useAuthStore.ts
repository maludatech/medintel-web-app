"use client";

import { create } from "zustand";

interface User {
  userId: string;
  name: string;
  email: string;
  username: string;
  dateOfBirth: string;
  gender: string;
  bloodGroup: string;
  genotype: string;
  smoking: string;
  alcohol: string;
  exerciseLevel: string;
  dietType: string;
  registrationDate: string;
}

interface AuthState {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

// Create store with automatic initialization
export const useAuthStore = create<AuthState>((set) => {
  // Initialize user from localStorage immediately
  const storedUser =
    typeof window !== "undefined" ? localStorage.getItem("user") : null;
  const initialUser = storedUser ? JSON.parse(storedUser) : null;

  return {
    user: initialUser,
    login: (user) => {
      localStorage.setItem("user", JSON.stringify(user));
      set({ user });
    },
    logout: () => {
      localStorage.removeItem("user");
      set({ user: null });
    },
  };
});
