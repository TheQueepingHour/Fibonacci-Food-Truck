$(document).ready(function() {
    $(".fadedElements")
      .hide()
      .fadeIn()
      .delay(1000)
      .animate({opacity: 1}, 600);
  })