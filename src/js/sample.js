$(function() {
  $(window).on('resize load', function(){
    $('.parallax-bg').animate({
      opacity: "1"
    },1000);
  });
});
