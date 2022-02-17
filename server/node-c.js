const yargs = require('yargs'); 
const chalk = require('chalk');
const notes = require('./notes.js');
// const name = require('./practice-file.js'); 
console.log('hello there'); 
// load in the fs module into variable. 
// const fs = require('fs');
// below creates a notes.txt file in the folder its in if one doesnt exist, if notes.txt does exist it will add the new data to it. 
// fs.writeFileSync('notes.txt', ' this file was created by node.js'); 
// fs.appendFileSync('notes.txt', 'hello im appended'); 
// const speak = getNotes(); 
// getting arguments from the terminal cli - argv is an array with all the arguments passed in.
// console.log(process.argv);
// first 2 elements in array are file info and url, 3rd will be where argument you put into cli is to be used.
// can add title in cli with - node notes.js add --title="this is my title" -
// this will cause argv to now have 4 elements in the array, the 3rd at indx 2 will be add, and 4th at indx 3 
// will be --title=This is my title -- 
//-- so need a parser to parse the string or could write the code yourself but theres a package for it.
// Yargs - great package - pirate themed - to parse strings
//yargs will parse out the title -- can add commands to it
const log = console.log; 
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
    handler(argv) {
        notes.addNote(argv.title, argv.body); 
    }
});

yargs.command({
    command: 'remove',
    describe: 'removing note',
    builder: {
        title: {
            describe: 'taking out note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title); 
        console.log(chalk.green('removed note'), argv.title); 
    }
});
yargs.command({
    command: 'list',
    describe: 'listing notes',
    builder: {
        title: {
            describe: 'listing notes out',
        }
    },
    handler() {
        log(chalk.green('heres the list'));
        console.log(notes.listNotes());
    }
});
yargs.command({
    command: 'read',
    describe: 'reading notesssss',
    builder: {
        title: {
            describe: 'reading specific note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title);
    }
})
// console.log(yargs.argv);
yargs.parse(); 