const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const axios = require('axios');
const cheerio = require('cheerio');
const db = require('./models');
const PORT = process.env.port || 3000;
const app = express();

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

const routes = require("./routes");

// Changing per instructions.
// mongoose.connect('mongodb://localhost/ScrapingForFakeNews', { useNewUrlParser: true });
var MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/ScrapingForFakeNews';

mongoose.connect(MONGODB_URI); 

// *seperating functionality  from the server file for eaasier routing and the addiition of handlebars.

// app.get('/all', function (req, res) {
//     axios.get('https://news.gallup.com/').then(function (response) {
//         const $ = cheerio.load(response.data);
//         // let results = []
//         $('li.item.item-content.item-article').each(function (i, element) {
//             let result = {}
//             result.image = $(element).find('img').attr('src')
//             result.title = $(element).find('span.title').text()
//             result.link = $(element).find('a.title').attr('href')
//             result.description = $(element).find('p.description').text()
//             result.favorited = false
//             db.Article.create(result).then(function (dbArticle) {
//                 console.log(dbArticle);
//             }).catch(function (err) {
//                 console.log(err);
//             })
//         })
//         res.send('scrape complete')
//     })
// })

// app.get('/Article', function (req, res) {
//     db.Article.find({}).then(function (dbArticle) {
//         res.json(dbArticle);
//     }).catch(function (err) {
//         res.json(err);
//     });
// });

// app.post('/Article/:id', function (req, res) {
//     let id = req.params.id
//     db.Article.updateOne({ _id: id }, { $set: { favorite: true } }, function (error, edited) {
//         if (error) {
//             console.log(error);
//             res.send(error);
//         }
//         else {
//             console.log(edited);
//             res.send(edited);
//         }
//     })
// })

// app.get('/Favorites', function (req, res) {
//     db.Article.find({ favorite: true }).then(function (dbArticle) {
//         res.json(dbArticle);
//     }).catch(function (err) {
//         res.json(err);
//     });
// })

// app.post('/remove/:id', function (req, res) {
//     let id = req.params.id
//     db.Article.updateOne({ _id: id }, { $set: { favorite: false } }, function (error, edited) {
//         if (error) {
//             console.log(error);
//             res.send(error);
//         }
//         else {
//             console.log(edited);
//             res.send(edited);
//         }
//     })
// })

// app.get('/Article/:id', function (req, res) {
//     let id = req.params.id
//     db.Article.findOne({ _id: req.params.id })
//         .populate('comment')
//         .then(function (dbArticle) {
//             console.log("YOU ARE HERE" + dbArticle);
//             res.json(dbArticle);
//         })
//         .catch(function (err) {
//             res.json(err);
//         });
// })

// app.post('/Comments/:id', function (req, res) {
//     db.Comment.create(req.body)
//         .then(function (dbComment) {
//             db.Article.findOneAndUpdate({ _id: req.params.id }, { comment: dbComment._id }, { new: true })
//                 .then((dbArticle) => {
//                     res.json(dbArticle);
//                 })
//                 .catch((err) => {
//                     res.json(err);
//                 });
//         })
//         .catch(function (err) {
//             res.json(err);
//         })
// })

app.listen(PORT, function () {
    console.log("LCARS Link Established: running on port " + PORT + "!");
});