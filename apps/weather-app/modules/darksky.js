const request = require("request");

module.exports.darkSkyCall = (lgn, lat, callback) => {
    request({
        url : `https://api.darksky.net/forecast/96936b9e0e4f3061f53a7a02a1e25ba6/${lgn},${lat}`,
        json: true
    }, (err, res, body) => {
        if (!err && res.statusCode === 200) {
            return callback(null, body.currently.temperature);
        } else {
            return callback("something went wrong");
        }
    });
};  