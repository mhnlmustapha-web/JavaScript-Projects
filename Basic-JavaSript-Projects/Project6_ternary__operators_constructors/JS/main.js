function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are too tall";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vote_Function() {
    var Age, Can_vote;
    // Get the value from the input field
    Age = document.getElementById("Age").value;
    
    // Ternary operator checking if age is less than 18
    Can_vote = (Age < 18) ? "You are not old enough to vote" : "You can vote!";
    
    // Display the result in the span element
    document.getElementById("VoteResult").innerHTML = Can_vote;
}

// Object constructor function using 'this'
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

// Creating new instances of the Vehicle object using the 'new' keyword
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

// Function to display the result in HTML using the 'this' object properties
function objectFunction() {
    document.getElementById("Keywords_and_Logic").innerHTML = 
        "Erik comes from a family of drivers. He drives a " + 
        Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Make + 
        " " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year + ".";
}

// Part 1: Assigning a reserved word value (using quotes prevents a direct syntax crash)
function reservedKeywordFunction() {
    var reservedWord = "function"; // "function" is a reserved keyword
    document.getElementById("ReservedResult").innerHTML = "The assigned reserved word is: " + reservedWord;
}

// Part 2: Object Constructor Function
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

// Creating new instances using the 'new' keyword
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function objectFunction() {
    document.getElementById("New_and_This").innerHTML = 
        "Erik comes from a family of drivers. He drives a " + 
        Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Make + 
        " " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year + ".";
}


function count_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    
    // Nested function
    function Count() {
        var Starting_point = 9;
        
        function Plus_one() {
            Starting_point += 1;
        }
        
        Plus_one();
        return Starting_point;
    }
}