const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true, match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ },
    password: { type: String },
    country: { type: String },
    wallet: {
      type: mongoose.Schema.Types.Decimal128,
      default: mongoose.Types.Decimal128.fromString("0.0"),
      min: 0,
    },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    isVerified: { type: Boolean, default: false },
    accountStatus: { type: String, enum: ["active", "suspended"], default: "active" },
    sessionId: { type: String, default: null },
    refererCode: { type: String, unique: true },
    referredBy: { type: String, default: null },
  },
  { timestamps: true }
);

// index
userSchema.index({ email: 1 });

const userModel = mongoose.model("user_tb", userSchema);
module.exports = userModel;
