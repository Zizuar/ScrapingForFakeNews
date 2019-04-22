var router = require("express").Router();
var incoming = require("./receiver");
var commentRoutes = require("./comments");
var articleRoutes = require("./articles");

router.use("/receiver", incoming);
router.use("/comments", commentRoutes);
router.use("/articles", articleRoutes);

module.exports = router;