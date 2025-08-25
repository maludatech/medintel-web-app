import { Schema, model, models } from "mongoose";

const PredictionSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  symptoms: [{ type: String, required: true }],
  predictedDisease: { type: String, required: true },
  confidenceScore: { type: Number, required: true },
  modelUsed: { type: String, default: "MedIntel-v1" },
  createdAt: { type: Date, default: Date.now },
});

export default models.Prediction || model("Prediction", PredictionSchema);
