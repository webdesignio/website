$(function() {

  // Scroll Buttons

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


  // Values clearfix

  function valuesClearfix() {
    var w = $(window).width();

    $('.values-container .clearfix').remove();

    if (w > 767) {
      alert('op');
      $('.values-container li:nth-child(2n)').after( '<div class="clearfix"></div>' );
    };

  }

  valuesClearfix();

  $(window).resize(function() {
    valuesClearfix();
  })

})
