const jwt = require('jsonwebtoken')
require('dotenv').config();
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const protect = asyncHandler(async (req, resp, next) => {
    try {
        // get token from header
        // const token = req.headers.authorization.split(' ')[1]
        const authHeader = req.headers.authorization;
        const token = authHeader && authHeader.split(' ')[1];



        // verify token 
        // const decoded = jwt.verify(token.process.env.JWT_SECRET)
        const decoded = jwt.verify(token, process.env.JWT_SECRET);


        // get user from the token 

        req.user = await User.findById(decoded.id).select('-password')
        next()

    }
    catch (error) {
        console.log(error)
        resp.status(401)
        throw new Error("Not authorized")

    }
})
// if (!token) {
//     resp.status(401)
//     throw new Error("Not authorized, no token")
// }

module.exports = { protect }