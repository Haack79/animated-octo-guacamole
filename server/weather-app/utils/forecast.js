const request = require('postman-request');

const forecast = (address, callback) => {
    const API_KEY = '6c3f4e4c4b6f867412dda804bc8a1c37';
    const url = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${address}&units=f`;
    request({ url: url, json: true}, (err, res) => {
        // const data = JSON.parse(res.body);
        // console.log(data.current);
        if (err) {
            callback('sorry error cant connect', undefined); 
        }  else if (res.body.error) {
            console.log('unable to find location', undefined); 
        }  else {
            const temperature = res.body.current.temperature;
            const humidity = res.body.current.humidity;
            console.log(`The temp is ${temperature} degrees and humidity is ${humidity}`);
        }
    });
};

module.exports = forecast; 