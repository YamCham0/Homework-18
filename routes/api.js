const {Workout} = require('../models/workout');
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
    Workout.findByIdAndUpdate(
    params.id, {$push:{excersices:body}},
    {
    new: true,
    runValidators:true
    })
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});


// GET
router.get("/api/workouts/range", (req, res) =>{
const filter = { age: { $gte: 30 } };
let docs = await Character.aggregate([{ $match: filter }]);

)};
module.exports = router;
