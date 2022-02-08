const fs = require('fs');

const readStream = fs.createReadStream('largeText.txt', {
    encoding: 'utf-8'
});

readStream.on('data',chunk=> { 
    console.log('######### new chunk #######');
    console.log(chunk);
})