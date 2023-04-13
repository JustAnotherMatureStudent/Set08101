var slideIndex = 0;
var slides = document.getElementsByClassName("slide");

setInterval(function() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slides[slideIndex].classList.add("active");
}, 2000);