import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
      lowercase: true,
      trim: true,
      minlength: [3, "Username must be at least 3 characters"],
      maxlength: [30, "Username cannot exceed 30 characters"],
      match: [
        /^[a-zA-Z0-9_]+$/,
        "Username can only contain letters, numbers, and underscores",
      ],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 6,
    },
    dateOfBirth: {
      type: Date,
    },
    bloodGroup: {
      type: String,
      enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    },
    genotype: {
      type: String,
      enum: ["AA", "AS", "SS", "AC", "SC"],
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
      default: "other",
    },
    alcohol: {
      type: String,
      enum: ["yes", "no"],
      default: "no",
    },
    smoking: {
      type: String,
      enum: ["yes", "no"],
      default: "no",
    },
    exerciseLevel: {
      type: String,
      enum: ["none", "light", "moderate", "heavy"],
      default: "none",
    },
    dietType: {
      type: String,
      enum: [
        "balanced",
        "high-protein",
        "low-carb",
        "vegetarian",
        "vegan",
        "keto",
      ],
      default: "balanced",
    },
  },
  { timestamps: true }
);

export default models.User || model("User", UserSchema);
