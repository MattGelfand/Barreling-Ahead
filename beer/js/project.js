$(document).ready(function() {
  $('ul.beerstories').snapscroll();

});

function jumpTo(input) {
  $('body').animate({
      scrollTop: $(input).offset().top
    }, 800);
};


