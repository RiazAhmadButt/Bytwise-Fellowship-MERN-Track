const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = new Schema({
    content: { type: String, required: true },
    blog: { type: mongoose.Schema.Types.ObjectId, ref: 'Blog' },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
},
    {
        timeStamps: true
    }
);

module.exports = mongoose.model('Comment', commentSchema, 'Comments')