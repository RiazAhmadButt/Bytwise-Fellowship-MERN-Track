const http = require('http');
// http handle the reques and response data  
const PORT = 3000;

http.createServer((req, resp)=>{
    resp.write("<h1>Hello Node JS Server </h1>");
    resp.end();
}).listen(PORT);