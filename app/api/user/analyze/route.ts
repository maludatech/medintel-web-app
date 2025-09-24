import { NextRequest, NextResponse } from "next/server";
import { connectToDb } from "@/lib/dbConnect";
import User from "@/models/User";
import History from "@/models/History";
import Prediction from "@/models/Prediction";
import { API_ENDPOINT } from "@/lib/constants";
import mongoose from "mongoose";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { userId, symptoms, duration, severity } = body;

    if (!userId) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    await connectToDb();

    // ✅ Ensure userId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return NextResponse.json(
        { error: "Invalid user ID format" },
        { status: 400 }
      );
    }

    // ✅ Check if user exists
    const user = await User.findById(userId);
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Prepare symptoms for FastAPI
    const formattedSymptoms: Record<string, number> = {
      fever: symptoms.includes("fever") ? 1 : 0,
      cough: symptoms.includes("cough") ? 1 : 0,
      headache: symptoms.includes("headache") ? 1 : 0,
      fatigue: symptoms.includes("fatigue") ? 1 : 0,
      chills: symptoms.includes("chills") ? 1 : 0,
      loss_of_taste: symptoms.includes("loss_of_taste") ? 1 : 0,
      shortness_of_breath: symptoms.includes("shortness_of_breath") ? 1 : 0,
      sore_throat: symptoms.includes("sore_throat") ? 1 : 0,
      nausea: symptoms.includes("nausea") ? 1 : 0,
      body_ache: symptoms.includes("body_ache") ? 1 : 0,
    };

    // Call FastAPI
    const res = await fetch(`${API_ENDPOINT}/predict`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formattedSymptoms),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("FastAPI error:", errorText);
      return NextResponse.json(
        { error: "Backend prediction failed", details: errorText },
        { status: 500 }
      );
    }

    const { predicted_disease, confidence } = await res.json();

    // Risk mapping
    let risk: "Low" | "Medium" | "High" = "Low";
    if (confidence > 0.7) risk = "High";
    else if (confidence > 0.4) risk = "Medium";

    // ✅ Save prediction
    const prediction = await Prediction.create({
      user: userId,
      symptoms,
      predictedDisease: predicted_disease,
      confidence,
      risk,
      duration,
      severity,
    });

    // ✅ Attach prediction to user’s history
    let history = await History.findOne({ user: userId });
    if (!history) {
      history = await History.create({
        user: userId,
        predictions: [prediction._id],
      });
    } else {
      history.predictions.push(prediction._id);
      history.updatedAt = new Date();
      await history.save();
    }

    // Response for frontend
    const conditions = [
      {
        name: predicted_disease,
        likelihood: Math.round(confidence * 100),
        risk,
        duration,
        severity,
        recommendation:
          severity === "severe"
            ? "Consult a doctor immediately."
            : "Monitor your symptoms and rest.",
      },
    ];

    return NextResponse.json({ conditions });
  } catch (error) {
    console.error("Prediction API error:", error);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
