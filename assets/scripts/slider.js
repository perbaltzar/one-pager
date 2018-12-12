$(document).ready(function(){
  $('.slider-desktop').slick({
      prevArrow: '<img class="slide-left" src="assets/icons/slider_arrow_mobile.svg">',
      nextArrow: '<img class="slide-right" src="assets/icons/slider_arrow_mobile.svg">',
      mobileFirst: true,
  });
});

$(document).ready(function(){
  $('.slider-mobile').slick({
      // prevArrow: '<img class="slide-left" src="assets/icons/slider_arrow_mobile.svg">',
      // nextArrow: '<img class="slide-right" src="assets/icons/slider_arrow_mobile.svg">',
      mobileFirst: true,
      dots: true,
      touchMove: false,
      arrows: false,
      dotsClass: 'dot-slider',
      // appendDots: $("slick-dots")
  });
});
