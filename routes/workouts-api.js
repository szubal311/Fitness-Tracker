const router = require('express').Router();
const path = require('path');
const db = require('../models');
const {Workout} = require('../models');

router.get('/api/worksouts', (req, res) => {
    db.Workout.find({}).then((data) => {
        res.json(data)
    }).catch (err => {
        res.json(err);
    });
});

router.post('/api/workouts', ({body}, res) => {
    db.Workout.create(body).then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.status(400).json(err)
    })
});

router.put('/api/workouts/:id', (req, res) => {
    Workout.findByIdAndUpdate(
        {
            _id: req.params.id
        },
        {
            $push: {
                exercise: req.body
            }
        }
    ).then((dbWorkout) => {
        console.log(dbWorkout);
        res.json(dbWorkout);
    }).catch((err) => {
        res.status(400).json(err)
    });
});

router.get('.api/workouts/', (req, res) => {
    Workout.find({}).sort({date: -1})
    .then((dbWorkout) => {
        console.log(dbWorkout);
        res.json(dbWorkout);
    }).catch((err) => {
        res.status(400).json(err);
    });
});

router.get('.api/workouts/:range', (req, res) => {
    Workout.find({}).then((dbWorkout) => {
        res.json(dbWorkout);
    }).catch((err) => {
        res.status(400).json(err)
    });
});

module.exports = router;





