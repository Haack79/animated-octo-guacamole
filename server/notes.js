// const fs = require('fs');
// const validator = require('validator');
const chalk = require('chalk');
const log = console.log;
log(chalk.blue('Hello') + 'World' + chalk.red('!')); 
log(chalk.green('success')); 
const yellow = chalk.yellow('caution');
log(yellow); 

const getNotes = () =>  {
    console.log('hello from the notes.js');
}
// getting arguments from the terminal cli - argv is an array with all the arguments passed in.
console.log(process.argv);


// checking email and url below with validator
// console.log(validator.isEmail('brian@e.com')); 
// console.log(validator.isURL('bleh')); 
module.exports = getNotes; 
