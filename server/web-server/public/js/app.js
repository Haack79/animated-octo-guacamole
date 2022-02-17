// const imgEl = document.querySelector('img');
console.log('hi');
// browser based api in client side js. fetch
// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data) => {
//         console.log(data); 
//     })
// });
const weatherForm = document.querySelector('form');
const searchWord = document.querySelector('input');
const locationMessage = document.querySelector('.location-message');
const messageOne = document.getElementById('message-1'); 
const errorMessage = document.getElementById('error-message'); 

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault(); // don't refresh please. 
    const address = searchWord.value;
    const mapAPI = 'pk.eyJ1IjoiaGFhY2s3OSIsImEiOiJjajVteHlkbzIzOGw5MzJvNngxbm9pZHllIn0.HYzjG6cS-RlzXV8OTRVRZA';
    const endPoint = 'mapbox.places';
    const API_KEY = '6c3f4e4c4b6f867412dda804bc8a1c37';
    messageOne.textContent = 'Loading........';
    const url = `https://api.mapbox.com/geocoding/v5/${endPoint}/${encodeURIComponent(address)}.json?access_token=${mapAPI}`;
    fetch(url).then((res) => {
        res.json().then((data) => {
            console.log(data);
            if (data.message) {
                errorMessage.innerText = data.message; 
                locationMessage.innerText = '';
                messageOne.innerText = '';
            } else {
                let latitude = data.features[0].center[1];
                let longitude = data.features[0].center[0];
                let location = data.features[2].place_name;
                const weatherUrl = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${latitude},${longitude}&units=f`;
                fetch(weatherUrl).then((response) => {
                    response.json().then((foreCast) => {
                        console.log(foreCast);
                        const temperature = foreCast.current.temperature;
                        const humidity = foreCast.current.humidity;
                        const windSpeed = foreCast.current.wind_speed; 
                        errorMessage.innerText = '';
                        locationMessage.innerText = `We are looking at info for ${location}`;
                        messageOne.innerText = `The temperature is ${temperature} with windspeed at ${windSpeed} and the humidity is ${humidity}`;
                    })
                })
            }
        })
    });
        
})


