"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { Search } from "lucide-react";
import { AccountNavbar } from "@/components/shared/account/AccountNavbar";
import { toast } from "sonner";
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

const SYMPTOM_LIST = [
  "fever",
  "cough",
  "headache",
  "fatigue",
  "chills",
  "loss_of_taste",
  "shortness_of_breath",
  "sore_throat",
  "nausea",
  "body_ache",
];

export const SymptomChecker: React.FC<{ callbackUrl: string }> = ({
  callbackUrl,
}) => {
  const router = useRouter();
  const { user } = useAuthStore();

  const [search, setSearch] = useState("");
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [duration, setDuration] = useState("");
  const [severity, setSeverity] = useState("");
  const [filtered, setFiltered] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    if (!user) {
      router.push(callbackUrl);
    }
  }, [user]);

  useEffect(() => {
    if (!search.trim()) {
      setFiltered([]);
      return;
    }
    const query = search.toLowerCase();
    setFiltered(
      SYMPTOM_LIST.filter(
        (sym) =>
          sym.toLowerCase().includes(query) && !selectedSymptoms.includes(sym)
      )
    );
  }, [search, selectedSymptoms]);

  const addSymptom = (symptom: string) => {
    if (!selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms((prev) => [...prev, symptom]);
    }
    setSearch("");
    setFiltered([]);
  };

  const handleAnalyze = async () => {
    setLoading(true);
    setResults([]);

    try {
      const res = await fetch("/api/user/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: user?.userId,
          symptoms: selectedSymptoms,
          duration,
          severity,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => null);
        toast.error(
          errorData?.error || "Something went wrong analyzing your symptoms."
        );
        setResults([]);
        return;
      }

      const data = await res.json();

      let parsed: any[] = [];
      if (Array.isArray(data.conditions)) {
        parsed = data.conditions;
      } else if (data.predicted_disease) {
        parsed = [
          {
            name: data.predicted_disease,
            likelihood: Math.round((data.confidence ?? 0) * 100),
            recommendation: "Consult a doctor if symptoms persist.",
            risk:
              (data.confidence ?? 0) > 0.7
                ? "High"
                : (data.confidence ?? 0) > 0.4
                  ? "Medium"
                  : "Low",
          },
        ];
      }

      if (parsed.length === 0) {
        toast.warning("No conditions could be predicted. Try again.");
      }

      setResults(parsed);
    } catch (err) {
      console.error("Error analyzing:", err);
      toast.error("Network error. Please check your connection and retry.");
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadReport = () => {
    if (results.length === 0) return;

    const doc = new jsPDF();

    // === Header Branding ===
    doc.setFillColor(34, 197, 94); // Tailwind green-500
    doc.rect(0, 0, 220, 30, "F"); // green banner
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(18);
    doc.text("MedIntel AI - Symptom Report", 14, 20);

    // Reset text color
    doc.setTextColor(0, 0, 0);

    // === Patient Info Section ===
    doc.setFontSize(12);
    doc.text(`Patient: ${user?.name ?? "Anonymous"}`, 14, 40);
    doc.text(`Duration: ${duration}`, 14, 48);
    doc.text(`Severity: ${severity}`, 14, 56);

    // === Results Table ===
    const tableData = results.map((r: any, i: number) => [
      i + 1,
      r.name,
      `${r.likelihood ?? 0}%`,
      r.risk,
      r.recommendation,
    ]);

    autoTable(doc, {
      startY: 70,
      head: [["#", "Condition", "Likelihood", "Risk", "Recommendation"]],
      body: tableData,
      styles: {
        fontSize: 11,
        cellPadding: 4,
      },
      headStyles: {
        fillColor: [34, 197, 94], // green header
        textColor: [255, 255, 255],
        halign: "center",
      },
      bodyStyles: {
        valign: "middle",
      },
      columnStyles: {
        0: { halign: "center", cellWidth: 10 },
        2: { halign: "center", cellWidth: 30 },
        3: { halign: "center", cellWidth: 25 },
        4: { cellWidth: 80 },
      },
    });

    // === Disclaimer Section ===
    let finalY = (doc as any).lastAutoTable.finalY || 100;
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

  const resetForm = () => {
    setResults([]);
    setLoading(false);
  };

  return (
    <section className="container mx-auto flex flex-col gap-10 md:gap-12 px-6 py-4 md:py-2 w-full">
      <AccountNavbar />

      <div className="flex items-center justify-center w-full">
        <Card className="max-w-lg w-full px-2 py-4 flex flex-col gap-8">
          {/* Loading */}
          {loading && results.length === 0 && (
            <CardContent className="flex flex-col items-center justify-center h-64 gap-4">
              <div className="w-6 h-6 border-4 border-green-500 border-t-transparent rounded-full animate-spin" />
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Analyzing your symptoms with MedIntel AI...
              </p>
            </CardContent>
          )}

          {/* Results */}
          {!loading && results.length > 0 && (
            <CardContent className="flex flex-col gap-6">
              <div className="text-center">
                <h2 className="text-lg font-bold">
                  Here are your AI-powered insights
                </h2>
                <p className="text-xs text-muted-foreground italic">
                  “This is not a medical diagnosis. Consult a healthcare
                  professional for proper medical advice.”
                </p>
              </div>

              {results.map((r, i) => (
                <div
                  key={i}
                  className="border rounded-lg p-4 flex flex-col gap-2"
                >
                  <div className="flex items-center justify-between">
                    <p className="font-semibold">{r.name}</p>
                    <span
                      className={`text-xs font-medium px-2 py-1 rounded ${
                        r.risk === "Low"
                          ? "bg-green-100 text-green-700"
                          : r.risk === "Medium"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                      }`}
                    >
                      {r.risk}
                    </span>
                  </div>
                  {r.likelihood !== undefined && (
                    <p className="text-sm">{r.likelihood}% Likely</p>
                  )}
                  {r.recommendation && (
                    <p className="text-xs text-gray-600 dark:text-gray-300">
                      {r.recommendation}
                    </p>
                  )}
                </div>
              ))}

              <div className="flex gap-3 w-full">
                <Button
                  variant="outline"
                  onClick={() =>
                    window.open(
                      "https://www.google.com/maps/search/doctor+near+me",
                      "_blank"
                    )
                  }
                  className="w-1/2 cursor-pointer"
                >
                  Find a Doctor
                </Button>
                <Button
                  variant="outline"
                  onClick={handleDownloadReport}
                  className="w-1/2 cursor-pointer"
                >
                  Download Report
                </Button>
              </div>

              <button
                className="text-green-600 underline text-sm cursor-pointer"
                onClick={resetForm}
              >
                Re-check Symptoms
              </button>
            </CardContent>
          )}

          {/* Form */}
          {!loading && results.length === 0 && (
            <>
              <CardHeader className="flex flex-col gap-4 items-center justify-center text-center">
                <CardTitle className="text-xl font-semibold text-[#081207] dark:text-[#E7EAE7]">
                  Check Your Symptoms
                </CardTitle>
                <CardDescription className="text-[#122B10] dark:text-[#E7EAE7]">
                  Select your symptoms to get an AI-powered analysis and
                  possible conditions.
                </CardDescription>
                <CardDescription className="text-[#122B10] dark:text-[#E7EAE7] italic">
                  “This is not a medical diagnosis, Please consult a doctor.”
                </CardDescription>
              </CardHeader>

              <CardContent className="flex flex-col gap-4">
                {/* Search Input */}
                <div className="relative flex flex-col w-full">
                  <div className="relative flex items-center w-full">
                    <Input
                      placeholder="Search Symptoms..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="bg-[#F8F8F8] dark:bg-[#0A1809] placeholder-[#B6BDB5]"
                    />
                    <Search
                      className="absolute right-2"
                      size={15}
                      color="#B6BDB5"
                    />
                  </div>

                  {filtered.length > 0 && (
                    <ul className="absolute top-full mt-1 w-full bg-white dark:bg-[#0A1809] border rounded-md shadow-md z-10 max-h-40 overflow-y-auto">
                      {filtered.map((sym, i) => (
                        <li
                          key={i}
                          onClick={() => addSymptom(sym)}
                          className="px-3 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 text-sm"
                        >
                          {sym.replaceAll("_", " ")}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Selected Symptoms */}
                <div>
                  <h3 className="font-semibold mb-1 text-[#081207] dark:text-[#E7EAE7]">
                    Selected Symptoms
                  </h3>
                  {selectedSymptoms.length > 0 ? (
                    <ul className="flex flex-wrap gap-2">
                      {selectedSymptoms.map((symptom, i) => (
                        <li
                          key={i}
                          onClick={() =>
                            setSelectedSymptoms((prev) =>
                              prev.filter((s) => s !== symptom)
                            )
                          }
                          className="px-2 py-1 bg-gray-200 dark:bg-gray-800 rounded-md text-sm cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-700 transition"
                          title="Click to remove"
                        >
                          {symptom.replaceAll("_", " ")}
                          <span className="ml-1 text-xs font-semibold">✕</span>
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
                  <h3 className="font-semibold mb-1 text-[#081207] dark:text-[#E7EAE7]">
                    Select Duration
                  </h3>
                  <Select onValueChange={setDuration}>
                    <SelectTrigger className="w-full bg-[#F8F8F8] dark:bg-[#0A1809] placeholder-[#B6BDB5]">
                      <SelectValue placeholder="Choose duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="days">Days</SelectItem>
                      <SelectItem value="hours">Hours</SelectItem>
                      <SelectItem value="weeks">Weeks</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Severity */}
                <div>
                  <h3 className="font-semibold mb-1 text-[#081207] dark:text-[#E7EAE7]">
                    Symptom Severity
                  </h3>
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

                <Button
                  onClick={handleAnalyze}
                  disabled={
                    selectedSymptoms.length === 0 || !duration || !severity
                  }
                  className="w-full cursor-pointer"
                >
                  Analyze Symptoms
                </Button>
              </CardContent>
            </>
          )}
        </Card>
      </div>
    </section>
  );
};
