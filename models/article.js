const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let dbArticle = new Schema({
    title: {
        type: String,
        required:true,
        unique: { index: {unique: true }}
    },
    link: {
        type: String,
        required: true
    },
    synopsis: {
        type: String
    },
    image: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    favorite: {
        type: Boolean,
        default: false
    },
    comment: {
        type: Schema.Types.ObjectId,
        ref: 'comment'
    }
})

let Article = mongoose.model('Article', dbArticle)

module.exports = Article;