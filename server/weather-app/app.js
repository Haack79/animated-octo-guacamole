const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast'); 
// const process = require('process');
// to get real world data, text, email must use http request 
// make node http request to real world servers to get info for this weather app using api
const address = process.argv[2];
if (!address) {
    console.log('provide address'); 
}
// console.log(address); 
// below if error occured no values for latitude, longitude and location
// so to keep from trying to destructure non-existent elements that would throw an error
// do the default parameter as an empty object if those dont exist. 
// so below error would populate, and the second argument would become an empty object.
// this will cause all 3 values to be undefined.
console.log('in geocode'); 
geocode(address, (error, {latitude, longitude, location} = {}) => {
    if (error) {
        return console.log(error);
    }
    forecast(latitude, longitude, (err, forecastData) => {
        if (err) {
            return console.log(err); 
        }
        console.log(location);
        console.log(forecastData);
    })
});
