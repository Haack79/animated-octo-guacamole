const request = require('postman-request');
const API_KEY = '6c3f4e4c4b6f867412dda804bc8a1c37';
// to get real world data, text, email must use http request 
// make node http request to real world servers to get info for this weather app using api
const url = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=Anchorage&units=f`;

request({ url: url, json: true}, (err, res) => {
    // const data = JSON.parse(res.body);
    // console.log(data.current);  
    const temperature = res.body.current.temperature;
    const humidity = res.body.current.humidity;
    console.log(`The temp is ${temperature} degrees and humidity is ${humidity}`);
})