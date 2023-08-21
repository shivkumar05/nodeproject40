const mongoose = require("mongoose");

const sessionAndExerciseSchema = new mongoose.Schema(
  {
    userId: { type: String, require: true },
    routineId: { type: String },
    date: { type: String, require: true },
    session_id: { type: Number, require: true },
    Exercise_id: { type: String, require: true },
    Exercise_title: { type: String, require: true },
    unit: { type: String, require: true },
    work_load: { type: Number, require: true, },
    exercises: [
      {
        Set: { type: Number, require: true },
        Reps: { type: Number, require: true },
        value: { type: Number, require: true },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("sessionAndExercise", sessionAndExerciseSchema);
