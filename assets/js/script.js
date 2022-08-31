$(document).ready(function() {

// moment variables to add date to top of page and add current hours
var today = moment().format("MMM Do, YYYY");
var showDate = document.getElementById("currentDay");
showDate.innerHTML = today;
var currentHour = moment().hours();

//takes current time and compares to each time block an changes color based on past,present, or future
console.log(currentHour);
$(".time-set").each(function() {
  var timeSet = $(this).attr("id");
  
  if (currentHour == timeSet) {
  $(this).addClass("present");

  } else if (currentHour < timeSet) {
    $(this).removeClass("present");
    $(this).addClass("future");

  } else if (currentHour > timeSet) {
    $(this).removeClass("future");
    $(this).addClass("past");
  }
});

//adds event listener of click on save button and adds info to local storage
$(".saveBtn").on("click", function(){
    var divNumber = $(this).parent().attr("id");
    var textValue = $(this).siblings(".time-block").val();
    localStorage.setItem(divNumber, textValue);

});

//gets items from local storage and displays them in time block so when page refreshed all info saves
$("#8 .time-block").val(localStorage.getItem("8"));
$("#9 .time-block").val(localStorage.getItem("9"));
$("#10 .time-block").val(localStorage.getItem("10"));
$("#11 .time-block").val(localStorage.getItem("11"));
$("#12 .time-block").val(localStorage.getItem("12"));
$("#13 .time-block").val(localStorage.getItem("13"));
$("#14 .time-block").val(localStorage.getItem("14"));
$("#15 .time-block").val(localStorage.getItem("15"));
$("#16 .time-block").val(localStorage.getItem("16"));


});