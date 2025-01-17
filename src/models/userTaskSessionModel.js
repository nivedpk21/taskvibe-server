const mongoose = require("mongoose");

const userTaskSessionSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Types.ObjectId },
    taskId: { type: mongoose.Types.ObjectId },
    createdAt: {
      type: Date,
      default: Date.now,
      expires: 900, // 15 min in seconds
    },
  },
  { timestamps: true }
);

const userTaskSessionModel = mongoose.model("userTaskSession_tb", userTaskSessionSchema);
module.exports = userTaskSessionModel;
