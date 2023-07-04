const mongoose = require('mongoose');

const {Schema} = mongoose;

const userSchema = new Schema({
    userName : {type: String, required: true},
    name : {type : String, required : true},
    email : {type: String, required : true},
    password : {type: String, required : true}
},
 {timeStamps : true}
)

module.exports = mongoose.model('User' , userSchema, 'users')