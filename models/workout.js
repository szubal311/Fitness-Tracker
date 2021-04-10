const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,
    },
    excersize: [
        {
            type: {
                type: String,
                trim: true,
                required: "Enter workout type.",
            },
            duration: {
                type: Number,                
            },
            weight: {type: Number},
            reps: {type: Number},
            sets: {type: Number},
            distance: {type: Number},
        },
    ],
});

const Workout = mongoose.model("Workout", workoutSchema)
module.exports = Workout;