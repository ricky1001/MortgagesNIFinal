let times = ["9am - 10am", "10am - 11am", "11am - 12am", "12am - 1pm", "1pm - 2pm", "2pm - 3pm", "3pm - 4pm", "4pm - 5pm", "5pm - 6pm", "6pm - 7pm", "7pm - 8pm"]
const allTimes = `
           <select id="pickATime" name="callBackTime" class="custom-select">
             <option value="9am-10am">9am - 10am</option>
             <option value="10am-11am">10am - 11am</option>   
             <option value="11am-12am">11am - 12am</option>
             <option value="12am-1pm">12am - 1pm</option>
             <option value="1pm-2pm">1pm - 2pm</option>
             <option value="2pm-3pm">2pm - 3pm</option>
             <option value="3pm-4pm">4pm - 5pm</option>
             <option value="5pm-6pm">5pm - 6pm</option>
             <option value="6pm-7pm">6pm - 7pm</option>
             <option value="7pm-8pm">7pm - 8pm</option>
            </select>
            `
let adjustedTimes = times.splice(hoursPastNine, times.length);
let output = "";
//Listen for a change on the day picker input
const iconDayPicker = document.getElementById("quickCallIconDayPicker");
const iconTimePicker = document.getElementById("quickCallIconTimePicker");
const iconTimeOption = document.getElementsByClassName("pickTimeIconOption");

iconDayPicker.addEventListener("change", function(){
    console.log("change")
    let today = iconDayPicker.value.substring(0, 5);
    console.log(today)
    if(today !== "Today"){
        console.log("not today" + allTimes)
        iconTimePicker.innerHTML = allTimes;
   }

   if(today === "Today"){
    //call Create list to create a new list of available times for today
    let list = createList();
    list.forEach(function(item){
        output += `${item}`
    })


    //Remove other elements from timepicker 
    for(var i=0; i<iconTimeOption.length; i++){
        iconTimeOption[i].style.display = "none";
     }

     //Create a new string to ammend to the dom
     if(output.length < 1){
         output = "There are no times remaining today please select another day"
     }
     output = `<select id="pickATime" name="callBackTime" class="custom-select"> 
                  ` 
                  + output +
                  `</select>`;
 
     //Update the dom

     iconTimePicker.innerHTML = output;

   }
})
//Check if the first 5 characters are equal to "Today"
//If they are change the innerHTML of the select item to the adjusted times list if its not change the innerHTML to the full times list





//Helper Functions for both
function createList(){
    var list = new Array();
    if(hoursPastNine > 1){
        for(var i = 0; i < adjustedTimes.length; i++){
            let item = adjustedTimes[i];
            let currentItem = `<option value="${item}">${item}</option>`;
            list.push(currentItem);
            console.log(list)
         }
         return list;
    }else{
        list = allTimes;
        return list
    }

}