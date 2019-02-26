const yargs   = require("yargs");
const geocode = require("./modules/geocode");
const darksky = require("./modules/darksky");

const argv = yargs
    .option({
        a: {
            demand  : true,
            alias   : 'adress',
            describe: 'Adress to fetch weather for',
            string  : true
        }
    })
    .argv;

geocode.geocodeAddress(argv.a, (err, results) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Adresss: ${results.adress}`);
        console.log(`Longitude: ${results.lng}`);
        console.log(`Latitude: ${results.lat}`);

        darksky.darkSkyCall(results.lng, results.lat, (err, results) => {
            if (err) {
                console.log(err);
            } else {
                console.log(`Temperature = ${results}`)
            }
        }) 

    }
})