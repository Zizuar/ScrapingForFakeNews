var router = require("express").Router();
var puttyKnife = require("../../controllers/scraper");

router.get("/", puttyKnife.scraper);

module.exports = router;