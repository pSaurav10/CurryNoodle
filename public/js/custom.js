(function ($) {

  "use strict";

  // PRE LOADER
  $(window).load(function () {
    $('.preloader').fadeOut(1000); // set duration in brackets    
  });

  $(document).ready(function () {
    $(this).scrollTop(0);
  });

  $('.navbar-nav li').on('click', function () {
    $('.navbar-nav').find('li.active').removeClass('active');
    $(this).parent('.li').addClass('active');
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
    items: 1,
    nav: false,
    mouseDrag: false,
    touchDrag: false,
    loop: true,
    autoplayHoverPause: false,
    autoplay: true,
    autoplayTimeout: 5000,
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
  })

  $('.restro-carousel').owlCarousel({
    loop: true,
    items: 1,
    margin: 30,
    stagePadding: 0,
    loop: true,
    autoplayHoverPause: false,
    autoplay: true,
    center: true,
    nav: false,
    dots: true,
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
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300,
      easing: 'ease-in-out',
      opener: function (openerElement) {
        return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    }
  });

  // Reservation Form
  var fewSeconds = 10;
  $('#reservation-submit').click(function () {
    // Ajax request
    var btn = $(this);
    btn.prop('disabled', true);
    setTimeout(function () {
      btn.prop('disabled', false);
    }, fewSeconds * 1000);
  });
  var reservation = function () {
    const $form = $('#reserve')

    $form.on('submit', submitHandler)

    function submitHandler(e) {
      e.preventDefault()

      $.ajax({
        url: '/reservation',
        type: 'POST',
        data: $form.serialize(),
        cache: false,
        success: function (data) {
          if (data['success']) {
            alertify.success('Reservation Request Sent', 5);
            $form[0].reset();
          }
        }, error: function () {
          alertify.error('Reservation Request Failed', 5);
        }
      })
    }
  }; reservation();

  // Contact Form
  var fewSeconds = 10;
  $('#cf-submit').click(function () {
    // Ajax request
    var btn = $(this);
    btn.prop('disabled', true);
    setTimeout(function () {
      btn.prop('disabled', false);
    }, fewSeconds * 1000);
  });
  var contact = function () {
    const $form = $('#contact-form')

    $form.on('submit', submitHandler)

    function submitHandler(e) {
      e.preventDefault()

      $.ajax({
        url: '/contact-us',
        type: 'POST',
        data: $form.serialize(),
        cache: false,
        success: function (data) {
          if (data['success']) {
            alertify.success('Contact Request Sent', 5);
            $form[0].reset();
          }
        }, error: function () {
          alertify.error('Contact Request Failed', 5);
        }
      })
    }
  }; contact();


  // WOW ANIMATION
  new WOW({ mobile: false }).init();

})(jQuery);
