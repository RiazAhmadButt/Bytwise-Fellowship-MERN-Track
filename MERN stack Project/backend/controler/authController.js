const joi = require('joi');
const bcrypt = require('bcryptjs');
const User = require('../models/user/user');
const userDTO = require('../dto/user');
const JWTService = require('../services/JWTservice');
const RefreshToken = require('../models/tokens/token');


// Minimum eight characters, at least one letter, one number and one special character 
const passwordPattern = /^[a-zA-Z]{4}$/;

const authController = {
    async register(req, resp, next) {
        //   user input validation 
        const userRegisterSchema = joi.object({
            userName: joi.string().min(3).max(20).required(),
            name: joi.string().min(3).max(20).required(),
            email: joi.string().email().required(),
            password: joi.string().pattern(passwordPattern).required(),
            confirmPassword: joi.ref('password')
        });

        const { error } = userRegisterSchema.validate(req.body);

        // if error in validation
        if (error) {
            return next(error);
        }

        // if email or username already register 

        const { name, userName, email, password } = req.body;

        try {
            const emailInUse = await User.exists({ email })
            const userNameInUse = await User.exists({ userName })

            if (emailInUse) {
                const error = {
                    status: 409,
                    message: 'Email alredy registered, use another email'
                }
                return next(error)
            }

            if (userNameInUse) {
                const error = {
                    status: 409,
                    message: 'userName not available, choose another userName'
                }
                return next(error)
            }

        }
        catch {
            return next(error)
        }

        // password hash
        const passwordHash = await bcrypt.hash(password, 10);

        // store user data in db 

        let accessToken;
        let refreshToken;
        let user;
        try {
            const userToRegister = new User({
                userName,
                name,
                email,
                password: passwordHash
            });
            user = await userToRegister.save();

            // generate token 
            accessToken = JWTService.signAccessToken({ _id: user.id }, '30m');
            refreshToken = JWTService.signRefreshToken({ _id: user.id }, '60m');

        }
        catch (error) {
            return next(error)
        }


        // store refresh token in db 

        await JWTService.storeRefreshToken(refreshToken, user._id);

        // send token in cookie 

        resp.cookie('accessToken', accessToken, {
            maxAge: 1000 * 60 * 60 * 24,
            httpOnly: true
        });

        resp.cookie('refreshToken', refreshToken, {
            maxAge: 1000 * 60 * 60 * 24,
            httpOnly: true
        });


        // response send 
        const userDto = new userDTO(user)
        return resp.status(201).json({ userDto, auth: true })
    },

    // login 
    async login(req, resp, next) {
        const userLoginSchema = joi.object({
            email: joi.string().email().required(),
            password: joi.string().pattern(passwordPattern).required(),
        });
        // validate user input 
        const { error } = userLoginSchema.validate(req.body);

        if (error) {
            return next(error);
        }

        // match email and password  

        const { email, password } = req.body;
        let user;
        try {
            // Match email 
            user = await User.findOne({ email: email })
            if (!user) {
                const error = {
                    status: 409,
                    message: 'Invalid Email'
                }
                return next(error)
            }
            // Match Password 
            // req.body.passwor > Hash >Match

            const match = await bcrypt.compare(password, user.password);
            if (!match) {
                const error = {
                    status: 409,
                    message: 'Invalid Password'
                }
                return next(error)
            }
        }
        catch {
            return next(error)
        }

        let accessToken = JWTService.signAccessToken({ _id: user.id }, '30m');
        let refreshToken = JWTService.signRefreshToken({ _id: user.id }, '60m');

        // update refresh token in database 


        try {
            await RefreshToken.updateOne({
                _id: user._id
            },
                { token: refreshToken },
                { upsert: true }
            )
        }
        catch (error) {
            return next(error)
        }

        // send token in cookie 

        resp.cookie('accessToken', accessToken, {
            maxAge: 1000 * 60 * 60 * 24,
            httpOnly: true
        });

        resp.cookie('refreshToken', refreshToken, {
            maxAge: 1000 * 60 * 60 * 24,
            httpOnly: true
        });

        const userDto = new userDTO(user)

        return resp.status(200).json({ user: userDto, auth: true })

    },

    // logout 
    async logout(req, resp, next) {
        console.log(req);
        // delete refresh token from db
        const { refreshToken } = req.cookies;

        try {
            await RefreshToken.deleteOne({ token: refreshToken })
        }
        catch (error) {
            return next(error)
        }
        // delete cookies 
        resp.clearCookie('accessToken');
        resp.clearCookie('refreshToken');
        // response 
        resp.status(200).json({ user: null, auth: false })
    },


    // Refresh 
    async refresh(req, resp, next) {
        // got refreshToken from cookies 
        // verify refreshToken 
        // generate new tokens 
        // update db, return response 

        const originalRefreshToken = req.cookies.refreshToken;

        let id;

        try {
            id = JWTService.verifyRefreshToken(originalRefreshToken)._id;
        }
        catch (e) {
            const error = {
                status: 401,
                message: 'Unauthorized'
            }
            return next(error)
        }

        try {
            const match = RefreshToken.findOne({ _id: id, token: originalRefreshToken });
            if (!match) {
                const error = {
                    status: 401,
                    message: 'Unauthorized'
                }
                return next(error);
            }
        }
        catch (e) {
            return next(e)
        }
        try {
            const accessToken = JWTService.signAccessToken({ _id: id }, '30m');
            const refreshToken = JWTService.signRefreshToken({ _id: id }, '60m');
            await RefreshToken.updateOne({ _id: id }, { token: refreshToken });

            resp.cookie('accessToken', accessToken, {
                maxAge: 1000 * 60 * 60 * 24,
                httpOnly: true
            });

            resp.cookie('refreshToken', refreshToken, {
                maxAge: 1000 * 60 * 60 * 24,
                httpOnly: true
            });

        }
        catch(e){
            return next(e)
        }
         const user = await User.findOne({_id: id});
         const userDto = new userDTO(user);
         // response 
        return resp.status(200).json({ user: userDto, auth: true })
    }
}

module.exports = authController