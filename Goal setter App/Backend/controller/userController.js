const jwt = require('jsonwebtoken');
require('dotenv').config();
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

// @decs   register new user 
// route   POST/api/users
// access   public

const userRegister = asyncHandler(async (req, resp) => {
    const { name, email, password } = req.body
    if (!name || !email || !password) {
        throw new Error('Please add all fields')
    }
    //  check if user exist 
    const userExists = await User.findOne({ email })

    if (userExists) {
        resp.status(400)
        throw new Error('User already exist')
    }

    // hash password 
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt)

    // create user 
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
    })

    if (user) {
        resp.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        resp.status(400)
        throw new Error('Invalid user data')
    }
})

// @decs   Authenticate  a user 
// route   POST/api/users/login
// access   public

const userLogin = asyncHandler(async (req, resp) => {
    const { email, password } = req.body

    // check for user email 
    const user = await User.findOne({ email }).maxTime(30000);
    
    if (user && bcrypt.compareSync(password, user.password)) {
        resp.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    }
    else {
        resp.status(400)
        throw new Error('Invalid user credentials')
    }
})

// @decs   Get user Data
// route   Get/api/users/me
// access   private

const getMe = asyncHandler(async (req, resp) => {
    const {_id, name, email} = await User.findById(req.user.id)

    resp.status(200).json({
        id: _id,
        name,
        email,
    })
})

// generate jwt 


const generateToken = (id) => {
    const payload = { id };
    const secretKey = process.env.JWT_SECRET;
    const options = { expiresIn: '30d' };
  
    return jwt.sign(payload, secretKey, options);
  };

module.exports = {
    userRegister,
    userLogin,
    getMe,
}