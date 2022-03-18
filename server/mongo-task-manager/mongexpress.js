const express = require('express');
require('./db/mongoose'); // mongoose lets you structure your data in a nice way. 
const User = require('./models/user'); 
const Task = require('./models/task'); 
const app = express();
const port = process.env.PORT || 3000
app.use(express.json());// this auto parses incoming object 
app.post('/users', (req, res) => {
    const user = new User(req.body)
    user.save().then(() => {
        res.status(201).send(user); // send user back to front end
    }).catch((error) => {
        res.status(400).send(error); 
    })
})

app.post('/tasks', async (req, res) => {
    // const task = new Task(req.body)
    // task.save().then(() => {
    //     res.status(201).send(task);
    // }).catch((error) => {
    //     res.status(400).send(error); 
    // })
    const user = new User(req.body);
    try {
        await user.save(); 
        res.status(201).send(user);
    } catch (err) {
        res.status(400).send(err); 
    }
})
app.delete('/users/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const user = await User.findByIdAndUpdate(_id);
        if (!user) {
            return res.status(404).send();
        }
        res.send(user);
    } catch (err) {
        res.status(500).send();
    }
});
app.delete('/tasks/:id', async (req, res) => {
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
app.get('/users', async(req, res) => {
    try {
        const users = await User.find({});
        res.status(201).send(users); 
    } catch (err) {
        res.status(500).send(err); 
    }
    // User.find({}).then((users) => {
    //     res.status(201).send(users)
    // }).catch((error) => {
    //     res.status(500).send(error);
    // })
});

app.get('/users/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const user = await User.findById(_id);
        if (!user) {
            return res.status(404).send();
        }
        res.send(user);
    } catch (err) {
        res.status(500).send(err); 
    }

    // User.findById(_id).then((user) => {
    //     if (!user) {
    //         return res.status(404).send()
    //     }
    //     res.send(user)
    // }).catch((error) => {
    //     res.status(500).send(error);
    // })
})
app.get('/tasks', async (req, res) => {
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
app.get('/tasks/:id', async (req, res) => {
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
})
// updating
app.patch('/users/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'email', 'password', 'age'];
    const isValidOperation = updates.every((updateItem) => allowedUpdates.includes(updateItem)); 

    if (!isValidOperation) {
        return res.status(400).send({error: 'Invalid updates'})
    }
    const _id = req.params.id;
    try {
        const user = await User.findByIdAndUpdate(_id, req.body, {new: true, runValidators: true});
        if (!user) {
            return res.status(404).send();
        }
        res.send(user); 

    } catch (err) {
        // could be validation or server related issue in this catch
        res.status(400).send(err); 
    }
});

app.patch('/tasks/:id', async (req, res) => {
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
})
app.listen(port, () => {
    console.log('server is up on port'+port); 
});
