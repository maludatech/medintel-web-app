import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { symptoms } = body;

    // Fake output (replace later with your AI/ML logic)
    const conditions = [
      {
        name: "Common Cold",
        likelihood: 72,
        risk: "Low",
        recommendation: "Stay hydrated, get rest, monitor for fever.",
      },
      {
        name: "Seasonal Allergies",
        likelihood: 65,
        risk: "Medium",
        recommendation: "Avoid allergens, consider antihistamines.",
      },
    ];

    return NextResponse.json({ conditions });
  } catch (error) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
