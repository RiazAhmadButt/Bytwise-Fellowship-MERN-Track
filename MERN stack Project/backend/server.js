const express = require('express');
const routes = require('./routes/Routes');
const errorHandler = require('./middleware/errorHandler');
const {PORT} = require('./config/index');
const cookieParser = require('cookie-parser');

const app = express();
const db = require('./Database/index')

const port = PORT;

app.use(cookieParser())

db();
app.use(express.json());

// static storage for images store
app.use('./storage', express.static('storage'));


app.use(routes);

app.use(errorHandler);

app.get('/', (req,resp)=>{
    resp.json({message : "Hello Node JS.."})
})

app.listen(port, console.log(`port is running on ${port}`))