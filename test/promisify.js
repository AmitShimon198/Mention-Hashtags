const util = require('util');
const fs = require('fs');
//promisify easy with node util
const readFilePromise = util.promisify(fs.readFile);
//custom promisify 
function someCallback(data, onSuccess, onError) {
    fetch(data.url)
        .then(results => onSuccess(results))
        .catch(error => onError(error))
}

someCallback[util.promisify.custom] = function (data) {
    return new Promise((resolve, reject) => {
        someCallback(data, resolve, reject);
    });
};
const promiseStyle = util.promisify(someCallback);

const data = { url: 'http://localhost:3978/' };
(async () => {
    const response = await promiseStyle(data);
    console.log(await response.text());
})()
