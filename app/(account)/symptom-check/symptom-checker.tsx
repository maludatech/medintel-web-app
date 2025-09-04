"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AccountNavbar } from "@/components/shared/account/AccountNavbar";
import { useAuthStore } from "@/stores/useAuthStore";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export const SymptomChecker: React.FC<{ callbackUrl: string }> = ({
  callbackUrl,
}) => {
  const router = useRouter();
  const { user } = useAuthStore();

  const [search, setSearch] = useState("");
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [duration, setDuration] = useState("");
  const [severity, setSeverity] = useState("");

  useEffect(() => {
    if (!user) {
      router.push(callbackUrl);
    }
  }, [user]);

  const handleAnalyze = () => {
    // 🔥 Hook this up to your backend later
    console.log({
      symptoms: selectedSymptoms,
      duration,
      severity,
    });
  };

  return (
    <section className="container mx-auto flex flex-col gap-10 md:gap-12 px-6 py-4 md:py-2 w-full">
      <AccountNavbar />
      <div className="flex items-center justify-center w-full">
        <Card className="max-w-lg w-full p-6 flex flex-col gap-6">
          <CardHeader className="text-center">
            <CardTitle className="text-xl font-semibold text-[#081207] dark:text-[#E7EAE7]">
              Check Your Symptoms
            </CardTitle>
            <CardDescription className="text-[#122B10] dark:text-[#E7EAE7]">
              Select your symptoms to get an AI-powered analysis and possible
              conditions.
            </CardDescription>
            <CardDescription className="text-[#122B10] dark:text-[#E7EAE7] italic">
              “This is not a medical diagnosis, Please consult a doctor.”
            </CardDescription>
          </CardHeader>

          <CardContent className="flex flex-col gap-4">
            {/* Search Input */}
            <Input
              placeholder="Search Symptoms..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {/* Selected Symptoms */}
            <div>
              <h3 className="font-semibold mb-1">Selected Symptoms</h3>
              {selectedSymptoms.length > 0 ? (
                <ul className="flex flex-wrap gap-2">
                  {selectedSymptoms.map((symptom, i) => (
                    <li
                      key={i}
                      className="px-2 py-1 bg-gray-200 dark:bg-gray-800 rounded-md text-sm"
                    >
                      {symptom}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-muted-foreground">
                  No symptoms selected yet
                </p>
              )}
            </div>

            {/* Duration */}
            <div>
              <h3 className="font-semibold mb-1">Select Duration</h3>
              <Select onValueChange={setDuration}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="days">Days</SelectItem>
                  <SelectItem value="hours">Hours</SelectItem>
                  <SelectItem value="weeks">Weeks</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Symptom Severity */}
            <div>
              <h3 className="font-semibold mb-1">Symptom Severity</h3>
              <div className="flex gap-4">
                {["Mild", "Moderate", "Severe"].map((level) => (
                  <label key={level} className="flex items-center gap-1">
                    <input
                      type="radio"
                      name="severity"
                      value={level.toLowerCase()}
                      checked={severity === level.toLowerCase()}
                      onChange={(e) => setSeverity(e.target.value)}
                      className="accent-green-500"
                    />
                    {level}
                  </label>
                ))}
              </div>
            </div>

            {/* Submit */}
            <Button
              onClick={handleAnalyze}
              disabled={selectedSymptoms.length === 0 || !duration || !severity}
              className="w-full"
            >
              Analyze Symptoms
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
