// Function triggered when the user clicks the "Place Order" button
function getReceipt() {
    // Initialize our receipt text with a header and set starting prices to 0
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    
    // Loop through all pizza size radio buttons to find which one is checked
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + "<br>"; // Append selected size to the receipt text
        }
    }
    
    // Assign base price values depending on the selected pizza size
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    
    // Set our running total to match the base size price
    runningTotal = sizeTotal;
    
    // --- VEGETABLE TOPPINGS PROCESSING ---
    var vegetableTotal = 0;
    var selectedVegetable = [];
    var vegetableArray = document.getElementsByClassName("vegetable");
    
    // Loop through all vegetable checkboxes to collect selected toppings
    for (var j = 0; j < vegetableArray.length; j++) {
        if (vegetableArray[j].checked) {
            selectedVegetable.push(vegetableArray[j].value);
            text1 = text1 + vegetableArray[j].value + "<br>"; // Append each vegetable to the receipt
        }
    }
    
    // Calculate vegetable cost: first vegetable is free, each additional one costs $1
    var vegetableCount = selectedVegetable.length;
    if (vegetableCount > 1) {
        vegetableTotal = (vegetableCount - 1);
    } else {
        vegetableTotal = 0;
    }
    
    // Add vegetable costs to the running total
    runningTotal = (runningTotal + vegetableTotal);
    
    // --- MEAT TOPPINGS PROCESSING ---
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");
    
    // Loop through all meat topping checkboxes to collect selected meats
    for (var k = 0; k < toppingArray.length; k++) {
        if (toppingArray[k].checked) {
            selectedTopping.push(toppingArray[k].value);
            text1 = text1 + toppingArray[k].value + "<br>"; // Append each meat to the receipt
        }
    }
    
    // Calculate meat cost: first meat topping is free, each additional one costs $1
    var toppingCount = selectedTopping.length;
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1);
    } else {
        toppingTotal = 0;
    }
    
    // Add meat topping costs to the final running total
    runningTotal = (runningTotal + toppingTotal);
    
    // Output the generated receipt text and final calculated total price to the HTML elements
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total:</h3> $" + runningTotal + ".00";
}