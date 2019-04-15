const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let dbArticle = new Schema({
    title: {
        type: String
    },
    link: {
        type: String
    },
    description: {
        type: String
    },
    image: {
        type: String
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