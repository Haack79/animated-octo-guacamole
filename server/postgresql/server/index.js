const express = require('express');
const cors = require('cors');
const pool = require('./db');
const app = express();
// middleware 
app.use(cors());
app.use(express.json());

// routes

// create a todo
app.post('/todos', async(req,res) => {
    try {
        const { description } = req.body;
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *",
        [description])
    } catch (err) {
        console.log(err.message); 
    }
})
// get all todo

// get a todo

// delete a todo

app.listen(5000, () => {
    console.log('server has started on 5000');
});

