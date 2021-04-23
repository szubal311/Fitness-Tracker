const router = require('express').Router();
const Workout = require('../models/workout.js');



router.get('/api/worksouts', (req, res) => {
    Workout.find({}).then((data) => {
        res.json(data)
    }).catch (err => {
        res.json(err);
    });
});

router.post('/api/workouts', ({data}, res) => {
    Workout.create(data).then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.status(400).json(err)
    })
});

router.get("/api/workouts", (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {$sum: "exercises.duration"},
                
            }
        },
    ]).then(lastWorkout => {
        res.json(lastWorkout)
    }).catch(err =>{
        res.status(400).json(err);
    })
})

router.put('/api/workouts/:id', (req, res) => {
    Workout.findByIdAndUpdate(
        {
            _id: req.params.id
        },
        {
            $push: { exercises: req.body },
           
        },
    ).then((dbWorkout) => {
        console.log(dbWorkout);
        res.json(dbWorkout);
    }).catch((err) => {
        res.status(400).json(err)
    });
});

router.get('/api/workouts/range', (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {$sum: "exercises.duration"},
                
            }
        },])
        
            .sort({_id: -1})            
        
            .limit(7)
        
    .then(workoutRange => { 
        console.log(workoutRange)
        res.json(workoutRange)
    }).catch((err) => {
        res.status(400).json(err)
    });
})

module.exports = router;





