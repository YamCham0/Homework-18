const {Workout} = require('../models/workout');
const path = require('path');
const router = require('express').Router();

// Get

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
router.post('/api/workout', ({body}, res) =>{
    Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

// PUT
router.put('/api/workout/:id', ({body, params}, res) =>{
    Workout.findById(
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






