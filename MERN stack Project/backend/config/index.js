const dotenv = require('dotenv').config();
const BACKEND_SERVER_PATH = process.env.BACKEND_SERVER_PATH;

const PORT = process.env.PORT;
const MONGODB_CONNECTION_STRING = process.env.MONGODB_CONNECTION_STRING ;
const Access_Token_Secret = process.env.Access_Token_Secret;
const Refresh_Token_Secret = process.env.Refresh_Token_Secret;

module.exports = {
    PORT,
    MONGODB_CONNECTION_STRING,
    Access_Token_Secret,
    Refresh_Token_Secret,
    BACKEND_SERVER_PATH
}