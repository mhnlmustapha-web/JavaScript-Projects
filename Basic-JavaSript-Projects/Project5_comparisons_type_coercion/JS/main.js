// ==========================================
// 1. TYPEOF OPERATOR & TYPE COERCION
// ==========================================

// Display the data type of a number using the typeof operator
document.write(typeof 5);
document.write("<br>");

// Display the data type of a string using the typeof operator
document.write(typeof "typeof");
document.write("<br>");

// Type Coercion: Combining a string and a number
document.write("10" + 5);
document.write("<br>");

// ==========================================
// 2. SPECIAL NUMERICAL QUIRKS (NaN & Infinity)
// ==========================================

// Function to display NaN via HTML element
function my_Function() {
    document.getElementById("Test").innerHTML = 0 / 0;
}
document.write("<br>");

// Display NaN using an invalid mathematical operation directly
document.write(0 / 0);
document.write("<br>");

// Display "true" using isNaN() with a text string
document.write(isNaN("This is a string"));
document.write("<br>");

// Display "false" using isNaN() with a valid number
document.write(isNaN(52));
document.write("<br>");

// Displaying Infinity and negative Infinity values
document.write(2E310);
document.write("<br>");
document.write(-2E310);

// Function to handle Infinity in the DOM
function infinity_Function() {
    // Displays Infinity
    document.getElementById("Infinity").innerHTML = 2E310 + "<br>";
    
    // Displays -Infinity (using a negative sign with a huge number)
    document.getElementById("Infinity").innerHTML += -3E310;
}
document.write("<br>");

// ==========================================
// 3. COMPARISON OPERATORS (>, <, ==, ===)
// ==========================================

// Displaying true using a greater than operator
document.write(10 > 5);
document.write("<br>");

// Displaying false using a lesser than operator
document.write(4 < 2);

// Console log checks for comparisons
console.log(2 + 2);
console.log(10 > 20);
document.write("<br>");

// Double Equal Signs (==) - Checking equality
document.write((10 + 5) == 15); // Output: true
document.write("<br>");
document.write(15 == 15);       // Output: true
document.write("<br>");
document.write((10 + 5) == 20); // Output: false
document.write("<br>");
document.write(15 == 20);       // Output: false
document.write("<br>");

// Triple Equal Signs (===) - Strict equality (matching value and data type)
// 1. Return true by matching the data type and value
let num1 = 10;
let num2 = 10;
document.write(num1 === num2); 
document.write("<br>"); 

// 2. Return false by writing a different data type and different value
let num3 = 5;
let str1 = "hello";
document.write(num3 === str1); 
document.write("<br>");

// 3. Return false by writing a different data type but the same value
let num4 = 25;
let str2 = "25";
document.write(num4 === str2); 
document.write("<br>");

// 4. Return false by writing the same data type but a different value
let num5 = 50;
let num6 = 100;
document.write(num5 === num6);
document.write("<br>");

// ==========================================
// 4. LOGICAL OPERATORS (&&, ||, !)
// ==========================================

// AND Operator (&&) Examples
// Returns true because both statements are true
document.write((10 > 5) && (20 > 10)); 
document.write("<br>");

// Returns false because one statement is false
document.write((10 > 5) && (10 > 20)); 
document.write("<br>");

// OR Operator (||) Examples
// Returns true because at least one statement is true
document.write((10 > 5) || (10 > 20)); 
document.write("<br>");

// Returns false because both statements are false
document.write((5 > 10) || (10 > 20));

// NOT Operator (!) Functions
function not_Function_true() {
    // Evaluates to true because 20 < 10 is false, negated to true
    document.getElementById("Not1").innerHTML = !(20 < 10);
}

function not_Function_false() {
    // Evaluates to false because 20 > 10 is true, negated to false
    document.getElementById("Not2").innerHTML = !(20 > 10);
}