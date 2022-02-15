const request = require('postman-request');

const mapAPI = 'pk.eyJ1IjoiaGFhY2s3OSIsImEiOiJjajVteHlkbzIzOGw5MzJvNngxbm9pZHllIn0.HYzjG6cS-RlzXV8OTRVRZA';
const endPoint = 'mapbox.places';

const geocode = (address, callback) => {
    // const mapAPI = 'pk.eyJ1IjoiaGFhY2s3OSIsImEiOiJjajVteHlkbzIzOGw5MzJvNngxbm9pZHllIn0.HYzjG6cS-RlzXV8OTRVRZA';
    // const endPoint = 'mapbox.places';
    console.log('in geocode',address); 
    // console.log((encodeURIComponent(address))); 
    const url = `https://api.mapbox.com/geocoding/v5/${endPoint}/${encodeURIComponent(address)}.json?access_token=${mapAPI}`;
    request({url: url, json: true }, (err, {body} = {}) => {
        console.log(body); 
        if (err) {
            callback('unable to connect to location services', undefined);
        } else if (body.features.length === 0) {
            callback('unable to find location', undefined);
        } else if (body.features[0].center[1] === undefined) {
            callback('unable to get longitude'); 
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name 
            })
        }
    })
};

module.exports = geocode; 