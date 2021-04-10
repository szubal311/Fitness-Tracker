const router = require('express').Router();
const path = require('path');
const db = require('../models');

router.get('/api/worksouts-api', (req, res) => {
    db.Workout.find({}).then(workout => {
        res.json(workout)
    }).catch (err => {
        res.json(err);
    });
});

// router.get ('/api/workouts', (req, res) => {
//     let workoutId = req.params.id;
//     let exerciseWorkouts = workout[0].
// })

