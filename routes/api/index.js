const router = require("express").Router();
const vocabRoute = require("./vocab");

router.use("/", vocabRoute);


module.exports = router;