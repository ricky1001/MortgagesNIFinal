var express = require("express");
var router = express.Router();
var Rate = require("../models/rates");

var mortgageAdvice =        require("../models/mortgageAdvice");




//Home Page 

router.get("/", function(req, res){
  var metatitle = "Mortgages Northern Ireland | Fee Free Mortgage Broker | Mortgage Advice | NI"
  var metadescription = "Mortgage Adviser NI offers free mortgage advice on all mortgages in northern Ireland. Contact mortgage adviser NI for a free appointment."
  mortgageAdvice.find({}, function(err, mAdvice){
    if(err){
      console.log(err)
    }else{
      Rate.find({}, function(err, rate){
        if(err){
          console.log(err);
        }else{
          var filteredRate = Rate.aggregate([
            {$sort : {rate: 1}}])
            .then(function(filteredRate){
              res.render("home",
              {
                metatitle, metatitle,
                metadescription: metadescription,
                rate: filteredRate,
                mAdvice: mAdvice
              })
            })
        }
      })
    }
  })
})


//Self-Build Pages
router.get("/self-build-mortgages", function(req, res){
  var metatitle = "Self Build Mortgages NI - Free Mortgage Advice Northern Ireland"
  var metadescription = "Self build Mortgages NI ! Mortgage Adviser NI offers free mortgage advice to all self build mortgage applicants in northern Ireland. Contact a mortgage broker today."
  res.render("./self-build/self-build-mortgages",
             {metatitle:metatitle, metadescription: metadescription}
            )
})

//PRIVACY POLICY
router.get("/privacy-policy", function(req, res){
  var metatitle = "Privacy policy - Mortgage Adviser NI"
  var metadescription = "Read our privacy policy at mortgage adviser ni"
  res.render("privacy-policy",
             {metatitle:metatitle, metadescription: metadescription}
            )
})

// Cookies
router.get("/cookies", function(req, res){
  var metatitle = "How we use cookies - Mortgage Adviser NI"
  var metadescription = "A brief look at how mortgage adviser ni uses cookies to enhance your experience."
  res.render("cookies",
             {metatitle:metatitle, metadescription: metadescription}
            );
});

//our Service
router.get("/our-service", function(req, res){
  var metatitle = "Our Service - Mortgage Adviser NI"
  var metadescription = "Have a look at the services provided by Mortgage Adviser NI in Northern Ireland"
  res.render("our-service",
             {metatitle:metatitle, metadescription: metadescription}
            );
});

//Why Get Advice
router.get("/why-get-advice", function(req, res){
  var metatitle = "Why get Advice - Mortgage Adviser NI"
  var metadescription = "Find out why you should get advice from Mortgage Adviser NI"
  res.render("why-get-advice",
             {metatitle:metatitle, metadescription: metadescription}
            )
})

//faq
router.get("/faq", function(req,res){
  var metatitle = "FAQ - Mortgage Adviser NI"
  var metadescription = "Have a look at some of the FAQ's our mortgage advisers deal with on a reguar basis."
  res.render("faq",
             {metatitle:metatitle, metadescription: metadescription}
            )
})

//Contact us
router.get("/contact-us", function(req,res){
  var metatitle = "Contact Mortgages Northern Ireland"
  var metadescription = "Submit an enquiry to Mortgages Northern Ireland"
  res.render("contact-us",
             {metatitle:metatitle, 
              metadescription: metadescription}
            )
})

//new head
router.get("/heads", function(req, res){
  var metatitle = "Temporary Header"
  var metadescription = "New attempt at header"
  res.render("./partials/heads",
             {metatitle:metatitle, metadescription: metadescription}
            );
});

//test
router.get("/test", function(req, res){
  var metatitle = "Temporary Header"
  var metadescription = "New attempt at header"
  Rate.find({}, function(err, rate){
    if(err){
      console.log(err);
    }else{
       var filteredRate =  Rate.aggregate([          
                { $sort : { rate : 1 } } ])       
       .then(function(filteredRate) {
           // console.log(filteredRate); // "normalReturn"
          // filteredRate.forEach(function(filteredRate){
            // console.log(filteredRate)
      res.render("test",
                {metatitle:metatitle, 
                 metadescription: metadescription,
                 rate:filteredRate})
                              })
    }
  })
})


module.exports = router;