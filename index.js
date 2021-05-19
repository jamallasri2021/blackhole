let async = require('asyncnodejlasri');
let request = require('./libs/request');
let config = require('./config.json');
//Test commit push
async.map(config.images, request, (error, result) => {
    if (error) {
        return console.log(error);
    }

    let totalSize = 0;

    for (let i = 0; i < result.length; i++) {
        totalSize += result[i].length;
    }

    console.log(`All downloads ended, results : ${result.length} => ${totalSize}`);
});

