import { Schema, model, models } from "mongoose";

const PredictionSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  symptoms: [{ type: String, required: true }],
  predictedDisease: { type: String, required: true },
  confidence: { type: Number, required: true },
  risk: { type: String, enum: ["Low", "Medium", "High"], required: true },
  duration: String,
  severity: String,
  createdAt: { type: Date, default: Date.now },
});

export default models.Prediction || model("Prediction", PredictionSchema);
