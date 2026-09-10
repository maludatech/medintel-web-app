import { NextRequest, NextResponse } from "next/server";
import { connectToDb } from "@/lib/dbConnect";
import User from "@/models/User";

export const GET = async (req: NextRequest) => {
  const authHeader = req.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;

  if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await connectToDb();
    const count = await User.countDocuments({});

    return NextResponse.json({
      ok: true,
      ts: new Date().toISOString(),
      reachable: true,
      userCount: count,
    });
  } catch (err) {
    console.error("Keepalive cron error:", err);
    return NextResponse.json(
      { ok: false, ts: new Date().toISOString(), reachable: false },
      { status: 500 }
    );
  }
};
