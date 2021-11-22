const mongoose = require("mongoose");
const Workout = require("./api")


const Schema = mongoose.Schema;
// models for the workouts
const WorkoutSchema = new Schema ({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [
        {
        name: String,
        type: String,
        weight: Number,
        sets: Number,
        reps: Number,
        distance: Number,
        duration: Number
    },]
    });

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;