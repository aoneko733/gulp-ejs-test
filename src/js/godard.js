$(function() {
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
  })
});
