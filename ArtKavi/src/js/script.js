let value = 0;
let art;

function navMenu(value){
    switch (value){
        case 1:
            console.log('arts');
        break;
        case 2:
            console.log('Consoles');
        break;
        case 3:
            console.log('sobre');
        break;
        case 4:
            console.log('Deals');
        break;
        case 5:
            console.log('Trade-In');
        break;
        default:
            console.log('Error');
        break;
    }
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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


