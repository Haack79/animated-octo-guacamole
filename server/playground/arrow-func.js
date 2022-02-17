/*
const sqr = function(x) {
    return x*x;
}
*/

// arrow way
const sqr = (x) => {
    return x * x; 
}
// or 
const square = x => x * x; 

console.log(square(33)); 

// const event = {
//     name: 'birthday party',
//     printGuestList: function() {
//         console.log('guests'+this.name)
//     }
// }
//es6 way
const bEvent = {
    name: 'bday party',
    guestList: ['brian', 'susie', 'ezra'],
    printGuestList() {
        console.log(`guests ${this.name}`);
        this.guestList.forEach(guest => {
            console.log(`${guest} is attending! ${this.name}!`); 
        });
        // this works cause arrow funcs are lexically bound and so don't have to do that = this. 
    }
    // if you did printGuestList: () => {this.name} it would break, has no reference to this 
}
bEvent.printGuestList(); 

// challenge
const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true 
    }, {
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    getTasksToDo() {
        return this.tasks.filter((task) => task.completed === false) 
            .map(task => task.text); 
        
    }
}
console.log(tasks.getTasksToDo());