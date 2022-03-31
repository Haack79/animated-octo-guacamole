const express = require('express');
const router = new express.Router();
const User = require('../models/user');
const auth = require('../middleware/auth');

router.post('/users', async(req, res) => {
    const user = new User(req.body)
    const token = await user.generateAuthToken();
    user.save().then(() => {
        res.status(201).send({user, token}); // send user back to front end
    }).catch((error) => {
        res.status(400).send(error); 
    })
});

router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password); 
        const token = await user.generateAuthToken()
        res.send({user: user.getPublicProfile(), token});
    } catch (err) {
        res.status(400).send();
    }
});

router.post('/users/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token;
        });
        await req.user.save(); 

        res.send();
    } catch (err) {
        res.status(500).send(); 
    }
});
router.post('/users/logoutAll', auth, async (req, res) => {
    try {
        req.user.tokens = [];
        await req.user.save(); 
    } catch (err) {
        res.status(500).send(); 
    }
})
router.get('/users/me',auth, async (req, res) => {
    res.send(req.user);
});
router.get('/users/:id', async (req, res) => {
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
// updating
router.patch('/users/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'email', 'password', 'age'];
    const isValidOperation = updates.every((updateItem) => allowedUpdates.includes(updateItem)); 

    if (!isValidOperation) {
        return res.status(400).send({error: 'Invalid updates'})
    }
    const _id = req.params.id;
    try { // set user and updates to work with middleware in models/user 
        const user = await User.findById(_id);
        updates.forEach((update) => user[update] = req.body[update]); 
            // use bracket notation cause don't know what the value of the update variable will be. 
         await user.save();   

        // const user = await User.findByIdAndUpdate(_id, req.body, {new: true, runValidators: true});
        if (!user) {
            return res.status(404).send();
        }
        res.send(user); 

    } catch (err) {
        // could be validation or server related issue in this catch
        res.status(400).send(err); 
    }
});
router.delete('/users/:id', async (req, res) => {
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
// now run middleware and only runs route handler if put next() 
router.get('/users',auth,  async(req, res) => {
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