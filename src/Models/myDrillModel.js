const mongoose = require("mongoose");

const DrillSchema = new mongoose.Schema(
  {
    drill_id: { type: String },
    title: { type: String, require: true },
    category: { type: Number, require: true },
    repetation: { type: Number, require: true },
    sets: { type: Number, require: true },
    video: { type: String },
    thumbnail: { type: String },
    videoLength: { type: String },
    userId: { type: String },
    comment: { type: String },
    isCompleted: { type: Boolean, default: false },
    routine_id: { type: String },
    date: { type: String },
    video_url: { type: String, require: true },
    thumb_url: { type: String, require: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("MyDrill", DrillSchema);


