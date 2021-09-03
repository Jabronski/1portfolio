var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
  
}

function showSlides(n) {
  var slides = document.getElementsByClassName("mySlides");
  var divider1 = document.getElementById("divider1");
  var divider2 = document.getElementById("divider2");

  if (n > slides.length) {
    slideIndex = 1;
  }    
  if (n < 1) {
    slideIndex = slides.length
  }
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  

  divider1.style.backgroundColor = "var(--clr-" + (slideIndex) + ")";
  divider2.style.backgroundColor = "var(--clr-" + (slideIndex) + ")";

  console.log(slideIndex);
  console.log(divider2);
}