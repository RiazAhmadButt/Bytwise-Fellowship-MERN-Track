const express = require ("express");
const path = require ("path");

const app = express();
const port = process.env.PORT || 3000;
const publicPath = path.join((__dirname), "public");
// console.log(publicPath)

app.use(express.static(publicPath))

// remove extension from url 
// change the name of url 

app.get('/', (req, resp)=>{
    resp.sendFile(`${publicPath}/index.html`)
})
app.get('/home', (req, resp)=>{
    resp.sendFile(`${publicPath}/index.html`)
})
app.get('/about', (req, resp)=>{
    resp.sendFile(`${publicPath}/about.html`)
})
app.get('*', (req, resp)=>{
    resp.sendFile(`${publicPath}/nopage.html`)
})


app.listen(port, ()=>{
    console.log("App is running")
})