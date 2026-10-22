// Function to perform basic addition
function performAddition() {
    let result = 10 + 5; // Adds 10 and 5 together
    document.getElementById("Addition").innerHTML = "10 + 5 = " + result; // Displays the addition result in the HTML element with ID "Addition"
}

// Function to perform multiple math operations using order of operations
function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 - 5; // Adds, multiplies, divides, and subtracts using parentheses for precedence
    document.getElementById("Math").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math; // Displays result
}

// Function utilizing the modulus operator (%) to find the remainder
function modulus_Operator() {
    var simple_Math = 25 % 6; // Divides 25 by 6 and stores the remainder (1)
    document.getElementById("Modulus").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math; // Displays remainder result
}

// Function utilizing the unary negation operator (-)
function negation_Operator() {
    var x = 10; // Defines a variable with value 10
    document.getElementById("Negation").innerHTML = "The negation of 10 is: " + -x; // Converts 10 to a negative number (-10) and displays it
}

// Function utilizing the increment operator (++)
function increase_Number(){
    var x = 5; // Defines x as 5
    x++; // Increases the value of x by 1 (making it 6)
    document.getElementById("Increase").innerHTML = "The increase of 5 is: " + x; // Displays the increased value
}

// Function utilizing the decrement operator (--)
function decrease_Number(){
    var x = 5; // Defines x as 5
    x--; // Decreases the value of x by 1 (making it 4)
    document.getElementById("Decrease").innerHTML = "The decrease of 5 is: " + x; // Displays the decreased value
}

// Function utilizing Math.random()
function random_Operator() {
    // Generates a random number between 0 and 100 and shows it in a pop-up alert box
    window.alert(Math.random() * 100);
}

// Function utilizing the Math object round method
function math_Object_Demo1() {
    var result = Math.round(4.6); // Rounds 4.6 to the nearest whole integer (5)
    document.getElementById("Round").innerHTML = "Rounded value of 4.6 is: " + result; // Displays the rounded result
}

// Function utilizing the Math object square root method
function math_Object_Demo2() {
    var result = Math.sqrt(64); // Calculates the square root of 64 (8)
    document.getElementById("Sqrt").innerHTML = "The square root of 64 is: " + result; // Displays the square root result
}