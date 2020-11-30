var vidDatePick = document.getElementById("videoChatDatePicker");
const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
var timeButtons = document.getElementsByClassName("booking-button");

console.log(timeButtons)



//Get the current year
var today = new Date();
today = today.toString();

//Convert the Month to a number / string
thisMonth = today.substring(4, 7);
thisMonth = thisMonth.toLowerCase();

function convertMonthToNum(mon){
month = months.indexOf(mon) + 1;
return thisMonth = month;
}

thisMonth = convertMonthToNum(thisMonth)

//Cut this day and this year from date string
thisYear = today.substring(11, 15);
thisDay = today.substring(8, 10);

today = thisYear + "-" + thisMonth + "-" + thisDay;

vidDatePick.value = today;


vidDatePick.addEventListener("change", function(){

    //Create a timestamp from the new date entered
    var newDate = new Date(vidDatePick.value);
    //Convert timestamp to string 
    newDate = newDate.toString();
    //Create the day and the year as individual elements of the newDate object
    var newDateDay = newDate.substring(0, 3)
    var newDateDayNum = newDate.substring(8, 10);
    var newDateYear = newDate.substring(11, 15);
    var newDateMonth = newDate.substring(4, 7);
    console.log(newDateMonth)


    //Set Variable for numEnding
    
    newDateDayNum = parseInt(newDateDayNum);
   
    var ending = createNumAfter(newDateDayNum);


    var bookingString = newDateDay + " " + newDateDayNum + ending + " " + newDateMonth + " " + newDateYear; 

    document.getElementById("bookingString").textContent = bookingString;

});

//Create the time for the appointment on a click
for(var i=0;i<timeButtons.length;i++){
    timeButtons[i].addEventListener("click", function(e){
        console.log(e.target.textContent)
    });
 }



//Function that returns a th etc depending on the day of the month


function createNumAfter(num){
   
    if(num === 1 || num === 21 || num === 31) {
        return "st";
      } else if(num === 2 || num === 22) {
        return "nd";
      } else if(num === 3 || num === 23 ) {
        return "rd";
      } else {
        return x = "th";
      }
}



