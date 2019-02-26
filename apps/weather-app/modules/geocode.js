const request = require("request");

module.exports.geocodeAddress = (address, callback) => {
    let adresse = encodeURIComponent(address);

    request({
        url : `https://maps.googleapis.com/maps/api/geocode/json?address=${adresse}&key=AIzaSyCBW6QsmhKVAfqkFnHHD7qSCSoN1zd2tTs`,
        json: true
    }, (err, res, body) => {
        if (err || res.statusCode != 200 || !body.results.length) {
            callback("Something Went Wrong", null);
        } else {
            callback(null, {
                adress: body.results[0].formatted_address,
                lng   : body.results[0].geometry.location.lng,
                lat   : body.results[0].geometry.location.lat
            })
        } 
    });
}