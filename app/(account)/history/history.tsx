"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/useAuthStore";
import { AccountNavbar } from "@/components/shared/account/AccountNavbar";
import { Search, ChevronRight, CircleCheck, Download } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const symptomHistory = [
  {
    id: 1,
    date: "12 Aug 2025",
    time: "3:42 PM",
    symptoms: "Cough, Fever, Headache",
    AIPrediction: "Flu",
    riskLevel: "Severe",
    severity: "Moderate",
    duration: "5 days",
    confidentialScore: 92,
  },
  {
    id: 2,
    date: "12 Aug 2025",
    time: "3:42 PM",
    symptoms: "Abdominal Pain",
    AIPrediction: "Gastroenteritis",
    riskLevel: "Low",
    severity: "Low",
    duration: "",
    confidentialScore: 0,
  },
  {
    id: 3,
    date: "12 Aug 2025",
    time: "3:42 PM",
    symptoms: "Fatigue",
    AIPrediction: "Depression",
    riskLevel: "High",
    severity: "Moderate",
    duration: "",
    confidentialScore: 0,
  },
  {
    id: 4,
    date: "12 Aug 2025",
    time: "3:42 PM",
    symptoms: "Abdominal Pain",
    AIPrediction: "Gastroenteritis",
    riskLevel: "Low",
    severity: "Low",
    duration: "",
    confidentialScore: 0,
  },
];

// Map severity/risk → badge style
const severityColors: Record<string, string> = {
  Severe: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200",
  Moderate:
    "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-200",
  Low: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200",
  High: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200",
};

export const History: React.FC<{ callbackUrl: string }> = ({ callbackUrl }) => {
  const router = useRouter();
  const { user } = useAuthStore();
  const [selected, setSelected] = useState<number | null>(1);

  useEffect(() => {
    if (!user) {
      router.push(callbackUrl);
    }
  }, [user]);

  return (
    <section className="container mx-auto flex flex-col gap-8 md:gap-10 px-6 py-4 md:py-2 w-full">
      <AccountNavbar />
      <div className="flex flex-col gap-4">
        {/* Search Bar */}
        <div className="relative w-full flex items-center">
          <Input
            className="w-full pl-8"
            placeholder="Search by condition or keyword..."
          />
          <Search className="absolute left-2 text-muted-foreground" size={16} />
        </div>

        <p className="text-[#081207] dark:text-white font-semibold">
          A log of your past symptom checks and AI predictions.
        </p>

        {/* History Cards */}
        <Card className="flex flex-col gap-0 bg-white dark:bg-[#0D0D0D] divide-y divide-muted rounded-md py-0 overflow-hidden">
          {symptomHistory.map((entry) => (
            <div
              key={entry.id}
              className={cn(
                "flex justify-between items-center p-6 cursor-pointer hover:bg-muted/40 transition",
                selected === entry.id && "bg-muted/60"
              )}
              onClick={() =>
                setSelected(entry.id === selected ? null : entry.id)
              }
            >
              {/* Left Side */}
              <div className="flex flex-col gap-1">
                <p className="text-sm text-[#415540] dark:text-[#B6BDB5]">
                  {entry.date} {entry.time}
                </p>
                <p className="font-semibold text-lg text-[#081207] dark:text-white">
                  {entry.symptoms}
                </p>
                <div className="flex items-center gap-2">
                  <Badge
                    className={cn(
                      "text-xs px-2 py-0.5 rounded-md",
                      severityColors[entry.riskLevel]
                    )}
                  >
                    {entry.riskLevel}
                  </Badge>
                  <p className="text-xs text-[#415540] dark:text-[#B6BDB5]">
                    {entry.AIPrediction} ({entry.severity} Risk)
                  </p>
                </div>
              </div>

              {/* Right side */}
              <ChevronRight
                className={cn(
                  "transition-transform",
                  selected === entry.id && "rotate-90"
                )}
              />
            </div>
          ))}
        </Card>

        {/* Detail Panel */}
        {selected && (
          <Card className="p-6 bg-white dark:bg-[#0D0D0D]">
            {(() => {
              const entry = symptomHistory.find((e) => e.id === selected)!;
              return (
                <div className="flex flex-col gap-3">
                  <h2 className="text-xl font-bold text-[#081207] dark:text-white">
                    Possible {entry.AIPrediction}
                  </h2>
                  <p className="text-sm text-[#0B1909] dark:text-[#D6EFD4]">
                    {entry.date} {entry.time}
                  </p>

                  <div className="space-y-1 text-sm">
                    <p>
                      <span className="text-base text-[#0B1909] dark:text-white font-semibold">
                        Symptoms Provided:
                      </span>
                    </p>
                    <div className="flex flex-col ml-2">
                      {entry.symptoms.split(", ").map((symptom, index) => (
                        <p
                          key={index}
                          className="flex items-center text-[#193D16] dark:text-[#C5E9C2] gap-1.5"
                        >
                          <CircleCheck
                            size={14}
                            fill="#68D25F"
                            className="border-0"
                          />
                          {symptom}
                        </p>
                      ))}
                    </div>
                    <div className="flex flex-col gap-2 mt-4">
                      <h4 className="text-base text-[#081207] dark:text-white font-semibold">
                        Additional Context
                      </h4>
                      {entry.duration && (
                        <p>
                          <span className="font-semibold">Duration:</span>{" "}
                          {entry.duration}
                        </p>
                      )}

                      <p>
                        <span className="font-semibold">Severity:</span>{" "}
                        {entry.severity}
                      </p>
                      <p>
                        <span className="font-semibold">
                          Confidential Score:
                        </span>{" "}
                        {entry.confidentialScore}%
                      </p>
                      <p>
                        <span className="font-semibold">Risk Level:</span>{" "}
                        {entry.riskLevel}
                      </p>
                      <Button className="mt-4 text-sm cursor-pointer">
                        <Download size={20} />
                        Download/Export Report
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })()}
          </Card>
        )}
      </div>
    </section>
  );
};
