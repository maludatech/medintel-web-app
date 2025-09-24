import { NextRequest, NextResponse } from "next/server";
import { connectToDb } from "@/lib/dbConnect";
import User from "@/models/User";
import Prediction from "@/models/Prediction";
import { Types } from "mongoose";

// ✅ Explicit type for lean documents
interface PredictionLean {
  _id: Types.ObjectId;
  createdAt: Date;
  symptoms?: string[];
  predictedDisease: string;
  risk: string;
  severity: string;
  duration: string;
  confidence?: number;
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");

    if (!userId) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    await connectToDb();

    // Verify user exists
    const user = await User.findById(userId);
    if (!user) {
      return NextResponse.json({ error: "Invalid user" }, { status: 404 });
    }

    // Fetch predictions for the user with lean + typed result
    const predictions = await Prediction.find({ user: userId })
      .sort({ createdAt: -1 })
      .lean<PredictionLean[]>(); // ✅ Strong typing here

    const formatted = predictions.map((p) => ({
      id: p._id.toString(),
      date: new Date(p.createdAt).toLocaleDateString(),
      time: new Date(p.createdAt).toLocaleTimeString(),
      symptoms: p.symptoms?.join(", ") || "",
      AIPrediction: p.predictedDisease,
      riskLevel: p.risk,
      severity: p.severity,
      duration: p.duration,
      confidentialScore: Math.round((p.confidence ?? 0) * 100),
    }));

    return NextResponse.json({ history: formatted });
  } catch (error) {
    console.error("Error fetching history:", error);
    return NextResponse.json(
      { error: "Failed to fetch history" },
      { status: 500 }
    );
  }
}
