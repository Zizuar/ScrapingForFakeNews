var axios = require("axios");
var cheerio = require("cheerio");

var scrape = function() {
    return axios.get("http://news.gallup.com").then(function(res) {
        var $ = cheerio.load(res.data);
        console.log("Scraping Fake News");
        var articles = [];

        $("div.copy").each(function(i, element) {
            var title = $(this).find("h3").text().trim();
            var linkAddy = $(this).find("a").attr("href");
            var synop = $(this).find("p").hasClass(className: "item-synopsis").text().trim();

            if (title && linkAddy && synop) {
                var commonData = {
                    headline: title,
                    summary: synop,
                    url: "https://news.gallup.com" + linkAddy
                };
                articles.push(commonData);
            }
        });
        return articles;
    });
};

module.exports = scrape;