const express = require('express');
const colors= require('colors')
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
// import connectDB from './config/db';
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals', require('./router/goalRoutes'))
app.use('/api/users', require('./router/userRoutes'))

app.use(errorHandler);

app.listen(port, ()=> console.log(`server run on port ${port}`))