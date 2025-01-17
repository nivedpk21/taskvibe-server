const mongoose = require("mongoose");

const userTaskLogSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Types.ObjectId },
    taskId: { type: mongoose.Types.ObjectId },
    payment: {
      type: mongoose.Types.Decimal128,
      default: mongoose.Types.Decimal128.fromString("0.0"),
      min: 0,
    },
    isCompleted: { type: Boolean, default: false },
    createdAt: {
      type: Date,
      default: Date.now,
      expires: 86400, // 24 hours in seconds
    },
  },
  { timestamps: true }
);
const userTaskLogModel = mongoose.model("userTaskLog_tb", userTaskLogSchema);
module.exports = userTaskLogModel;
