var today = moment();
console.log(today);
var entry = document.getElementById("nine");
var userInputEl = ""; 
var inputId = "";
var fieldId = ["nine","ten", "eleven", "twelve", "one", "two", "three", "four", "five"]; 
var myActivity = "";
$("#currentDay").text(today.format('MMMM Do YYYY, h:mm:ss a'));
//text(today.format('MMMM Do YYYY, h:mm:ss a'))
$(document).ready(function() {
           // attach an Event Listener 
    $(".btn").on("click", function() {
        console.log( $(this) );
        // GRAB The User Input
        var userInputEl = $(this).parent().siblings('.input').children();
        console.log(userInputEl)
        inputId = userInputEl.attr('id');
        console.log(inputId)
        userInput = userInputEl.val();
        console.log(userInput);

      // var timeblock = $(this).parent().siblings('.hour').children().text();
        //console.log(timeblock);
       localStorage.setItem(inputId, userInput)
     });
           
});

function displayData() {
    console.log(fieldId.length)
    for (var i = 0; i < fieldId.length; i++) {
       myActivity = localStorage.getItem(fieldId[i]); 
       document.getElementById(fieldId[i]).value = myActivity
       console.log(myActivity)
    }
}

displayData();