import User from "@/models/User";
import { connectToDb } from "@/lib/dbConnect";
import argon2 from "argon2";

// PATCH: Update user profile
export const PATCH = async (req: Request) => {
  try {
    await connectToDb();

    const body = await req.json();
    const {
      userId,
      username,
      bloodGroup,
      genotype,
      gender,
      smoking,
      alcohol,
      exerciseLevel,
      dietType,
      password,
    } = body;

    if (!userId) {
      return new Response(JSON.stringify({ message: "userId is required" }), {
        status: 400,
      });
    }

    const user = await User.findById(userId);
    if (!user) {
      return new Response(JSON.stringify({ message: "User not found" }), {
        status: 404,
      });
    }

    // 🔒 Check if username already exists (and is not the same as current user’s)
    if (username && username !== user.username) {
      const exists = await User.findOne({ username });
      if (exists) {
        return new Response(
          JSON.stringify({ message: "Username already taken" }),
          { status: 409 } // Conflict
        );
      }
      user.username = username;
    }

    if (bloodGroup) user.bloodGroup = bloodGroup;
    if (genotype) user.genotype = genotype;
    if (gender) user.gender = gender;
    if (smoking) user.smoking = smoking;
    if (alcohol) user.alcohol = alcohol;
    if (exerciseLevel) user.exerciseLevel = exerciseLevel;
    if (dietType) user.dietType = dietType;

    if (password) {
      user.password = await argon2.hash(password);
    }

    await user.save();

    return new Response(JSON.stringify({ message: "Profile updated" }), {
      status: 200,
    });
  } catch (error: any) {
    return new Response(
      JSON.stringify({ message: error.message || "Server error" }),
      { status: 500 }
    );
  }
};

// DELETE: Delete account
export const DELETE = async (req: Request) => {
  try {
    await connectToDb();

    const { userId, password } = await req.json();

    if (!userId || !password) {
      return new Response(
        JSON.stringify({ message: "userId and password are required" }),
        { status: 400 }
      );
    }

    // Find the user
    const user = await User.findById(userId);
    if (!user) {
      return new Response(JSON.stringify({ message: "User not found" }), {
        status: 404,
      });
    }

    // Verify password before deletion
    const valid = await argon2.verify(user.password, password);
    if (!valid) {
      return new Response(JSON.stringify({ message: "Invalid password" }), {
        status: 401,
      });
    }

    // Delete account if password matches
    await User.findByIdAndDelete(userId);

    return new Response(
      JSON.stringify({ message: "Account deleted successfully" }),
      { status: 200 }
    );
  } catch (error: any) {
    return new Response(
      JSON.stringify({ message: error.message || "Server error" }),
      { status: 500 }
    );
  }
};
