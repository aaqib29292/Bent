$( document ).ready(function() {

  $('.parallax-landing').
          parallax({imageSrc: '../images/home.jpg',
                    position: 'top'});

  $('.parallax-testimonials').
          parallax({imageSrc: '../images/testimonial.jpg',
                    position: 'top'});

  $('.parallax-counter').
          parallax({imageSrc: '../images/fun_bg.jpg',
                    position: 'top'});



  $('#subscribeUs').
          parallax({imageSrc: '../images/subscribe.jpg',
                    position: 'top'});


  $('.video').fitVids();

  $("#owl-carousel").owlCarousel({

      autoPlay: 3000, //Set AutoPlay to 3 seconds

      items : 3,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]

  });

  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });

  // $("a[rel^='prettyPhoto']").prettyPhoto();


  var showNavbar = function () {
    $( "nav" ).addClass( "navbar-visible");
    $( "nav" ).removeClass( "navbar-invisible");
  };

  var hideNavbar = function () {
    $( "nav" ).removeClass( "navbar-visible");
    $( "nav" ).addClass( "navbar-invisible");
  };

  // Navbar displaying on sc

  // checking scrollPos on reloading and displaying
  var scrollPos = $(window).scrollTop();
  console.log(scrollPos);
  if(scrollPos >= 200) {
    showNavbar();
  } else {
    hideNavbar();
  }

  // Depending on scroll, displaying navbar

  $(window).scroll(function() {
      var scroll = $(window).scrollTop();

      if(scroll >= 200) {
          showNavbar();
      } else {
          hideNavbar();
      }
  });


});
