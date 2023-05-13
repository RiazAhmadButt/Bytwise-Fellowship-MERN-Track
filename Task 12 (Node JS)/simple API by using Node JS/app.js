console.log("Simple API");

const http = require('http');
const data = require('./jsonData');
const PORT = 3000;

http.createServer((req, res)=>{
    res.write(JSON.stringify(data));
    res.end();
}).listen(PORT)