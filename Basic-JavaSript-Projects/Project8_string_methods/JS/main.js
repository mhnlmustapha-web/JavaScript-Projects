function full_sentence() {
    var part_1 = "I have learned ";
    var part_2 = "how to use the ";
    var part_3 = "concat() method ";
    var part_4 = "in JavaScript!";
    
    // Using concat() to join the strings together
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    
    // Displaying the result in the HTML paragraph
    document.getElementById("concat_string").innerHTML = whole_sentence;
}

// Call the function so it runs when the page loads
full_sentence();


function slice_method() {
    var sentence = "All work and no play makes JavaScript a dull language.";
    var section = sentence.slice(27, 37);
    document.getElementById("slice_result").innerHTML = section;
}
slice_method();

// 1. toUpperCase() Method Function
function upper_case_method() {
    var text = "hello world, learning javascript methods!";
    // Converts all characters in the string to uppercase
    var resultUpper = text.toUpperCase();
    
    document.getElementById("uppercase_result").innerHTML = resultUpper;
}
upper_case_method();

// 2. search() Method Function
function search_method() {
    var sentence = "Welcome to the world of JavaScript programming.";
    // Searches for the index position of the word "JavaScript"
    var position = sentence.search("JavaScript");
    
    document.getElementById("search_result").innerHTML = "The word 'JavaScript' starts at index: " + position;
}
search_method();

// toString() Method Function
function string_method() {
    var X = 182;
    
    // toString() returns the number as a string
    document.getElementById("string_result").innerHTML = X.toString();
    console.log(typeof X.toString());
}
string_method();

// toPrecision() Method Function
function precision_method() {
    var X = 12938.3012987;
    
    // toPrecision() formats a number to a specified length
    document.getElementById("precision_result").innerHTML = X.toPrecision(5);
}
precision_method();

// 1. toFixed() Method: Formats a number with a specified number of decimals
function fixed_method() {
    var num = 5.56789;
    // Keeps 2 decimal places and rounds the number
    document.getElementById("fixed_result").innerHTML = num.toFixed(2);
}
fixed_method();

// 2. valueOf() Method: Returns the primitive value of a string or number object
function value_of_method() {
    // Creating a String object
    var text = new String("Hello World!");
    // valueOf() returns its primitive string value
    document.getElementById("value_result").innerHTML = text.valueOf();
}
value_of_method();