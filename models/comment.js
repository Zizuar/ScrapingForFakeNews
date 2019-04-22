const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let dbCommentSchema = new Schema({
    _articlesId: {
        type: Schema.Types.ObjectId,
        ref: "Article"
    },
    title: String,
    body: String,
    date: {
        type: Date,
        default: Date.now
    },
});

let Comment = mongoose.model('Comment', dbCommentSchema);
module.exports = Comment;