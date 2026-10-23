// Function using a JavaScript dictionary (object) with Key-Value Pairs (KVPs)
function my_Dictionary() {
    var Animal = {
        Species: "Dog",
        Color: "Black",
        Breed: "Labrador",
        Age: 5,
        Species: "Cat", // Duplicate key with an identical name
        Sound: "Bark!"
    };
    
    // Deleting Sound and displaying the overwritten duplicate key value
    delete Animal.Sound;
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}