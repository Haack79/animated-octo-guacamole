const express = require('express');
const router = new express.Router();
const Task = require('../models/task');

router.post('/tasks', async (req, res) => {
    // const task = new Task(req.body)
    // task.save().then(() => {
    //     res.status(201).send(task);
    // }).catch((error) => {
    //     res.status(400).send(error); 
    // })
    const task = new Task(req.body);
    try {
        await user.save(); 
        res.status(201).send(task);
    } catch (err) {
        res.status(400).send(err); 
    }
})
router.delete('/tasks/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const task = Task.findByIdAndDelete(_id);
        if (!task) {
            res.status(404).send();
        }
        res.send(task); 
    } catch (err) {
        res.status(500).send();
    }
})
router.get('/tasks', async (req, res) => {
    try {
        const tasks = Task.find({});
        res.send(tasks); 
    } catch (err) {
        res.status(500).send(err);
    }
    // Task.find({}).then((tasks) => {
    //     res.send(tasks); 
    // }).catch((error) => {
    //     res.status(500).send(error); 
    // })
});
router.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id; 
    try {
        const task = await Task.findById(_id);
        if (!task) {
            return res.status(404).send();
        }
        res.send(task);
    } catch (err) {
        res.send(500).send(err); 
    }
    // Task.findById(_id).then((task) => {
    //     if (!task) {
    //         return res.status(404).send();
    //     }
    //     res.send(task);
    // }).catch((error) => {
    //     res.send(500).send(error);
    // })
});
//update
router.patch('/tasks/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['description', 'completed'];
    const isValidTaskUpdate = updates.every((update) => allowedUpdates.includes(update));
    if (!isValidTaskUpdate) {
        return res.status(400).send({error: 'bad update dood'});
    }
    const _id = req.params.id; 
    try {
        const task = await Task.findByIdAndUpdate(_id, req.body, {new: true, runValidators: true});
        if (!task) {
            return res.status(400).send();
        }
        res.send(task); 
    } catch (err) {
        res.status(400).send(err); 
    }
});