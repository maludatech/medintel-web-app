"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import {
  Activity,
  ChartLine,
  ChevronRight,
  CloudCheck,
  Lightbulb,
  NotepadTextDashed,
  Quote,
  SquareArrowUpRight,
  UserPen,
  SquareCheckBig,
} from "lucide-react";
import { RecentPredictions } from "@/components/shared/account/dashboard/RecentPredictions";
import { SymptomTrend } from "@/components/shared/account/dashboard/SymptomTrend";
import { AccountNavbar } from "@/components/shared/account/AccountNavbar";
import { useAuthStore } from "@/stores/useAuthStore";

interface QuickAccess {
  label: string;
  url: string;
  icon: React.ReactNode;
}

interface DashboardData {
  user: { name: string; email: string };
  lastPrediction: {
    condition: string;
    confidence: number;
    risk: "Low" | "Moderate" | "High";
    createdAt: string;
  } | null;
  accuracy: string;
  monthlySymptoms: number;
  recentPredictions: {
    condition: string;
    confidence: string;
    risk: "Low" | "Moderate" | "High";
    date: string;
  }[];
}

const healthTips: string[] = [
  "Drink at least 2L of water daily to stay hydrated.",
  "Take a 10-minute walk after meals to improve digestion.",
  "Eat more leafy greens for heart health.",
  "Get 7–8 hours of sleep for proper recovery.",
  "Reduce processed sugar intake to lower diabetes risk.",
  "Stretch for 5 minutes every morning to improve circulation.",
  "Limit screen time before bed to boost sleep quality.",
  "Wash your hands frequently to prevent infections.",
  "Maintain a balanced diet with proteins, carbs, and healthy fats.",
  "Schedule regular health check-ups for early detection.",
];

const quickAccess: QuickAccess[] = [
  {
    label: "Make Prediction",
    url: "/symptom-check",
    icon: <ChartLine />,
  },
  {
    label: "Update Medical Info",
    url: "/profile",
    icon: <UserPen />,
  },
  {
    label: "Export Report",
    url: "/history",
    icon: <SquareArrowUpRight />,
  },
];

const AIRecommendations: string[] = [
  "Incorporate more leafy greens in your diet",
  "Get at least 20 minutes of walking per day",
  "Consider an annual cholesterol test",
];

