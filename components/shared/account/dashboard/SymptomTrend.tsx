"use client";

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

interface SymptomTrendProps {
  data: { date: string; predictions: number }[];
}

export const SymptomTrend: React.FC<SymptomTrendProps> = ({ data }) => {
  return (
    <Card className="rounded-xl border p-4 shadow-sm dark:bg-[#0D0D0D] bg-white flex flex-col gap-4">
      <h2 className="text-lg font-semibold text-[#0B1909] dark:text-white">
        Your Symptom Trend
      </h2>

      {/* Tabs placeholder (Day, Week, Month, Year) */}
      <div className="flex gap-4 text-sm font-medium text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
        <button className="pb-1 border-b-2 border-transparent hover:border-gray-400">
          Day
        </button>
        <button className="pb-1 border-b-2 border-transparent hover:border-gray-400">
          Week
        </button>
        <button className="pb-1 border-b-2 border-[#55CC4B] text-[#55CC4B]">
          Month
        </button>
        <button className="pb-1 border-b-2 border-transparent hover:border-gray-400">
          Year
        </button>
      </div>

      {/* Chart */}
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
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
      <p className="text-sm text-muted-foreground text-center">
        No data yet? Start by adding your symptoms.
      </p>
    </Card>
  );
};
