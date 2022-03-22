const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})
taskSchema.pre('save', async function (next) {
    const task = this; 
    if (task.isMOdified('password')) {
        task.password = await bcrypt.hash(user.password, 8)
    }
    console.log('just before saving');


    next()
});
const Task = mongoose.model('Task', taskSchema);

module.exports = Task; 