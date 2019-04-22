var db = require("../models");
var scrape = require("../scripts/scrape");

module.exports = {
    scraper: function(req, res) {
        return scrape().then(function(articles) {
            return db.Article.create(articles);
        }).then(function(dbArticle) {
            if (dbArticle.length === 0) {
                res.json({

                    message: "LCARS retrieval error.. No new Fake News"
                });
            }else{
                res.json({
                    message: "Accessing... Complete." + dbArticle.length + " fake news articles located."
                });
            }
        }).catch(function(err) {
            res.json({
                message: "LCARS Query Completed. Terminating Query."
            });
        });
    }
};