var express = require("express");
var router = express.Router();

router.get("/testing-sliding-sidebar", function(req, res){
        res.render("test/testing-sliding-sidebar",{
            metatitle: "Sliding sidebar test",
            metadescription: "testing-sliding-sidebar",
            quickCallHelpers: req.quickCallHelpers
        });  
});




module.exports = router;