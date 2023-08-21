const mongoose = require("mongoose");
// const autoIncrement = require("mongoose-plugin-auto");

const CustomDrillSchema = new mongoose.Schema(
    {
        _id: { type: String, default: () => mongoose.Types.ObjectId().toString() },
        userId: { type: String, require: true},
        category: { type: Number },
        enable: { type: Boolean, default: true },
        curriculum: { type: Number, require: true },
        id: { type: String, auto: true },
        length: { type: String, require: true },
        level: { type: Number, require: true },
        orientation: { type: Number, require: true },
        repetation: { type: Number, require: true },
        sets: { type: Number, require: true },
        subcategory: { type: Number, require: true },
        title: { type: String, require: true },
        videoId: { type: String, require: true },
        videoUrl: { type: String, require: true },
        video_url: { type: String, require: true },
        thumb_url: { type: String, require: true },


    }, { timestamps: true });


module.exports = mongoose.model("CustomDrills", CustomDrillSchema);