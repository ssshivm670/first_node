const fs = require('fs');

// read stream
const readStream = fs.createReadStream('largeText.txt', {
    encoding: 'utf-8'
});

// readStream.on('data',chunk=> { 
//     console.log('######### new chunk #######');
//     console.log(chunk);
// })

//write stream

const writeStream = fs.createWriteStream('writeStream.txt');

// readStream.on('data',chunk=> { 
//     console.log('######### new chunk #######');
//     console.log(chunk);

//     writeStream.write('\n ###### new chuck #######');
//     writeStream.write(chunk)
// })

//stream pipe

readStream.pipe(writeStream);