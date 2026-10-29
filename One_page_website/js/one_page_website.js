// Open the Lightbox Modal by changing its display style to block
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Lightbox Modal by changing its display style to none
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

// Initialize the slide index to 1 and display the first slide by default
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls: adds or subtracts from the current slide index when arrows are clicked
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls: jumps directly to a specific slide when a thumbnail is clicked
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Core function to control displaying slides, updating active thumbnails, and captions
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  
  // Loop back to the first slide if index exceeds total number of slides
  if (n > slides.length) {slideIndex = 1}
  
  // Loop to the last slide if index drops below 1
  if (n < 1) {slideIndex = slides.length}
  
  // Hide all slides initially
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  // Remove the "active" CSS class from all thumbnail dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  // Display the current active slide (adjusted for 0-based array index)
  slides[slideIndex-1].style.display = "block";
  
  // Add the "active" CSS class to the corresponding thumbnail dot
  dots[slideIndex-1].className += " active";
  
  // Update the caption text using the alt attribute of the active thumbnail
  captionText.innerHTML = dots[slideIndex-1].alt;
}