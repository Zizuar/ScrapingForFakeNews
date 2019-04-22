var router = require("express").Router();
var newsReceiver = require("../../controllers/news");

router.get("/", newsReceiver.findAll);
router.delete("/:id", newsReceiver.delete);
router.put("/:id", newsReceiver.update);

module.exports = router;