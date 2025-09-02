// components/dashboard/RecentPredictions.tsx
"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Prediction {
  date: string;
  condition: string;
  confidence: string;
  risk: "Low" | "Moderate" | "High";
}

const predictions: Prediction[] = [
  {
    date: "Aug 8, 2025",
    condition: "Possible Migraine",
    confidence: "85%",
    risk: "Moderate",
  },
  {
    date: "Aug 5, 2025",
    condition: "Hyper Tension",
    confidence: "92%",
    risk: "Moderate",
  },
  {
    date: "Jul 29, 2025",
    condition: "Heart Disease",
    confidence: "60%",
    risk: "Low",
  },
  {
    date: "Jul 28, 2025",
    condition: "Low Anemia",
    confidence: "90%",
    risk: "High",
  },
];

const riskColors: Record<string, string> = {
  Low: "bg-green-200 text-green-800",
  Moderate: "bg-yellow-200 text-yellow-800",
  High: "bg-red-200 text-red-800",
};

export const RecentPredictions = () => {
  return (
    <Card className="rounded-xl border p-4 shadow-sm dark:bg-[#0D0D0D]">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold text-[#081207] dark:text-white">
          Recent Prediction
        </h2>
        <span className="text-sm font-medium text-green-600 cursor-pointer hover:underline">
          View More
        </span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b text-gray-600 dark:text-gray-300">
              <th className="py-2 px-2 text-left">Date & Time</th>
              <th className="py-2 px-2 text-left">Condition Name</th>
              <th className="py-2 px-2 text-left">Confidence</th>
              <th className="py-2 px-2 text-left">Risk Level</th>
            </tr>
          </thead>
          <tbody>
            {predictions.map((item, idx) => (
              <tr key={idx} className="border-b last:border-0">
                <td className="py-2 px-2">{item.date}</td>
                <td className="py-2 px-2">{item.condition}</td>
                <td className="py-2 px-2">{item.confidence}</td>
                <td className="py-2 px-2">
                  <span
                    className={cn(
                      "px-2 py-0.5 rounded-full text-xs font-medium",
                      riskColors[item.risk]
                    )}
                  >
                    {item.risk}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};
