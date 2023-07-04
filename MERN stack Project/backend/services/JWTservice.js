const jwt = require('jsonwebtoken');
const { Access_Token_Secret, Refresh_Token_Secret } = require('../config/index');
const RefreshToken = require('../models/tokens/token');

class JWTService {

    // sign access token 
    static signAccessToken(payload, expireTime) {
        return jwt.sign(payload, Access_Token_Secret, { expiresIn: expireTime });
    };

    // sign refreshtoken 
    static signRefreshToken(payload, expireTime) {
        return jwt.sign(payload, Refresh_Token_Secret, { expiresIn: expireTime });
    };

    // verify access token 

    static verifyAccessToken(token) {
        return jwt.verify(token, Access_Token_Secret)
    }

    // verify refresh token 
    static verifyRefreshToken(token) {
        return jwt.verify(token, Refresh_Token_Secret)
    }
    // store refresh token 

    static async storeRefreshToken(token) {
        try {
            const newToken = new RefreshToken({
                token: token,
                userId: userId
            });

            // store id 
            await newToken.save();
        }
        catch (error) {
            console.log(error)
        }
    }
}

module.exports = JWTService;