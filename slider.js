// Slick Slideshow
$(document).ready(function() {
  $('.container-img').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    arrows: true,
    pauseOnHover: false,
  });

  $(window).scroll(function () {
     $('.nav-logo').fadeOut();
      if($(document).scrollTop() === 0){
       $('.nav-logo').fadeIn();
      }
  });

});
