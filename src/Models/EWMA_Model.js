const mongoose = require("mongoose");

const EWMASchema = new mongoose.Schema(
  {
    userId: { type: String },
    date: { type: String },
    ewma: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model("EWMA", EWMASchema);
