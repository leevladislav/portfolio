// button toggle at header
$(function(){
    $('.nav__toggle').on('click', function(){
        $('.nav__list').slideToggle(300, function(){
            if($(this).css('display') === 'none') {
                $(this).removeAttr('style');
            }
        });
    });
});

// slick testimonials__slider
$(function() {
  $('.testimonials__slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
})

// progress bar
$(function(){
  $('svg.radial-progress').each(function( index, value ) { 
      $(this).find($('circle.complete')).removeAttr( 'style' );
  });

  $(window).scroll(function(){
      $('svg.radial-progress').each(function( index, value ) { 
          if ( 
              $(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
              $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)
          ) {
              percent = $(value).data('percentage');
              radius = $(this).find($('circle.complete')).attr('r');
              circumference = 2 * Math.PI * radius;
              strokeDashOffset = circumference - ((percent * circumference) / 100);
              $(this).find($('circle.complete')).animate({'stroke-dashoffset': strokeDashOffset}, 1250);
          }
      });
  }).trigger('scroll');

});

// portfolio tabs
(function($) {
  $(function() {
      $("ul.portfolio__tabs-caption").on("click", "li:not(.active)", function() {
      $(this)
          .addClass("active")
          .siblings()
          .removeClass("active")
          .closest("div.portfolio__tabs")
          .find("div.portfolio__tabs-content")
          .removeClass("active")
          .eq($(this).index())
          .addClass("active");
      });
  });
})(jQuery);
