const router = require("express").Router();
const vocabController = require("../../controllers/vocabController");

router.route("/vocab").get(vocabController.returnFile);

module.exports = router;
