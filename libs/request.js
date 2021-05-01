var http = require('http');
var https = require('https');

let request = (data, callback) => {
    if (!data.url) {
        return callback(new Error('Insert image url in data.url'));
    }

    console.log('Start');

    var url = new URL(data.url);
    var client = http;
    client = (url.protocol == "https:") ? https : client;

    client.get(data.url, function (response) {
        let body = '';

        response.on('data', (d) => {
            body += d;
        });

        response.on('end', () => {
            console.log(`Finish ${data.url} => Size : ${body.length}`);
            return callback(null, body);
        });
    }).on('error', (e) => {
        console.log(`Got error : ${e.message}`);
    });
};

module.exports = request;