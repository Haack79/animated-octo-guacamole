// node available modules - just bare bones functions methods you can use. 
// look at the documents 
const http = require('http');
const url = 'http://api etc';

const request = http.request(url, (response) => {
    let data = '';
    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })
    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);  
    })
});
request.on('error', (error) => {
    console.log('an error', error); 
})
request.end(); 