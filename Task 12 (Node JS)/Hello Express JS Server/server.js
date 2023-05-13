console.log("Hello Node Js server");

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res)=>{
    res.send("Get request is sucessfuly run. Welcome, this is Home Page");
})
app.get('/about', (req, res)=>{
    res.send("Welcome, this is aboout  page");
})
app.get('/help', (req, res)=>{
    res.send("Welcome, this is help  page");
})

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})