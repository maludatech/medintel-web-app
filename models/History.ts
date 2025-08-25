import { Schema, model, models } from "mongoose";

const HistorySchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  predictions: [{ type: Schema.Types.ObjectId, ref: "Prediction" }],
  updatedAt: { type: Date, default: Date.now },
});

export default models.History || model("History", HistorySchema);
