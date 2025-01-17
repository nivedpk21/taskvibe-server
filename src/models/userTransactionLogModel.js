const mongoose = require("mongoose");

const userTransactionLogSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Types.ObjectId },
    taskId: { type: mongoose.Types.ObjectId },
    amount: { type: mongoose.Types.Decimal128, min: 0 },
    type: { type: String },
    createdAt: {
      type: Date,
      default: Date.now,
      expires: 86400, // 24 hours in seconds
    },
  },
  { timestamps: true }
);

const userTaskLogModel = mongoose.model("userTransactionLog_tb", userTransactionLogSchema);
module.exports = userTaskLogModel;
