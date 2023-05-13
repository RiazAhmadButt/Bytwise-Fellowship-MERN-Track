const fs = require('fs');
const path = require('path');

const rs = fs.createReadStream('./files/starter.txt',{encoding: 'utf8'});
const ws = fs.createWriteStream('./files/new-lorem.txt');

// rs.on('data', (dataChunk)=>{
//     ws.write(dataChunk)
// })

rs.pipe(ws)