const yargs = require("yargs");
const geocode = require("./modules/geocode");

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

geocode.geocodeAddress(argv.a)