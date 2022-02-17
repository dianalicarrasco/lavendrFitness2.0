const express = require('express');
const app = express();
const cors = require('cors')
const pool = require('./db')

app.use(cors());

app.use(express.json());

// POST
app.post('/custom', async (req, res) => {
    try {
        const { description, sets, reps } = req.body;
        const newExercise = await pool.query("INSERT INTO exercises (description, sets, reps) VALUES($1, $2, $3) RETURNING *", [description, sets, reps]);
        res.json(newExercise.rows[0]);
    } catch (err) {
        console.log(err.message)
    }
});

///// random generator
app.get('/generate', async (req, res) => {
    try {
        const allExercises = await pool.query("SELECT * FROM generate ORDER BY random() LIMIT 15");
        res.json(allExercises.rows)
    } catch (err) {
        console.log(err.message)
    }
})

/////


//GET ALL
app.get('/custom', async (req, res) => {
    try {
        const allExercises = await pool.query("SELECT * FROM exercises");
        res.json(allExercises.rows)
    } catch (err) {
        console.log(err.message)
    }
})

//GET ONE
app.get('/custom/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const exercise = await pool.query("SELECT * FROM exercises WHERE exercise_id = $1", [id]) 
        res.json(exercise.rows)
    } catch (err) {
        console.log(err.message)
    }
})

//PUT
app.put('/custom/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { sets, reps } = req.body;
        const updateSet = await pool.query("UPDATE exercises SET sets = $1 WHERE exercise_id = $2", [sets, id]);
        const updateRep = await pool.query("UPDATE exercises SET reps = $1 WHERE exercise_id = $2", [reps, id]);
        res.json("Excerise was updated")
    } catch (err) {
        console.log(err.message)
    }
})

//DELETE 
app.delete("/custom/:id", async (req, res) => {
    try{
        const { id } = req.params;
        const deleteExercise = await pool.query("DELETE FROM exercises WHERE exercise_id = $1", [id]);
        res.json("Exercise was deleted")
    } catch (err) {
        console.log(err.message);
    }
})

app.listen(3002, () => {
    console.log('Server has started on port 3002')
})