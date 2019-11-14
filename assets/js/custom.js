$(document).ready(function() {

  var options = {
    nextButton: true,
    prevButton: true,
    animateStartingFrameIn: true,
    autoPlayDelay: 3000,
    preloader: true,
    pauseOnHover: false,
    preloadTheseFrames: [1],
    preloadTheseImages: [
     
      "assets/img/slides/thumb2.png",
      "assets/img/slides/thumb3.png",
      "assets/img/slides/thumb4.png"
    ]
  };

  var sequence = $("#sequence").sequence(options).data("sequence");

  sequence.afterLoaded = function() {
    $("#sequence-theme .nav").fadeIn(100);
    $("#sequence-theme .nav li:nth-child(" + (sequence.settings.startingFrameID) + ") img").addClass("active");
  }

  sequence.beforeNextFrameAnimatesIn = function() {
    $("#sequence-theme .nav li:not(:nth-child(" + (sequence.nextFrameID) + ")) img").removeClass("active");
    $("#sequence-theme .nav li:nth-child(" + (sequence.nextFrameID) + ") img").addClass("active");
  }

  $("#sequence-theme").on("click", ".nav li", function() {
    $(this).children("img").removeClass("active").children("img").addClass("active");
    sequence.nextFrameID = $(this).index() + 1;
    sequence.goTo(sequence.nextFrameID);
  });

  $("a[data-pretty^='prettyPhoto']").prettyPhoto({
    animation_speed: 'fast',
    slideshow: 10000,
    hideflash: true
  });

  $('ul.da-thumbs > li').hoverdir();

});
(function($) {
    "use strict";

   /* ==============================================
    Fixed menu
    =============================================== */
    
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 50) {
      $('.header_style_01').addClass('fixed-menu');
    } else {
      $('.header_style_01').removeClass('fixed-menu');
    }
  });
  /* ==============================================
    Scroll to top  
  ============================================== */
    
  if ($('#scroll-to-top').length) {
    var scrollTrigger = 100, // px
      backToTop = function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > scrollTrigger) {
          $('#scroll-to-top').addClass('show');
        } else {
          $('#scroll-to-top').removeClass('show');
        }
      };
    backToTop();
    $(window).on('scroll', function () {
      backToTop();
    });
    $('#scroll-to-top').on('click', function (e) {
      e.preventDefault();
      $('html,body').animate({
        scrollTop: 0
      }, 700);
    });
  }
})(jQuery);

