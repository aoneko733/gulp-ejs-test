var viewH,
halfHeight,
doubleHeight,
scrVal;

$(window).on('scroll',function() {
  scrVal = $(this).scrollTop(),
  viewH = $(window).innerHeight(),
  halfHeight = viewH / 2,
  doubleHeight = viewH * 2 - halfHeight;
  if(scrVal > halfHeight) {
    $('.scrollbox1').addClass('show');
  } else if(scrVal > doubleHeight) {
    $('.scrollbox2').addClass('show');
  }
});