export const Dashboard: React.FC<{ callbackUrl: string }> = ({
  callbackUrl,
}) => {
  const router = useRouter();
  const { user } = useAuthStore();
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(
    null
  );
  const [randomTip, setRandomTip] = useState<string>(
    healthTips[Math.floor(Math.random() * healthTips.length)]
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch dashboard data
  useEffect(() => {
    const fetchDashboardData = async () => {
      if (!user?.userId) {
        router.push(callbackUrl);
        return;
      }

      try {
        setLoading(true);
        const response = await fetch(
          `/api/user/dashboard?userId=${user.userId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch dashboard data");
        }
        const data = await response.json();
        setDashboardData(data);
      } catch (err) {
        setError("Error loading dashboard data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchDashboardData();
    } else {
      router.push(callbackUrl);
    }
  }, [user, callbackUrl, router]);

  // Change tip every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setRandomTip(healthTips[Math.floor(Math.random() * healthTips.length)]);
    }, 30000); // 30 seconds

    return () => clearInterval(interval);
  }, []);

  // Greeting based on current time (WAT)
  const now = new Date();
  const hour = now.getUTCHours() + 1; // UTC+1 for WAT
  const greeting =
    hour >= 5 && hour < 12
      ? "Good Morning"
      : hour >= 12 && hour < 17
        ? "Good Afternoon"
        : "Good Evening";

  const firstName = dashboardData?.user?.name?.split(" ")[0] || "User";

  return (
    <section className="container mx-auto flex flex-col gap-8 md:gap-10 px-6 py-4 md:py-2 w-full">
      <AccountNavbar />
      <div className="flex flex-col gap-4 w-full">
        {/* Greeting */}
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-semibold">{`${greeting}, ${firstName}`}</h1>
          <p className="text-[#081207] dark:text-white">
            Here’s your Health snapshot for today.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 md:gap-6 justify-between">
          <div className="flex flex-col gap-8">
            {/* Snapshot Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
              <Card className="rounded-xl border p-4 flex flex-col gap-2 shadow-sm bg-[#FFFCF2] dark:bg-[#473300] text-[#0B1909] dark:text-[#B6BDB5]">
                <div className="flex justify-between items-center">
                  <p className="text-sm text-[#BB7A01] dark:text-[#D58B01]">
                    Last Prediction
                  </p>
                  <Activity className="text-[#BB7A01] dark:text-[#D58B01]" />
                </div>
                <h2 className="text-xl font-semibold">
                  {dashboardData?.lastPrediction?.condition || "None"}
                </h2>
                <p className="text-sm text-muted-foreground">
                  Confidence:{" "}
                  <span className="font-medium text-[#0B1909] dark:text-[#B6BDB5]">
                    {(dashboardData?.lastPrediction?.confidence ?? 0) * 100}%
                  </span>
                </p>
              </Card>

              <Card className="rounded-xl border p-4 flex flex-col gap-2 shadow-sm bg-[#D5FFD2] dark:bg-[#032900] text-[#0B1909] dark:text-[#B6BDB5]">
                <div className="flex justify-between items-center">
                  <p className="text-sm text-[#1FCC10] dark:text-[#24E412]">
                    Prediction Accuracy
                  </p>
                  <CloudCheck className="text-[#1FCC10] dark:text-[#24E412]" />
                </div>
                <h2 className="text-xl font-semibold">
                  {dashboardData?.accuracy || "0%"}
                </h2>
                <p className="text-sm text-muted-foreground">
                  Based on last 20 predictions
                </p>
              </Card>

              <Card className="rounded-xl border p-4 flex flex-col gap-2 shadow-sm bg-[#D2FDFF] dark:bg-[#002526] text-[#0B1909] dark:text-[#B6BDB5]">
                <div className="flex justify-between items-center">
                  <p className="text-sm text-[#07CAD8] dark:text-[#07CAD8]">
                    Logged Symptoms
                  </p>
                  <NotepadTextDashed className="text-[#07CAD8] dark:text-[#07CAD8]" />
                </div>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {dashboardData?.monthlySymptoms || 0}
                </h2>
                <p className="text-sm text-muted-foreground">This month</p>
              </Card>
            </div>
            <div className="flex flex-col lg:flex-row gap-8 w-full">
              <div className="flex flex-col gap-2 w-full">
                <h2 className="text-lg md:text-xl font-semibold text-[#081207] dark:text-white">
                  Quick Access
                </h2>
                {quickAccess.map((item, index) => (
                  <Link
                    href={item.url}
                    key={index}
                    className="flex items-center justify-between gap-1 bg-white dark:bg-[#0D0D0D] p-2 rounded-md hover:bg-accent hover:dark:bg-accent text-sm"
                  >
                    <span className="flex items-center gap-2">
                      {item.icon}
                      {item.label}
                    </span>
                    <ChevronRight />
                  </Link>
                ))}
              </div>
              <Card className="dark:bg-[#0D0D0D] p-4 w-full flex flex-col gap-2">
                <h2 className="text-base font-semibold text-[#081207] dark:text-white">
                  AI Recommendations
                </h2>
                {AIRecommendations.map((item, index) => (
                  <h4
                    key={index}
                    className="flex items-center gap-1 bg-white dark:bg-[#0D0D0D] p-2 text-sm"
                  >
                    <SquareCheckBig size={16} color="#55CC4B" />
                    {item}
                  </h4>
                ))}
              </Card>
            </div>
            {/* Recent Prediction Table */}
            <RecentPredictions
              predictions={dashboardData?.recentPredictions || []}
            />
          </div>

          <div className="flex flex-col gap-4">
            {/* Health Tip */}
            <Card className="rounded-xl border p-4 shadow-sm dark:bg-[#0D0D0D]">
              <div className="flex gap-1 items-center">
                <Lightbulb className="text-[#0B1909] dark:text-white" />
                <p className="text-lg text-[#0B1909] dark:text-white">
                  Health Tip
                </p>
              </div>
              <p className="text-[#193D16] dark:text-[#C5E9C2] font-medium flex gap-0.5">
                <Quote
                  className="inline-block h-4 w-4 text-[#55CC4B] ml-1 rotate-180"
                  fill="#55CC4B"
                />
                {randomTip}
              </p>
            </Card>
            {/* Health Summary */}
            <Card className="rounded-xl border p-4 shadow-sm dark:bg-[#0D0D0D] flex flex-col gap-4">
              <h1 className="text-lg text-[#0B1909] dark:text-white">
                Your Health Summary
              </h1>

              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                {/* Left side: Recent predictions */}
                <div className="flex flex-col gap-2 flex-1 text-sm">
                  {(dashboardData?.recentPredictions || [])
                    .slice(0, 3)
                    .map((item, idx) => (
                      <div
                        key={idx}
                        className="flex justify-between py-2 px-4 rounded-2xl border bg-white dark:bg-[#1A1A1A]"
                      >
                        <span>{item.condition}</span>
                        <span className="font-medium">{item.confidence}</span>
                      </div>
                    ))}
                </div>

                {/* Right side: Confidence circle */}
                <div className="flex items-center justify-center">
                  <div className="flex flex-col items-center justify-center w-24 h-24 rounded-full bg-[#FFD504] text-gray-900 shadow-md">
                    <span className="text-xl font-bold">
                      {dashboardData?.accuracy || 0}
                    </span>
                    <span className="text-xs font-medium text-center leading-tight">
                      Confidence
                    </span>
                  </div>
                </div>
              </div>
            </Card>
            {/* Symptom Trend Chart */}
            <SymptomTrend
              data={
                dashboardData?.recentPredictions
                  ?.reduce(
                    (acc, pred) => {
                      const existing = acc.find((d) => d.date === pred.date);
                      if (existing) {
                        existing.predictions += 1;
                      } else {
                        acc.push({ date: pred.date, predictions: 1 });
                      }
                      return acc;
                    },
                    [] as { date: string; predictions: number }[]
                  )
                  .sort(
                    (a, b) =>
                      new Date(a.date).getTime() - new Date(b.date).getTime()
                  ) || []
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};
