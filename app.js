var methodOverride = require("method-override");
var MongoClient = require('mongodb').MongoClient;
var assert      = require("assert");
var expressSanitizer = require("express-sanitizer");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var express = require("express");
var ejs = require('ejs');
var app = express();
var passport = require("passport");
var LocalStrategy = require("passport-local");
var passportLocalMongoose = require("passport-local-mongoose");

//Rates
rates = [
    {lender: "Santander", rate: 1.9},
    {lender: "Santander", rate: 1.9},
    {lender: "Santander", rate: 1.9},
    {lender: "Santander", rate: 1.9},
];

//Model Schemas 
var Rate =                  require("./models/rates");
var buytolet =              require("./models/buytolet");
var enquiry =               require("./models/enquiry");
var mortgageAdvice =        require("./models/mortgageAdvice");
var mortgageNews =          require("./models/mortgageNews");
var firstTimeBuyer =        require("./models/firstTimeBuyer");
var mortgageType =          require("./models/mortgageType");
var remortgage =            require("./models/remortgage");
var selfemployed =          require("./models/selfEmployed");
var governmentschemes =      require("./models/governmentschemes")
var User =                  require("./models/user")

//requiring routes

var buytoletRoutes           = require("./routes/buytolet");
var enquiryRoutes            = require("./routes/enquiry");
var firstTimeBuyerRoutes     = require("./routes/firstTimeBuyer");
var governmentschemesRoutes  = require("./routes/governmentschemes");
var indexRoutes              = require("./routes/index");
var mortgageAdviceRoutes     = require("./routes/mortgageAdvice");
var mortgageNewsRoutes       = require("./routes/mortgageNews");
var mortgageTypeRoutes       = require("./routes/mortgageType");
var remortgageRoutes         = require("./routes/remortgage");
var selfEmployedRoutes       = require("./routes/selfEmployed");
var userRoutes               = require("./routes/user");



//App Config
app.use(require("express-session")({
  secret: "Surfing is super awesome",
  resave: false,
  saveUninitialized: false
}));


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());
//mongoose.connect("mongodb://localhost/MortgageRates");
mongoose.connect("mongodb://ricky1001:Astron!23@ds113136.mlab.com:13136/mortgageadviserni");
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());





app.use(indexRoutes);
app.use(buytoletRoutes);
app.use(enquiryRoutes);
app.use(firstTimeBuyerRoutes);
app.use(governmentschemesRoutes);
app.use(mortgageAdviceRoutes);
app.use(mortgageNewsRoutes);
app.use(mortgageTypeRoutes);
app.use(remortgageRoutes);
app.use(selfEmployedRoutes);
app.use(userRoutes);





/*app.listen(3000, function(){
  console.log("Server is Running");
});
*/

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
