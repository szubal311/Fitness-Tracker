const router = require('express').Router();
const path = require('path');
const db = require('../models');


router.get('/api/worksouts', (req, res) => {
    db.Workout.find({}).then((data) => {
        res.json(data)
    }).catch (err => {
        res.json(err);
    });
});

router.post('/api/workouts', ({body}, res) => {
    db.Workout.create(body).then(workoutDb => {
        res.json(workoutDb);
    }).catch(err => {
        res.status(400).json(err)
    })
});

router.get("/api/workouts", (req, res) => {
    db.Workout.aggregate([
        {
            $addFields: {
                duraTotal: {$sum: "exercise.duration"},
                repTotal: {$sum: "exercise.reps"},
                setTotal: {$sum: "exercise.sets"},
                weightTotal: {$sum: "exercise.weight"},
                distanceTotal: {$sum: "exercise.distance"},
            }
        },
    ]).then(lastWorkout => {
        res.status(400).json(err);
    });
})

router.put('/api/workouts/:id', (req, res) => {
    Workout.findByIdAndUpdate(
        {
            _id: req.params.id
        },
        {
            $push: { exercise: req.body },
            $inc: {}
        },
    ).then((workoutDb) => {
        console.log(workoutDb);
        res.json(workoutDb);
    }).catch((err) => {
        res.status(400).json(err)
    });
});

router.get('.api/workouts/range', (req, res) => {
    db.Workout.aggregate([
        {
            $addFields: {
                duraTotal: {$sum: "exercise.duration"},
                repTotal: {$sum: "exercise.reps"},
                setTotal: {$sum: "exercise.sets"},
                weightTotal: {$sum: "exercise.weight"},
                distanceTotal: {$sum: "exercise.distance"},
            }
        },
        {
            $sort:{_id: -1}            
        },
        {
            $limit: 7
        }

    ]).then(exerciseSpan => {
        res.json(exerciseSpan)
    }).catch((err) => {
        res.status(400).json(err)
    });
})

module.exports = router;





