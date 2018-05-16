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

function showMore() {
    var mutatando = document.getElementById("show");
    if (mutatando.style.display == "none") {
        mutatando.style.display = "block";
        document.getElementById("less").innerHTML = "Kevesebb";
    } else {
        mutatando.style.display = "none";
        document.getElementById("less").innerHTML = "Több";
    }
}

// function resizeNav(){
  //var r = document.getElementById("reBody");
  // document.getElementById("mainPage").style.margin = window.outerWidth / 40 * -1 ;
//}
