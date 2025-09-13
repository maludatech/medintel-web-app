"use client";

import { create } from "zustand";

interface User {
  userId: string;
  name: string;
  email: string;
  username: string;
  dateOfBirth: string;
  gender: "male" | "female" | "other";
  bloodGroup: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  genotype: "AA" | "AS" | "SS" | "AC" | "SC";
  smoking: "yes" | "no";
  alcohol: "yes" | "no";
  exerciseLevel: "none" | "light" | "moderate" | "heavy";
  dietType:
    | "balanced"
    | "high-protein"
    | "low-carb"
    | "vegetarian"
    | "vegan"
    | "keto";
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
