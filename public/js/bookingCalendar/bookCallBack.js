const dayPick = document.getElementById("pickCallBackDay");
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
const callList = document.getElementById("callListOption");
let pickATimeOption = document.getElementsByClassName("pickATimeOption");


console.log(dayPick)


dayPick.addEventListener("change", function(){
console.log("change")
   const today = dayPick.value.substring(0, 5);

    if(today !== "Today"){
         callList.innerHTML = allTimes;
    }

   if(today === "Today"){
       
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

    //call Create list to create a new list of available times for today
    let list = createList();
    
    let output = "";

    list.forEach(function(item){
        output += `${item}`
    })


    //Remove other elements from timepicker 
    for(var i=0;i<pickATimeOption.length;i++){
        pickATimeOption[i].style.display = "none";
     }

     //Create a new string to ammend to the dom
     if(output.length < 1){
         output = "There are no times remaining today please select another day"
     }
     output = `<select id="pickATime" name="callBackTime" class="custom-select"> 
                  <option>Pick a Time</option>` 
                  + output +
                  `</select>`;
 
     //Update the dom

     callList.innerHTML = output;

   }
})