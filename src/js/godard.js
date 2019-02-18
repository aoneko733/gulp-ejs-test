function showLetter1() {
  $('.letter1').addClass('showLet');
}
function showLetter2() {
  $('.letter2').addClass('showLet');
}
function showLetter3() {
  $('.letter3').addClass('showLet');
}
function showLetter4() {
  $('.letter4').addClass('showLet');
}
function showLetter5() {
  $('.letter5').addClass('showLet');
}
function showLetter6() {
  $('.letter6').addClass('showLet');
}
function showLetter7() {
  $('.letter7').addClass('showLet');
}
function showLetter8() {
  $('.letter8').addClass('showLet');
}
function showLetter9() {
  $('.letter9').addClass('showLet');
}
function showLetter10() {
  $('.letter10').addClass('showLet');
}
function showLetter11() {
  $('.letter11').addClass('showLet');
}
function showLetter12() {
  $('.letter12').addClass('showLet');
}
function showLetter13() {
  $('.letter13').addClass('showLet');
}
function showLetter14() {
  $('.letter14').addClass('showLet');
}
function showEnter() {
  $('#enter-btn').animate({
    opacity: "1"
  }, 1000);
}
$(function() {
/*オープニングのアニメーション*/
  var basicNum = 500;
  setTimeout('showLetter1()', basicNum * 1);
  setTimeout('showLetter2()', basicNum * 2);
  setTimeout('showLetter3()', basicNum * 3);
  setTimeout('showLetter4()', basicNum * 4);
  setTimeout('showLetter5()', basicNum * 5);
  setTimeout('showLetter6()', basicNum * 6);
  setTimeout('showLetter7()', basicNum * 7);
  setTimeout('showLetter8()', basicNum * 8);
  setTimeout('showLetter9()', basicNum * 9);
  setTimeout('showLetter10()', basicNum * 10);
  setTimeout('showLetter11()', basicNum * 11);
  setTimeout('showLetter12()', basicNum * 12);
  setTimeout('showLetter13()', basicNum * 13);
  setTimeout('showLetter14()', basicNum * 14);
  setTimeout('showEnter()', basicNum * 15);

  $('#skip a, #enter-btn').click(function() {
    $('#index').css({
      position: 'static'
    }).fadeOut(1000);
    $('body').css('overflow', 'auto');
  });
  /*スクロール時コンテンツの横スライド*/
  $(window).on('scroll', function() {
    $('.scrollbox__inner').each(function() {
      var obj_t_pos = $(this).offset().top;
      var scr_count = $(document).scrollTop();
      if (scr_count >= obj_t_pos - 250) {
        $(this).addClass('scrollin');
      } else {
        $(this).removeClass('scrollin');
      }
    });
  });
  /*スムーススクロール*/
  $('a[href^="#"]').click(function() {
    var speed = 1000;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({
      scrollTop: position
    }, speed, 'swing');
    return false;
  });

});
