require('../src/db/mongoose');
const User = require('../src/models/user');
const Task = require('../src/models/task');

User.findByIdAndUpdate('51ce3ads3523f23ff3', {age: 1}).then((user) => {
    console.log(user);
    return User.countDocuments({age: 1});
}).then((result) => {
    console.log(result);
}).catch((err)=> {
    console.log(err); 
});

Task.findByIdAndDelete('53qasdf3wf3wwf3w').then((task) => { // finds by id the task
    return Task.countDocuments({completed: false}); // returns count of incompleted tasks
}).then((result) => {
    console.log(result); // prints out number that are not completed
}).catch((err) => {
    console.log(err); 
});
// use async await to do above find and update with count. 
const updateAgeandCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age});
    const count = await User.countDocuments({age});
    return count; 
};
updateAgeandCount('5c21af2323,3ir3', 2).then((count) => {
    console.log(count);
}).catch((err) => {
    console.error(err);     
});

// use asynd to do delete
const updateAgeandDelete = async (id) => {
    await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({completed: false});
    return count; 
}
updateAgeandDelete('23232df23efwf3rw3wf3w').then((count) => {
    console.log(count); 
}).catch((error) => {
    console.error(error); 
})