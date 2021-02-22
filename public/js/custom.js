(function ($) {

  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });

    $(document).ready(function(){
      $(this).scrollTop(0);
  });

  $( '.navbar-nav li' ).on( 'click', function () {
    $( '.navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
    $( this ).parent( '.li' ).addClass( 'active' );
  });

    var fullHeight = function () {

      $('.restro-height').css('height', $(window).height());
      $(window).resize(function () {
        $('.restro-height').css('height', $(window).height());
      });
  
    };
    fullHeight();

// scroll
var scrollWindow = function () {
  $(window).scroll(function () {
    var $w = $(this),
      st = $w.scrollTop(),
      navbar = $('.restro-nav-js'),
      sd = $('.js-scroll-wrap');

    if (st > 20) {
      if (!navbar.hasClass('scrolled')) {
        navbar.addClass('scrolled');
      }
    }
    if (st < 20) {
      if (navbar.hasClass('scrolled')) {
        navbar.removeClass('scrolled sleep');
      }
    }
    if (st > 20) {
      if (!navbar.hasClass('awake')) {
        navbar.addClass('awake');
      }

      if (sd.length > 0) {
        sd.addClass('sleep');
      }
    }
    if (st < 20) {
      if (navbar.hasClass('awake')) {
        navbar.removeClass('awake');
        navbar.addClass('sleep');
      }
      if (sd.length > 0) {
        sd.removeClass('sleep');
      }
    }
  });
};
scrollWindow();


    // SLIDER
    $('.owl-carousel').owlCarousel({
      loop: true,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      margin: 0,
      items:1,
      nav:false,
      mouseDrag: false,
      touchDrag: false,
      loop:true,
      autoplayHoverPause: false,
      autoplay: true,
      autoplayTimeout:5000,
      responsive:{
        0: {
					items: 1
				},
				600: {
					items: 1
				},
				1000: {
					items: 1
				}
      }
    })

    $('.restro-carousel').owlCarousel({
			loop: true,
			items: 1,
			margin: 30,
			stagePadding: 0,
      loop:true,
      autoplayHoverPause: false,
      autoplay: true,
			center: true,
			nav: false,
      dots:true,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				1000: {
					items: 1
				}
			}
		});

    // PARALLAX EFFECT
    $.stellar({
      horizontalScrolling: false,
    }); 


    // MAGNIFIC POPUP
    $('.image-popup').magnificPopup({
        type: 'image',
        removalDelay: 300,
        mainClass: 'mfp-with-zoom',
        gallery:{
          enabled:true
        },
        zoom: {
        enabled: true, 
        duration: 300,
        easing: 'ease-in-out', 
        opener: function(openerElement) {
        return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
      }
    });  

/*
    // CONTACT FORM
    $("#contact-form").submit(function (e) {
      e.preventDefault();
      var name = $("#cf-name").val();
      var email = $("#cf-email").val();
      var subject = $("#cf-subject").val();
      var message = $("#cf-message").val();
      var dataString = 'name=' + name + '&email=' + email + '&subject=' + subject + '&message=' + message;

      function isValidEmail(emailAddress) {
          var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
          return pattern.test(emailAddress);
      };
      if (isValidEmail(email) && (message.length > 1) && (name.length > 1)) {
          $.ajax({
              type: "POST",
              url: "email.php",
              data: dataString,
              success: function () {
                  $('.text-success').fadeIn(1000);
                  $('.text-danger').fadeOut(500);
              }
          });
      }
      else {
          $('.text-danger').fadeIn(1000);
          $('.text-success').fadeOut(500);
      }
      return false;
    });

*/


    // WOW ANIMATION
    new WOW({ mobile: false }).init();

})(jQuery);
