var slideIndex = 1;
showSlides(slideIndex);

// Next/previous
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

/* Show More Button */

function showMore(id,buttonId) {
    var x = document.getElementById(id);
    if (x.style.display != "block") {
        x.style.display = "block";
        document.getElementById(buttonId).innerHTML = "Kevesebb";
    } else {
        x.style.display = "none";
        document.getElementById(buttonId).innerHTML = "Több";
    }
}

function resize() {
  $(document).ready(function(){
    if($(window).width() <= 800) {
  window.location.href = "tanya.html";
  }
  });
}

// function resizeNav(){
  //var r = document.getElementById("reBody");
  // document.getElementById("mainPage").style.margin = window.outerWidth / 40 * -1 ;
//}
