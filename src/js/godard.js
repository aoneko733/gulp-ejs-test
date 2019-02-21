function returnToTop() {
  $('body, html').animate({
    scrollTop: 0
  }, 500);
  return false;
}
$(function() {
  /*indexからenter時の処理*/
  $(window).on('load', function() {
    returnToTop();
    $("#loading").fadeOut();
    $("#container").show();
  });
  $('#skip a, #enter-btn').click(function() {
    $('#index').fadeOut(500);
    $('body').css('overflow', 'auto');
  });
  /*スクロール時コンテンツの横スライド*/
  $(window).on('scroll', function() {
    $('.content__inner').each(function() {
      var obj_t_pos = $(this).offset().top;
      var scr_count = $(document).scrollTop();
      if (scr_count >= obj_t_pos - 250) {
        $(this).addClass('scrollin');
        $(this).find('h2 span').addClass('show');
      } else {
        $(this).removeClass('scrollin');
        $(this).find('h2 span').removeClass('show');
      }
    });
  });
  /*スムーススクロール*/
  $('a[href^="#"]').click(function() {
    var speed = 1000;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    if (href == "#top") {
      return false;
    } else {
      $('body,html').animate({
        scrollTop: position
      }, speed, 'swing');
      return false;
    }
  });

});
