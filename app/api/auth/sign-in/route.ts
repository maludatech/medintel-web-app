import jwt from "jsonwebtoken";
import argon from "argon2";
import { log } from "@/lib/logger";
import { connectToDb } from "@/lib/dbConnect";
import User from "@/models/User";

export const POST = async (req: Request) => {
  const normalizedData = await req.json();
  const { email, password } = normalizedData;

  try {
    await connectToDb();
    const existingUser = await User.findOne({ email: email });

    if (!existingUser) {
      return new Response(JSON.stringify({ message: "Invalid email" }), {
        status: 401,
      });
    }

    const passwordMatch = await argon.verify(existingUser.password, password);

    if (!passwordMatch) {
      return new Response(JSON.stringify({ message: "Invalid password" }), {
        status: 401,
      });
    }
    // Include the createdAt field in the response
    const registrationDate = existingUser.createdAt;

    const secretKey = process.env.JWT_SECRET as string;

    // Generate JWT token
    const token = jwt.sign(
      {
        userId: existingUser._id,
        email: existingUser.email,
        username: existingUser.username,
        name: existingUser.name,
        dateOfBirth: existingUser.dateOfBirth,
        gender: existingUser.gender,
        bloodGroup: existingUser.bloodGroup,
        genotype: existingUser.genotype,
      },
      secretKey,
      { expiresIn: "3d" }
    );

    return new Response(JSON.stringify({ token, registrationDate }), {
      status: 200,
    });
  } catch (error: any) {
    log.error("Error during sign-in:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
};
