// 1. Global Variable (accessible from anywhere in your code)
var globalVariable = 50;

function addNumbers() {
    // 2. Local Variable (only accessible inside this function)
    var localVariable = 20;
    
    // Attempting to use both
    console.log("Inside function - Global:", globalVariable);
    console.log("Inside function - Local:", localVariable);
    console.log("Sum inside function:", globalVariable + localVariable);
}

addNumbers();

// 3. Intentionally written function with an error for debugging
function faultyFunction() {
    var greeting = "Hello, world!";
    
    // INTENTIONAL ERROR: Trying to log a variable name with a typo (greting instead of greeting)
    // Use console.log() to spot the ReferenceError in Chrome DevTools
    console.log(greting); 
}

faultyFunction();

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}

function checkAge() {
    var age, voteResult;

    // Get the value entered in the input element
    age = document.getElementById("ageInput").value;

    // If/Else statement to check voting eligibility
    if (age >= 18) {
        voteResult = "You are old enough to vote!";
    } else {
        voteResult = "You are not old enough to vote yet.";
    }

    // Output the result to the paragraph element
    document.getElementById("votingResult").innerHTML = voteResult;
}