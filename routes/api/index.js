const router = require("express").Router();
const vocabRoute = require("./vocab");

router.use("/vocab", vocabRoute);


module.exports = router;