var express = require("express");
var router = express.Router();

router.get("/calculators", function(req, res){
  res.render("./calculators/calculators", {
                                          metatitle: "Mortgage Calculators NI | Mortgages Northern Ireland",
                                          metadescription: "Work out how much you could borrow, what your repayments would be and more with our mortgage calculators"
                                           }
                                         );
});

router.get("/calculators/how-much-can-i-borrow", function(req, res){
  res.render("./calculators/how-much-can-i-borrow", {
                                          metatitle: "Mortgage Calculators NI | Mortgages Northern Ireland",
                                          metadescription: "Work out how much you could borrow, what your repayments would be and more with our mortgage calculators",
                                          maxLoan : ""
                                           }
                                         );
});



module.exports = router;
