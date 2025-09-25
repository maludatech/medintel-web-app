import { NextRequest, NextResponse } from "next/server";
import { connectToDb } from "@/lib/dbConnect";
import User from "@/models/User";
import Prediction from "@/models/Prediction";

// Define the Prediction interface to match the model
interface PredictionDocument {
  _id: string;
  user: string;
  symptoms: string[];
  predictedDisease: string;
  confidence: number;
  risk: "Low" | "Medium" | "High";
  duration?: string;
  severity?: string;
  createdAt: Date;
}

export const GET = async (req: NextRequest) => {
  try {
    await connectToDb();

    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");

    if (!userId) {
      console.error("Missing userId in query parameters");
      return NextResponse.json({ error: "Missing userId" }, { status: 400 });
    }

    const user = await User.findById(userId);
    if (!user) {
      console.error(`User not found for userId: ${userId}`);
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Last prediction
    const lastPrediction = await Prediction.findOne({ user: userId })
      .sort({ createdAt: -1 })
      .lean<PredictionDocument>();

    // Last 20 predictions for RecentPredictions
    const recentPredictions = await Prediction.find({ user: userId })
      .sort({ createdAt: -1 })
      .limit(20)
      .lean<PredictionDocument[]>();

    // All predictions for accuracy calculation
    const allPredictions = await Prediction.find({ user: userId }).lean<
      PredictionDocument[]
    >();

    // Compute accuracy (% of all predictions with confidence >= 70)
    const accuracy =
      allPredictions.length > 0
        ? Math.round(
            (allPredictions.reduce((sum, p) => sum + p.confidence, 0) /
              allPredictions.length) *
              100
          )
        : 0;

    // Symptoms logged count (this month)
    const startOfMonth = new Date();
    startOfMonth.setDate(1);
    startOfMonth.setHours(0, 0, 0, 0);

    const monthlySymptoms = await Prediction.countDocuments({
      user: userId,
      createdAt: { $gte: startOfMonth },
    });

    return NextResponse.json({
      user: {
        name: user.name,
        email: user.email,
      },
      lastPrediction: lastPrediction
        ? {
            condition: lastPrediction.predictedDisease,
            confidence: lastPrediction.confidence,
            risk:
              lastPrediction.risk === "Medium"
                ? "Moderate"
                : lastPrediction.risk,
            createdAt: new Date(lastPrediction.createdAt).toLocaleDateString(
              "en-US",
              {
                month: "short",
                day: "numeric",
                year: "numeric",
              }
            ),
          }
        : null,
      accuracy: `${accuracy}%`,
      monthlySymptoms,
      recentPredictions: recentPredictions.map((p) => ({
        condition: p.predictedDisease,
        confidence: `${p.confidence} %`,
        risk: p.risk === "Medium" ? "Moderate" : p.risk,
        date: new Date(p.createdAt).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        }),
      })),
    });
  } catch (err) {
    console.error("Dashboard error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
};
