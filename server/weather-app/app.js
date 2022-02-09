const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast'); 
// to get real world data, text, email must use http request 
// make node http request to real world servers to get info for this weather app using api

geocode('philidelphia', (error, data) => {
    console.log('Error', error);
    console.log('Data', data)
});

forecast('Anchorage', (err, data) => {
    console.log('Error', err); 
    console.log('Data', data); 
})