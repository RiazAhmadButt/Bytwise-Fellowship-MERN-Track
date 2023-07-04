const {ValidationError} = require('joi');

const errorHandler = (error, req, resp, next)=>{
    let status = 500;
    let data ={
        message : "Internal server Error"
    }

    if(error instanceof ValidationError){
        status = 401;
        data.message = error.message;
        return resp.status(status).json(data)
    }

    if(error.status){
        status = error.status
    }

    if(error.message){
        data.message = error.message
    }

    return resp.status(status).json(data)
}

module.exports = errorHandler;