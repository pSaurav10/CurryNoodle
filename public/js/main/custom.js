$(function ($) {

  "use strict"; 
 /*---------------------------
        PRELOADER JS
  -----------------------------*/
  $(window).load(function () {
    $('.preloader').fadeOut(1000); // set duration in brackets    
  });

  /*---------------------------
        STICKY MENU JS
  -----------------------------*/
  // var $location = $(".cf-nav").offset().top;  
  // $(window).scroll(function(){     
  //   var $scrolling = $(this).scrollTop();    
  //   if($scrolling >= $location){        
  //     $(".cf-nav").addClass("cf-nav-sticky");
  //     document.getElementById("logo").style.width = "120px";              
  //   }
  //   else {
  //     $(".cf-nav").removeClass("cf-nav-sticky");
  //     document.getElementById("logo").style.width = "120px";      
  //   }
  // });  
  
  var scrollWindow = function () {
    $(window).scroll(function () {
      var $w = $(this),
        st = $w.scrollTop(),
        navbar = $('.cf-nav');

      if (st > 20) {
        if (!navbar.hasClass('cf-nav-sticky')) {
          navbar.addClass('cf-nav-sticky');
        }
      }
      if (st < 20) {
        if (navbar.hasClass('cf-nav-sticky')) {
          navbar.removeClass('cf-nav-sticky');
        }
      }
    });
  };
  scrollWindow();

 

  /*---------------------------
        SMOOTH SCROLL
  -----------------------------*/
  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000, 'linear');
    });

  /*---------------------------
        SLIDER PART JS
  -----------------------------*/
  $('.cf-slider').slick({    
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: true,
    focusOnSelect: true,
    pauseOnHover: false,
    autoplay: true,
    speed: 1000,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false
        }
      }
    ]
  });

  $('.left').click(function () {
    $('.cf-slider').slick('slickPrev');
  })

  $('.right').click(function () {
    $('.cf-slider').slick('slickNext');
  })

  // To color filter active buttons on click
  $('.button').on('click', function(){  
    $('.button').removeClass('active');
    $(this).addClass('active');
  });

  /*--------------------------------
        TESTIMONIAL SLIDER SLICK JS
  --------------------------------*/
  $('.cf-testimonial-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: true,
    focusOnSelect: true,
    pauseOnHover: false,
    autoplay: true,
    speed: 1000,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false
        }
      }
    ]
  });

  $('.testimonial-left').click(function () {
    $('.cf-testimonial-slider').slick('slickPrev');
  })

  $('.testimonial-right').click(function () {
    $('.cf-testimonial-slider').slick('slickNext');
  }) 
  
  /*--------------------------------
        DATE PICKER JS
  --------------------------------*/
  $('#datetimepicker4').datetimepicker({
    format: 'DD-MMM-YYYY'
  });

  $('#datetimepicker3').datetimepicker({
    format: 'LT',
    icons: {
      time: "fa fa-clock-o",
      date: "fa fa-calendar",
      up: "fas fa-chevron-up",
      down: "fa fa-chevron-down"
    }
  });

  /*--------------------------------   
        INPUT TOOLTIP   
  --------------------------------*/
  $('#datePicker').tooltip({
    'trigger': 'hover',
    'placement': 'right',
    'title': 'Click the icon for calendar'
  });
 
  $('#timePicker').tooltip({
    'trigger': 'hover',
    'placement': 'right',
    'title': 'Click the icon for time'
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

  /*-------------------------------------   
    TEXT AREA IN ALL FORMS AUTO RESIZE   
  -------------------------------------*/
  $('textarea').each(function () {
    this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
  }).on('input', function () {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
  });

  /*--------------------------------
            PRE LOADER
  ---------------------------------*/
  $(window).load(function () {
    $('.preloader').fadeOut('slow');
  });

})