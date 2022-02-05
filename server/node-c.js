const getNotes = require('./notes.js');
// const name = require('./practice-file.js'); 
console.log('hello there'); 
// load in the fs module into variable. 
// const fs = require('fs');
// below creates a notes.txt file in the folder its in if one doesnt exist, if notes.txt does exist it will add the new data to it. 
// fs.writeFileSync('notes.txt', ' this file was created by node.js'); 
// fs.appendFileSync('notes.txt', 'hello im appended'); 
// const speak = getNotes(); 
getNotes(); 
// console.log(speak); 
// console.log(name); 