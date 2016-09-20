$(function() {

  function scrollToE(target, speed) {
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, speed);
  };

  $('.hero .btn').click(function() {
    scrollToE('.get-started', 800);
  });

  $('.sad-penguin .arrow-down').click(function() {
    scrollToE('.sad-penguin', 300);
  });

})
