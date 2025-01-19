const mongoose = require("mongoose");

const userMessageSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String },
    message: { type: String },
  },
  { timestamps: true }
);
const userMessageModel = mongoose.model("userMessage_tb", userMessageSchema);
module.exports = userMessageModel;
