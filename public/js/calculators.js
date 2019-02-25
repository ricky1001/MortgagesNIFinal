var show = document.querySelector(".addSecondApp");

show.addEventListener("click", function(){
  $( "#secondAppHidden.secondAppInput" ).toggleClass( "secondAppInputDisplay" );
});




var btn = document.querySelector(".totalBorrow");

btn.addEventListener("click", function(){

  var firstIncome = $('#firstIncome').val();
  var firstBonus = $("#firstBonus").val();
  var secondIncome = $("#secondIncome").val();
  var secondBonus = $("#secondBonus").val();

  firstIncome =  parseInt(firstIncome, 10);
  firstBonus =  parseInt(firstBonus, 10);
  secondIncome = parseInt(secondIncome, 10);
  secondBonus = parseInt(secondBonus, 10);


maxLoan = ((firstIncome + firstBonus + secondIncome + secondBonus) * 5);

$( "#maxBorrow.youCouldBorrow" ).toggleClass( "youCouldBorrowShow" );

var sp = document.getElementById("totLoan");
sp.innerHTML = "£" + maxLoan;



});
