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


  // Grids clearfix

  function gridsClearfix(gridContainer, gridElement) {
    var w = $(window).width();

    $(gridContainer + ' .clearfix').remove();

    if (w > 767) {
      $(gridContainer + ' ' + gridElement + ':nth-child(2n)').after( '<div class="clearfix"></div>' );
    };
  }

  gridsClearfix('.values-container', 'li');
  gridsClearfix('.features', 'li');

  $(window).resize(function() {
    gridsClearfix('.values-container', 'li');
    gridsClearfix('.features', 'li');
  })

})
