const vocab = require("../vocab/nouns.json");
module.exports = {
    returnFile: function(req,res){
        res.json(vocab);
    }
}

