const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let dbComment = new Schema({
    title: String,
    body: String
})
let Comment = mongoose.model('Comment', dbComment);
module.exports = Comment;