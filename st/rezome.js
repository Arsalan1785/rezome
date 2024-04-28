var slideIndex = 0;

function showSlides() {
  var slides = document.getElementsByClassName("slide");
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

function nextSlide() {
  slideIndex++;
  if (slideIndex >= slides.length) {slideIndex = 0}
  showSlides();
}

function prevSlide() {
  slideIndex--;
  if (slideIndex < 0) {slideIndex = slides.length - 1}
  showSlides();
}

setInterval(nextSlide, 5000); // اسلایدر هر 5 ثانیه به طور خودکار به عکس بعدی می رود

showSlides();
