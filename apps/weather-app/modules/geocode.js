const request = require("request");

module.exports.geocodeAddress = (address, callback) => {
    let adresse = encodeURIComponent(address);

    request({
        url : `https://maps.googleapis.com/maps/api/geocode/json?address=${adresse}&key=AIzaSyCBW6QsmhKVAfqkFnHHD7qSCSoN1zd2tTs`,
        json: true
    }, (err, res, body) => {
        if (err || res.statusCode != 200 ) {
            console.log("Something Went Wrong");
        } else {
            console.log(`Adresss: ${body.results[0].formatted_address}`);
            console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
            console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
        } 
    });
}

