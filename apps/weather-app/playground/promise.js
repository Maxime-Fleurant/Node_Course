var testPromise = new Promise((resolve, reject) => {
    // resolve("hey, it worked");
    reject("unable");
});

testPromise.then((message) => {
    console.log(message);
}, (err) => {
    console.log(err);
});