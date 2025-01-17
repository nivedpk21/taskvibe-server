const mongoose = require("mongoose");

const shortUrlTaskSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Types.ObjectId, required: true, ref: "user_tb" },
    name: { type: String, required: true },
    uniqueId: { type: String, required: true },
    shortUrl: { type: String, match: /^https?:\/\/[^\s$.?#].[^\s]*$/ },
    targetViews: { type: Number, min: 0 },
    payPerView: { type: mongoose.Types.Decimal128, min: 0 },
    setAmount: { type: mongoose.Types.Decimal128, min: 0 }, //balance(auto calculated with 25%fee)
    hits: { type: Number, min: 0, default: 0 }, // user hits
    status: { type: String, enum: ["paused", "active"], default: "active" },
    approved: { type: Boolean, default: true },
  },
  { timestamps: true }
);

shortUrlTaskSchema.index({ userId: 1 });
shortUrlTaskSchema.index({ shortUrl: 1 });

const shortUrlTaskModel = mongoose.model("shortUrlTask_tb", shortUrlTaskSchema);

module.exports = shortUrlTaskModel;
