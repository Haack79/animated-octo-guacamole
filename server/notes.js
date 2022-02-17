const fs = require('fs');
// const validator = require('validator');
const yargs = require('yargs');
const chalk = require('chalk');

const log = console.log;
yargs.version('1.1.0');
log(chalk.blue('Hello') + 'World' + chalk.red('!')); 
log(chalk.green('success')); 
const yellow = chalk.yellow('caution');
log(yellow); 
 // to debug can add debugger keyword - then in cli run  node inspect <filename>
 // then chrome://inspect - can inspect app. 
const addNote = function(title, body) {
    const notes = loadNotes(); 
    // const duplicateNotes = notes.filter((note) => {
    //     return note.title === title; 
    // });
    debugger
    const duplicateNote = notes.find(note => note.title === title)
    if (!duplicateNote) {
        log(chalk.green.inverse('new note taken')); 
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
    } else {
        log(chalk.red('Note title already used'));
    }
}
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes); 
    fs.writeFileSync('notes.json', dataJSON); 
}
const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (err) {
        log(err); 
        return []; 
    }
}
const removeNote = (title) => {
    const notes = loadNotes();
    const originalLength = notes.length; 
    const newNotes = notes.filter(note => {
        return note.title !== title; 
    });
    saveNotes(newNotes);
    if (originalLength > newNotes.length) {
        log(chalk.green.inverse('note removed'));
    } else {
        log(chalk.red('note does not exist')); 
    }
}
const listNotes = () => {
    const notes = loadNotes(); 
    console.log(notes);
    if (notes.length) {
        console.log(notes.length);
        const names = notes.map(note => note.title);
        return names;

    } else {
        console.log(chalk.red('no notes to list'));
    }
}

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find(note => note.title === title);
    if (note) {
        log(chalk.green('Found Note!'));
        log(note.title); 
        log(note.body); 
    } else {
        log(chalk.red.inverse('Sorry note with that title not found!'))
    }
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

// checking email and url below with validator
// console.log(validator.isEmail('brian@e.com')); 
// console.log(validator.isURL('bleh')); 
module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
} 
