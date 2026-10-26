// ==========================================
// 1. COUNTDOWN TIMER FUNCTION
// ==========================================
function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000);
        
        if (seconds == -1) {
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}


// ==========================================
// 2. AUTOMATIC SLIDESHOW LOGIC
// ==========================================
let slideIndex = 0;
showSlides(); // Start the slideshow automatically when page loads

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    slideIndex++;
    
    // Loop back to the first slide if index exceeds total slides
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    // Remove "active" class from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    // Display the current slide and activate its dot indicator
    slides[slideIndex - 1].style.display = "block";  
    dots[slideIndex - 1].className += " active";
    
    // Change image every 2 seconds
    setTimeout(showSlides, 2000); 
}