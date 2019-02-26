const request = require("request");

var geocodeAddress = (adress) => {
    return new Promise((resolve, reject) => {
        request({
            url : `https://maps.googleapis.com/maps/api/geocode/json?address=${adress}&key=AIzaSyCBW6QsmhKVAfqkFnHHD7qSCSoN1zd2tTs`,
            json: true
        }, (err, res, body) => {
            if (err || res.statusCode != 200 || !body.results.length) {
                reject("Something Went Wrong");
            } else {
                resolve({
                    adress: body.results[0].formatted_address,
                    lng   : body.results[0].geometry.location.lng,
                    lat   : body.results[0].geometry.location.lat
                })
            } 
        });
    });
};

geocodeAddress("2 square albin cachot").then((location) =>  {
    console.log(location);
}, (err) => {
    console.log(err);
});