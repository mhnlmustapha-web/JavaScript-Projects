// 1. Loop Function
function call_Loop() {
    var Digit = "";
    var X = 1;
    
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    
    document.getElementById("Loop").innerHTML = Digit;
}

// 2. String Length Property
let text = "Good morning World!";
let length = text.length;
document.getElementById("demo").innerHTML = length;

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;

// 3. For Loop Function
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

// 4. ARRAY FUNCTION
function array_Function() {
    var Dog_Breeds = ["German Shepherd", "Golden Retriever", "Bulldog", "Poodle", "Beagle"];
    document.getElementById("Array").innerHTML = "My favorite dog breed is the " + Dog_Breeds[1] + ".";
}


// Creating an object with 'const' and displaying initial properties
function constant_function() {
    const Musical_Instrument = {type: "guitar", brand: "Fender", color: "black"};
    
    // Changing a property value and adding a new property
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    
    // Displaying the changed property and the newly added property
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.brand + 
        " " + Musical_Instrument.type + " was " + Musical_Instrument.price + 
        " and its new color is " + Musical_Instrument.color + ".";
}

function let_function() {
    var car = "Toyota";
    
    {
        let car = "Honda";
        // 'car' inside this block is "Honda"
    }
    
    // Outside the block, 'car' remains "Toyota"
    document.getElementById("Let_Example").innerHTML = "Outside the block, the car is still a " + car + ".";
}

function myFunction(name) {
  return "Hello " + name;
}
document.getElementById("demo2").innerHTML = myFunction("Mohamad");


let car = {
    make: "Dodge",
    model: "Viper",
    year: "2021",
    color: "red",
    description: function() {
        return "This car is a " + this.year + " " + this.color + " " + this.make + " " + this.model + ".";
    }
};

// Reference the ID from your HTML and call the object's method
document.getElementById("Car_Object").innerHTML = car.description();

function myBreakFunction() {
  let text = "";
  for (let i = 0; i < 10; i++) {
    if (i === 3) { break; }
    text += "The number is " + i + "<br>";
  }
  document.getElementById("demo3").innerHTML = text;
}

function myContinueFunction() {
  let text1 = "";
  for (let i = 1; i < 10; i++) {
    if (i === 3) { continue; }
    text1 += i * 10 + "<br>";
  }
  document.getElementById("demo4").innerHTML = text1;
}