const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = new Schema({
    content: { type: string, required: true },
    blog: { type: mongoose.SchemaType.objectId, required: true },
    author: { type: mongoose.SchemaType.objectId, required: true }
},
    {
        timeStamps: true
    }
);

module.exports = mongoose.model('Comment', commentSchema, 'Comments')