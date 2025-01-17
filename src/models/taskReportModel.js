const mongoose = require("mongoose");

const taskReportSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Types.ObjectId },
    taskId: { type: mongoose.Types.ObjectId },
    message: { type: String },
  },
  { timestamps: true }
);

const taskReportModel = mongoose.model("taskReport_tb", taskReportSchema);
module.exports = taskReportModel;
