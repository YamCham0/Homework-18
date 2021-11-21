const mongoose = require("mongoose");

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
        type: {type: String},
        weight: Int,
        sets: Int,
        reps: Int,
        distance: Int,
        duration: Int,       
        },]
    });

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;