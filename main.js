// Slick Slideshow
$(document).ready(function() {
  $('.container-img').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    arrows: true,
    pauseOnHover: false,
  });

// On scroll fadeOut nav-logo, at top of page fadeIn
$(window).scroll(function () {
   $('.nav-logo').fadeOut();
    if($(document).scrollTop() === 0){
     $('.nav-logo').fadeIn();
      }
  });

});
