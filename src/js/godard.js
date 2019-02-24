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
    $('.content').each(function() {
      var obj_t_pos = $(this).offset().top,
      scr_count = $(document).scrollTop(),
      thisInner = $(this).children('.content__inner'),
      thisH2 = $(this).find('h2 span'),
      showPoint = $(this).height() / 3;

      if (scr_count >= obj_t_pos - showPoint) {
        thisInner.addClass('scrollin');
        thisH2.addClass('show');
      } else {
        thisInner.removeClass('scrollin');
        thisH2.removeClass('show');
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
