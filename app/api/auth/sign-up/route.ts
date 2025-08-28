import argon2 from "argon2";
import { connectToDb } from "@/lib/dbConnect";
import User from "@/models/User";

export const POST = async (request: Request) => {
  try {
    const data = await request.json();

    if (!data?.email || !data?.password || !data?.username || !data?.name) {
      return new Response(
        JSON.stringify({ message: "Missing required fields" }),
        { status: 400 }
      );
    }

    const {
      username,
      name,
      email,
      bloodGroup,
      genotype,
      dateOfBirth,
      gender,
      password,
    } = data;

    // Normalize email + username
    const normalizedEmail = email.toLowerCase();
    const normalizedUsername = username.toLowerCase();

    // DB connection
    await connectToDb();

    // Check for duplicates
    const existingUserByEmail = await User.findOne({ email: normalizedEmail });
    if (existingUserByEmail) {
      return new Response(JSON.stringify({ message: "Email already in use" }), {
        status: 400,
      });
    }

    const existingUserByUsername = await User.findOne({
      username: normalizedUsername,
    });
    if (existingUserByUsername) {
      return new Response(
        JSON.stringify({ message: "Username already taken" }),
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await argon2.hash(password);

    // Create new user
    const newUser = new User({
      username: normalizedUsername,
      name,
      email: normalizedEmail,
      bloodGroup,
      genotype,
      dateOfBirth,
      gender,
      password: hashedPassword,
    });

    await newUser.save();

    return new Response(
      JSON.stringify({
        message: "User registered successfully",

        user: {
          id: newUser._id,
          username: newUser.username,
          email: newUser.email,
          name: newUser.name,
        },
      }),
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Signup error:", error.message);
    return new Response(JSON.stringify({ message: "Server error" }), {
      status: 500,
    });
  }
};
