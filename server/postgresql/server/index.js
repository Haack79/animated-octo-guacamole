const express = require('express');
const cors = require('cors');
const pool = require('./db');
const app = express();
// middleware 
const bodyParser = require('body-parser');
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
}
// routes

// create a todo
app.post('/todos', async(req,res) => {
    try {
        const { description } = req.body;
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *",
        [description]);
        res.json(newTodo.rows[0]);
    } catch (err) {
        console.log(err.message); 
    }
})
// get all todo
app.get('/todos', async(req, res) => {
    try {
        const allTodos = await pool.query('SELECT * FROM todo'); 
        res.json(allTodos.rows); 
    } catch (err) {
        console.log(err.message); 
    }
})
// get a todo
app.get('/todos/:id', async(req,res) => {
    try {
        const {id} = req.params; 
        const todo = await pool.query('SELECT * FROM todo WHERE todo_id = $1', [id]);
        res.json(todo.rows[0]);
    } catch (err) {
        console.log(err.message);
    }
});
//update todo
app.put('/todos/:id', async(req, res) => {
    console.log(req.params.target);
    console.log('in put req', req.body);
    try {
        const {id} = req.params;
        const {description} = req.body;
        const updateTodo = await pool.query('UPDATE todo SET description = $1 WHERE todo_id = $2', [description, id]);
        res.json(updateTodo); 
    } catch (err) {
        console.log(err.message);
    }
})
// delete a todo
app.delete('/todos/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);
        res.json('To do was deleted!'); 
    } catch (err) {
        console.log(err.message); 
    }
})

app.listen(5001, () => {
    console.log('server has started on 5001');
});

