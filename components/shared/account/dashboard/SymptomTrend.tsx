"use client";

import { useState, useMemo } from "react";
import { Card } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import dayjs from "dayjs";

interface SymptomTrendProps {
  data: { date: string; predictions: number }[];
}

const FILTERS = ["day", "week", "month", "year"] as const;

export const SymptomTrend: React.FC<SymptomTrendProps> = ({ data }) => {
  const [filter, setFilter] = useState<"day" | "week" | "month" | "year">(
    "month"
  );

  // === FORMAT DATA BASED ON FILTER ===
  const filteredData = useMemo(() => {
    const now = dayjs();

    switch (filter) {
      case "day":
        return data.filter((d) => dayjs(d.date).isSame(now, "day"));

      case "week":
        return data.filter((d) => dayjs(d.date).isSame(now, "week"));

      case "month":
        return data.filter((d) => dayjs(d.date).isSame(now, "month"));

      case "year":
        return data.filter((d) => dayjs(d.date).isSame(now, "year"));

      default:
        return data;
    }
  }, [filter, data]);

  return (
    <Card className="rounded-xl border p-4 shadow-sm dark:bg-[#0D0D0D] bg-white flex flex-col gap-4">
      <h2 className="text-lg font-semibold text-[#0B1909] dark:text-white">
        Your Symptom Trend
      </h2>

      {/* FILTER TABS */}
      <div className="flex gap-4 text-sm font-medium border-b border-gray-200 dark:border-gray-700">
        {FILTERS.map((tab) => {
          const active = filter === tab;

          return (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`pb-1 capitalize transition border-b-2
                ${
                  active
                    ? "border-[#55CC4B] text-[#55CC4B]"
                    : "border-transparent text-gray-600 dark:text-gray-300 hover:border-gray-300"
                }
              `}
            >
              {tab}
            </button>
          );
        })}
      </div>

      {/* Chart */}
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={filteredData}>
            <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
            <XAxis dataKey="date" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="predictions"
              name="Predictions Made"
              fill="#55CC4B"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Footer */}
      {filteredData.length === 0 && (
        <p className="text-sm text-muted-foreground text-center">
          No data for this period.
        </p>
      )}
    </Card>
  );
};
