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
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

// Map severity/risk → badge style
const severityColors: Record<string, string> = {
  Severe: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200",
  Moderate:
    "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-200",
  Low: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200",
  High: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200",
};

// format symptom: sore_throat → sore throat
const formatSymptom = (symptom: string) => symptom.replace(/_/g, " ");

export const History: React.FC<{ callbackUrl: string }> = ({ callbackUrl }) => {
  const router = useRouter();
  const { user } = useAuthStore();

  const [symptomHistory, setSymptomHistory] = useState<any[]>([]);
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    if (!user) {
      router.push(callbackUrl);
      return;
    }

    const fetchHistory = async () => {
      try {
        const res = await fetch(`/api/user/history?userId=${user.userId}`);
        if (!res.ok) throw new Error("Failed to fetch history");

        const data = await res.json();
        const history = data.history || [];
        setSymptomHistory(history);

        // auto-select first history if exists
        if (history.length > 0) {
          setSelected(history[0].id);
        }
      } catch (err) {
        console.error("Error loading history:", err);
      }
    };

    fetchHistory();
  }, [user, router, callbackUrl]);

  // === Download Report ===
  const handleDownloadReport = (entry: any) => {
    const doc = new jsPDF();

    // Header Branding
    doc.setFillColor(34, 197, 94);
    doc.rect(0, 0, 220, 30, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(18);
    doc.text("MedIntel AI - Symptom Report", 14, 20);

    doc.setTextColor(0, 0, 0);
    doc.setFontSize(12);

    // Patient Info
    doc.text(`Patient: ${user?.name ?? "Anonymous"}`, 14, 40);
    doc.text(`Date: ${entry.date} ${entry.time}`, 14, 48);
    if (entry.duration) doc.text(`Duration: ${entry.duration}`, 14, 56);
    doc.text(`Severity: ${entry.severity}`, 14, 64);
    doc.text(`Risk Level: ${entry.riskLevel}`, 14, 72);
    doc.text(`AI Prediction: ${entry.AIPrediction}`, 14, 80);
    doc.text(`Confidence Score: ${entry.confidentialScore}%`, 14, 88);

    // Symptoms Table
    const tableData = entry.symptoms
      .split(", ")
      .map((symptom: string, i: number) => [i + 1, formatSymptom(symptom)]);

    autoTable(doc, {
      startY: 100,
      head: [["#", "Symptom"]],
      body: tableData,
      styles: { fontSize: 11, cellPadding: 4 },
      headStyles: {
        fillColor: [34, 197, 94],
        textColor: [255, 255, 255],
        halign: "center",
      },
      bodyStyles: { valign: "middle" },
      columnStyles: {
        0: { halign: "center", cellWidth: 10 },
        1: { cellWidth: 160 },
      },
    });

    // Disclaimer
    let finalY = (doc as any).lastAutoTable.finalY || 120;
    doc.setTextColor(120, 120, 120);
    doc.setFontSize(10);
    doc.text(
      "Disclaimer: This report is AI-generated and not a medical diagnosis.\nAlways consult a qualified healthcare professional for medical advice.",
      14,
      finalY + 15
    );

    // Save
    doc.save("medintel_report.pdf");
  };

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

        {/* If no history */}
        {symptomHistory.length === 0 ? (
          <Card className="p-6 mt-4 text-center bg-white dark:bg-[#0D0D0D]">
            <p className="text-sm text-[#415540] dark:text-[#B6BDB5]">
              No history found. Run a symptom check to get started.
            </p>
          </Card>
        ) : (
          <>
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
                      {entry.symptoms
                        .split(", ")
                        .map((s: string) => formatSymptom(s))
                        .join(", ")}
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
                        {entry.AIPrediction} — {entry.severity} Symptoms
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
            {selected &&
              (() => {
                const entry = symptomHistory.find((e) => e.id === selected);
                if (!entry) return null;

                return (
                  <Card className="p-6 bg-white dark:bg-[#0D0D0D]">
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
                          {entry.symptoms
                            .split(", ")
                            .map((symptom: string, index: number) => (
                              <p
                                key={index}
                                className="flex items-center text-[#193D16] dark:text-[#C5E9C2] gap-1.5"
                              >
                                <CircleCheck
                                  size={14}
                                  fill="#68D25F"
                                  className="border-0"
                                />
                                {formatSymptom(symptom)}
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
                              Confidence Score:
                            </span>{" "}
                            {entry.confidentialScore}%
                          </p>
                          <p>
                            <span className="font-semibold">Risk Level:</span>{" "}
                            {entry.riskLevel}
                          </p>
                          <Button
                            onClick={() => handleDownloadReport(entry)}
                            className="mt-4 text-sm cursor-pointer"
                          >
                            <Download size={20} />
                            Download/Export Report
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })()}
          </>
        )}
      </div>
    </section>
  );
};
