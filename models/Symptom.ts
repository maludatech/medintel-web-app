import { Schema, model, models } from "mongoose";

const SymptomSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    symptoms: [{ type: String, required: true }], // e.g. ["fever", "cough"]
    submittedAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

export default models.Symptom || model("Symptom", SymptomSchema);
