const Workout = require('../models/workout');
const path = require('path');
const { Router } = require('express');
const router = require('express').Router();

// GET

router.get('/', (req, res) => 
res.sendFile(path.join(__dirname, "../public/index.html"))
);

router.get('/exercise', (req, res) => 
res.sendFile(path.join(__dirname, "../public/exercise.html"))
);

router.get('/stats', (req, res) => 
res.sendFile(path.join(__dirname, "../public/stats.html"))
);

// POST
router.post('/api/workouts', ({body}, res) =>{
    Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

// PUT
router.put('/api/workouts/:id', ({body, params}, res) => {
    console.log(params);
    console.log(body);

    Workout.findByIdAndUpdate(
    params.id, {$push: {
        exercises: body
    }
    },
    {
    new: true,
    })
    .then(Workout => {
        res.json(Workout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});


// GET routes for api

router.get("/api/workouts", async (req, res) =>{
    const arrange = await Workout.aggregate([        {
            $addFields: {
                totalDuration: {$sum: "$exercises.duration"}
            }
        }
    ])
    res.json(arrange)

});

router.get("/api/workouts/range", async (req, res) =>{
    const arrange = await Workout.aggregate([
        {
            $addFields: {
                totalDuration: {$sum: "$exercises.duration"}
            }
        }
    ])
    .sort({day: -1}).limit(7)
    res.json(arrange)
});

module.exports = router;
