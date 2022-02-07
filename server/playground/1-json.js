// import { flushSync } from "react-dom";
const fs = require('fs'); 
const book = {
    title: 'Ego is the enemy',
    author: 'ryan holiday'
}

const bookJSON = JSON.stringify(book); 
console.log(bookJSON); 

const parsedBook = JSON.parse(bookJSON); 
console.log(parsedBook); 
fs.writeFileSync('1-json.json', bookJSON);

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
console.log(data.title); 
data.title = 'new book name';
console.log(data.title); 

