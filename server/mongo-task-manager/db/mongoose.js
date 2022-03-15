const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});
// look up validator.js npm package. 
// define model

// save instance of it. 
// const newPerson = new User({
//     name: 'Brian',
//     age: 42
// });
// newPerson.save().then(() => {
//     console.log(newPerson); 
// }).catch((error) => {
//     console.error(error);
// })

/* make model for tasks */

// const myTask = new Task({
//     description: 'eat pizza',
//     completed: false
// })
// myTask.save().then(() => {
//     console.log(myTask)
// }).catch((error) => {
//     console.error(error); 
// })