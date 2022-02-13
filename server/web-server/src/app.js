const path = require('path'); // core node module so dont have to install it. 
const express = require('express'); 
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
// get hbs to set up partials. 
const hbs = require('hbs');

const app = express();
// set the handlebards view engine and location
// for setting diff path for where handlebars looks for view templates - below is if we put them in a folder called templates
const viewsPath = path.join(__dirname, '../src/templates/views')
const partialsPath = path.join(__dirname, '../src/templates/partials');
// pass in from express- pass static file with html in it. - setup paths for express below.
const publicDirectoryPath = path.join(__dirname, '../public');
// set handlebars engine and views
app.set('view engine', 'hbs');
// then set the views path
app.set('views', viewsPath); 
// set partials
hbs.registerPartials(partialsPath);
 
// set up static directory to serve up static files.
app.use(express.static(publicDirectoryPath))
// __dirname - contains path to current directory from root of hardrive to folder
// __filename - provides file path to current file 
// app.com ; app.com/help ; app.com/about
/*------------------
dynamic content using handlebars
lets generate dynamic site and reuse code across web pages. 
handlebars is a template engine.  able to have markup and use it across pages. 

*/
//set server to do something at a route, when request comes in 
// the app.get for root here is done above with app.use(express.static)
// app.get('', (req, res) => {
//     // send something to user
//     res.send('hello express!');
// });
   // the following two routes are encompassed in the public path above so html is being rendered at those address. 
// app.get('/help', (req, res) => {
//     res.send('Help Page'); 
// })
// app.get('/about', (req, res) => {
//     res.send({
//         name: 'Brian H',
//         age: 100
//     });
// });
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Brian H'
    });
});
app.get('/about', (req, res) => {
    res.render('about', {
        name: 'Brian Haack',
        age: 153,
        race: "2 or more"
    })
});
app.get('/help', (req, res) => {
    res.render('help', {
        issues: ['dumbness', 'idiocracy', 'whininess'],
        name: 'B-town'
    })
});
app.get('/help/*', (req, res) => {
    res.render('404', {
        name: 'b town',
        error: 'This help page does not exist!',
        title: 'big boo boo'
    })
})
app.get('/weather', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You need to provide a search term'
        })
    }
    const address = req.query.address; 
    debugger;
    if (!address) {
        return res.send({
            error: 'You must put in an address'
        })
    }
    geocode(address, (error, {latitude, longitude, location} = {}) => {
        if (error) {
            return res.send({error});
        }
        forecast(latitude, longitude, (err, forecastData) => {
            if (err) {
                return res.send({err}); 
            }
            res.send({
                forecast: forecastData,
                location,
                address: address
            })
        })
    })
});
app.get('/products', (req, res) => {
    res.send({
        stuff: 'lotta goodies bro'
    })
})
app.get('*', (req, res) => {
    res.render('404', {
        error: 'This page does not exist',
        name: 'you know who',
        title: 'whateva'
    });
})
// web server will keep listening until we stop it. 
app.listen(3000, () => {
    console.log('server is up on port 3000');
});