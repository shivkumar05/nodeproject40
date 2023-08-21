const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema(
  {
    Exercise_Name: String,
    Type: String,
    Exercise_Type: String,
    Session_Id: Number,
    youtube_url: String, 
    userId: String,
    unit: String,
    video_url: String,
    thumb_url: String,
    exercise: [
      {
        Set: { type: Number, require: true },
        Reps: {
          type: Number,
          require: true,
        },
        value: { type: Number, require: true },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Exercise", exerciseSchema);
