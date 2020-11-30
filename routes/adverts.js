var express = require("express");
var router = express.Router();
const dateHelpers = require("../util/dateEnding.js");





var todaysDate = new Date();
todaysDate = todaysDate.toString();
console.log(todaysDate)

todaysDay = todaysDate.substring(0, 3);
todaysDayNum = todaysDate.substring(8, 10);
todaysMonth = todaysDate.substring(4, 7);
todaysYear = todaysDate.substring(11, 15);

const today = {
    todaysDay: todaysDay,
    todaysDayNum: todaysDayNum,
    todaysMonth: todaysMonth,
    todaysYear: todaysYear
};

var bookingString = todaysDay + " " + todaysDayNum + "th" + " " + todaysMonth + " " + todaysYear;
console.log(bookingString);

router.get("/mortgage-agreement-in-principle-ni", function(req, res){
    res.render("adverts/aip-info",{
        metatitle: "Agreement in Principle NI",
        metadescription: "Get an agreement in principle / decision in principle for your mortgage in Northern Ireland. Find out which lenders will consider your application and who will offer you the best deal on the market"
        
    });  
});




router.get("/agreement-in-principle-booking", function(req, res){

    //create a function that takes in 3 days. If any day is a sunday we will need to skip that day and the following day on to the next day
    function callBackStrings(){
        //create three time stamps for today tomorrow and the next day
        const days = dateHelpers.createDays();
       
        //convert all of the time stamps to strings 
        dayOneString = days.today.toString();
        dayTwoString = days.tomorrow.toString();
        dayThreeString = days.nextDay.toString();
        //Get the first three letters from each indicating the day of the week
        let dayOneDay = dayOneString.substring(0, 3);
        let dayTwoDay = dayTwoString.substring(0,3);
        let dayThreeDay = dayThreeString.substring(0,3);
        //Chec to see if any of the days are a Sunday if they are we need to skip any following days on +1
        if(dayOneDay === "Sun"){
            //Move Day one ahead 
            days.today = dateHelpers.skipDayForward(days.today);
            //Move Day Two ahead 
            days.tomorrow = dateHelpers.skipDayForward(days.tomorrow);
            //Move Day Three ahead
            days.nextDay = dateHelpers.skipDayForward(days.nextDay);
        }else if(dayTwoDay === "Sun"){
            //Move Day Two ahead 
            days.tomorrow = dateHelpers.skipDayForward(days.tomorrow);
            //Move Day Three ahead
            days.nextDay = dateHelpers.skipDayForward(days.nextDay);

        }else if(dayThreeDay === "Sun"){
            //Move Day Three ahead
            days.nextDay = dateHelpers.skipDayForward(days.nextDay);
         }

       let dayOne = days.today.toString();
       let dayTwo =  days.tomorrow.toString();
       let dayThree = days.nextDay.toString();
       //Create the ending for each day ie th rd etc
        let dayOneEnding = dateHelpers.createNumAfter(parseInt(dayOne.substring(8,10)));
        let dayTwoEnding = dateHelpers.createNumAfter(parseInt(dayTwo.substring(8,10)));
        let dayThreeEnding = dateHelpers.createNumAfter(parseInt(dayThree.substring(8,10)));
        //todayString :  
        return {
            todayString :"Today " + dayOne.substring(0, 3) + " " + dayOne.substring(8, 10) + dayOneEnding + " " + dayOne.substring(4, 7),

            tomorrowString: "Tomorrow " + dayTwo.substring(0, 3) + " " + dayTwo.substring(8, 10) + dayTwoEnding +" " + dayTwo.substring(4, 7),

            nextDayString: dayThree.substring(0, 3) + " " + dayThree.substring(8, 10) + dayThreeEnding + " " + dayThree.substring(4, 7) 
        }

        
    }

   const bookCallBack = callBackStrings();
    //Once the days have been set accordingly we will need to creat strings for each day to be used in the dropdown 

    const nineAMToday = dateHelpers.createTimeStamp9am();
    const eightPMToday = dateHelpers.createTimeStamp8pm();
    const nowToday = dateHelpers.createNowMillSec();

    let times = ["9am - 10am", "10am - 11am", "11am-12am", "12am - 1pm", "1pm - 2pm", "2pm - 3pm", "3pm - 4pm", "4pm - 5pm", "5pm - 6pm", "6pm - 7pm", "7pm - 8pm"];

    //Work out how many hours it is currently past 9am
    var hoursPastNine = nowToday - nineAMToday;
    hoursPastNine = hoursPastNine / 1000;
    hoursPastNine = hoursPastNine / 60;
    hoursPastNine = hoursPastNine / 60;
    hoursPastNine = Math.floor(hoursPastNine);
    console.log(hoursPastNine)
    //Create a variable that will change depending on the time of the day
    var adjustedTimes = new Array();
   if(nowToday < nineAMToday){
       adjustedTimes = times;
   }else if(nowToday > eightPMToday){
       adjustedTimes = ["There are no more available times today please select another day"]
   }else{
        adjustedTimes = times.splice(hoursPastNine, times.length);     
   }

console.log(adjustedTimes)

    // Function checks to see if the current time in milliseconds is greater than 9am this morning if it isn't show all of the time slots
      
    //Check to see if the current time is greater than 8pm tonight if it is show a message to say that there are no times left this evening 

    // else - calculate the number of whole hours past 9am we are and create a new based on that number 
    res.render("adverts/aip-booking",{
        metatitle: "Book your consultation",
        metadescription: "Get an agreement in principle / decision in principle for your mortgage in Northern Ireland. Find out which lenders will consider your application and who will offer you the best deal on the market",
        bookCallBack: bookCallBack,
        adjustedTimes: adjustedTimes,
        times: times,
        hoursPastNine: hoursPastNine,
   
    });  
});



module.exports = router;