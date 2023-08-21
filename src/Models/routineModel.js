const mongoose = require("mongoose");

const routineSchema = new mongoose.Schema(
  {
    userId: { type: String },
    routineId: { type: String },
    drills: { type: String, require: true },
    date: { type: String, require: true },
    time: { type: String, require: true },
    end_time: { type: String, require: true },
    duration: { type: Number, require: true },
    category: { type: Number, require: true },
    repetation: { type: Number, require: true },
    sets: { type: Number, require: true },
    comment: { type: String },
    drill_id: { type: String, require: true },
    isCompleted: { type: Boolean, default: false },
    end_date: { type: String, require: true },
    group: { type: Number, require: true },
    youtube_url: { type: String, require: true },
    video_url: { type: String, require: true },
    thumb_url: { type: String, require: true },
    drill_list: [{
      drill_id: { type: String, require: true },
      drill_name: { type: String, require: true },
      reps: { type: Number, require: true },
      sets: { type: Number, require: true },
      comments: { type: String, require: true },
      youtube_url: { type: String, require: true },
      video_url: { type: String, require: true },
      thumb_url: { type: String, require: true },
    }],
    exercise: [
      {
        exercise_name: { type: String, require: true },
        id: { type: String, require: true },
        session_id: { type: Number, require: true },
        unit: { type: String, require: true },
        video_url: { type: String, require: true },
        thumb_url: { type: String, require: true },
        sets: [
          {
            Reps: { type: Number, require: true },
            Set: { type: Number, require: true },
            isCompleted: { type: Boolean, require: true },
            value: { type: Number, require: true },
          },
        ],
      },
    ],
    dates: [
      {
        date: { type: String, require: true },
        complete: { type: Boolean, default: false },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("routine", routineSchema);
