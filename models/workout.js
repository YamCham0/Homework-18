const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// models for the workouts
const WorkoutSchema = new Schema ({
    day: {
        type: Date,
        default: Date.now()
    },
    exercises: [
        {
        name: String,
        type: {type: String},
        weight: Number,
        sets: Number,
        reps: Number,
        distance: Number,
        duration: Number
    },]
    });

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;