AOS.init({
    duration: 1500,
  })
  

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
$(document).ready(function() {
  $(".maize").click(function(){
    $(".showing").toggle();
    $(".hidden").toggle();
  });
  $(".sunflower").click(function() {
    $(".showing").toggle();
    $(".hidden").toggle();
  });
  $(".beans").click(function() {
    $(".showing").toggle();
    $(".hidden").toggle();
  });
  $(".wheat").click(function() {
    $(".showing").toggle();
    $(".hidden").toggle();
  });
  $(".banana").click(function() {
    $(".showing").toggle();
    $(".hidden").toggle();
  });
  $(".barley").click(function() {
    $(".showing").toggle();
    $(".hidden").toggle();
  });
});  
new WOW().init();
wow = new WOW({
  boxClass: 'wow', // default
  animateClass: 'animated', // default
  offset: 0, // default
  mobile: true, // default
  live: true // default
})
wow.init();    
