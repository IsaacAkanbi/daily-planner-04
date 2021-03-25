$(document).ready(function() {

    // First we need to grab the reference to the HTML element on the page
    // We attach an Event Listener 
    $(".btn").on("click", function() {
        console.log( $(this) );

        // GRAB The User Input -->  { "9AM": "testing ... user input"}
        var userInput = $(this).parent().siblings('.input').children().val();
        console.log(userInput);

        var timeblock = $(this).parent().siblings('.time').children().text();
        console.log(timeblock);

        // Add new Information into localStorage
    });

    // Look into EVENT BUBBLING and EVENT DELEGATION 
    
});