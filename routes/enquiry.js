var express = require("express");
var router = express.Router();
var enquiry = require("../models/enquiry");
var passport = require("passport");

//Create an Enquiry Route
router.post("/enquiry-new", function(req, res){
  req.body.enquiry.content = req.sanitize(req.body.enquiry.content);
  enquiry.create(req.body.enquiry, function(err, newEnquiry){
    if(err){
      console.log("Error")
    }else{
      newEnquiry.save();
      res.redirect("/success")
    }
  })
});

//enquiry success route

router.get("/success", function(req, res){
  var metatitle = "Succesful Enquiry"
  var metadescription = "Your Enquiry has been received"
  res.render("success", {
                         metatitle: metatitle,
                         metadescription: metadescription
                         }
            );
            });

function isLoggedIn(req, res, next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect("/login")
}

module.exports = router;
