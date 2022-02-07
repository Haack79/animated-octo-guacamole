// const fs = require('fs');
// const validator = require('validator');
const yargs = require('yargs');
const chalk = require('chalk');
const log = console.log;
yargs.version('1.1.0');
log(chalk.blue('Hello') + 'World' + chalk.red('!')); 
log(chalk.green('success')); 
const yellow = chalk.yellow('caution');
log(yellow); 
 
const getNotes = () =>  {
    console.log('hello from the notes.js');
}
// getting arguments from the terminal cli - argv is an array with all the arguments passed in.
// console.log(process.argv);
// first 2 elements in array are file info and url, 3rd will be where argument you put into cli is to be used.
// can add title in cli with - node notes.js add --title="this is my title" -
// this will cause argv to now have 4 elements in the array, the 3rd at indx 2 will be add, and 4th at indx 3 
// will be --title=This is my title -- 
//-- so need a parser to parse the string or could write the code yourself but theres a package for it.
// Yargs - great package - pirate themed - to parse strings
//yargs will parse out the title -- can add commands to it

// Create add command with yargs 
yargs.command({
    command: 'add', 
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true, // this makes it required.
            type: 'string'
        },
        body: {
            describe: 'adding body info',
            demandOption: true,
            type: 'string' 
        }
    },
    handler: function (argv) {
        log('adding a new note!'+argv.title);
        log('Body time'+argv.body); 
    }
});

yargs.command({
    command: 'remove',
    describe: 'removing note',
    handler: function() {
        console.log('removed note'); 
    }
})
yargs.command({
    command: 'list',
    describe: 'listing notes',
    handler: function() {
        log('listing notes here');
    }
});
yargs.command({
    command: 'read',
    describe: 'reading notesssss',
    handler: function() {
        log('reading notes and help');
    }
})
// console.log(yargs.argv);
yargs.parse(); 
// checking email and url below with validator
// console.log(validator.isEmail('brian@e.com')); 
// console.log(validator.isURL('bleh')); 
module.exports = getNotes; 
